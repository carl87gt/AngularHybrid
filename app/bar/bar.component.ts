import {Component, OnInit, Inject} from '@angular/core';
import {BarService} from '../service/bar.service';

@Component({
    selector: 'bar-component',
    templateUrl: '../template/bar.component.html'
})

export class BarComponent implements OnInit {
    fooData: string;
    barData: string;
    title = 'bar component - angular v4 component';

    constructor(@Inject('FooService') private fooService: any,
                private barService: BarService) {
    }

    ngOnInit(): void {
        this.fooData = this.fooService.getData();
        this.barData = this.barService.getData();
    }

}

