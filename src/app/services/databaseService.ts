import { set, ref, getDatabase, get } from 'firebase/database';
import { RegistredPlayer } from '../classes/RegistredPlayer';

const db = getDatabase();

export async function getPlayerData(userId: string) {
    const playerRef = ref(db, 'users/' + userId);

    try {
        const playerSnapshot = await get(playerRef);

        if (playerSnapshot.exists()) {
            const playerData = playerSnapshot.val();
            console.log("Adatok sikeresen lekérve:", playerData);
            return playerData;
        } else {
            console.log("Nincs találat a megadott userId-val.");
            return null;
        }
    } catch (error) {
        console.error("Hiba történt a lekérdezés során:", error);
        return null;
    }
}

export async function setPlayerData(userId: string) {
    const player = new RegistredPlayer("" + userId, "New Player");

    try {
        set(ref(db, 'users/' + userId), { ...player });
        console.log("Adatok sikeresen hozzáadva egy új dokumentumba:", ref);
    } catch (error) {
        console.error("Hiba történt az adatok hozzáadása közben:", error);
    }
}