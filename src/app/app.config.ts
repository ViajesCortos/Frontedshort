import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyD-bJSeemXzOcLk6dRwvGWI3jccBRByNAM",
  authDomain: "login-travel-db3a0.firebaseapp.com",
  projectId: "login-travel-db3a0",
  storageBucket: "login-travel-db3a0.firebasestorage.app",
  messagingSenderId: "7300917127",
  appId: "1:7300917127:web:b37f5235cbccaebc7d9522",
  measurementId: "G-5Z06LHE1BX"
};

initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule
    ), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};