import { PeriodicElement } from "../models/periodic.model";

export interface AppState {
  periodicElements: PeriodicElementState;
}

export interface PeriodicElementState {
  elements: PeriodicElement[];
  filter: string;
}
