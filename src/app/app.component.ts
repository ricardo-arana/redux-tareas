import { Component } from '@angular/core';
import { AppState, selectFeature, getTareas } from './store/app.state';
import { Store } from '@ngrx/store';
import { agregarTarea, borrarTarea } from './store/app.actions';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux';
  tareas: Tarea[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select(getTareas).subscribe( obj => {
      console.log(obj);
      this.tareas = obj;
    });
  }

  agregarTarea(nombreTarea: string ){
    console.log(nombreTarea);
    const tarea: Tarea = {
      nombre: nombreTarea,
      estado: 'PENDIENTE'
    };
    const action = agregarTarea({ tarea }); // tarea: tarea
    this.store.dispatch(action);
  }

  borrarTarea(texto: string) {
    const actionBorrarTarea = borrarTarea({texto});
    console.log('se va a eliminar la tarea: ' + texto);
    this.store.dispatch(actionBorrarTarea);
  }
}
