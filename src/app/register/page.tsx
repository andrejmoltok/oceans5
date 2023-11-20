'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { useMutation, useConvexAuth } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Register() {

    const { isAuthenticated } = useConvexAuth();
    const { isSignedIn } = useAuth();

    const router = useRouter();

    const storeUser = useMutation(api.users.storeUser);

    useEffect(() => {
        if (isSignedIn && isAuthenticated) {
            storeUser()
            router.push('/lobby')
        }
    });

    return (
        <>
            <div style={{ margin: "auto", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "5rem" }}>Loading...</div>
        </>
    )
}