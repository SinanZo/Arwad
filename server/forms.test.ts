import { describe, expect, it, beforeAll } from "vitest";
import { createQuoteRequest, createContactSubmission, getAllQuoteRequests, getAllContactSubmissions } from "./forms";

describe("Forms Database Operations", () => {
  describe("Quote Requests", () => {
    it("should create a new quote request", async () => {
      const quoteData = {
        company: "Test Company Ltd",
        contact: "John Doe",
        email: "john@testcompany.com",
        phone: "+1234567890",
        industry: "manufacturing",
        items: [
          {
            partNumber: "TEST-001",
            description: "Test Industrial Valve",
            manufacturer: "Test Manufacturer",
            quantity: "10",
            category: "valves",
          },
        ],
      };

      const result = await createQuoteRequest(quoteData);
      expect(result).toBeDefined();
    });

    it("should retrieve all quote requests", async () => {
      const quotes = await getAllQuoteRequests();
      expect(Array.isArray(quotes)).toBe(true);
    });
  });

  describe("Contact Submissions", () => {
    it("should create a new contact submission", async () => {
      const contactData = {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+9876543210",
        company: "Example Corp",
        subject: "Inquiry about services",
        message: "I would like to know more about your MRO services.",
      };

      const result = await createContactSubmission(contactData);
      expect(result).toBeDefined();
    });

    it("should retrieve all contact submissions", async () => {
      const contacts = await getAllContactSubmissions();
      expect(Array.isArray(contacts)).toBe(true);
    });
  });
});
