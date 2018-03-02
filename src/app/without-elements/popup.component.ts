import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AnimationEvent} from '@angular/animations';
import {POPUP_ANIMATION} from '../popup-animation';

@Component({
  selector: 'popup-component',
  template: 'Component: {{message}}',
  styleUrls: ['../popup-style.scss'],
  host: {
    '[@state]': 'state',
    '(@state.done)': 'onAnimationDone($event)',
  },
  animations: POPUP_ANIMATION,
})
export class PopupComponent {
  private state: 'opened' | 'closed' = 'closed';

  // @Input() - can't use this
  set message(message: string) {
    this._message = message;
    this.state = 'opened';

    setTimeout(() => this.state = 'closed', 2000);
  }
  get message(): string { return this._message; }
  _message: string;

  // @Output() - can't use this
  closed = new Subject();

  onAnimationDone(e: AnimationEvent) {
    if (e.toState === 'closed') {
      this.closed.next();
    }
  }
}
