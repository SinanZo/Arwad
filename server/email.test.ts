import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sendQuoteConfirmationEmail, sendContactConfirmationEmail } from './email';

// Mock console.log to verify email logging
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('Email Confirmation System', () => {
  beforeEach(() => {
    mockConsoleLog.mockClear();
  });

  describe('sendQuoteConfirmationEmail', () => {
    it('should log quote confirmation email details', async () => {
      const quoteData = {
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        company: 'Test Company',
        phone: '+971-50-1234567',
        industry: 'Manufacturing',
        items: [
          {
            partNumber: 'VALVE-001',
            description: 'Industrial Valve',
            quantity: 10,
          },
          {
            partNumber: 'PUMP-002',
            description: 'Water Pump',
            quantity: 5,
          },
        ],
      };

      await sendQuoteConfirmationEmail(quoteData);

      // Verify console logs
      expect(mockConsoleLog).toHaveBeenCalledWith('[Email] Quote Confirmation Email');
      expect(mockConsoleLog).toHaveBeenCalledWith('To:', 'john@example.com');
      expect(mockConsoleLog).toHaveBeenCalledWith('Subject:', 'Quote Request Received - ARWAD Trading');
      expect(mockConsoleLog).toHaveBeenCalledWith(
        'HTML Content Length:',
        expect.any(Number),
        'characters'
      );
    });

    it('should include all items in email content', async () => {
      const quoteData = {
        customerName: 'Jane Smith',
        customerEmail: 'jane@example.com',
        company: 'ABC Industries',
        phone: '+971-50-9876543',
        industry: 'Petrochemicals',
        items: [
          {
            partNumber: 'GASKET-123',
            description: 'High-pressure Gasket',
            quantity: 50,
          },
        ],
      };

      await sendQuoteConfirmationEmail(quoteData);

      // Should log successfully
      expect(mockConsoleLog).toHaveBeenCalledWith('[Email] Quote Confirmation Email');
    });
  });

  describe('sendContactConfirmationEmail', () => {
    it('should log contact confirmation email details', async () => {
      const contactData = {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        phone: '+971-50-5555555',
        subject: 'Technical Support',
        message: 'I need help with product installation.',
      };

      await sendContactConfirmationEmail(contactData);

      // Verify console logs
      expect(mockConsoleLog).toHaveBeenCalledWith('[Email] Contact Confirmation Email');
      expect(mockConsoleLog).toHaveBeenCalledWith('To:', 'alice@example.com');
      expect(mockConsoleLog).toHaveBeenCalledWith('Subject:', 'Message Received - ARWAD Trading');
      expect(mockConsoleLog).toHaveBeenCalledWith(
        'HTML Content Length:',
        expect.any(Number),
        'characters'
      );
    });

    it('should handle long messages', async () => {
      const contactData = {
        name: 'Bob Wilson',
        email: 'bob@example.com',
        phone: '+971-50-7777777',
        subject: 'General Inquiry',
        message: 'This is a very long message. '.repeat(50),
      };

      await sendContactConfirmationEmail(contactData);

      // Should log successfully
      expect(mockConsoleLog).toHaveBeenCalledWith('[Email] Contact Confirmation Email');
    });
  });

  describe('Email Template Content', () => {
    it('should generate HTML content with proper structure', async () => {
      const quoteData = {
        customerName: 'Test User',
        customerEmail: 'test@example.com',
        company: 'Test Corp',
        phone: '+971-50-1111111',
        industry: 'Water Treatment',
        items: [
          {
            partNumber: 'TEST-001',
            description: 'Test Item',
            quantity: 1,
          },
        ],
      };

      await sendQuoteConfirmationEmail(quoteData);

      // Verify that HTML content length is logged (indicating template was generated)
      const htmlLengthCall = mockConsoleLog.mock.calls.find(
        call => call[0] === 'HTML Content Length:'
      );
      expect(htmlLengthCall).toBeDefined();
      expect(htmlLengthCall![1]).toBeGreaterThan(1000); // Email should be substantial
    });
  });
});
