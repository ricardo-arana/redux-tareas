import { Tarea } from '../models/tarea.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {
    tareas: Tarea[];
    nombre: string;
}

export const initialAppState: AppState = {
    tareas: [{nombre: 'Primera tarea', estado: 'PENDIENTE'}],
    nombre: 'Ricardo'
};


export const selectFeature = createFeatureSelector('appStore');
export const getTareas = createSelector(selectFeature, (state: AppState) => state.tareas);





