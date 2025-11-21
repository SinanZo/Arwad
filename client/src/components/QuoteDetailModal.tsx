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
import { Trash2 } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

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

interface QuoteDetailModalProps {
  quote: Quote | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdate: () => void;
}

export default function QuoteDetailModal({
  quote,
  open,
  onOpenChange,
  onUpdate,
}: QuoteDetailModalProps) {
  const utils = trpc.useUtils();

  const updateStatusMutation = trpc.admin.updateQuoteStatus.useMutation({
    onSuccess: () => {
      toast.success('Status updated successfully');
      utils.admin.getQuotes.invalidate();
      onUpdate();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to update status');
    },
  });

  const deleteMutation = trpc.admin.deleteQuote.useMutation({
    onSuccess: () => {
      toast.success('Quote deleted successfully');
      utils.admin.getQuotes.invalidate();
      onOpenChange(false);
      onUpdate();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete quote');
    },
  });

  if (!quote) return null;

  const handleStatusChange = (status: string) => {
    updateStatusMutation.mutate({
      id: quote.id,
      status: status as any,
    });
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this quote request?')) {
      deleteMutation.mutate({ id: quote.id });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Quote Request #{quote.id}</span>
            <StatusBadge status={quote.status} type="quote" />
          </DialogTitle>
          <DialogDescription>
            Submitted on {new Date(quote.createdAt).toLocaleString()}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Company Information */}
          <div>
            <h3 className="font-semibold mb-3">Company Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Company:</span>
                <p className="font-medium">{quote.company}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Contact Person:</span>
                <p className="font-medium">{quote.contact}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Email:</span>
                <p className="font-medium">{quote.email}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Phone:</span>
                <p className="font-medium">{quote.phone}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Industry:</span>
                <p className="font-medium capitalize">{quote.industry}</p>
              </div>
            </div>
          </div>

          {/* Requested Items */}
          <div>
            <h3 className="font-semibold mb-3">Requested Items</h3>
            <div className="space-y-3">
              {quote.items.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg bg-accent/50"
                >
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Part Number:</span>
                      <p className="font-medium">{item.partNumber}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Quantity:</span>
                      <p className="font-medium">{item.quantity}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Description:</span>
                      <p className="font-medium">{item.description}</p>
                    </div>
                    {item.manufacturer && (
                      <div>
                        <span className="text-muted-foreground">Manufacturer:</span>
                        <p className="font-medium">{item.manufacturer}</p>
                      </div>
                    )}
                    {item.category && (
                      <div>
                        <span className="text-muted-foreground">Category:</span>
                        <p className="font-medium capitalize">{item.category}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Status:</span>
              <Select value={quote.status} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
      </DialogContent>
    </Dialog>
  );
}
