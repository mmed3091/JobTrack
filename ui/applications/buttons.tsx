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

export function CreateApplication() {
  return (
    <Link
      href="/applications/create"
      className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span>Create New Application</span>{" "}
    </Link>
  );
}