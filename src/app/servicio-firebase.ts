import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore,getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirebase {
  // Configuración de Firebase
  firebaseConfig = {
    apiKey: "AIzaSyALj5fmAaKOz2kH_77anlz3pqxM7K9AO9Q",
    authDomain: "tienda-online-a9ea6.firebaseapp.com",
    databaseURL: "https://tienda-online-a9ea6-default-rtdb.firebaseio.com",
    projectId: "tienda-online-a9ea6",
    storageBucket: "tienda-online-a9ea6.firebasestorage.app",
    messagingSenderId: "440767408080",
    appId: "1:440767408080:web:70cf0fed92492f5e4c7bd5"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig); //Inicializacicion de firebase, se asigna la variable de firebaseConfig como parametro
    this.auth = getAuth(app);                       //Inicializacion del servicio de autenticacion
    this.firebase = getFirestore(app);              //Inicializacion del servicio de base de datos
  }
}
