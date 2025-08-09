'use client';

import {
  Card, CardAction, CardContent,
  CardDescription, CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LogIn() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Đăng nhập vào tài khoản</CardTitle>
        <CardDescription>
          Nhập thông tin đăng nhập ở bên dưới để đăng nhập vào tài khoản
        </CardDescription>
        <CardAction>
          <Link href={'/sign-up'}>
            <Button variant="link">Đăng ký</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Tài khoản</Label>
              <Input
                id="username"
                type="text"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Mật khẩu</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Quên mật khẩu?
                </a>
              </div>
              <Input id="password" type="password" required/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Đăng nhập bằng Google <FcGoogle/>
        </Button>
      </CardFooter>
    </Card>
  )
}
