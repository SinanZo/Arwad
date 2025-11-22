import { useTranslation } from 'react-i18next';
import AdminLayout from '@/components/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trpc } from '@/lib/trpc';
import { FileText, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const { t } = useTranslation();
  
  const { data: quotes = [], isLoading: quotesLoading } = trpc.admin.getQuotes.useQuery();
  const { data: contacts = [], isLoading: contactsLoading } = trpc.admin.getContacts.useQuery();

  // Calculate statistics
  const stats = {
    totalQuotes: quotes.length,
    pendingQuotes: quotes.filter((q) => q.status === 'pending').length,
    processingQuotes: quotes.filter((q) => q.status === 'processing').length,
    completedQuotes: quotes.filter((q) => q.status === 'completed').length,
    totalContacts: contacts.length,
    unreadContacts: contacts.filter((c) => c.status === 'unread').length,
    readContacts: contacts.filter((c) => c.status === 'read').length,
    repliedContacts: contacts.filter((c) => c.status === 'replied').length,
  };

  const statCards = [
    {
      title: 'Total Quote Requests',
      value: stats.totalQuotes,
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      link: '/admin/quotes',
    },
    {
      title: 'Pending Quotes',
      value: stats.pendingQuotes,
      icon: Clock,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      link: '/admin/quotes',
    },
    {
      title: 'Total Contact Messages',
      value: stats.totalContacts,
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      link: '/admin/contacts',
    },
    {
      title: 'Unread Messages',
      value: stats.unreadContacts,
      icon: MessageSquare,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      link: '/admin/contacts',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of quote requests and contact messages
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link key={stat.title} href={stat.link}>
                <a>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </CardTitle>
                      <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                        <Icon className={`h-4 w-4 ${stat.color}`} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{stat.value}</div>
                    </CardContent>
                  </Card>
                </a>
              </Link>
            );
          })}
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quote Status Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Quote Requests by Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Pending</span>
                <span className="font-semibold">{stats.pendingQuotes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Processing</span>
                <span className="font-semibold">{stats.processingQuotes}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Completed</span>
                <span className="font-semibold">{stats.completedQuotes}</span>
              </div>
              <Link href="/admin/quotes">
                <Button variant="outline" className="w-full mt-4">
                  View All Quotes
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Contact Status Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Messages by Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Unread</span>
                <span className="font-semibold">{stats.unreadContacts}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Read</span>
                <span className="font-semibold">{stats.readContacts}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Replied</span>
                <span className="font-semibold">{stats.repliedContacts}</span>
              </div>
              <Link href="/admin/contacts">
                <Button variant="outline" className="w-full mt-4">
                  View All Messages
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {quotes.slice(0, 5).map((quote) => (
                <div
                  key={quote.id}
                  className="flex items-center justify-between border-b pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium">{quote.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(quote.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Link href="/admin/quotes">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </Link>
                </div>
              ))}
              {quotes.length === 0 && (
                <p className="text-center text-muted-foreground py-4">
                  No quote requests yet
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
