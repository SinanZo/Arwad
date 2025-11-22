interface Quote {
  id: number;
  company: string;
  industry: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string | Date;
}

interface Contact {
  id: number;
  status: 'unread' | 'read' | 'replied';
  createdAt: string | Date;
}

/**
 * Calculate quote conversion rate
 * Conversion = (completed quotes / total quotes) * 100
 */
export function calculateConversionRate(quotes: Quote[]): number {
  if (quotes.length === 0) return 0;
  const completedQuotes = quotes.filter((q) => q.status === 'completed').length;
  return Math.round((completedQuotes / quotes.length) * 100);
}

/**
 * Calculate average response time for contacts (time from unread to replied)
 * Returns average in hours
 */
export function calculateAverageResponseTime(contacts: Contact[]): number {
  const repliedContacts = contacts.filter((c) => c.status === 'replied');
  if (repliedContacts.length === 0) return 0;

  // For demo purposes, we'll calculate based on creation time
  // In a real scenario, you'd track status change timestamps
  const now = new Date();
  const totalHours = repliedContacts.reduce((sum, contact) => {
    const createdAt = new Date(contact.createdAt);
    const hours = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60);
    return sum + hours;
  }, 0);

  return Math.round(totalHours / repliedContacts.length);
}

/**
 * Get industry distribution for pie chart
 */
export function getIndustryDistribution(quotes: Quote[]) {
  const distribution: Record<string, number> = {};
  
  quotes.forEach((quote) => {
    const industry = quote.industry || 'Unknown';
    distribution[industry] = (distribution[industry] || 0) + 1;
  });

  return Object.entries(distribution).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));
}

/**
 * Get quote status breakdown for bar chart
 */
export function getQuoteStatusBreakdown(quotes: Quote[]) {
  const breakdown = {
    pending: 0,
    processing: 0,
    completed: 0,
    cancelled: 0,
  };

  quotes.forEach((quote) => {
    breakdown[quote.status]++;
  });

  return [
    { status: 'Pending', count: breakdown.pending, fill: '#f59e0b' },
    { status: 'Processing', count: breakdown.processing, fill: '#3b82f6' },
    { status: 'Completed', count: breakdown.completed, fill: '#10b981' },
    { status: 'Cancelled', count: breakdown.cancelled, fill: '#ef4444' },
  ];
}

/**
 * Get contact status breakdown for bar chart
 */
export function getContactStatusBreakdown(contacts: Contact[]) {
  const breakdown = {
    unread: 0,
    read: 0,
    replied: 0,
  };

  contacts.forEach((contact) => {
    breakdown[contact.status]++;
  });

  return [
    { status: 'Unread', count: breakdown.unread, fill: '#ef4444' },
    { status: 'Read', count: breakdown.read, fill: '#3b82f6' },
    { status: 'Replied', count: breakdown.replied, fill: '#10b981' },
  ];
}

/**
 * Get time-based trends (quotes per day for the last 30 days)
 */
export function getQuoteTrends(quotes: Quote[], days: number = 30) {
  const now = new Date();
  const trends: Record<string, number> = {};

  // Initialize all days with 0
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    trends[dateStr] = 0;
  }

  // Count quotes per day
  quotes.forEach((quote) => {
    const createdAt = new Date(quote.createdAt);
    const dateStr = createdAt.toISOString().split('T')[0];
    if (trends.hasOwnProperty(dateStr)) {
      trends[dateStr]++;
    }
  });

  return Object.entries(trends).map(([date, count]) => ({
    date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    quotes: count,
  }));
}

/**
 * Get contact trends (contacts per day for the last 30 days)
 */
export function getContactTrends(contacts: Contact[], days: number = 30) {
  const now = new Date();
  const trends: Record<string, number> = {};

  // Initialize all days with 0
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    trends[dateStr] = 0;
  }

  // Count contacts per day
  contacts.forEach((contact) => {
    const createdAt = new Date(contact.createdAt);
    const dateStr = createdAt.toISOString().split('T')[0];
    if (trends.hasOwnProperty(dateStr)) {
      trends[dateStr]++;
    }
  });

  return Object.entries(trends).map(([date, count]) => ({
    date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    contacts: count,
  }));
}
