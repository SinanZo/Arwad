import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Trash2, Mail } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

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

interface ContactDetailModalProps {
  contact: Contact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

export default function ContactDetailModal({
  contact,
  open,
  onOpenChange,
  onUpdate,
}: ContactDetailModalProps) {
  const utils = trpc.useUtils();

  const updateStatusMutation = trpc.admin.updateContactStatus.useMutation({
    onSuccess: () => {
      toast.success('Status updated successfully');
      utils.admin.getContacts.invalidate();
      onUpdate();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update status');
    },
  });

  const deleteMutation = trpc.admin.deleteContact.useMutation({
    onSuccess: () => {
      toast.success('Contact deleted successfully');
      utils.admin.getContacts.invalidate();
      onOpenChange(false);
      onUpdate();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete contact');
    },
  });

  if (!contact) return null;

  const handleStatusChange = (status: string) => {
    updateStatusMutation.mutate({
      id: contact.id,
      status: status as any,
    });
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this contact message?')) {
      deleteMutation.mutate({ id: contact.id });
    }
  };

  const handleReply = () => {
    window.location.href = `mailto:${contact.email}?subject=Re: ${encodeURIComponent(contact.subject)}`;
    // Mark as replied
    if (contact.status !== 'replied') {
      updateStatusMutation.mutate({
        id: contact.id,
        status: 'replied',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Contact Message #{contact.id}</span>
            <StatusBadge status={contact.status} type="contact" />
          </DialogTitle>
          <DialogDescription>
            Received on {new Date(contact.createdAt).toLocaleString()}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-3">Contact Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Name:</span>
                <p className="font-medium">{contact.name}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Company:</span>
                <p className="font-medium">{contact.company}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Email:</span>
                <p className="font-medium">{contact.email}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Phone:</span>
                <p className="font-medium">{contact.phone}</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <h3 className="font-semibold mb-3">Subject</h3>
            <p className="text-sm font-medium">{contact.subject}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Message</h3>
            <div className="p-4 border rounded-lg bg-accent/50">
              <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Status:</span>
              <Select value={contact.status} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="default" size="sm" onClick={handleReply}>
                <Mail className="h-4 w-4 mr-2" />
                Reply via Email
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleDelete}
                disabled={deleteMutation.isPending}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
