import { Component, OnInit, NgZone } from '@angular/core';
import { BugService } from '../bug.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {

  IssueList: any = [];
  updateIssueForm: FormGroup;

  constructor(private actRoute: ActivatedRoute, private bugService: BugService,
              private fb: FormBuilder, private router: Router, private ngZone: NgZone) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.bugService.GetIssue(id).subscribe((data) => {
                  this.updateIssueForm = this.fb.group({
                    issue_name:[data.issue_name],
                    issue_message: [data.issue_message]
                  })
                })
               }
  ngOnInit() {
    this.updateForm();
  }

  updateForm(){
    this,this.updateIssueForm = this.fb.group({
      issue_name: [''],
      issue_message: ['']
    })
  }
  submitForm(){
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.bugService.UpdateBug(id, this.updateIssueForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('issues-list'))
    })
  }
}
