import Link from "next/link";
import { deleteApplication } from "@/lib/actions";


export function DeleteApplication({ id }: { id: string }) {
  
  const deleteApplicationWithId = deleteApplication.bind(null, id);

    // TODO: add a pop up card when pressing the button to double check if the user wants to delete the application
  return (
    <form action={deleteApplicationWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span>Delete</span>
      </button>
    </form>
  );
}
