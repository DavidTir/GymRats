<script lang="ts">
    import Header from '../components/header.svelte';
    import Body from '../components/home.svelte';
    import { theme } from '$lib/stores';
    import Theme from '../components/ThemeSwitch.svelte';
</script>


<Theme />
<Body />

<svelte:head>
    <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme}/>
    <link rel="stylesheet" href={'/theme/${$theme}.css'} />
</svelte:head>