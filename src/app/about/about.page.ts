// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule]
})
export class AboutPage implements OnInit {

  // Constructor que inyecta el servicio de enrutamiento
  constructor(private router: Router) { }

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
  }

  // Método para navegar a la página de inicio
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  // Descripción del proyecto
  projectDescription: string = 'Este proyecto está construido utilizando Angular y el framework Ionic para crear una aplicación de almacenamiento de notas. ' +
    'Angular proporciona un framework robusto para construir aplicaciones web dinámicas, mientras que Ionic permite una integración perfecta ' +
    'con plataformas móviles. La aplicación permite a los usuarios almacenar, ver y eliminar notas de manera eficiente.';
}
