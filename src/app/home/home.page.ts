import { Component } from '@angular/core';
import { IonContent, IonButton, IonInput, IonTextarea, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonInput, IonTextarea, IonList, IonItem, IonLabel, FormsModule, CommonModule],
})
export class HomePage {
  // Lista de notas
  notes: { title: string, content: string }[] = [];
  // Título de la nota actual
  noteTitle: string = '';
  // Contenido de la nota actual
  noteContent: string = '';

  constructor(private router: Router) {}

  // Navega a la página "About"
  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  // Añade una nueva nota a la lista
  addNote() {
    if (this.noteTitle && this.noteContent) {
      this.notes.push({ title: this.noteTitle, content: this.noteContent });
      this.noteTitle = '';
      this.noteContent = '';
    }
  }

  // Elimina una nota de la lista
  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}


