import { describe, expect, it, beforeAll } from "vitest";
import { createQuoteRequest, createContactSubmission, getAllQuoteRequests, getAllContactSubmissions, updateQuoteStatus, updateContactStatus, deleteQuoteRequest, deleteContactSubmission } from "./forms";

describe("Admin API Operations", () => {
  let testQuoteId: number;
  let testContactId: number;

  beforeAll(async () => {
    // Create test data
    const quoteData = {
      company: "Test Admin Company",
      contact: "Admin Test User",
      email: "admin@test.com",
      phone: "+1111111111",
      industry: "manufacturing",
      items: [
        {
          partNumber: "ADMIN-TEST-001",
          description: "Test Admin Item",
          manufacturer: "Test Manufacturer",
          quantity: "5",
          category: "pumps",
        },
      ],
    };

    const contactData = {
      name: "Admin Test Contact",
      email: "admincontact@test.com",
      phone: "+2222222222",
      company: "Test Admin Corp",
      subject: "Admin Test Subject",
      message: "This is an admin test message.",
    };

    const quote = await createQuoteRequest(quoteData);
    const contact = await createContactSubmission(contactData);

    // Get IDs from the created records
    const quotes = await getAllQuoteRequests();
    const contacts = await getAllContactSubmissions();
    
    testQuoteId = quotes[quotes.length - 1].id;
    testContactId = contacts[contacts.length - 1].id;
  });

  describe("Quote Management", () => {
    it("should retrieve all quotes", async () => {
      const quotes = await getAllQuoteRequests();
      expect(Array.isArray(quotes)).toBe(true);
      expect(quotes.length).toBeGreaterThan(0);
    });

    it("should update quote status to processing", async () => {
      await updateQuoteStatus(testQuoteId, "processing");
      const quotes = await getAllQuoteRequests();
      const updatedQuote = quotes.find((q) => q.id === testQuoteId);
      expect(updatedQuote?.status).toBe("processing");
    });

    it("should update quote status to completed", async () => {
      await updateQuoteStatus(testQuoteId, "completed");
      const quotes = await getAllQuoteRequests();
      const updatedQuote = quotes.find((q) => q.id === testQuoteId);
      expect(updatedQuote?.status).toBe("completed");
    });

    it("should update quote status to cancelled", async () => {
      await updateQuoteStatus(testQuoteId, "cancelled");
      const quotes = await getAllQuoteRequests();
      const updatedQuote = quotes.find((q) => q.id === testQuoteId);
      expect(updatedQuote?.status).toBe("cancelled");
    });
  });

  describe("Contact Management", () => {
    it("should retrieve all contacts", async () => {
      const contacts = await getAllContactSubmissions();
      expect(Array.isArray(contacts)).toBe(true);
      expect(contacts.length).toBeGreaterThan(0);
    });

    it("should update contact status to read", async () => {
      await updateContactStatus(testContactId, "read");
      const contacts = await getAllContactSubmissions();
      const updatedContact = contacts.find((c) => c.id === testContactId);
      expect(updatedContact?.status).toBe("read");
    });

    it("should update contact status to replied", async () => {
      await updateContactStatus(testContactId, "replied");
      const contacts = await getAllContactSubmissions();
      const updatedContact = contacts.find((c) => c.id === testContactId);
      expect(updatedContact?.status).toBe("replied");
    });
  });

  describe("Delete Operations", () => {
    it("should delete a quote request", async () => {
      const quotesBefore = await getAllQuoteRequests();
      const countBefore = quotesBefore.length;

      await deleteQuoteRequest(testQuoteId);

      const quotesAfter = await getAllQuoteRequests();
      const countAfter = quotesAfter.length;

      expect(countAfter).toBe(countBefore - 1);
      expect(quotesAfter.find((q) => q.id === testQuoteId)).toBeUndefined();
    });

    it("should delete a contact submission", async () => {
      const contactsBefore = await getAllContactSubmissions();
      const countBefore = contactsBefore.length;

      await deleteContactSubmission(testContactId);

      const contactsAfter = await getAllContactSubmissions();
      const countAfter = contactsAfter.length;

      expect(countAfter).toBe(countBefore - 1);
      expect(contactsAfter.find((c) => c.id === testContactId)).toBeUndefined();
    });
  });
});
