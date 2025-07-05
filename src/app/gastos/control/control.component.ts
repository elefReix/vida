import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Gasto {
  id: number;
  descripcion: string;
  monto: number;
  pagadoPor: string;
  categoria: string;
  fecha: string;
}

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss'
})
export class ControlComponent {
gastos: Gasto[] = [];
  nuevoGasto = {
    descripcion: '',
    monto: '',
    pagadoPor: '',
    categoria: '',
  };

  categorias = [
    'Alimentación',
    'Transporte',
    'Entretenimiento',
    'Servicios',
    'Compras',
    'Salud',
    'Otros',
  ];

  get totalGastos() {
    return this.gastos.reduce((suma, gasto) => suma + gasto.monto, 0);
  }

  get totalPersona1() {
    return this.gastos
      .filter((g) => g.pagadoPor === 'Persona 1')
      .reduce((suma, g) => suma + g.monto, 0);
  }

  get totalPersona2() {
    return this.gastos
      .filter((g) => g.pagadoPor === 'Persona 2')
      .reduce((suma, g) => suma + g.monto, 0);
  }

  get balance() {
    return this.totalPersona1 - this.totalPersona2;
  }

  agregarGasto() {
    const { descripcion, monto, pagadoPor, categoria } = this.nuevoGasto;
    if (descripcion && monto && pagadoPor && categoria) {
      this.gastos.push({
        id: Date.now(),
        descripcion,
        monto: parseFloat(monto),
        pagadoPor,
        categoria,
        fecha: new Date().toLocaleDateString(),
      });

      this.nuevoGasto = {
        descripcion: '',
        monto: '',
        pagadoPor: '',
        categoria: '',
      };
    }
  }

  eliminarGasto(id: number) {
    this.gastos = this.gastos.filter((g) => g.id !== id);
  }
}
