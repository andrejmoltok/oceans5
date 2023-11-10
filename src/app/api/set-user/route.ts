import { NextRequest, NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs'
import { Player } from '@/app/classes/Player';

const playerArray: Player[] = [];

export function addPlayer(player: Player) {
  playerArray.push(player);
  return playerArray;
}

export async function GET(req:NextRequest,res:NextResponse) {
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
    return res.json();
}