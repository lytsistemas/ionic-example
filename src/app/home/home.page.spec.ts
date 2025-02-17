// Importaciones necesarias para las pruebas unitarias
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';

// Descripción del conjunto de pruebas para el componente HomePage
describe('HomePage', () => {
  let component: HomePage; // Componente que se va a probar
  let fixture: ComponentFixture<HomePage>; // Fixture para manejar el entorno de pruebas

  // Configuración inicial antes de cada prueba
  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage); // Crear una instancia del componente
    component = fixture.componentInstance; // Asignar la instancia del componente a la variable
    fixture.detectChanges(); // Detectar cambios para actualizar la vista
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprobar que el componente es verdadero (existe)
  });
});
