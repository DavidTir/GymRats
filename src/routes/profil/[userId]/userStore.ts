// userStore.ts

import { writable } from 'svelte/store';

export const username = writable<string | null>(null);
