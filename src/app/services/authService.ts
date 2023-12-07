import {
    onAuthStateChanged as _onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "@/app/utilities/fireBaseConfig";

export function onAuthStateChanged(cb: any) {
    return _onAuthStateChanged(auth, cb);
}

export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out: ", error);
    }
}