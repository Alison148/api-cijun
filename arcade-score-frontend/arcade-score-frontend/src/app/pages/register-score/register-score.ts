import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-score',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register-score.html',
  styleUrl: './register-score.css'
})
export class RegisterScoreComponent {
  player = '';
  score: number | null = null;
  date = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (!this.player || !this.score || !this.date) {
      Swal.fire('Erro', 'Preencha todos os campos corretamente.', 'error');
      return;
    }

    const payload = {
      player: this.player,
      score: this.score,
      date: this.date
    };

    this.http.post('http://localhost:5000/api/scores', payload).subscribe({
      next: () => {
        Swal.fire('Sucesso', 'Pontuação registrada com sucesso!', 'success');
        this.player = '';
        this.score = null;
        this.date = '';
      },
      error: () => {
        Swal.fire('Erro', 'Erro ao registrar pontuação.', 'error');
      }
    });
  }
}