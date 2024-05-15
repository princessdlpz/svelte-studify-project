<script lang="ts">
	import { afterNavigate, preloadData } from '$app/navigation';
	import { IconButton } from '$components';
	import { page } from '$app/stores';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';


	let backStack: string[] = [];
	let forwardStack: string[] = [];
	let navClicked = false;

	afterNavigate(({ from, to }) => {
		if (!from) return;
		if (navClicked) {
			navClicked = false;
			return;
		}
		backStack = [...backStack, from.url.pathname];
		forwardStack = [];
	});


</script>

<IconButton
	on:mouseover={() => {
		if (backStack.length === 0) return;
		const prevPage = backStack[backStack.length - 1];
		preloadData(prevPage);
	}}
	on:click={async () => {
		if (backStack.length === 0) return;
		navClicked = true;
		const currPage = $page.url.pathname;
		history.back();
		forwardStack = [...forwardStack, currPage];
		backStack = backStack.slice(0, -1);
	}}
	label="Go Back"
	disabled={backStack.length === 0}
	icon={ChevronLeft}
	class="nav-button"
/>

<IconButton
	on:mouseover={() => {
		if (forwardStack.length === 0) return;
		const forwardPage = forwardStack[forwardStack.length - 1];
		preloadData(forwardPage);
	}}
	on:click={async () => {
		if (forwardStack.length === 0) return;
		navClicked = true;
		const currPage = $page.url.pathname;
		history.forward();
		backStack = [...backStack, currPage];
		forwardStack = forwardStack.slice(0, -1);
	}}
	label="Go Forward"
	disabled={forwardStack.length === 0}
	icon={ChevronRight}
	class="nav-button"
/>

	
<style lang="scss">
	:global(button.nav-button) {
		background-color: var(--menu-background-color);
		margin-right: 5px;
		border-radius: 100%;
		height: 34px;
		width: 34px;
		&:active {
			background-color: var(--accent-color);
		}
		:global(html.no-js) & {
			display: none;
		}
	}
</style>
