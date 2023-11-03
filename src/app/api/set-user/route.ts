import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs'
import { Player } from '@/app/classes/Player';


export async function GET() {
    const user = await currentUser()

    if (!user) {
        return NextResponse.json({ error: 'Something went wrong' })
    }

    const player = new Player(
        user.id,
        user.username!,
        true,
    )

    // console.log(addPlayer(player));
    return NextResponse.json([player]);
}