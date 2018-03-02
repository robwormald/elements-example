import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';

import {PopupComponent} from './popup.component';
import {NgElement} from '../elements-dist';

@Injectable()
export class PopupService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {
    // Create element
    const popup = document.createElement('popup-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }

  showAsElement(message: string) {
    // Create element
    const popup = document.createElement('popup-element') as NgElement & {message: string};

    // Listen to the close event
    popup.addEventListener('closed', () => document.body.removeChild(popup));

    // Set the message
    popup.message = message;

    // Add to the DOM
    document.body.appendChild(popup);
  }
}
