import { eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";

export async function getLocalUser(clerkUserID: string) {
    const [row] = await db.select().from(users).where(eq(users.clerkUserId, clerkUserID)).limit(1)
    return row
}