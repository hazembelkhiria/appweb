import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAlertsComponent } from './list-alerts.component';

const routes: Routes = [
    { path: '', component: ListAlertsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListAlertsRoutingModule { }