// Importaciones necesarias para las pruebas unitarias
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutPage } from './about.page';

// Descripción del conjunto de pruebas para el componente AboutPage
describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;

  // Configuración inicial antes de cada prueba
  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
