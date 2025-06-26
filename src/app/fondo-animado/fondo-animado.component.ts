import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fondo-animado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fondo-animado.component.html',
  styleUrl: './fondo-animado.component.scss'
})
export class FondoAnimadoComponent implements AfterViewInit{

  @ViewChild('bgCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * w,
    }));

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#fff';
      stars.forEach(star => {
        star.z -= 2;
        if (star.z <= 0) {
          star.x = Math.random() * w;
          star.y = Math.random() * h;
          star.z = w;
        }

        const k = 128.0 / star.z;
        const px = star.x * k + w / 2;
        const py = star.y * k + h / 2;

        if (px >= 0 && px < w && py >= 0 && py < h) {
          const size = (1 - star.z / w) * 2;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
  }
}
