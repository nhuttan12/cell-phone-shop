import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import ListItem from '@/components/list-item/list-item';
import Link from 'next/link';
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  ShoppingCart,
} from 'lucide-react';

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
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}>
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
                  href={category.href}>
                  {category.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}>
            <Link
              href='/cart'
              className='flex-row items-center gap-2'>
              <ShoppingCart color='black' />
              Giỏ hàng
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Người dùng</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[200px] gap-4'>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href='#'
                    className='flex-row items-center gap-2'>
                    <CircleHelpIcon />
                    Backlog
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href='#'
                    className='flex-row items-center gap-2'>
                    <CircleIcon />
                    To Do
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href='#'
                    className='flex-row items-center gap-2'>
                    <CircleCheckIcon />
                    Done
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
