import {Component, EventEmitter, Input, Output} from '@angular/core';
import {POPUP_ANIMATION} from '../popup-animation';
import {AnimationEvent} from '@angular/animations';

@Component({
  selector: 'popup-element',
  template: 'Element Message: {{message}}',
  styleUrls: ['../popup-style.scss'],
  host: {
    '[@state]': 'state',
    '(@state.done)': 'onAnimationDone($event)',
  },
  animations: POPUP_ANIMATION,
})
export class PopupElementComponent {
  private state: 'opened' | 'closed' = 'closed';

  @Input()
  set message(message: string) {
    this._message = message;
    this.state = 'opened';

    setTimeout(() => this.state = 'closed', 2000);
  }
  get message(): string { return this._message; }
  _message: string;

  @Output()
  closed = new EventEmitter();

  onAnimationDone(e: AnimationEvent) {
    if (e.toState === 'closed') {
      this.closed.next();
    }
  }
}
