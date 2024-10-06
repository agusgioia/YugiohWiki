import { Component} from '@angular/core';

@Component({
  selector: 'app-home', // Cambia esto por el nombre de tu componente
  templateUrl: './home.component.html', // Cambia esto por tu archivo HTML
  styleUrls: ['./home.component.css'], // Cambia esto por tu archivo CSS
  standalone:true,
  imports:[]
})
export class HomeComponent {
  
  playAudio(audio: HTMLAudioElement) {
    audio.play().catch(error => console.error('Error al reproducir el audio:', error));
  }

  stopAudio(audio: HTMLAudioElement) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio
  }
}