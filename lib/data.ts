import { Console } from "console";
import { sql } from "./db";
import { Application } from "./definitions";



export async function fetchAllApplications() {

    try {
        const data = await sql<Application[]>`
        SELECT *
        FROM applications
        `;

        console.log("fetched all applications from database.");

        return data;
    } catch (error) {
        console.error("Database error: ", error);
        throw new Error('Failed to fetch all applications from database.');

    }
}