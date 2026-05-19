import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
    ]


export default function ApplicationsTable() {

    return (
        <Table>
          <TableCaption>A list of your applications.</TableCaption>
          <TableHeader>
            <TableRow>
              {columnHeader.map( (ch) => (
                  <TableHead className="w-[100px]" key={ch}>{ch}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/*<TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>*/}
          </TableBody>
        </Table>
        );
    }

