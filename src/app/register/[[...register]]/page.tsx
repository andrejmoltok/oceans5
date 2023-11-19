'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useConvexAuth } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Register() {

    const { isAuthenticated } = useConvexAuth();

    const router = useRouter();

    const storeUser = useMutation(api.users.storeUser);

    useEffect(() => {
        if (isAuthenticated) {
            storeUser()
        }
    }, [storeUser, isAuthenticated]);

    return (
        <>
            <div style={{ margin: 0, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "5rem" }}>Loading...</div>
            {router.push('/lobby')}
        </>
    )
}