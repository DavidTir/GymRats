<script lang="ts">
    import { theme } from '$lib/stores';
</script>

<select bind:value="{$theme}">
    <option value="system">System</option>
    <option value="light">light</option>
    <option value="dark">dark</option>
</select>