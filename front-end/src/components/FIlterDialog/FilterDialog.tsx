'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
        <DialogContent className='sm:max-w-[425px] max-h-[500px] !max-w-[700px] overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>Lọc sản phẩm</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label>Hãng sản xuất</label>
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
            </div>
            <div className='flex flex-col gap-2'>
              <label>Màn hình</label>
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
            </div>
            <div className='flex flex-col gap-2'>
              <label>Kích thước màn hình</label>
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
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
