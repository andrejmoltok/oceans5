'use client'

import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: typeof window === "undefined" ?  undefined : window.location.origin } })
      }
    >
      Log out
    </button>
  );
}