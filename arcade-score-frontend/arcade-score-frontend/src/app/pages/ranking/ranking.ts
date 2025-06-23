import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './ranking.html',
  styleUrl: './ranking.css'
})
export class RankingComponent {
  scores: any[] = [];
  errorMessage = '';

  constructor(private http: HttpClient) {
    this.loadRanking();
  }

  loadRanking() {
    this.http.get<any[]>('http://localhost:5000/api/scores/ranking').subscribe({
      next: (data) => this.scores = data,
      error: () => this.errorMessage = 'Erro ao carregar ranking.'
    });
  }
}