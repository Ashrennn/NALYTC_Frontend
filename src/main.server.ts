import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

enableProdMode();

export const AppServerModule = bootstrapApplication(AppComponent, config); 