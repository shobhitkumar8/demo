import { Component, OnInit } from '@angular/core';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  IssuesList: any = [];
  constructor(public bugService: BugService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  // Issues List
  loadEmployees() {
    return this.bugService.GetIssues().subscribe((data: {}) => {
      this.IssuesList = data;
    })
  }
  // Delete issue
  deleteIssue(data){
    var index = index = this.IssuesList.map(x => {return x.issue_name}).indexOf(data.issue_name);
    return this.bugService.DeleteBug(data.id).subscribe(res =>{
      this.IssuesList.splice(index, 1)
      console.log('Issue deleted!')
    })
  }
}
