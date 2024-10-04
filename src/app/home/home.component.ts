import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef; // Asegúrate de que esté correctamente inicializado

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  stopAudio() {
    this.audioPlayer.nativeElement.pause();
    this.audioPlayer.nativeElement.currentTime = 0; // Reinicia el audio al inicio
  }
}
