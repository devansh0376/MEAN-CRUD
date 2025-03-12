import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import  User  from '../models/user'; 
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule,NgIf],  // Import ReactiveFormsModule here
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor() 
  {
    // Initialize the form group with form controls and validation
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      address: new FormControl('', [Validators.required])
    });
  }
  userService = inject(UserService)
  
  router=inject(Router)
  route=inject(ActivatedRoute)

  editUserId !: string
  ngOnInit()
  {
    this.editUserId = this.route.snapshot.params['id']
    if(this.editUserId)
    {
      this.userService.getUserID(this.editUserId).subscribe(res =>{
        this.userForm.patchValue(res)
      })
    }
  }

  addUser() 
  {
    if(this.userForm.invalid)
    {
      alert("Please provide all fields with valid data")
      return
    }
    console.log(this.userForm.value)

    const model : User=this.userForm.value  
    
    this.userService.addUser(model).subscribe(res=>{
      alert('User added successfully')
      this.router.navigateByUrl('/')
    })

  }
  updateUser()
  {
    if(this.userForm.invalid)
    {
      alert("Please provide all fields with valid data")
      return
    }

    const model : User =this.userForm.value  

    this.userService.updateUser(this.editUserId , model).subscribe(res=>{
      alert('User updated successfully')
      this.router.navigateByUrl('/')
    })
  }
  
}
