import * as React from "react"
import { Button } from "@/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import Link from "next/link"
import { createApplication } from "@/lib/actions"



export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create New Application</CardTitle>
        <CardDescription>
          Add information about a new job application you submitted.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="app-form" action={createApplication}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              {applicationFields.map((field) => (
                <div key={field.id}>
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    name={field.id}
                    placeholder="Start typing .."
                  />
                </div>
              ))}

              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/applications">Cancel</Link>

        {/**/}
        <Button type="submit" form="app-form">Deploy</Button>
      </CardFooter>
    </Card>
  );
}
