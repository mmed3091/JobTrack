// This file contains type definitions for the application's data.
// It describes the shape of the data, and what data type each property should accept.


export type ApplicationDB = {
  id: string;
  company: string;
  role_title: string;
  location: string;
  deadline: string;
  meets_reqs: boolean;
  salary: number;
  job_url: string;
  notes?: string;
  status: string;
};


export type Application = {
  id: string;
  company: string,
  roleTitle: string,
  location: string,
  deadline: string,
  meetsReqs: boolean,
  salary: number,
  jobUrl: string,
  notes?: string,
  status: string //TODO change to enum
};
