import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
//import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule, Routes} from '@angular/router';

import {BarComponent} from './bar.component';
import {HybridHelper} from '../hybrid-helper';
import {BarService} from '../service/bar.service';
import {BarWidgetComponent} from './bar-widget.component';

const appRoutes: Routes = [
    {path: 'bar', component: BarComponent}
];

const fooServiceProvider = HybridHelper.buildProviderForUpgrade('FooService');

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        //UpgradeModule,
        RouterModule.forChild(appRoutes)
    ],
    providers: [
        fooServiceProvider,
        BarService
    ],
    declarations: [
        BarComponent,
        BarWidgetComponent
    ],
    bootstrap: []
})
export class BarModule {
}