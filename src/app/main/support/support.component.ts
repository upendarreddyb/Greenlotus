import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder,private api:ApiService) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      msg: ['', ],
      email: ['', [Validators.required, Validators.email]],

    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.api.contactus(this.myForm.value).subscribe((data:any)=>{
        console.log(data);
      })
    }
  }
}
