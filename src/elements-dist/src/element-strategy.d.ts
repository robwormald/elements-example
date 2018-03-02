import { Observable } from 'rxjs/Observable';
/**
 * Interface for the events emitted through the NgElementStrategy.
 *
 * @experimental
 */
export interface NgElementStrategyEvent {
    name: string;
    value: any;
}
/**
 * Underlying strategy used by the NgElement to create/destroy the component and react to input
 * changes.
 *
 * @experimental
 */
export interface NgElementStrategy {
    events: Observable<NgElementStrategyEvent>;
    connect(element: HTMLElement): void;
    disconnect(): void;
    getPropertyValue(propName: string): any;
    setPropertyValue(propName: string, value: string): void;
}
/**
 * Factory used to create new strategies for each NgElement instance.
 *
 * @experimental
 */
export interface NgElementStrategyFactory {
    create(): NgElementStrategy;
}
