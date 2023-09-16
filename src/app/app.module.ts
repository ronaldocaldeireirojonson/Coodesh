import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { EmailInputComponent } from './pages/home/email-input/email-input.component';
import { EmailViewerComponent } from './pages/home/email-viewer/email-viewer.component';
import { EmailInputViewComponent } from './pages/home/email-input/email-input-view/email-input-view.component';
import { EmailListComponent } from './pages/home/email-list/email-list.component';
import { EmailListViewComponent } from './pages/home/email-list/email-list-view/email-list-view.component';
import { EmailViewerViewComponent } from './pages/home/email-viewer/email-viewer-view/email-viewer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailInputComponent,
    EmailListComponent,
    EmailViewerComponent,
    EmailInputViewComponent,
    EmailListViewComponent,
    EmailViewerViewComponent,
  ],
  imports: [BrowserModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
