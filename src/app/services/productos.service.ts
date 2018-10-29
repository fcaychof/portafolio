import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-39c74.firebaseio.com/productos_idx.json').subscribe((resp: Producto[]) => {
        console.log('productos');
        console.log(resp);
        setTimeout(() => {
          this.cargando = false;
          this.productos = resp;
        }, 2000);
      }
    )
    ;
  }

  private cargarProductos1() {
    this.http.get('https://angular-html-39c74.firebaseio.com/productos_idx.json').subscribe(resp => {
      console.log('productos');
      console.log(resp);
    });
  }
}
