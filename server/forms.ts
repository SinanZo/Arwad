import { getDb } from "./db";
import { quoteRequests, contactSubmissions, InsertQuoteRequest, InsertContactSubmission } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { sendQuoteConfirmationEmail, sendContactConfirmationEmail } from "./email";

/**
 * Create a new quote request
 */
export async function createQuoteRequest(data: InsertQuoteRequest) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  const result = await db.insert(quoteRequests).values(data);
  
  // Send confirmation email to customer
  try {
    await sendQuoteConfirmationEmail({
      customerName: data.contact,
      customerEmail: data.email,
      company: data.company,
      phone: data.phone,
      industry: data.industry,
      items: data.items as Array<{ partNumber: string; description: string; quantity: number }>,
    });
    console.log('[Quote] Confirmation email sent to:', data.email);
  } catch (error) {
    console.error('[Quote] Failed to send confirmation email:', error);
    // Don't fail the request if email fails
  }
  
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
  
  // Send confirmation email to customer
  try {
    await sendContactConfirmationEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    });
    console.log('[Contact] Confirmation email sent to:', data.email);
  } catch (error) {
    console.error('[Contact] Failed to send confirmation email:', error);
    // Don't fail the request if email fails
  }
  
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

/**
 * Update quote request status
 */
export async function updateQuoteStatus(id: number, status: "pending" | "processing" | "completed" | "cancelled") {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.update(quoteRequests).set({ status }).where(eq(quoteRequests.id, id));
}

/**
 * Update contact submission status
 */
export async function updateContactStatus(id: number, status: "unread" | "read" | "replied") {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.update(contactSubmissions).set({ status }).where(eq(contactSubmissions.id, id));
}

/**
 * Delete quote request
 */
export async function deleteQuoteRequest(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.delete(quoteRequests).where(eq(quoteRequests.id, id));
}

/**
 * Delete contact submission
 */
export async function deleteContactSubmission(id: number) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  return await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
}
