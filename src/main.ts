import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './products/products.config';
import { productsComponent } from './products/products.component';

bootstrapApplication(productsComponent, appConfig)
  .catch((err) => console.error(err));
