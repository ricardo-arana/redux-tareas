import { createReducer, on } from '@ngrx/store';
import { initialAppState, getTareas, AppState } from './app.state';
import { agregarTarea, borrarTarea } from './app.actions';
import { Tarea } from '../models/tarea.model';


const _appReducer = createReducer(initialAppState,
    on(agregarTarea, (state, {tarea}) => {
        let tareas: Tarea[] = [...state.tareas, tarea];
        return ({...state, tareas}); // tareas: tareas
    }),
    on(borrarTarea, (state, {texto}) => borrarTareaReducer(state, texto))
    );

export function appReducer(state, action) {
    return _appReducer(state, action);
}

function borrarTareaReducer(state: AppState, texto: string) {
    const tareas = [...state.tareas].filter(obj => obj.nombre !== texto);
    return ({...state, tareas});
}
