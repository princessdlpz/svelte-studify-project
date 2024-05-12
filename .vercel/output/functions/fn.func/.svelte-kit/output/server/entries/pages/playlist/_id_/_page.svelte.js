import { c as create_ssr_component, v as validate_component, a as subscribe, f as escape, d as add_attribute } from "../../../../chunks/ssr.js";
import "devalue";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { p as page } from "../../../../chunks/stores.js";
import { B as Button } from "../../../../chunks/Button.js";
import { I as ItemPage } from "../../../../chunks/ItemPage.js";
import { T as TrackList } from "../../../../chunks/Player.js";
import "uniqid";
import { P as PlaylistForm } from "../../../../chunks/PlaylistForm.js";
import { M as Modal } from "../../../../chunks/Modal.js";
import "micromodal";
import { I as Icon } from "../../../../chunks/Icon.js";
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "heart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: ".empty-playlist.svelte-1q4ivft.svelte-1q4ivft{text-align:center;margin-top:40px}.empty-playlist.svelte-1q4ivft p.svelte-1q4ivft{font-size:1.375rem;font-weight:600}.empty-playlist.svelte-1q4ivft a{margin:0 10px}.playlist-description.svelte-1q4ivft.svelte-1q4ivft{color:var(--light-gray);font-size:1.125rem;margin-bottom:0}.meta.svelte-1q4ivft.svelte-1q4ivft{font-size:0.8125rem;margin-top:10px}.meta.svelte-1q4ivft span.svelte-1q4ivft{margin-right:5px}.meta.svelte-1q4ivft span.svelte-1q4ivft:first-child{font-weight:600}.load-more.svelte-1q4ivft.svelte-1q4ivft{padding:15px;text-align:center}html.no-js .load-more.svelte-1q4ivft.svelte-1q4ivft{display:none}.pagination.svelte-1q4ivft.svelte-1q4ivft{display:none;margin-top:40px;justify-content:space-between}html.no-js .pagination.svelte-1q4ivft.svelte-1q4ivft{display:flex}.playlist-actions.svelte-1q4ivft.svelte-1q4ivft{display:flex;justify-content:flex-end;margin:10px 0 30px}.playlist-actions.svelte-1q4ivft .follow-form.svelte-1q4ivft .button{display:flex;align-items:center}.playlist-actions.svelte-1q4ivft .follow-form.svelte-1q4ivft .button svg{margin-right:10px;width:22px;height:22px}.playlist-actions.svelte-1q4ivft .follow-form p.error.svelte-1q4ivft{text-align:right;color:var(--error);font-size:0.875rem}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { applyAction, enhance } from '$app/forms';\\nimport { invalidateAll } from '$app/navigation';\\nimport { page } from '$app/stores';\\nimport { Button, ItemPage, Modal } from '$components';\\nimport PlaylistForm from '$components/PlaylistForm.svelte';\\nimport TrackList from '$components/TrackList.svelte';\\nimport { toasts } from '$stores';\\nimport { Heart } from 'lucide-svelte';\\nimport MicroModal from 'micromodal';\\nimport { tick } from 'svelte';\\nexport let data;\\nexport let form;\\nlet isLoading = false;\\nlet isLoadingFollow = false;\\nlet followButton;\\n$: color = data.color;\\n$: playlist = data.playlist;\\n$: tracks = data.playlist.tracks;\\n$: isFollowing = data.isFollowing;\\n$: currentPage = $page.url.searchParams.get('page') || 1;\\nlet filteredTracks;\\n$: {\\n    filteredTracks = [];\\n    tracks.items.forEach((item) => {\\n        if (item.track)\\n            filteredTracks = [...filteredTracks, item.track];\\n    });\\n}\\nconst followersFormat = Intl.NumberFormat('en', { notation: 'compact' });\\nconst loadMoreTracks = async () => {\\n    if (!tracks.next)\\n        return;\\n    isLoading = true;\\n    const res = await fetch(tracks.next.replace('https://api.spotify.com/v1/', '/api/spotify/'));\\n    const resJSON = await res.json();\\n    if (res.ok) {\\n        tracks = { ...resJSON, items: [...tracks.items, ...resJSON.items] };\\n    }\\n    else {\\n        toasts.error(resJSON.error.message || 'Could not load data!');\\n    }\\n    isLoading = false;\\n};\\n<\/script>\\n\\n<ItemPage\\n\\ttitle={playlist.name}\\n\\timage={playlist.images.length > 0 ? playlist.images[0].url : undefined}\\n\\t{color}\\n\\ttype={playlist.type}\\n>\\n\\t<div slot=\\"meta\\">\\n\\t\\t<p class=\\"playlist-description\\">{@html playlist.description}</p>\\n\\t\\t<p class=\\"meta\\">\\n\\t\\t\\t<span>{playlist.owner.display_name}</span>\\n\\t\\t\\t<span>{followersFormat.format(playlist.followers.total)} Followers</span>\\n\\t\\t\\t<span>{playlist.tracks.total} Tracks</span>\\n\\t\\t</p>\\n\\t</div>\\n\\n\\t<div class=\\"playlist-actions\\">\\n\\t\\t{#if data.user?.id === playlist.owner.id}\\n\\t\\t\\t<Button\\n\\t\\t\\t\\telement=\\"a\\"\\n\\t\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\t\\thref=\\"/playlist/{playlist.id}/edit\\"\\n\\t\\t\\t\\ton:click={(e) => {\\n\\t\\t\\t\\t\\te.preventDefault();\\n\\t\\t\\t\\t\\tMicroModal.show('edit-playlist-modal');\\n\\t\\t\\t\\t}}>Edit Playlist</Button\\n\\t\\t\\t>\\n\\t\\t{:else if isFollowing !== null}\\n\\t\\t\\t<form\\n\\t\\t\\t\\tclass=\\"follow-form\\"\\n\\t\\t\\t\\tmethod=\\"POST\\"\\n\\t\\t\\t\\taction={\`?/\${isFollowing ? 'unFollowPlaylist' : 'followPlaylist'}\`}\\n\\t\\t\\t\\tuse:enhance={() => {\\n\\t\\t\\t\\t\\tisLoadingFollow = true;\\n\\t\\t\\t\\t\\treturn async ({ result }) => {\\n\\t\\t\\t\\t\\t\\tisLoadingFollow = false;\\n\\n\\t\\t\\t\\t\\t\\tif (result.type === 'success') {\\n\\t\\t\\t\\t\\t\\t\\tawait applyAction(result);\\n\\t\\t\\t\\t\\t\\t\\tisFollowing = !isFollowing;\\n\\t\\t\\t\\t\\t\\t} else if (result.type === 'failure') {\\n\\t\\t\\t\\t\\t\\t\\ttoasts.error(result.data?.followError);\\n\\t\\t\\t\\t\\t\\t\\tawait tick();\\n\\t\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\t\\tawait applyAction(result);\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\tfollowButton.focus();\\n\\t\\t\\t\\t\\t\\tinvalidateAll();\\n\\t\\t\\t\\t\\t};\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\tbind:this={followButton}\\n\\t\\t\\t\\t\\telement=\\"button\\"\\n\\t\\t\\t\\t\\ttype=\\"submit\\"\\n\\t\\t\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\t\\t\\tdisabled={isLoadingFollow}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<Heart aria-hidden focusable=\\"false\\" fill={isFollowing ? 'var(--text-color)' : 'none'} />\\n\\t\\t\\t\\t\\t{isFollowing ? 'Unfollow' : 'Follow'}\\n\\t\\t\\t\\t\\t<span class=\\"visually-hidden\\">{playlist.name} playlist</span>\\n\\t\\t\\t\\t</Button>\\n\\t\\t\\t\\t{#if form && 'followForm' in form && form?.followError}\\n\\t\\t\\t\\t\\t<p class=\\"error\\">{form.followError}</p>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</form>\\n\\t\\t{/if}\\n\\t</div>\\n\\n\\t{#if playlist.tracks.items.length > 0}\\n\\t\\t<TrackList\\n\\t\\t\\ttracks={filteredTracks}\\n\\t\\t\\tisOwner={data.user?.id === playlist.owner.id}\\n\\t\\t\\tuserPlaylists={data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id)}\\n\\t\\t\\ttitle={playlist.name}\\n\\t\\t\\ttotal={playlist.tracks.total}\\n\\t\\t/>\\n\\t\\t{#if tracks.next}\\n\\t\\t\\t<div class=\\"load-more\\">\\n\\t\\t\\t\\t<Button element=\\"button\\" variant=\\"outline\\" disabled={isLoading} on:click={loadMoreTracks}\\n\\t\\t\\t\\t\\t>Load More <span class=\\"visually-hidden\\">Tracks</span></Button\\n\\t\\t\\t\\t>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t\\t<div class=\\"pagination\\">\\n\\t\\t\\t<div class=\\"previous\\">\\n\\t\\t\\t\\t{#if tracks.previous}\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\t\\t\\t\\telement=\\"a\\"\\n\\t\\t\\t\\t\\t\\thref=\\"{$page.url.pathname}?{new URLSearchParams({\\n\\t\\t\\t\\t\\t\\t\\tpage: \`\${Number(currentPage) - 1}\`\\n\\t\\t\\t\\t\\t\\t}).toString()}\\">← Previous Page</Button\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"next\\">\\n\\t\\t\\t\\t{#if tracks.next}\\n\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\t\\t\\t\\telement=\\"a\\"\\n\\t\\t\\t\\t\\t\\thref=\\"{$page.url.pathname}?{new URLSearchParams({\\n\\t\\t\\t\\t\\t\\t\\tpage: \`\${Number(currentPage) + 1}\`\\n\\t\\t\\t\\t\\t\\t}).toString()}\\">Next Page →</Button\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{:else}\\n\\t\\t<div class=\\"empty-playlist\\">\\n\\t\\t\\t<p>No items added to this playlist yet.</p>\\n\\t\\t\\t<Button element=\\"a\\" href=\\"/search\\">Search for Content</Button>\\n\\t\\t\\t<Button element=\\"a\\" href=\\"/playlists\\">View all Playlists</Button>\\n\\t\\t</div>\\n\\t{/if}\\n</ItemPage>\\n\\n<Modal id=\\"edit-playlist-modal\\" title=\\"Edit {playlist.name}\\">\\n\\t<PlaylistForm\\n\\t\\taction=\\"/playlist/{playlist.id}/edit\\"\\n\\t\\t{playlist}\\n\\t\\tform={form && 'editForm' in form ? form : null}\\n\\t\\ton:success={() => {\\n\\t\\t\\tMicroModal.close('edit-playlist-modal');\\n\\t\\t\\t// invalidate(\`/api/spotify/playlists/\${playlist.id}\`);\\n\\t\\t\\tinvalidateAll();\\n\\t\\t}}\\n\\t/>\\n</Modal>\\n\\n<style lang=\\"scss\\">.empty-playlist {\\n  text-align: center;\\n  margin-top: 40px;\\n}\\n.empty-playlist p {\\n  font-size: 1.375rem;\\n  font-weight: 600;\\n}\\n.empty-playlist :global(a) {\\n  margin: 0 10px;\\n}\\n\\n.playlist-description {\\n  color: var(--light-gray);\\n  font-size: 1.125rem;\\n  margin-bottom: 0;\\n}\\n\\n.meta {\\n  font-size: 0.8125rem;\\n  margin-top: 10px;\\n}\\n.meta span {\\n  margin-right: 5px;\\n}\\n.meta span:first-child {\\n  font-weight: 600;\\n}\\n\\n.load-more {\\n  padding: 15px;\\n  text-align: center;\\n}\\n:global(html.no-js) .load-more {\\n  display: none;\\n}\\n\\n.pagination {\\n  display: none;\\n  margin-top: 40px;\\n  justify-content: space-between;\\n}\\n:global(html.no-js) .pagination {\\n  display: flex;\\n}\\n\\n.playlist-actions {\\n  display: flex;\\n  justify-content: flex-end;\\n  margin: 10px 0 30px;\\n}\\n.playlist-actions .follow-form :global(.button) {\\n  display: flex;\\n  align-items: center;\\n}\\n.playlist-actions .follow-form :global(.button) :global(svg) {\\n  margin-right: 10px;\\n  width: 22px;\\n  height: 22px;\\n}\\n.playlist-actions .follow-form p.error {\\n  text-align: right;\\n  color: var(--error);\\n  font-size: 0.875rem;\\n}</style>\\n"],"names":[],"mappings":"AA8KmB,6CAAgB,CACjC,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,IACd,CACA,8BAAe,CAAC,gBAAE,CAChB,SAAS,CAAE,QAAQ,CACnB,WAAW,CAAE,GACf,CACA,8BAAe,CAAS,CAAG,CACzB,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,mDAAsB,CACpB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,QAAQ,CACnB,aAAa,CAAE,CACjB,CAEA,mCAAM,CACJ,SAAS,CAAE,SAAS,CACpB,UAAU,CAAE,IACd,CACA,oBAAK,CAAC,mBAAK,CACT,YAAY,CAAE,GAChB,CACA,oBAAK,CAAC,mBAAI,YAAa,CACrB,WAAW,CAAE,GACf,CAEA,wCAAW,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MACd,CACQ,UAAW,CAAC,wCAAW,CAC7B,OAAO,CAAE,IACX,CAEA,yCAAY,CACV,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,aACnB,CACQ,UAAW,CAAC,yCAAY,CAC9B,OAAO,CAAE,IACX,CAEA,+CAAkB,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IACjB,CACA,gCAAiB,CAAC,2BAAY,CAAS,OAAS,CAC9C,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,gCAAiB,CAAC,2BAAY,CAAS,OAAQ,CAAS,GAAK,CAC3D,YAAY,CAAE,IAAI,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,gCAAiB,CAAC,YAAY,CAAC,CAAC,qBAAO,CACrC,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,IAAI,OAAO,CAAC,CACnB,SAAS,CAAE,QACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let color;
  let playlist;
  let tracks;
  let isFollowing;
  let currentPage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { form } = $$props;
  let isLoading = false;
  let isLoadingFollow = false;
  let followButton;
  let filteredTracks;
  const followersFormat = Intl.NumberFormat("en", { notation: "compact" });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    color = data.color;
    playlist = data.playlist;
    tracks = data.playlist.tracks;
    isFollowing = data.isFollowing;
    currentPage = $page.url.searchParams.get("page") || 1;
    {
      {
        filteredTracks = [];
        tracks.items.forEach((item) => {
          if (item.track)
            filteredTracks = [...filteredTracks, item.track];
        });
      }
    }
    $$rendered = `${validate_component(ItemPage, "ItemPage").$$render(
      $$result,
      {
        title: playlist.name,
        image: playlist.images.length > 0 ? playlist.images[0].url : void 0,
        color,
        type: playlist.type
      },
      {},
      {
        meta: () => {
          return `<div slot="meta"><p class="playlist-description svelte-1q4ivft"><!-- HTML_TAG_START -->${playlist.description}<!-- HTML_TAG_END --></p> <p class="meta svelte-1q4ivft"><span class="svelte-1q4ivft">${escape(playlist.owner.display_name)}</span> <span class="svelte-1q4ivft">${escape(followersFormat.format(playlist.followers.total))} Followers</span> <span class="svelte-1q4ivft">${escape(playlist.tracks.total)} Tracks</span></p></div>`;
        },
        default: () => {
          return `<div class="playlist-actions svelte-1q4ivft">${data.user?.id === playlist.owner.id ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              element: "a",
              variant: "outline",
              href: "/playlist/" + playlist.id + "/edit"
            },
            {},
            {
              default: () => {
                return `Edit Playlist`;
              }
            }
          )}` : `${isFollowing !== null ? `<form class="follow-form svelte-1q4ivft" method="POST"${add_attribute("action", `?/${isFollowing ? "unFollowPlaylist" : "followPlaylist"}`, 0)}>${validate_component(Button, "Button").$$render(
            $$result,
            {
              element: "button",
              type: "submit",
              variant: "outline",
              disabled: isLoadingFollow,
              this: followButton
            },
            {
              this: ($$value) => {
                followButton = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${validate_component(Heart, "Heart").$$render(
                  $$result,
                  {
                    "aria-hidden": true,
                    focusable: "false",
                    fill: isFollowing ? "var(--text-color)" : "none"
                  },
                  {},
                  {}
                )} ${escape(isFollowing ? "Unfollow" : "Follow")} <span class="visually-hidden">${escape(playlist.name)} playlist</span>`;
              }
            }
          )} ${form && "followForm" in form && form?.followError ? `<p class="error svelte-1q4ivft">${escape(form.followError)}</p>` : ``}</form>` : ``}`}</div> ${playlist.tracks.items.length > 0 ? `${validate_component(TrackList, "TrackList").$$render(
            $$result,
            {
              tracks: filteredTracks,
              isOwner: data.user?.id === playlist.owner.id,
              userPlaylists: data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id),
              title: playlist.name,
              total: playlist.tracks.total
            },
            {},
            {}
          )} ${tracks.next ? `<div class="load-more svelte-1q4ivft">${validate_component(Button, "Button").$$render(
            $$result,
            {
              element: "button",
              variant: "outline",
              disabled: isLoading
            },
            {},
            {
              default: () => {
                return `Load More <span class="visually-hidden" data-svelte-h="svelte-mdw9v">Tracks</span>`;
              }
            }
          )}</div>` : ``} <div class="pagination svelte-1q4ivft"><div class="previous">${tracks.previous ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "outline",
              element: "a",
              href: $page.url.pathname + "?" + new URLSearchParams({ page: `${Number(currentPage) - 1}` }).toString()
            },
            {},
            {
              default: () => {
                return `← Previous Page`;
              }
            }
          )}` : ``}</div> <div class="next">${tracks.next ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "outline",
              element: "a",
              href: $page.url.pathname + "?" + new URLSearchParams({ page: `${Number(currentPage) + 1}` }).toString()
            },
            {},
            {
              default: () => {
                return `Next Page →`;
              }
            }
          )}` : ``}</div></div>` : `<div class="empty-playlist svelte-1q4ivft"><p class="svelte-1q4ivft" data-svelte-h="svelte-8j9nhg">No items added to this playlist yet.</p> ${validate_component(Button, "Button").$$render($$result, { element: "a", href: "/search" }, {}, {
            default: () => {
              return `Search for Content`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { element: "a", href: "/playlists" }, {}, {
            default: () => {
              return `View all Playlists`;
            }
          })}</div>`}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        id: "edit-playlist-modal",
        title: "Edit " + playlist.name
      },
      {},
      {
        default: () => {
          return `${validate_component(PlaylistForm, "PlaylistForm").$$render(
            $$result,
            {
              action: "/playlist/" + playlist.id + "/edit",
              playlist,
              form: form && "editForm" in form ? form : null
            },
            {},
            {}
          )}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
