import {Component, ComponentFactoryResolver, Injector} from '@angular/core';
import {createNgElementConstructor, getConfigFromComponentFactory} from '../elements-dist';

import {PopupElementComponent} from './with-elements/popup.component';
import {LogWithElementsService} from './with-elements/log.service';

import {LogWithoutElementsService} from './without-elements/log.service';
import {PopupComponent} from 'src/app/without-elements/popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              public logWithElements: LogWithElementsService,
              public logWithoutElements: LogWithoutElementsService) {
    this.definePopupElement();
  }

  definePopupElement() {
    const popupComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupElementComponent);


    const PopupElement = createNgElementConstructor(PopupComponent, {injector: this.injector, });
    customElements.define('popup-element', PopupElement);
  }
}
