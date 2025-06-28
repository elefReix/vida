import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CarouselComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
mensajesCumple = [
  '🎂 ¡Feliz cumpleaños, Mi Amor! 🎈',
  "Español: Te amo",
  "Inglés: I love you",
  "Francés: Je t'aime",
  "Alemán: Ich liebe dich",
  "Italiano: Ti amo",
  "Portugués: Eu te amo",
  "Ruso: Я тебя люблю",
  "Chino (mandarín): 我爱你",
  "Japonés: 愛してる",
  "Coreano: 사랑해",
  "Árabe: أحبك",
  "Hindi: मैं तुमसे प्यार करता हूँ",
  "Griego: Σ' αγαπώ",
  "Turco: Seni seviyorum",
  "Hebreo (hombre): אני אוהב אותך",
  "Hebreo (mujer): אני אוהבת אותך",
  "Polaco: Kocham cię",
  "Sueco: Jag älskar dig",
  "Húngaro: Szeretlek",
  "Rumano: Te iubesc",
  "Filipino: Mahal kita" ,
];

mensajeVisible = '';
mensajeActual = 0;
letra = 0;

  ngOnInit(): void {
    this.mostrarMensaje()
  }
  mostrarMensaje() {
  const mensaje = this.mensajesCumple[this.mensajeActual];
  this.mensajeVisible = '';

  const escribir = setInterval(() => {
    if (this.letra < mensaje.length) {
      this.mensajeVisible += mensaje[this.letra];
      this.letra++;
    } else {
      clearInterval(escribir);
      setTimeout(() => {
        this.mensajeActual = (this.mensajeActual + 1) % this.mensajesCumple.length;
        this.letra = 0;
        this.mostrarMensaje();
      }, 2500); // espera antes del siguiente mensaje
    }
  }, 60); // velocidad por letra
}
}
