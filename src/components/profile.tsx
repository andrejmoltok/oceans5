import React from 'react';
import { useConvexAuth } from 'convex/react';
import { useUser } from '@clerk/nextjs';

export default function Profile() {

    const { isAuthenticated } = useConvexAuth();
    const { user, isLoaded, isSignedIn } = useUser();

    return (
        <>
            {(isAuthenticated) && <>
                Welcome to your profile {user?.firstName}!</>}
        </>
    )
}