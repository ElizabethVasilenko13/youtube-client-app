import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { videosReducer } from '@redux/reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { YouTubeAppModule } from './youTubeApp/youTubeApp.module';
import { AuthModule } from './auth/auth.module';
import { YouTubeApiEffects } from './redux/effects/youtube-api.effects';
import { FavoriteModule } from './favorite/favorite.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    YouTubeAppModule,
    AuthModule,
    FavoriteModule,
    StoreModule.forRoot({
      videos: videosReducer,
    }),
    EffectsModule.forRoot([YouTubeApiEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: isDevMode(),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
