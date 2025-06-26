import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-fondo-animado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fondo-animado.component.html',
  styleUrl: './fondo-animado.component.scss'
})
export class FondoAnimadoComponent implements AfterViewInit{

   ngAfterViewInit() {
    const canvas = document.getElementById('fondo-estrellas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');

  if (!ctx) return; // <- 👈 Solución al error

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const estrellas = Array.from({ length: 100 }).map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5
  }));

  function animar() {
    if (ctx) {
      console.log('todo bien');
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      estrellas.forEach(e => {
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#ffffff22';
        ctx.fill();
        e.y -= 0.3;
        if (e.y < 0) e.y = canvas.height;
      });
    }else{
      console.log(ctx);
      
    }
    requestAnimationFrame(animar);
  }

  animar();
  }
}
