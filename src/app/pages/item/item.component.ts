import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';
import {ProductoDescripcion} from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              public service: ProductosService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        this.id = param['id'];
        this.service.getProducto(param['id']).subscribe((resp: ProductoDescripcion) => {
          this.producto = resp;
        });

      });
  }

}
