import { Construction, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function Rankings() {
  return (
    <Card className="max-w-xl text-center dark:bg-gray-800">
      <CardHeader>
        <div className="mb-4 flex justify-center">
          <Construction className="h-12 w-12 text-indigo-500 dark:text-indigo-400" />
        </div>
        <CardTitle className="text-3xl font-bold">
          Page Under Construction
        </CardTitle>
        <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
          We are working hard to bring this page to you soon.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-muted-foreground text-sm dark:text-gray-400">
          Stay tuned for updates! In the meantime, feel free to explore other
          sections of our site.
        </p>
        <div className="flex justify-center">
          <Button className="w-full max-w-xs" variant="outline" asChild>
            <Link href="/">
              <Hammer className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
