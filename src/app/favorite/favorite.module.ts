import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { YouTubeAppModule } from '../youTubeApp/youTubeApp.module';

@NgModule({
  declarations: [FavoritePageComponent],
  exports: [FavoritePageComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, SharedModule, FavoriteRoutingModule, YouTubeAppModule, ButtonComponent],
})
export class FavoriteModule {}
