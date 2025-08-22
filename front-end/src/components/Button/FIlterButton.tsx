import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/Label';
import { cn } from '@/libs/utils';

interface filterButtonProps {
  id: string;
  label: string;
  isChecked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export default function FilterButton({
  id,
  isChecked,
  label,
  onCheckedChange,
}: filterButtonProps) {
  return (
    <div className='relative group'>
      {/* The actual checkbox, visually hidden */}
      <Checkbox
        id={id}
        checked={isChecked}
        onCheckedChange={onCheckedChange}
        className='absolute left-0 top-0 size-full cursor-pointer opacity-0'
      />

      {/* The label, styled to look like a button */}
      <Label
        htmlFor={id}
        className={cn(
          'inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          isChecked
            ? 'bg-stone-800 text-stone-50'
            : 'bg-stone-50 text-stone-800',
        )}
      >
        {label}
      </Label>
    </div>
  );
}
