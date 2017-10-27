import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'bar-widget',
    templateUrl: '../template/bar.widget.component.html'
})
export class BarWidgetComponent implements OnInit {
    message: String;

    constructor() {

    }

    ngOnInit(): void {
        this.message = "Hello from Bar Widget Class - Angular 4.x";
    }

}