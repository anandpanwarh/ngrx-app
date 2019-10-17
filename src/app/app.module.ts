import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/post/list/list.component';
import { ActionComponent } from './components/post/action/action.component';
import { DetailComponent } from './components/post/detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './shared/store/post/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './shared/store/post/post.effects';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ActionComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
