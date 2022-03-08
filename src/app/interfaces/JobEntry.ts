interface JobEntry {
  uid?: string;
  locations: string[];
  date: string;
  startTime: string;
  endTime: string;
  address: string;
  details: string;
}

export default JobEntry;
