import { Injectable } from '@angular/core';
import { collection, addDoc } from '@firebase/firestore';
import { AuthenticationService } from './authentication.service';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private authService: AuthenticationService,
    private firestore: Firestore
  ) {}

  async addWorker() {
    await addDoc(collection(this.firestore, 'workers'), {
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
