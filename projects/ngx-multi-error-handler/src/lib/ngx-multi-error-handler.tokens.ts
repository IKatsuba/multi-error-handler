import { ErrorHandler, InjectionToken } from '@angular/core';

export const MULTI_ERROR_HANDLERS = new InjectionToken<ErrorHandler[]>('MULTI_ERROR_HANDLERS');
