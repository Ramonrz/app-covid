import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
        MatCardModule,
        MatIconModule,
        MatChipsModule,
        MatInputModule,
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        MatFormFieldModule,
    ]
})
export class AppMaterialModule { }
