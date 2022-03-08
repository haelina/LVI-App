import { Injectable } from '@angular/core';
import { collection, addDoc } from '@firebase/firestore';
import { AuthenticationService } from './authentication.service';
import { Firestore } from '@angular/fire/firestore';
import WorkerEntry from '../interfaces/Workerentry';

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
}
