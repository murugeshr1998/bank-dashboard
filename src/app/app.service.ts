import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpService: HttpClient) { }

  getData() {
    return this.httpService.get('https://1.api.fy23ey06.careers.ifelsecloud.com/');
  }
}
