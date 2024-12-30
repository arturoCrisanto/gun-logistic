"use client";
import { useRouter } from "next/navigation"; // Use next/navigation for app directory
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const router = useRouter(); // Initialize useRouter from next/navigation

  const navigateToPage = (path) => {
    router.push(path); // Redirect to the given path
  };

  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Gun Logistic</CardTitle>
          <CardDescription>
            Inventory management system for guns and ammunition
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Input your Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Input your Password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => navigateToPage("/dashboard")}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
