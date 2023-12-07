import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  
  model: AddCategoryRequest;

  constructor(private categoryService:CategoryService) {
    this.model = {
      name: '',
      urlHandle:''
    }
  }

  onFormSubmit() {
    console.log(this.model)
  }

}
