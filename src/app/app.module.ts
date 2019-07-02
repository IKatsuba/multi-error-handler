import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MULTI_ERROR_HANDLERS, NgxMultiErrorHandlerModule } from 'ngx-multi-error-handler';

class CustomErrorHandler1 implements ErrorHandler {
  handleError(error: any): void {
    console.log('Handler1', error);
  }
}

class CustomErrorHandler2 implements ErrorHandler {
  handleError(error: any): void {
    console.log('Handler2', error);
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMultiErrorHandlerModule.forRoot()
  ],
  providers: [
    {
      provide: MULTI_ERROR_HANDLERS,
      useClass: CustomErrorHandler1,
      multi: true
    },
    {
      provide: MULTI_ERROR_HANDLERS,
      useClass: CustomErrorHandler2,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(handler: ErrorHandler) {
    handler.handleError(new Error('Error'));
  }
}
