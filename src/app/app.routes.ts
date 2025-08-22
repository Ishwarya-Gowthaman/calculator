import { Routes } from '@angular/router';
import { Calc } from './calc/calc';
import { Converter } from './converter/converter';

export const routes: Routes = [
    // {path: '', component: Calc},
    {path: 'calc', component: Calc},
    {path: 'convert', component:Converter},
    {path: '**', redirectTo: '' }
];
