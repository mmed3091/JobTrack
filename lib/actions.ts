"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createApplication(formData: FormData) {

 
  console.log(formData);
  
//   revalidatePath("/dashboard/invoices");
  redirect("/applications");

  // Test it out:
  console.log(formData);
}

