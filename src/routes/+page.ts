import type { PageLoad } from './$types';
import { fetchRefresh } from '$helpers';
 
export const load = (async ({ fetch: _fetch, parent }) => {
  const fetch = (path: string) => fetchRefresh(_fetch, path);
  const { user } = await parent();
 
  const newReleases = fetch('/api/spotify/browse/new-releases?limit=6');
  const featuredPlaylists = fetch('/api/spotify/browse/featured-playlists?limit=6');
  const userPlaylists = fetch(`/api/spotify/users/${user?.id}/playlists?limit=6`);
 
  const categoriesRes = await fetch('api/spotify/browse/categories');
  const categoriesResJSON: SpotifyApi.MultipleCategoriesResponse = categoriesRes.ok
    ? await categoriesRes.json()
    : undefined;
  const randomCategories = categoriesResJSON
    ? categoriesResJSON.categories?.items.sort(() => 0.5 - Math.random()).slice(0, 3)
    : [];
  const randomCategoriesPromises = randomCategories.map((cat) =>
    fetch(`/api/spotify/browse/categories/${cat.id}/playlists?limit=6`)
  );
 
  const [newReleasesRes, featuredPlaylistsRes, userPlaylistsRes, ...randomCategoriesRes] =
    await Promise.all([newReleases, featuredPlaylists, userPlaylists, ...randomCategoriesPromises]);
 
  return {
    newReleases: newReleasesRes.ok
      ? ((await newReleasesRes.json()) as SpotifyApi.ListOfNewReleasesResponse)
      : undefined,
    featuredPlaylists: featuredPlaylistsRes.ok
      ? ((await featuredPlaylistsRes.json()) as SpotifyApi.ListOfFeaturedPlaylistsResponse)
      : undefined,
    userPlaylists: userPlaylistsRes.ok
      ? ((await userPlaylistsRes.json()) as SpotifyApi.ListOfUsersPlaylistsResponse)
      : undefined,
    homeCategories: randomCategories,
    categoriesPlaylists: await Promise.all(
      randomCategoriesRes.map(async (res) =>
        res.ok ? ((await res.json()) as SpotifyApi.CategoryPlaylistsResponse) : undefined
      )
    )
  };
}) satisfies PageLoad;