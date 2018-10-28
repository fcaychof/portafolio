import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getResponseURL} from '@angular/http/src/http_utils';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('');
  }

  private cargarEquipo() {

    this.http.get('https://angular-html-39c74.firebaseio.com/equipo.json').subscribe((resp: any[]) => {
      console.log('testando resposta');
      console.log(resp);

      this.equipo = resp;
    });

  }

}
