import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../environments/environment';

interface Camel {
  id: number;
  name: string;
  color?: string;
  humpCount: number;
  lastFed: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  apiUrl = environment.apiUrl;
  errorMessage: string | null = null;
  camels: Camel[] = [];
  camelForm: FormGroup;
  isEditing = false;
  
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  constructor() {
    this.camelForm = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2)]],
      color: [''],
      humpCount: [1, [Validators.required, Validators.min(1), Validators.max(2)]],
      lastFed: [new Date().toISOString()]
    });
  }

  ngOnInit() { this.loadCamels(); }

  loadCamels() {
    this.errorMessage = null;
    this.http.get<Camel[]>(this.apiUrl).subscribe({
      next: (data) => this.camels = data,
      error: (err) => {
        console.error('Hiba:', err);
        this.errorMessage = 'Nem sikerült betölteni az adatokat!';
      }
    });
  }

  onSubmit() {
    if (this.camelForm.invalid) return;
    const camelData = this.camelForm.value;
    const onSuccess = () => { this.resetForm(); this.loadCamels(); };

    if (this.isEditing) {
      this.http.put(`${this.apiUrl}/${camelData.id}`, camelData).subscribe(onSuccess);
    } else {
      const { id, ...newCamel } = camelData; 
      this.http.post(this.apiUrl, newCamel).subscribe(onSuccess);
    }
  }

  deleteCamel(id: number) {
    if(confirm('Biztosan törlöd?')) this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.loadCamels());
  }

  editCamel(camel: Camel) {
    this.isEditing = true;
    this.camelForm.patchValue(camel);
  }

  resetForm() {
    this.isEditing = false;
    this.camelForm.reset({ humpCount: 1, lastFed: new Date().toISOString() });
  }
}