import { describe, expect, it } from "vitest";
import { getDb } from "./db";

describe("Database Connection", () => {
  it("should successfully connect to MongoDB", async () => {
    const db = await getDb();
    
    // Verify database instance is created
    expect(db).toBeDefined();
    expect(db).not.toBeNull();
    
    // Try a simple query to verify connection works
    if (db) {
      // This will throw if connection fails
      const result = await db.execute("SELECT 1 as test");
      expect(result).toBeDefined();
    }
  });
});
