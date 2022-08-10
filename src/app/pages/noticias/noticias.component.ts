import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  listanoticias!: Array<number>;

  ngOnInit(): void {
    var lista = new Array<number>();
    for(let index = 0; index < 12; index++)
    {
      lista.push(index)
    }

    this.listanoticias = lista;
  }

}
