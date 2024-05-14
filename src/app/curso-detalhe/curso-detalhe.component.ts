import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent implements OnInit {
  id: number;
  inscricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService
  ) {
    // Essa é uma maneira de obter o resultado, porém ela não é dinâmica, só obtém quando o componente é construído, porém se mudar de valor, não é alterado
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // Já aqui temos uma forma dinâmica de obter através do params o id, fazendo uma inscrição nesse cara
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    });

    this.curso = this.cursoService.getCurso(this.id);

    if (this.curso == null) {
      // Essa é uma maneira de fazer o roteamento imperativo, através do router.navigate
      this.router.navigate(['/naoEncontrado']);
    }
  }

  //Por boas práticas é interessante parar essa inscrição depois que o componente for destruído no atributo
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
