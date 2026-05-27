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
import { Button } from "../ui/button";
import { deleteApplication } from "@/lib/actions";
import { Application } from "@/lib/definitions";


const columnLabels = [
  { key: "company", label: "Company" },
  { key: "roleTitle", label: "Role" },
  { key: "location", label: "Location" },
  { key: "deadline", label: "Deadline" },
  { key: "meetsReqs", label: "Meets Requirements" },
  { key: "salary", label: "Salary" },
  { key: "jobUrl", label: "Link" },
  { key: "notes", label: "Notes" },
  { key: "status", label: "Status" },
];

export default function ApplicationsTable({data}: {data: Application[]}) {
  return (
    <Table>
      <TableCaption>A list of your applications.</TableCaption>

      {/* HEADER */}
      <TableHeader>
        <TableRow>
          {columnLabels.map((col) => (
            <TableHead className="w-[100px]" key={col.key}>
              {col.label}
            </TableHead>
          ))}
          {/**TODO: fix the key/id/or name identifier of action table column header*/}
          <TableHead className="w-[100px]" key={"action"}></TableHead>
        </TableRow>
      </TableHeader>

      {/* BODY */}
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.company}</TableCell>
            <TableCell>{row.roleTitle}</TableCell>
            <TableCell>{row.location}</TableCell>
            <TableCell>
              {new Date(row.deadline).toLocaleDateString()}
            </TableCell>{" "}
            {/**TODO: fix deadline type or how you parse it in from database */}
            <TableCell>{row.meetsReqs ? "Yes" : "No"}</TableCell>
            <TableCell>{row.salary}</TableCell>{" "}
            {/**TODO: fix salary type or how you parse it in from database*/}
            <TableCell>
              <a href={row.jobUrl} target="_blank" rel="noopener noreferrer">
                {row.jobUrl}
              </a>
            </TableCell>
            <TableCell>{row.notes ?? "/"}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
