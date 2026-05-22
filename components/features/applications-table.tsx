"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import applications from "@/data/applications.json";
import { Button } from "../ui/button";
import { deleteApplication } from "@/lib/actions";

const columnHeader = [
  "Company",
  "Role Title",
  "Type",
  "Location",
  "Deadline",
  "Eligibility",
  "Eligibility Reasoning",
  "Salary",
  "Link",
  "Notes",
  "Status",
];

export default function ApplicationsTable() {
  return (
    <Table>
      <TableCaption>A list of your applications.</TableCaption>
      <TableHeader>
        <TableRow>
          {columnHeader.map((ch) => (
            <TableHead className="w-[100px]" key={ch}>
              {ch}
            </TableHead>
          ))}
          {/**TODO: update this when connecting to database */}
          <TableHead className="w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {applications.applications.map((app) => (
          <TableRow key={app.company}>
            {Object.entries(app).map(([key, value]) => (
              <TableCell key={value}>{value}</TableCell>
            ))}
            {/**TODO: update this when connecting to database */}
            <TableCell className={app.company}>
              <Button onClick={() => deleteApplication(app.company)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
