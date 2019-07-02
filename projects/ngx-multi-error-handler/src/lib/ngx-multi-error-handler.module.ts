import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { NgxMultiErrorHandlerService } from './ngx-multi-error-handler.service';

@NgModule({})
export class NgxMultiErrorHandlerModule {
  public static forRoot(): ModuleWithProviders<NgxMultiErrorHandlerModule> {
    return {
      ngModule: NgxMultiErrorHandlerModule,
      providers: [
        {
          provide: ErrorHandler,
          useClass: NgxMultiErrorHandlerService
        }
      ]
    };
  }
}
