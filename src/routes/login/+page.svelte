<script lang="ts">
	import { Button } from '$components';
	import cover from '$assets/concept.png';
</script>

<div class="wrapper">
	<div class="content">
		<title>STUDIFY</title>
		<h1>Studify</h1>
		<p>Master the art of concentration with the perfect study soundtrack. Tune into success with Studify</p>
		<div class="buttons">
			<Button
				element="a"
				variant="outline"
				href="https://www.spotify.com/us/signup"
				target="_blank"
				rel="noopener noreferrer">Sign Up</Button
			>
			<Button element="a" href="/api/auth/login">Login</Button>
		</div>
	</div>
	<div class="cover">
		<img src={cover} alt="Svelte album cover" />
	</div>
</div>

<style lang="scss">
	:global(body) {
		background-image: url('src/assets/mesh-25.png');
		background-repeat: no-repeat; 
    	background-size: cover; 
		//background-image: linear-gradient(230deg, var(--sidebar-color), var(--bg-color));
		height: 100vh;
	}
	.wrapper {
		display: flex;
		width: 100%;
		max-width: 1200px;
		margin: 80px auto 0;
		align-items: center;
		flex-direction: column;
		@include breakpoint.up('md') {
			flex-direction: row;
		}
	}
	.cover {
		flex: 1;
		margin-top: 40px;
		@include breakpoint.up('md') {
			margin-top: 0;
			margin-left: 20px;
		}
		img {
			max-width: 100%;
		}
	}
	.content {
		flex: 1.05;
		h1 {
			font-size: functions.toRem(60);
		}
		p {
			font-size: functions.toRem(20);
		}
		.buttons {
			margin-top: 40px;
			:global(.button) {
				margin-right: 10px;
				padding: 10px 20px;
				text-transform: uppercase;
			}
		}
	}
</style>