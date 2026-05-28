"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sql } from "./db";
import { z } from "zod";


const FormSchema = z.object({
  id: z.string(),
  company: z.string(),
  roleTitle: z.string(),
  location: z.string(),
  deadline: z.string(),
  meetsReqs: z.coerce.boolean(),
  salary: z.coerce.number(),
  jobUrl: z.string().url(),
  notes: z.string().optional(),
  status: z.string(),
});

const CreateApplication = FormSchema.omit({id: true, deadline: true})

export async function createApplication(formData: FormData) {
  
  
  const {company, roleTitle, location, meetsReqs, salary, jobUrl, notes, status} = CreateApplication.parse({
    company: formData.get("company"),
    roleTitle: formData.get("roleTitle"),
    location: formData.get("location"),
    meetsReqs: formData.get("meetsReqs"),
    salary: formData.get("salary"),
    jobUrl: formData.get("jobUrl"),
    notes: formData.get("notes"),
    status: formData.get("status"),
  });
  const rawDate = formData.get("deadline") as string;
  const [day, month, year] = rawDate.split("/")
  const deadline = new Date(Number(year), Number(month) - 1, Number(day));
  console.log({
    company,
    roleTitle,
    location,
    deadline,
    meetsReqs,
    salary,
    jobUrl,
    notes,
    status,
  });

  try {

    await sql`INSERT INTO applications (company, role_title, location, deadline, meets_reqs, salary, job_url, notes, status)
              VALUES (${company}, ${roleTitle}, ${location}, ${deadline}, ${meetsReqs}, ${salary}, ${jobUrl}, ${notes ?? null}, ${status})`;

  } catch (error) {
    console.error("Database error: ", error);
        throw new Error(`Failed to create new application.`);
    
  }
  
  console.log("Created new application!");
  revalidatePath("/applications");
  redirect("/applications");
  
}



export async function deleteApplication(id: string ) {

  try {
    await sql`DELETE FROM applications WHERE id = ${id}`;
    revalidatePath("/applications");

    console.log(`Delete application ${id}`);

  } catch (error) {
        console.error("Database error: ", error);
        throw new Error(`Failed to delete application number ${id} from database.`);
    }
}



