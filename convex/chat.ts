import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Send chat messages to DB and back to the Lobby Chat

export const chatWriteMsg = mutation({
    args: { 
        datetime: v.string(), 
        user: v.id("users"),
        message: v.string(),
    },
    handler: async (ctx,args) => {
        await ctx.db.insert("chat",{ 
            datetime: args.datetime, 
            user: args.user, 
            message: args.message 
        });
    },
});

// export const chatReadMsg = query({

// });