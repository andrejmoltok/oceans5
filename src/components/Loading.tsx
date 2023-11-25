import React from "react";
import Image from "next/image";

export default function Panel() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '100px', alignItems: 'center', width: '100vw', height: '100vh', margin: 'auto' }}>
            <Image src={"/loading.gif"} alt={"Loading..."} width={200} height={200}></Image>
            <div style={{fontSize: '2rem',  paddingTop: '10px'}}>Loading...</div>
        </div>
    )
}