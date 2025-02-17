// Importa el módulo Routes de @angular/router
import { Routes } from '@angular/router';

// Define las rutas de la aplicación
export const routes: Routes = [
  {
    // Ruta para la página de inicio
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    // Ruta para la página "about"
    path: 'about',
    loadComponent: () => import('./about/about.page').then(m => m.AboutPage)
  },
  {
    // Redirige a la página de inicio si la ruta está vacía
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
