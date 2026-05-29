import { Console } from "console";
import { sql } from "./db";
import { Application, ApplicationDB } from "./definitions";




// TODO: create a function to reduce duplicate type casting from ApplicationDB to Application. 
export async function fetchAllApplications() {

    try {
        const rows = await sql<ApplicationDB[]>`
        SELECT *
        FROM applications
        `;

        const applications: Application[] = rows.map((row) => ({
          id: row.id,
          company: row.company,
          roleTitle: row.role_title,
          location: row.location,
          deadline: row.deadline,
          meetsReqs: row.meets_reqs,
          salary: row.salary,
          jobUrl: row.job_url,
          notes: row.notes ?? undefined,
          status: row.status,
        }));

        console.log("fetched all applications from database.");

        return applications;
    } catch (error) {
        console.error("Database error: ", error);
        throw new Error('Failed to fetch all applications from database.');

    }
}


export async function fetchApplicationById(id: string) {


    try {
        const application = await sql<ApplicationDB[]>`
                SELECT *
                FROM applications
                WHERE id = ${id}
                `;

        const row = application[0];
        console.log(`Retrieved application ${id}`);
        console.log(row.deadline);
        console.log(new Date(row.deadline));

        return {
          id: row.id,
          company: row.company,
          roleTitle: row.role_title,
          location: row.location,
          deadline: row.deadline,
          meetsReqs: row.meets_reqs,
          salary: row.salary,
          jobUrl: row.job_url,
          notes: row.notes ?? undefined,
          status: row.status,
        };


    } catch (error) {
        console.log("Database error: ", error);
        throw new Error(`Failed to fetch application ${id} from database.`);
    }

}