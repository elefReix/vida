import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1jgLjRQxDGdzEjcZyDOEQfcgHNScjuVQ",
  authDomain: "query-indegsa.firebaseapp.com",
  projectId: "query-indegsa",
  storageBucket: "query-indegsa.firebasestorage.app",
  messagingSenderId: "1013390806465",
  appId: "1:1013390806465:web:65f534b5395878a38b3340"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(()=> getFirestore()),
    provideStorage( () => getStorage() ),
    provideRouter(routes),
    provideHttpClient(), 
    provideAnimationsAsync(),
  ]
};
