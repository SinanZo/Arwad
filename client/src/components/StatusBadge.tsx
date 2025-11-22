import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  status: string;
  type: 'quote' | 'contact';
}

export default function StatusBadge({ status, type }: StatusBadgeProps) {
  const getVariant = () => {
    if (type === 'quote') {
      switch (status) {
        case 'pending':
          return 'secondary';
        case 'processing':
          return 'default';
        case 'completed':
          return 'success';
        case 'cancelled':
          return 'destructive';
        default:
          return 'secondary';
      }
    } else {
      // contact
      switch (status) {
        case 'unread':
          return 'destructive';
        case 'read':
          return 'default';
        case 'replied':
          return 'success';
        default:
          return 'secondary';
      }
    }
  };

  const getLabel = () => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <Badge variant={getVariant() as any} className="capitalize">
      {getLabel()}
    </Badge>
  );
}
