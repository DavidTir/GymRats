<!-- Datei: $layout/layout.svelte -->
<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load = async ({ params}) => {
        const userId = params.id;        // Überprüfe, ob eine gültige Zahl übergeben wurde


        if (!userId || isNaN(Number(userId))) {
            console.error("Ungültige oder fehlende Benutzer-ID in der URL.");
            return { status: 404, error: new Error("Benutzer nicht gefunden") };
        }

        // Lade die Benutzerdaten basierend auf der Benutzer-ID
        const url = `https://dummyjson.com/users/${userId}`;
        const res = await fetch(url);

        if (!res.ok) {
            console.error(`Fehler beim Laden der Benutzerdaten. Statuscode: ${res.status}`);
            return { status: res.status, error: new Error("Fehler beim Laden der Benutzerdaten") };
        }

        const userData = await res.json();

        // Gib die Benutzerdaten zurück, damit sie in der Svelte-Komponente verwendet werden können
        return {
            props: {
                user: userData,
            },
        };
    };

    // Exportiere die Page-Typdefinition
    export type { Page } from '@sveltejs/kit';
</script>

<!-- Hier kann das globale Layout definiert werden -->
