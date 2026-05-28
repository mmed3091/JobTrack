"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";
import { sql } from "./db";

const applicationsFilePath = "data/applications.json";

{/**TODO: add id for each new application */}
export async function createApplication(formData: FormData) {

  // read file
  const file = fs.readFileSync(applicationsFilePath, "utf8");
  // parse JSON
  const jsonData = JSON.parse(file);
  // create new json object
  const newApplication = Object.fromEntries(formData.entries());
  // insert object into json file
  jsonData.applications.push(newApplication);
  // save file
  fs.writeFileSync(applicationsFilePath, JSON.stringify(jsonData, null, 2));
  console.log("created new applciation!");
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



