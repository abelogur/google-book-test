import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShelfService} from './services/shelf.service';
import {ShelvesGroupComponent} from './components/shelves-group/shelves-group.component';
import {AsyncLimitModule} from '../../pipes/async-limit-pipe';
import {ShelvesPageComponent} from './components/shelves-page/shelves-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShelfPreviewComponent} from './components/shelf-preview/shelf-preview.component';
import {ShelfViewComponent} from './components/shelf-view/shelf-view.component';
import {RouterModule} from "@angular/router";
import {BookModule} from "../book/book.module";
import {ShelfMinimalComponent} from "./components/shelf-minimal/shelf-minimal.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    AsyncLimitModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BookModule,
    SharedModule
  ],
  declarations: [
    ShelvesGroupComponent,
    ShelfMinimalComponent,
    ShelvesPageComponent,
    ShelfPreviewComponent,
    ShelfViewComponent
  ],
  providers: [
    ShelfService
  ],
  exports: [
    ShelvesGroupComponent
  ]
})
export class ShelfModule {
}
