import { getDb } from "./db";
import { quoteRequests, contactSubmissions, InsertQuoteRequest, InsertContactSubmission } from "../drizzle/schema";

/**
 * Create a new quote request
 */
export async function createQuoteRequest(data: InsertQuoteRequest) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(quoteRequests).values(data);
  return result;
}

/**
 * Get all quote requests
 */
export async function getAllQuoteRequests() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(quoteRequests).orderBy(quoteRequests.createdAt);
}

/**
 * Create a new contact submission
 */
export async function createContactSubmission(data: InsertContactSubmission) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(contactSubmissions).values(data);
  return result;
}

/**
 * Get all contact submissions
 */
export async function getAllContactSubmissions() {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
}
