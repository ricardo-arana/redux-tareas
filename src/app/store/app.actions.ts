
import { createAction, props } from '@ngrx/store';
import { Tarea } from '../models/tarea.model';

export const agregarTarea = createAction('agregar tarea',
                        props<{ tarea: Tarea}>());

export const borrarTarea = createAction('borrar tarea',
                        props<{ texto: string}>());

export const completarTarea = createAction('completar tarea');
