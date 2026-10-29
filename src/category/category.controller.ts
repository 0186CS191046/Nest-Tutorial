import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service.js';

@Controller('category')
export class CategoryController {
    constructor (private readonly catgoryService:CategoryService){}
    @Get() 
    getCategories () {
        return this.catgoryService.getCategories();
    }
}
