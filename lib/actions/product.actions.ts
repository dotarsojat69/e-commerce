'use server'

import db from "@/db/drizzle"
import { products } from "@/db/schema"
import { desc } from "drizzle-orm"

export async function getLatestProduct() {
    const data = await db.query.products.findMany({
        orderBy: [desc(products.createdAt)],
        limit: 4,
    })
    return data
}