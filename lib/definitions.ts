// This file contains type definitions for the application's data.
// It describes the shape of the data, and what data type each property should accept.

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
