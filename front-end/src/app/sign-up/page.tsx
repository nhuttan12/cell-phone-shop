'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

export default function SignUp() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Đăng ký tài khoản</CardTitle>
        <CardDescription>
          Nhập thông tin vào các ô bên dưới để đăng ký tài khoản
        </CardDescription>
        <CardAction>
          <Link href={'/log-in'}>
            <Button variant='link'>Đăng nhập</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='username'>Tài khoản</Label>
              <Input
                id='username'
                type='text'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Mật khẩu</Label>
              </div>
              <Input
                id='password'
                type='password'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='retypePassword'>Nhập lại mật khẩu</Label>
              </div>
              <Input
                id='retypePassword'
                type='password'
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex-col gap-2'>
        <Button
          type='submit'
          className='w-full'>
          Đăng ký
        </Button>
        <Button
          variant='outline'
          className='w-full'>
          Đăng ký với tài khoản Google <FcGoogle />
        </Button>
      </CardFooter>
    </Card>
  );
}
