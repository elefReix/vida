import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GaleriaService } from '../servicios/galeria.service';

interface TeamMember {
  id: number
  src: string
  alt: string
  name: string
  title: string
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  teamMembers: TeamMember[] = [  ]

  currentIndex = 0
  isPaused = false
  autoplayInterval: any

  constructor(private galeriaService: GaleriaService){
    
  }

  ngOnInit(): void {
    this.getPhotos()
  }

  ngOnDestroy(): void {
    this.pauseAutoplay()
  }

  getPhotos(){
    this.galeriaService.obtenerFotos().subscribe(data => {
        try {
          console.log(data);
          this.teamMembers = data.map( (foto:any) => ({ id:foto.descripcion, src:foto.url, alt:foto.categoria, name: foto.descripcion, title: foto.descripcion }))
          this.startAutoplay()
          console.log("🚀 ~ CarouselComponent ~ this.galeriaService.obtenerFotos ~ fotos:", this.teamMembers)
          // this.fotos = data;
          // this.iniciarCarrousel()
        } catch (error) {
          console.error("🚀 error", error);
        }
      });

  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      if (!this.isPaused) {
        this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length
      }
    }, 3000)
  }

  pauseAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval)
    }
  }

  handlePrev(): void {
    this.isPaused = true
    this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length
  }

  handleNext(): void {
    this.isPaused = true
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length
  }

  getImageStyles(index: number): { class: string; style: any } {
    const offset = (index - this.currentIndex + this.teamMembers.length) % this.teamMembers.length
    const center = this.currentIndex
    const total = this.teamMembers.length
    let diff = index - center

    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total

    let transformX = 0
    let scale = 1
    let zIndex = 0
    let filter = ''
    let opacity = 1

    if (diff === 0) {
      transformX = 0
      scale = 1
      zIndex = 20
    } else if (diff === 1) {
      transformX = 150
      scale = 0.9
      zIndex = 10
      filter = 'grayscale blur-sm'
    } else if (diff === -1) {
      transformX = -150
      scale = 0.9
      zIndex = 10
      filter = 'grayscale blur-sm'
    } else if (diff === 2) {
      transformX = 250
      scale = 0.8
      zIndex = 5
      filter = 'grayscale blur-md'
    } else if (diff === -2) {
      transformX = -250
      scale = 0.8
      zIndex = 5
      filter = 'grayscale blur-md'
    } else {
      transformX = diff > 0 ? 1000 : -1000
      scale = 0.7
      zIndex = 0
      filter = 'grayscale blur-lg'
      opacity = 0
    }

    return {
      class: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg transition-all duration-700 ease-in-out w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] ${filter} ${opacity === 0 ? 'opacity-0' : ''}`,
      style: {
        transform: `translate(calc(-50% + ${transformX}px), -50%) scale(${scale})`,
        zIndex,
      },
    }
  }
}
