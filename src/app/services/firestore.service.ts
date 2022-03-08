import { Injectable } from '@angular/core';
import { collection, addDoc } from '@firebase/firestore';
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

  getWorkers(): Observable<WorkerEntry[]> {
    const workerRef = collection(this.firestore, 'workers');
    return collectionData(workerRef) as Observable<WorkerEntry[]>;
  }
}
