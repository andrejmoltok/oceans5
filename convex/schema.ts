import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  chat: defineTable({
    //convert date-and-time input into string
    datetime: v.string(),

    //reference to users table
    user: v.id("users"),

    //the message itself that the user has sent
    message: v.string(),
  }),
  users: defineTable({
    /* Clerk JWT Claims */

    //user.full_name
    name: v.string(),

    //user.primary_email_address
    email: v.string(),

    //user.image_url
    picture: v.string(),

    //user.username
    nickname: v.string(),

    //user.email_verified
    email_verified: v.boolean(),

    //user.updated_at
    updated_at: v.string(),

    //unique token
    tokenIdentifier: v.string(),

    // player stats
    gamesPlayed: v.number(),
    gamesWon: v.number(),
    gamesLost: v.number(),
    winRatio: v.number(),
    loseRatio: v.number(),
    xp: v.number(),
    level: v.number(),
    rank: v.string(),
    avgScore: v.number(),
    totalPoints: v.number(),
    accuracyRatio: v.number(),
    playtimeTotal: v.string(),
    consecutiveLogin: v.optional(v.number()),
    alliance: v.optional(v.id("alliance")),
  }).index("by_token", ["tokenIdentifier"]),
  alliance: defineTable({
    //alliance stats
    allianceName: v.string(),
    allianceScore: v.number(),
    allianceWon: v.number(),
    allianceLost: v.number(),
    allianceTotalPlayed: v.number(),
    allianceWinRatio: v.number(),
    allianceLoseRatio: v.number(),
    allianceXP: v.number(),
    allianceLevel: v.number(),
    allianceRank: v.string(),
    allianceAvgScore: v.number(),
    allianceTotalPoints: v.number(),
    allianceAccuracy: v.number(),
    alliancePlaytime: v.string(),
  }),
});