import ApplicationsTable from '@/components/features/applications-table';
import {Button} from "@/components/ui/button"
import NewApplicationSheet from "@/components/features/new-application-sheet"
import Link from 'next/link'


   <Link href="/dashboard">Dashboard</Link>



export default function Page() {
  return (
      <>

      <p>Application Page</p>
      <ApplicationsTable/>
      <div>
            <Button>Add New Application</Button>
            <Link href="/applications/create">Add New Application</Link>
       </div>


      </>
    );
}