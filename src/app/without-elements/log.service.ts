import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';

import {PopupComponent} from './popup.component';

@Injectable()
export class LogWithoutElementsService {
  constructor(private injector: Injector,
              private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  show(message: string) {
    const popup = document.createElement('popup-component');
    document.body.appendChild(popup);

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listening to the component means accessing its streams directly
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;
  }
}
