import { Injectable } from '@angular/core';
import { collection, addDoc } from 'firebase/firestore';
import { AuthenticationService } from './authentication.service';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  db = getFirestore();
  constructor(private authService: AuthenticationService) {}

  async addWorker() {
    await addDoc(collection(this.db, 'workers'), {
      uid: this.authService.currentUserUid(),
      locations: ['Akaa', 'Lempäälä', 'Tampere'],
      date: '8.3.2022',
      startTime: '9:00',
      endTime: '18:00',
      details: 'Esimerkki',
      isTrainee: false,
    });
  }
}
