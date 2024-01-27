// +page.ts

import type { PageLoad } from "./$types";
import type { LoadEvent } from "@sveltejs/kit";
import { username } from './userStore';

export const load: PageLoad = async ({ params }: LoadEvent) => {
  const userId = params.userId;

  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const userData = await response.json();
    const fetchedUsername = userData.username;

    // Speichere den Benutzernamen im Store
    username.set(fetchedUsername);

    console.log(`Username for user ID ${userId}: ${fetchedUsername}`);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
