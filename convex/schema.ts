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
    name: v.optional(v.string()),
    email: v.string(),
    email_verified: v.boolean(),
    tokenIdentifier: v.string(),
    consecutiveLogin: v.optional(v.number()),
    publicData: v.object({
      nickname: v.string(),
      picture: v.string(),
      updated_at: v.string(),
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
      alliance: v.optional(v.id("alliance"))
    }),
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
    alliancePicture: v.string()
  }),
});