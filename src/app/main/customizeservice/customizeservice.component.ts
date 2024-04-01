import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-customizeservice',
  templateUrl: './customizeservice.component.html',
  styleUrls: ['./customizeservice.component.css']
})
export class CustomizeserviceComponent implements OnInit {
  myForm!: FormGroup;
  selectedFile: File | null = null;
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      companyname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      products: ['', Validators.required],
      quantity: ['', Validators.required],
      file: ['']

    });
  }

  onSubmit() {
    const formData = new FormData();

    formData.append('name', this.myForm.get('name')?.value);
    formData.append('companyname', this.myForm.get('companyname')?.value);
    formData.append('email', this.myForm.get('email')?.value);
    formData.append('phone', this.myForm.get('phone')?.value);
    formData.append('products', this.myForm.get('products')?.value);
    formData.append('quantity', this.myForm.get('quantity')?.value);
    formData.append('file', this.myForm.get('file')?.value);

    console.log(formData);

     this.api.uploadLogo(formData).subscribe(data => {
       console.log(data)
     })
  }
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files[0])
      this.myForm.patchValue({

        file: event.target.files[0]
      });
    }
  }




}
