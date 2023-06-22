import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'add-issue' },
  { path: 'add-issue', component: AddIssueComponent },
  { path: 'edit-issue', component: EditIssueComponent },
  { path: 'issue-list', component: IssueListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
