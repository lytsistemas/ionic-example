// Importaciones necesarias desde Angular e Ionic
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {IonHeader, IonToolbar, IonTitle} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

// Decorador que define el componente
@Component({
  selector: 'app-root', // Selector del componente
  templateUrl: 'app.component.html', // Ruta de la plantilla HTML
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonTitle], // Módulos importados
})
export class AppComponent {
  // Constructor que inyecta el servicio de enrutamiento
  constructor(private router: Router) {}

  // Método público para navegar a la página de inicio
  public navigateToHome() {
    this.router.navigate(['']);
  }
}
