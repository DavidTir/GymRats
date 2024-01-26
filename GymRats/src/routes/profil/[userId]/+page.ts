// +page.ts

import type { PageLoad } from "./$types";
import type { LoadEvent } from "@sveltejs/kit";

// Typ für Benutzerdaten
type UserData = {
  username: string;
  email: string;
  // Weitere Eigenschaften, wenn vorhanden
};

export const load: PageLoad = async ({ params }: LoadEvent) => {
  const userId = params.userId;

  if (!userId || isNaN(Number(userId))) {
    console.error("Ungültige oder fehlende Benutzer-ID in der URL.");
    return { status: 404, error: new Error("Benutzer nicht gefunden") };
  }

  const url = `https://dummyjson.com/users/${userId}`;
  const res = await fetch(url);

  if (!res.ok) {
    console.error(`Fehler beim Laden der Benutzerdaten. Statuscode: ${res.status}`);
    return { status: res.status, error: new Error("Fehler beim Laden der Benutzerdaten") };
  }

  const userData: UserData = await res.json();

  console.log(userData);

  // Geben Sie die Benutzerdaten direkt zurück
  return {
    props: {
      username: userData.username,
      email: userData.email,
      // Weitere Daten, falls vorhanden
    } as { username: string; email: string; /* Weitere Typen, falls vorhanden */ },
  };
};
