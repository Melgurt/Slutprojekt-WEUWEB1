<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<slot />
<header>
	<nav>
		<img id="projectLogo" src="src\routes\OCTlogo-transformed1.jpg" alt="LOGO" />
		<h1>Open Crypto Tracker</h1>
		<div class="dropdown">
			<button class="btn btn-filled-primary" id="dropdown-button">Dropdown</button>
			<div class="dropdown-content" id="dropdown-content">
				<a href="/">Link 1</a>
				<a href="/">Link 2</a>
				<a href="/">Link 3</a>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		background-color: #212529;
		border-bottom-left-radius: 2vw;
		border-bottom-right-radius: 2vw;
		box-shadow: 0px 5px 5px#181b1e;
	}

	#projectLogo {
		width: 6vw;
		border-radius: 7vw;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: #333;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.dropdown:hover .btn-filled-primary {
		background-color: #3e8e41;
	}
</style>
