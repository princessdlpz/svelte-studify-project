<script lang="ts">
	import { Button, Card } from '$components';
	import type { PageData } from './$types';
	import { writable } from 'svelte/store'; 
	import bg from '$assets/mesh.png';

  
	export let data: PageData;
  
	const sections = writable<{
	  title: string;
	  path: string;
	  items: (SpotifyApi.AlbumObjectSimplified | SpotifyApi.PlaylistObjectSimplified)[];
	}[]>([]);
  
	$: { 
	  sections.set([]);
	  
	  if (data.newReleases) {
		sections.update(s => [...s, {
		  title: 'New Releases',
		  path: '/section/new-releases',
		  items: data.newReleases.albums.items
		}]);
	  }
	  if (data.featuredPlaylists) {
		sections.update(s => [...s, {
		  title: 'Featured Playlists',
		  path: '/section/featured-playlists',
		  items: data.featuredPlaylists.playlists.items
		}]);
	  }
	  data.homeCategories.forEach((category, index) => {
		const categoryPlaylist = data.categoriesPlaylists[index];
		if (categoryPlaylist) {
		  sections.update(s => [...s, {
			title: category.name,
			path: `/category/${category.id}`,
			items: categoryPlaylist.playlists.items
		  }]);
		}
	  });
	  if (data.userPlaylists) {
		sections.update(s => [...s, {
		  title: 'Your Playlists',
		  path: '/playlists',
		  items: data.userPlaylists.items
		}]);
	  }
	}

	
  </script>
  
  {#each $sections as section}
	<section class="content-row">
	  <div class="content-row-header">
		<div class="right">
		  <h2 class="section-title">{section.title}</h2>
		</div>
		<div class="left">
		  <Button element="a" href={section.path} variant="outline">
			See All <span class="visually-hidden">{section.title}</span>
		  </Button>
		</div>
	  </div>
	  <div class="grid-items">
		{#each section.items as item}
		  <div class="grid-item">
			<Card {item} />
		  </div>
		{/each}
	  </div>
	</section>
  {/each}
  
  <style lang="scss">
	@use "src/styles/functions"; @use "@unsass/breakpoint";

	.content-row {
	  margin-bottom: 40px;
	  background-image: url('./src/assets/mesh.png');
	  background-blend-mode: color-dodge;
	  .content-row-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
		.section-title {
		  font-size: functions.toRem(22);
		  font-weight: 600;
		  margin: 0;
		}
	  }
	}
  </style>