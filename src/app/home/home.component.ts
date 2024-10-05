import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef; // Asegúrate de que esté correctamente inicializado

  ngAfterViewInit(){
    if (this.audioPlayer) {
      console.log('El elemento de audio ha sido inicializado:', this.audioPlayer.nativeElement);
    } else {
      console.error('El elemento de audio no está disponible');
    }
  }

  playAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.play();
    }
  }

  stopAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.currentTime = 0; // Reinicia el audio al inicio
    }
  }
}
