"use server"

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import applications from "@/data/applications.json";
import fs from "fs";
import path from "path";

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


export async function deleteApplication(appCompany: string ) {



  // read file
  const file = fs.readFileSync(applicationsFilePath, "utf8");

  // parse JSON
  const jsonData = JSON.parse(file);

  // delete applicaiton object from json
  jsonData.applications = jsonData.applications.filter(
    (app: any) => app.company != appCompany
  );

  // save file
  fs.writeFileSync(applicationsFilePath, JSON.stringify(jsonData, null, 2));


}




