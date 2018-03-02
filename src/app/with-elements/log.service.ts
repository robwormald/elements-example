import {Injectable} from '@angular/core';
import {NgElement} from '../../elements-dist';

@Injectable()
export class LogWithElementsService {
  show(message: string) {
    const popup = document.createElement('popup-element') as NgElement & {message: string};
    popup.message = message;

    // Add to the DOM
    document.body.appendChild(popup);

    // Remove popup from DOM when closed
    popup.addEventListener('closed', () => document.body.removeChild(popup));
  }
}
