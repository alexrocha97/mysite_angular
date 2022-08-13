import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiaService } from 'src/app/Services/Noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(private noticiaService: NoticiaService, private router: Router) { }

  listanoticias!: Array<number>;
  noticias!: any;

  ngOnInit(): void {
    this.ListarNoticias();
  }

  ListarNoticias()
  {
    this.noticiaService.ListarNoticias()
    .subscribe( noticias => {
      this.noticias = noticias;
    },
    error =>
    {
      this.router.navigate(["/login"]);
    })
  }

}
