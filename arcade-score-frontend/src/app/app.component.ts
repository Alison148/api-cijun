import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Arcade Score';
  ranking: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/api/scores/ranking')
      .subscribe({
        next: (dados) => {
          this.ranking = dados;
          console.log('Ranking carregado:', this.ranking);
        },
        error: (erro) => {
          console.error('Erro ao buscar ranking:', erro);
        }
      });
  }
}
