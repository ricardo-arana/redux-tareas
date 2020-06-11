import { createReducer, on } from '@ngrx/store';
import { initialAppState } from './app.state';
import { agregarTarea } from './app.actions';


const _appReducer = createReducer(initialAppState,
    on(agregarTarea, (state, {tarea}) => {
        const tareas_nuevas = state.tareas;
        tareas_nuevas.push(tarea);
        return ({...state, tareas: tareas_nuevas})})
    );

export function appReducer(state, action) {
    return _appReducer(state, action);
}