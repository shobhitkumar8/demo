import { Component, OnInit, NgZone } from '@angular/core';
import { BugService } from '../bug.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  constructor(private fb: FormBuilder, private ngZone: NgZone,
              private router: Router, private bugService: BugService) { }

  issueForm: FormGroup;
  issueArr: any = [];
  ngOnInit() {
    this.addIssue();
  }
  addIssue() {
    this.issueForm = this.fb.group({
      issue_name: [''],
      issue_message: ['']
    });
  }
  submitForm() {
    this.bugService.CreateBug(this.issueForm.value).subscribe((res) =>{
      console.log('Issue added!');
      this.ngZone.run(() => this.router.navigateByUrl('/issue-list'));
    });
  }

}
