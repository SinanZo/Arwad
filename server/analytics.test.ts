import { describe, expect, it } from 'vitest';
import {
  calculateConversionRate,
  calculateAverageResponseTime,
  getIndustryDistribution,
  getQuoteStatusBreakdown,
  getContactStatusBreakdown,
  getQuoteTrends,
  getContactTrends,
} from '@/lib/analytics';

describe('Analytics Utilities', () => {
  describe('calculateConversionRate', () => {
    it('should return 0 for empty quotes array', () => {
      expect(calculateConversionRate([])).toBe(0);
    });

    it('should calculate correct conversion rate', () => {
      const quotes = [
        { id: 1, company: 'A', industry: 'manufacturing', status: 'completed' as const, createdAt: new Date() },
        { id: 2, company: 'B', industry: 'power', status: 'completed' as const, createdAt: new Date() },
        { id: 3, company: 'C', industry: 'water', status: 'pending' as const, createdAt: new Date() },
        { id: 4, company: 'D', industry: 'mining', status: 'cancelled' as const, createdAt: new Date() },
      ];
      // 2 completed out of 4 = 50%
      expect(calculateConversionRate(quotes)).toBe(50);
    });

    it('should return 100 when all quotes are completed', () => {
      const quotes = [
        { id: 1, company: 'A', industry: 'manufacturing', status: 'completed' as const, createdAt: new Date() },
        { id: 2, company: 'B', industry: 'power', status: 'completed' as const, createdAt: new Date() },
      ];
      expect(calculateConversionRate(quotes)).toBe(100);
    });
  });

  describe('calculateAverageResponseTime', () => {
    it('should return 0 for empty contacts array', () => {
      expect(calculateAverageResponseTime([])).toBe(0);
    });

    it('should return 0 when no contacts are replied', () => {
      const contacts = [
        { id: 1, status: 'unread' as const, createdAt: new Date() },
        { id: 2, status: 'read' as const, createdAt: new Date() },
      ];
      expect(calculateAverageResponseTime(contacts)).toBe(0);
    });

    it('should calculate average response time for replied contacts', () => {
      const now = new Date();
      const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

      const contacts = [
        { id: 1, status: 'replied' as const, createdAt: oneDayAgo },
        { id: 2, status: 'replied' as const, createdAt: twoDaysAgo },
        { id: 3, status: 'unread' as const, createdAt: now },
      ];

      const avgTime = calculateAverageResponseTime(contacts);
      // Should be approximately 36 hours (average of 24 and 48)
      expect(avgTime).toBeGreaterThan(30);
      expect(avgTime).toBeLessThan(42);
    });
  });

  describe('getIndustryDistribution', () => {
    it('should return empty array for no quotes', () => {
      expect(getIndustryDistribution([])).toEqual([]);
    });

    it('should calculate correct industry distribution', () => {
      const quotes = [
        { id: 1, company: 'A', industry: 'manufacturing', status: 'completed' as const, createdAt: new Date() },
        { id: 2, company: 'B', industry: 'manufacturing', status: 'pending' as const, createdAt: new Date() },
        { id: 3, company: 'C', industry: 'power', status: 'completed' as const, createdAt: new Date() },
        { id: 4, company: 'D', industry: 'water', status: 'processing' as const, createdAt: new Date() },
      ];

      const distribution = getIndustryDistribution(quotes);
      expect(distribution).toHaveLength(3);
      expect(distribution.find(d => d.name === 'Manufacturing')?.value).toBe(2);
      expect(distribution.find(d => d.name === 'Power')?.value).toBe(1);
      expect(distribution.find(d => d.name === 'Water')?.value).toBe(1);
    });
  });

  describe('getQuoteStatusBreakdown', () => {
    it('should return all statuses with zero counts for empty array', () => {
      const breakdown = getQuoteStatusBreakdown([]);
      expect(breakdown).toHaveLength(4);
      expect(breakdown.every(b => b.count === 0)).toBe(true);
    });

    it('should calculate correct status breakdown', () => {
      const quotes = [
        { id: 1, company: 'A', industry: 'manufacturing', status: 'pending' as const, createdAt: new Date() },
        { id: 2, company: 'B', industry: 'power', status: 'pending' as const, createdAt: new Date() },
        { id: 3, company: 'C', industry: 'water', status: 'processing' as const, createdAt: new Date() },
        { id: 4, company: 'D', industry: 'mining', status: 'completed' as const, createdAt: new Date() },
        { id: 5, company: 'E', industry: 'petrochemicals', status: 'completed' as const, createdAt: new Date() },
        { id: 6, company: 'F', industry: 'infrastructure', status: 'cancelled' as const, createdAt: new Date() },
      ];

      const breakdown = getQuoteStatusBreakdown(quotes);
      expect(breakdown.find(b => b.status === 'Pending')?.count).toBe(2);
      expect(breakdown.find(b => b.status === 'Processing')?.count).toBe(1);
      expect(breakdown.find(b => b.status === 'Completed')?.count).toBe(2);
      expect(breakdown.find(b => b.status === 'Cancelled')?.count).toBe(1);
    });
  });

  describe('getContactStatusBreakdown', () => {
    it('should return all statuses with zero counts for empty array', () => {
      const breakdown = getContactStatusBreakdown([]);
      expect(breakdown).toHaveLength(3);
      expect(breakdown.every(b => b.count === 0)).toBe(true);
    });

    it('should calculate correct status breakdown', () => {
      const contacts = [
        { id: 1, status: 'unread' as const, createdAt: new Date() },
        { id: 2, status: 'unread' as const, createdAt: new Date() },
        { id: 3, status: 'read' as const, createdAt: new Date() },
        { id: 4, status: 'replied' as const, createdAt: new Date() },
        { id: 5, status: 'replied' as const, createdAt: new Date() },
        { id: 6, status: 'replied' as const, createdAt: new Date() },
      ];

      const breakdown = getContactStatusBreakdown(contacts);
      expect(breakdown.find(b => b.status === 'Unread')?.count).toBe(2);
      expect(breakdown.find(b => b.status === 'Read')?.count).toBe(1);
      expect(breakdown.find(b => b.status === 'Replied')?.count).toBe(3);
    });
  });

  describe('getQuoteTrends', () => {
    it('should return correct number of days', () => {
      const trends = getQuoteTrends([], 7);
      expect(trends).toHaveLength(7);
    });

    it('should initialize all days with zero counts', () => {
      const trends = getQuoteTrends([], 30);
      expect(trends.every(t => t.quotes === 0)).toBe(true);
    });

    it('should count quotes correctly by date', () => {
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const quotes = [
        { id: 1, company: 'A', industry: 'manufacturing', status: 'pending' as const, createdAt: today },
        { id: 2, company: 'B', industry: 'power', status: 'completed' as const, createdAt: today },
        { id: 3, company: 'C', industry: 'water', status: 'processing' as const, createdAt: yesterday },
      ];

      const trends = getQuoteTrends(quotes, 7);
      expect(trends).toHaveLength(7);
      // Last day should have 2 quotes
      expect(trends[trends.length - 1].quotes).toBe(2);
      // Second to last day should have 1 quote
      expect(trends[trends.length - 2].quotes).toBe(1);
    });
  });

  describe('getContactTrends', () => {
    it('should return correct number of days', () => {
      const trends = getContactTrends([], 14);
      expect(trends).toHaveLength(14);
    });

    it('should initialize all days with zero counts', () => {
      const trends = getContactTrends([], 30);
      expect(trends.every(t => t.contacts === 0)).toBe(true);
    });

    it('should count contacts correctly by date', () => {
      const today = new Date();
      const twoDaysAgo = new Date(today);
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

      const contacts = [
        { id: 1, status: 'unread' as const, createdAt: today },
        { id: 2, status: 'read' as const, createdAt: twoDaysAgo },
        { id: 3, status: 'replied' as const, createdAt: twoDaysAgo },
      ];

      const trends = getContactTrends(contacts, 7);
      expect(trends).toHaveLength(7);
      // Last day should have 1 contact
      expect(trends[trends.length - 1].contacts).toBe(1);
      // Third to last day should have 2 contacts
      expect(trends[trends.length - 3].contacts).toBe(2);
    });
  });
});
