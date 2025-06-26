import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Foto, GaleriaService } from '../servicios/galeria.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{

   fotos: Foto[] = [];
   categorias = ['cumpleaños', 'eventos', 'otros'];
   categoriaSeleccionada = '';
   nuevaDescripcion = '';
   fecha='';
   nuevaCategoria = 'cumpleaños';
   archivoSeleccionado: any = null;
   indiceActual:number = 0
   
   constructor(private galeriaService: GaleriaService) {}

  ngOnInit() {
      this.galeriaService.obtenerFotos().subscribe(data => {
        try {
          this.fotos = data;
          this.iniciarCarrousel()
        } catch (error) {
          console.error("🚀 error", error);
        }
      });
  }
 
  iniciarCarrousel(){
    setInterval(()=>{
      const total = this.fotosFiltradas().length
      console.error("🚀 total", total);
      if(this.fotosFiltradas().length){
        this.indiceActual = (this.indiceActual +1) % total 
      }
    },2000)
  }

  avanzar(){

  }

  retroceder(){

  }

  onFileSelected(event: any) {
    const archivo = event.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.archivoSeleccionado = e.target.result;
      };
      reader.readAsDataURL(archivo);
    }
  }

  agregarImagen() {
    if (this.archivoSeleccionado && this.nuevaDescripcion && this.nuevaCategoria) {
      this.fotos.push({
        url: this.archivoSeleccionado,
        descripcion: this.nuevaDescripcion,
        categoria: this.nuevaCategoria,
        fecha:this.fecha
      });

      // Reset form
      this.archivoSeleccionado = null;
      this.nuevaDescripcion = '';
      this.nuevaCategoria = 'cumpleaños';
    }
  }

  fotosFiltradas() {
    if (!this.categoriaSeleccionada) return this.fotos;
    return this.fotos.filter(f => f.categoria === this.categoriaSeleccionada);
  }
}


