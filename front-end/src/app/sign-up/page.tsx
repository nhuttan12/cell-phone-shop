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

export default function SignUp() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign up your account</CardTitle>
        <CardDescription>
          Enter your information below to sign up your account
        </CardDescription>
        <CardAction>
          <Link href={'/log-in'}>
            <Button variant="link">Log in</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="username"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required/>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="retypePassword">Re-type Password</Label>
              </div>
              <Input id="retypePassword" type="password" required/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <Button variant="outline" className="w-full">
          Sign up with Google <FcGoogle/>
        </Button>
      </CardFooter>
    </Card>
  )
}
