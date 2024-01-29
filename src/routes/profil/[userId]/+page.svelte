<!-- +page.svelte -->

<script>
    import { username } from './userStore';
    import Header from '../../../components/header.svelte';
    import Profil from '../../../components/profil.svelte';
</script>

<Header />
<Profil />

<main>
    {#if $username !== null}
        <p>{$username}</p>
    {:else}
        <p>Lade Benutzerdaten...</p>
    {/if}
</main>

<style>
    main{
        position: absolute;
        left: 900px;
        bottom: 405px;
    }
</style>
