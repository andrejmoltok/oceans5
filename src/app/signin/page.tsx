'use client'

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/app/utilities/fireBaseConfig";

export default function SignIn() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async () => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <>
            <div style={{ margin: "0px auto", width: "350px", border: "2px solid gray", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <input type="submit" value="Sign In" onClick={handleSubmit} />
                </div>
            </div>
        </>
    )
}