"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/ui/table";
import { Button } from "../button";
import { deleteApplication } from "@/lib/actions";
import { Application } from "@/lib/definitions";
import {  DeleteApplication, UpdateApplication } from "./buttons";
import { columnLabels } from "./column-labels";


export default function ApplicationsTable({ data }: { data: Application[] }) {

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
        {data.map((app) => (
          <TableRow key={app.id}>
            <TableCell>{app.company}</TableCell>
            <TableCell>{app.roleTitle} </TableCell>
            <TableCell>{app.location}</TableCell>
            <TableCell>
              {new Date(app.deadline).toLocaleDateString()}
            </TableCell>{" "}
            {/**TODO: fix deadline type or how you parse it in from database */}
            <TableCell>
              {new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
              }).format(app.salary)}
            </TableCell>
            {/**TODO: fix salary type or how you parse it in from database*/}
            <TableCell>
              <a href={app.jobUrl} target="_blank" rel="noopener noreferrer">
                {app.jobUrl}
              </a>
            </TableCell>
            <TableCell>{app.notes ?? "/"}</TableCell>
            <TableCell>{app.status}</TableCell>
            <TableCell>
              <div className="flex justify-end gap-3">
                <DeleteApplication id={app.id}></DeleteApplication>
                <UpdateApplication id={app.id}></UpdateApplication>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
