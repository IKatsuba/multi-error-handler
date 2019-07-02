import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { MULTI_ERROR_HANDLERS } from './ngx-multi-error-handler.tokens';

@Injectable({
  providedIn: 'root'
})
export class NgxMultiErrorHandlerService implements ErrorHandler {

  constructor(@Inject(MULTI_ERROR_HANDLERS) private handlers: ErrorHandler[]) {
  }

  handleError(error: any): void {
    this.handlers.forEach(handler => handler.handleError(error));
  }
}
