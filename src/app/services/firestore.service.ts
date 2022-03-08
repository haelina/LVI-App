import { Injectable } from '@angular/core';
import { collection, addDoc, where, query } from '@firebase/firestore';
import { AuthenticationService } from './authentication.service';
import { collectionData, Firestore } from '@angular/fire/firestore';
import WorkerEntry from '../interfaces/Workerentry';
import JobEntry from '../interfaces/JobEntry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private authService: AuthenticationService,
    private firestore: Firestore
  ) {}

  async addWorker(worker: WorkerEntry) {
    await addDoc(collection(this.firestore, 'workers'), worker);
  }

  async addJob(job: JobEntry) {
    await addDoc(collection(this.firestore, 'jobs'), job);
  }

  getWorkers(isTrainee: boolean): Observable<WorkerEntry[]> {
    const workerRef = query(
      collection(this.firestore, 'workers'),
      where('isTrainee', '==', isTrainee)
    );
    return collectionData(workerRef) as Observable<WorkerEntry[]>;
  }

  getJobs(): Observable<JobEntry[]> {
    const jobsRef = collection(this.firestore, 'jobs');
    return collectionData(jobsRef) as Observable<JobEntry[]>;
  }
}
