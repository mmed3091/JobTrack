import ApplicationsTable from "@/ui/applications/applications-table";
import { Button } from "@/ui/button";
import Link from "next/link";
import { fetchAllApplications } from "@/lib/data";
import { CreateApplication } from "@/ui/applications/buttons";

export default async function Page() {
  const data = await fetchAllApplications();

  // TODO: remove console.log(data)
  console.log(data);

  return (
    <>
      <p>Application Page</p>
      <ApplicationsTable data={data} />
      <div>
        <CreateApplication></CreateApplication>
      </div>
    </>
  );
}
