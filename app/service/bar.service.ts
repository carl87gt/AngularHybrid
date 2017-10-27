import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {IBarService} from './bar.service.interface';

@Injectable()
export class BarService implements IBarService {

    getData(): string {
        return 'hello from bar service - angular v4.x service';
    };

}