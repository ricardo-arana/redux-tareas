import { Tarea } from '../models/tarea.model';

export interface AppState {
    tareas: Tarea[];
}

export const initialAppState: AppState = {
    tareas: []
};





