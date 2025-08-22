'use client';

import {
  Dialog,
  DialogContent, DialogDescription,
  DialogHeader, DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import FilterButton from '@/components/Button/FIlterButton';
import { useState } from 'react';
import { Funnel } from 'lucide-react';

export default function FilterDialog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories: string[] = [
    'Nut Butters',
    'Organic',
    'Vegan',
    'Gluten-Free',
  ];

  function handleCheckedChange(category: string, isChecked: boolean): void {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((item: string): boolean => item !== category),
      );
    }
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            type='button'
          >
            Lọc sản phẩm
            <Funnel />
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Filter Products</DialogTitle>
            <DialogDescription>
              Select the categories to filter the products.
            </DialogDescription>
          </DialogHeader>
          <div className='flex flex-wrap gap-2'>
            {categories.map((category: string) => (
              <FilterButton
                key={category}
                id={category}
                label={category}
                isChecked={selectedCategories.includes(category)}
                onCheckedChange={(isChecked: boolean): void =>
                  handleCheckedChange(category, isChecked)
                }
              />
            ))}
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
