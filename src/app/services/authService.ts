import {
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/app/utilities/fireBaseConfig";

export function onAuthStateChanged(cb: any) {
    return _onAuthStateChanged(auth, cb);
}

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        return user;
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
}

export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}