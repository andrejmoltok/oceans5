import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs'
import { Player } from '@/app/classes/Player';
import { addPlayer } from '@/app/layout';


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

    const res =addPlayer(player);
    
    return NextResponse.json(res);
}