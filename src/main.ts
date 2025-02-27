import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './products/products.config';
import { ProductComponent } from './products/products.component';

bootstrapApplication(ProductComponent, appConfig)
  .catch((err) => console.error(err));
