import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export interface QuoteItem {
  id: string;
  partNumber: string;
  description: string;
  manufacturer: string;
  quantity: string;
  category: string;
}

interface QuoteItemRowProps {
  item: QuoteItem;
  index: number;
  categories: { value: string; label: string }[];
  onUpdate: (id: string, field: keyof QuoteItem, value: string) => void;
  onRemove: (id: string) => void;
  labels: {
    partNumber: string;
    description: string;
    manufacturer: string;
    quantity: string;
    category: string;
    selectCategory: string;
  };
  canRemove: boolean;
}

export default function QuoteItemRow({
  item,
  index,
  categories,
  onUpdate,
  onRemove,
  labels,
  canRemove,
}: QuoteItemRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border rounded-lg bg-card">
      <div className="md:col-span-1 flex items-center">
        <span className="font-semibold text-muted-foreground">#{index + 1}</span>
      </div>
      
      <div className="md:col-span-2">
        <Input
          placeholder={labels.partNumber}
          value={item.partNumber}
          onChange={(e) => onUpdate(item.id, 'partNumber', e.target.value)}
          required
        />
      </div>

      <div className="md:col-span-3">
        <Input
          placeholder={labels.description}
          value={item.description}
          onChange={(e) => onUpdate(item.id, 'description', e.target.value)}
          required
        />
      </div>

      <div className="md:col-span-2">
        <Input
          placeholder={labels.manufacturer}
          value={item.manufacturer}
          onChange={(e) => onUpdate(item.id, 'manufacturer', e.target.value)}
        />
      </div>

      <div className="md:col-span-1">
        <Input
          type="number"
          placeholder={labels.quantity}
          value={item.quantity}
          onChange={(e) => onUpdate(item.id, 'quantity', e.target.value)}
          required
          min="1"
        />
      </div>

      <div className="md:col-span-2">
        <Select
          value={item.category}
          onValueChange={(value) => onUpdate(item.id, 'category', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder={labels.selectCategory} />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-1 flex items-center">
        {canRemove && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onRemove(item.id)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
