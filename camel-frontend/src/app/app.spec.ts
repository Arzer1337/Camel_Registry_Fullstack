import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app'; 
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AppComponent Tesztek', () => {
  let component: AppComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Létrejön a komponens', () => {
    expect(component).toBeTruthy();
  });

  it('Az űrlap érvénytelen, ha üres', () => {
    
    expect(component.camelForm.valid).toBe(false); 
  });

  it('A név validáció működik (min 2 karakter)', () => {
    const nameControl = component.camelForm.get('name');
    nameControl?.setValue('A');
   
    expect(nameControl?.valid).toBe(false); 

    nameControl?.setValue('Teve');
    
    expect(nameControl?.valid).toBe(true); 
  });

  it('A púpok száma csak 1 vagy 2 lehet', () => {
    const humpControl = component.camelForm.get('humpCount');
    humpControl?.setValue(3);
    expect(humpControl?.valid).toBe(false); 

    humpControl?.setValue(1);
    expect(humpControl?.valid).toBe(true); 
  });
});