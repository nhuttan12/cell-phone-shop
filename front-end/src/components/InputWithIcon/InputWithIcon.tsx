'use client'

import React from 'react';
import { cn } from '@/libs/utils';
import { SearchIcon } from 'lucide-react';

// type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2',
          className,
        )}
      >
        <SearchIcon />
        <input
          {...props}
          type='search'
          ref={ref}
          className='w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
        />
      </div>
    );
  },
);

// InputWithIcon.displayName = 'Tìm kiếm';

export default InputWithIcon;
