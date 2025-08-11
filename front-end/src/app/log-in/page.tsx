'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import React, { useState } from 'react';
import { config } from '@/configs/config.env';
import { useRouter } from 'next/navigation';
import {
  RawKeycloakTokenResponse
} from '@/type/keycloak/raw-keycloak-token-response';
import { KeycloakTokenResponse } from '@/type/keycloak/keycloak-token-response';
import mapKeycloakResponse from '@/libs/mapToKeycloakResponse';

export default function LogIn() {
  // 1. Initial state
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 2. Handle login
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // 2.1. Get username and password
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    // 2.2. Create params
    const params = new URLSearchParams();
    params.append('client_id', config.keycloak.clientID);
    params.append('grant_type', 'password');
    params.append('username', username);
    params.append('password', password);

    // 2.3. Create url to send data
    const urlToFetch: string = `${config.keycloak.url}/realms/${config.keycloak.realmName}/protocol/openid-connect/token`;

    try {
      // 2.4. Send data post method
      const res: Response = await fetch(urlToFetch, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });

      // 2.5. Get data
      const data: RawKeycloakTokenResponse = await res.json();
      console.log('Tokens:', data);

      // 2.6. Map data to keycloak token
      const keycloakToken: KeycloakTokenResponse = mapKeycloakResponse(data);

      if (res.ok && keycloakToken.accessToken) {

        router.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Đăng nhập vào tài khoản</CardTitle>
        <CardDescription>
          Nhập thông tin đăng nhập ở bên dưới để đăng nhập vào tài khoản
        </CardDescription>
        <CardAction>
          <Link href={'/sign-up'}>
            <Button variant='link'>Đăng ký</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
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
              <div className='flex items-center'>
                <Label htmlFor='password'>Mật khẩu</Label>
                <a
                  href='#'
                  className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                >
                  Quên mật khẩu?
                </a>
              </div>
              <Input
                id='password'
                type='password'
                required
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 pt-4'>
            <Button
              type='submit'
              className='w-full'
            >
              Đăng nhập
            </Button>
            <Button
              variant='outline'
              className='w-full'
            >
              Đăng nhập bằng Google <FcGoogle />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
