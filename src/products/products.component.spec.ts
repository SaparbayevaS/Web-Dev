import { TestBed } from '@angular/core/testing';
import { productsComponent } from './products.component';

describe('productsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [productsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(productsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'lab4' title`, () => {
    const fixture = TestBed.createComponent(productsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lab4');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(productsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, lab4');
  });
});
