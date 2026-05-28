import  Form  from "@/ui/applications/edit-form";
import { fetchApplicationById } from "@/lib/data";

export default async function Page(props: { params: Promise<{id: string}>}) {

    const params = await props.params;
    const id = params.id;
    const application = await fetchApplicationById(id); // shoudl receive application object with id == id


  return (
        <>
          <div>Edit application number {id}</div>
          <Form application={application}/> 
        </>
      );

}


