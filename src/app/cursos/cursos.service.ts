import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  getCursos() {
    return [
      { id: 0, nome: 'Angular' },
      { id: 1, nome: 'TypeScript' },
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let curso of cursos) {
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }

  constructor() {}
}
