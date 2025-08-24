'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu';
import ListItem from '@/components/ListItem/ListItem';
import Link from 'next/link';
import {
  ArrowRightFromLine,
  CircleHelpIcon,
  CircleIcon,
  LogOut,
  ShoppingCart,
} from 'lucide-react';
import { useAuthStore } from '@/stores/authStore';
import { clearAccessToken } from '@/libs/token';
import React, { useEffect, useState } from 'react';
import keycloak from '@/libs/keycloak';
import { AuthState } from '@/type/auths/authState';
import { decodeKeycloakToken } from '@/libs/decodeKeycloakToken';
import { KeycloakAccessToken } from '@/type/tokens/keycloakAccessTokens';
import InputWithIcon from '@/components/InputWithIcon/InputWithIcon';

const categories: { title: string; href: string; description: string }[] = [
  {
    title: 'Điện thoại thông minh',
    href: '/categories/smartphones',
    description:
      'Những mẫu mới nhất từ các thương hiệu hàng đầu như Apple, Samsung, Xiaomi và nhiều hơn nữa.',
  },
  {
    title: 'Ốp lưng điện thoại',
    href: '/categories/phone-cases',
    description: 'Ốp bảo vệ và thời trang cho mọi mẫu điện thoại phổ biến.',
  },
  {
    title: 'Sạc & Cáp',
    href: '/categories/chargers-cables',
    description: 'Sạc nhanh, đế sạc không dây và cáp bền bỉ.',
  },
  {
    title: 'Tai nghe & Headphone',
    href: '/categories/earbuds-headphones',
    description:
      'Phụ kiện âm thanh chất lượng cao có dây và không dây cho điện thoại của bạn.',
  },
  {
    title: 'Miếng dán màn hình',
    href: '/categories/screen-protectors',
    description:
      'Kính cường lực và miếng dán bảo vệ giúp màn hình tránh trầy xước.',
  },
  {
    title: 'Đồng hồ thông minh',
    href: '/categories/smartwatches',
    description:
      'Thiết bị đeo tay kết nối liền mạch với điện thoại thông minh của bạn.',
  },
];

export default function Header() {
  // 1. Get auth state
  const authenticated: boolean = useAuthStore((state) => state.authenticated);
  const setAuthenticated = useAuthStore((state) => state.setAuthenticated);
  const accessToken: string | null = useAuthStore(
    (state: AuthState): string | null => state.accessToken,
  );
  const [fullName, setFullName] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      const decodedToken: KeycloakAccessToken | null =
        decodeKeycloakToken(accessToken);
      if (decodedToken && decodedToken.name) {
        setFullName(decodedToken.name);
      }
    }
  }, [accessToken]);

  function logout() {
    // 1. Call logout from Keycloak
    keycloak.logout({
      redirectUri: window.location.origin,
    });

    // 2. Set auth state to false
    setAuthenticated(false);

    // 3. Clear access token
    clearAccessToken();
  }

  function login() {
    // 1. Call login from Keycloak
    keycloak.login();
  }

  return (
    <NavigationMenu
      viewport={false}
      className='mx-auto z-50 flex-1 items-start pt-3'
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
          >
            <Link href='/'>Điện thoại Nông Lâm</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Danh mục</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
              {categories.map((category) => (
                <ListItem
                  key={category.title}
                  title={category.title}
                  href={category.href}
                >
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className='!w-[300px]'>
          <InputWithIcon name='search' className='w-full' placeholder='Tìm kiếm'/>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
          >
            <Link
              href='/cart'
              className='flex-row items-center gap-2'
            >
              <ShoppingCart color='black' />
              Giỏ hàng
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {authenticated ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {fullName || 'Người dùng'}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[200px] gap-4'>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href='#'
                      className='flex-row items-center gap-2'
                    >
                      <CircleHelpIcon />
                      Backlog
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href='#'
                      className='flex-row items-center gap-2'
                    >
                      <CircleIcon />
                      To Do
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href='#'
                      onClick={(e) => {
                        e.preventDefault();
                        logout();
                      }}
                      className='flex-row items-center gap-2'
                    >
                      <LogOut />
                      Đăng xuất
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : (
          <>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    login();
                  }}
                  className='flex-row items-center gap-2'
                >
                  <ArrowRightFromLine />
                  Đăng nhập
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
