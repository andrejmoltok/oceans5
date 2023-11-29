import {
    collection,
    doc,
    getDoc,
    addDoc,
    query,
    where,
    getDocs,
} from "firebase/firestore";

import { db } from "@/app/utilities/fireBaseConfig";
import { RegistredPlayer } from "@/app/classes/RegistredPlayer";

export async function getPlayerData(userId: string) {
    const usersCollection = collection(db, "users");

    // Lekérdezés a playerID alapján
    const q = query(usersCollection, where("playerId", "==", userId));

    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs[0].data();
    } catch (error) {
        console.error("Hiba történt a lekérdezés során:", error);
        return false;
    }
}

export async function setPlayerData(userId: string) {
    const player = new RegistredPlayer("" + userId, "New Player");

    try {
        const usersCollection = collection(db, "users");
        const docRef = await addDoc(usersCollection, { ...player });
        console.log("Adatok sikeresen hozzáadva egy új dokumentumba:", docRef.id);
    } catch (error) {
        console.error("Hiba történt az adatok hozzáadása közben:", error);
    }
}