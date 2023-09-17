import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainDirComponent } from './pages/main-dir/main-dir/main-dir.component';
import { FolderPageComponent } from './pages/folder-page/folder-page/folder-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-dir', pathMatch: 'full' },
  { path: 'main-dir', component: MainDirComponent },
  { path: 'folder/:id', component: FolderPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
