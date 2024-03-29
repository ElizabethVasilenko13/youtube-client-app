import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminPageComponent],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, SharedModule],
})
export class AdminModule {}
