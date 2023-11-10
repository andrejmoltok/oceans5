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

    // // class defined stats
    // online: v.boolean(),
    // status: v.string(),
    // gamesWon: v.number(),
    // gamesLost: v.number(),
    // gamesPlayed: v.number(),
  }).index("by_token", ["tokenIdentifier"]),
});