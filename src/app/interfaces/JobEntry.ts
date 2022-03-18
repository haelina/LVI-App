interface JobEntry {
  id?: string;
  uid: string;
  title?: string;
  timestamp?: string;
  locations: string[];
  timing: string;
  address: string;
  duration: string;
  details: string;
}

export default JobEntry;
