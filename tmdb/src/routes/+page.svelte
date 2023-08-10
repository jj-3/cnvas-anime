<script context="module">
	export async function load({ fetch }) {
		const URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmIwMzQ4MjAyOWU2YmUzODNmNjBmNTFjOGVmNGMxMiIsInN1YiI6IjY0YzAzODNhMDU4MjI0MDE1MWYzYjlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOLxYgKEnf2KQ1fdbYGROO5E-2bhaY0-yFPCrjW1bik'
			}
		};

		const res = await fetch(URL, options);
		const data = await res.json();
		console.log(data.results);
		if (res.ok) {
			return { props: { popular: data.results } };
		} else {
			console.error(error);
		}
	}
</script>

<script>
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
