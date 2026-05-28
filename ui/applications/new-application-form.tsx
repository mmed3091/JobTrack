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
import { columnLabels } from "./column-labels"




export function Form() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create New Application</CardTitle>
        <CardDescription>
          Add information about a new job application you submitted.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="new-app-form" action={createApplication}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-4">
              {columnLabels.map((col) => (
                <div key={col.key} className="flex flex-col space-y-1">
                  <Label htmlFor={col.key}>{col.label}</Label>
                  <Input
                    id={col.key}
                    name={col.key}
                    placeholder={`Enter ${col.label.toLowerCase()}...`}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-1.5"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/applications">Cancel</Link>
        <Button type="submit" form="new-app-form">Create</Button>
      </CardFooter>
    </Card>
  );
}
