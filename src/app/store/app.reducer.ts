import { createReducer, on } from '@ngrx/store';
import { initialAppState, getTareas } from './app.state';
import { agregarTarea } from './app.actions';
import { Tarea } from '../models/tarea.model';


const _appReducer = createReducer(initialAppState,
    on(agregarTarea, (state, {tarea}) => {
        let tareas: Tarea[] = [...state.tareas, tarea];
        return ({...state, tareas});
    })
    );

export function appReducer(state, action) {
    return _appReducer(state, action);
}