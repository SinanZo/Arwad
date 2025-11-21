import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import DataTable, { Column } from '@/components/DataTable';
import StatusBadge from '@/components/StatusBadge';
import QuoteDetailModal from '@/components/QuoteDetailModal';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface QuoteItem {
  partNumber: string;
  description: string;
  manufacturer?: string;
  quantity: string;
  category?: string;
}

interface Quote {
  id: number;
  company: string;
  contact: string;
  email: string;
  phone: string;
  industry: string;
  items: QuoteItem[];
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

export default function AdminQuotes() {
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: quotesData = [], isLoading, refetch } = trpc.admin.getQuotes.useQuery();
  const quotes = quotesData as unknown as Quote[];

  const columns: Column<Quote>[] = [
    {
      key: 'id',
      label: 'ID',
      sortable: true,
    },
    {
      key: 'company',
      label: 'Company',
      sortable: true,
    },
    {
      key: 'contact',
      label: 'Contact',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'industry',
      label: 'Industry',
      sortable: true,
      render: (quote) => (
        <span className="capitalize">{quote.industry}</span>
      ),
    },
    {
      key: 'items',
      label: 'Items',
      render: (quote) => `${quote.items.length} item(s)`,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (quote) => <StatusBadge status={quote.status} type="quote" />,
    },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (quote) => new Date(quote.createdAt).toLocaleDateString(),
    },
  ];

  const handleRowClick = (quote: Quote) => {
    setSelectedQuote(quote);
    setModalOpen(true);
  };

  const handleExport = () => {
    // Convert to CSV
    const headers = ['ID', 'Company', 'Contact', 'Email', 'Phone', 'Industry', 'Items', 'Status', 'Date'];
    const rows = quotes.map((quote) => [
      quote.id,
      quote.company,
      quote.contact,
      quote.email,
      quote.phone,
      quote.industry,
      quote.items.length,
      quote.status,
      new Date(quote.createdAt).toLocaleDateString(),
    ]);

    const csv = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quotes-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Quote Requests</h1>
            <p className="text-muted-foreground">
              Manage and track all quote requests
            </p>
          </div>
          <Button onClick={handleExport} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading quotes...</p>
          </div>
        ) : (
          <DataTable
            data={quotes}
            columns={columns}
            searchPlaceholder="Search quotes..."
            onRowClick={handleRowClick}
          />
        )}

        <QuoteDetailModal
          quote={selectedQuote}
          open={modalOpen}
          onOpenChange={setModalOpen}
          onUpdate={refetch}
        />
      </div>
    </AdminLayout>
  );
}
