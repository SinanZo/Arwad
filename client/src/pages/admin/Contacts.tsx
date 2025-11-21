import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import DataTable, { Column } from '@/components/DataTable';
import StatusBadge from '@/components/StatusBadge';
import ContactDetailModal from '@/components/ContactDetailModal';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
}

export default function AdminContacts() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: contactsData = [], isLoading, refetch } = trpc.admin.getContacts.useQuery();
  const contacts = contactsData as unknown as Contact[];

  const columns: Column<Contact>[] = [
    {
      key: 'id',
      label: 'ID',
      sortable: true,
    },
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'company',
      label: 'Company',
      sortable: true,
    },
    {
      key: 'subject',
      label: 'Subject',
      sortable: true,
      render: (contact) => (
        <span className="truncate max-w-xs block">
          {contact.subject}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (contact) => <StatusBadge status={contact.status} type="contact" />,
    },
    {
      key: 'createdAt',
      label: 'Date',
      sortable: true,
      render: (contact) => new Date(contact.createdAt).toLocaleDateString(),
    },
  ];

  const handleRowClick = (contact: Contact) => {
    setSelectedContact(contact);
    setModalOpen(true);
  };

  const handleExport = () => {
    // Convert to CSV
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Subject', 'Message', 'Status', 'Date'];
    const rows = contacts.map((contact) => [
      contact.id,
      contact.name,
      contact.email,
      contact.phone,
      contact.company,
      `"${contact.subject.replace(/"/g, '""')}"`,
      `"${contact.message.replace(/"/g, '""')}"`,
      contact.status,
      new Date(contact.createdAt).toLocaleDateString(),
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
    a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Contact Messages</h1>
            <p className="text-muted-foreground">
              Manage and respond to contact form submissions
            </p>
          </div>
          <Button onClick={handleExport} variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading contacts...</p>
          </div>
        ) : (
          <DataTable
            data={contacts}
            columns={columns}
            searchPlaceholder="Search contacts..."
            onRowClick={handleRowClick}
          />
        )}

        <ContactDetailModal
          contact={selectedContact}
          open={modalOpen}
          onOpenChange={setModalOpen}
          onUpdate={refetch}
        />
      </div>
    </AdminLayout>
  );
}
