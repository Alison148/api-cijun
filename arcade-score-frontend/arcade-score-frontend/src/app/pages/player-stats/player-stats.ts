import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-stats',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './player-stats.html',
  styleUrl: './player-stats.css'
})
export class PlayerStatsComponent {
  stats: any = null;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const player = this.route.snapshot.paramMap.get('player');
    if (player) {
      this.http.get<any>(`http://localhost:5000/api/scores/player/${player}`).subscribe({
        next: data => this.stats = data,
        error: () => this.errorMessage = 'Erro ao carregar estatísticas.'
      });
    }
  }
}