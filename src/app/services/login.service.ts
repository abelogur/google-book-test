import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

}