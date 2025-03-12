import { Component, inject } from '@angular/core';
import User from '../models/user';
import { UserService } from '../services/user.service';

// Import Angular Material Modules if needed
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true, // ✅ Add this if using standalone component
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule,RouterLink], // ✅ Add required modules
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // ✅ Corrected 'styleUrl' to 'styleUrls'
})
export class UsersComponent {
  userService = inject(UserService);
  userList: User[] = [];

  ngOnInit(): void {
    this.getAlluser()
  }

  getAlluser() {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.userList = res;
    });
  }
  deleteUser(id:string)
  {
    const ok=confirm("Are you sure want to delete user ?")
    if(ok)
    {
      this.userService.deleteUser(id).subscribe((res=>{
        alert('User Deleted successfully') //we deleted from server but in userlist array we have to remove
        this.userList = this.userList.filter((u) => u._id !=id)
      }))
    }
  }
}
