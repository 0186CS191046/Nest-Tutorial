import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service.js';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }
    @Get()
    getAllStudents() {
        return this.studentService.getStudents();
    }

    @Get(':id')
    getAllStudentById(@Param('id') id: string) {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    addStudent(@Body() body: { name: string, age: number }) {
        return this.studentService.addStudent(body);
    }

    @Put(':id')
    updateStudent(@Param('id') id: string, @Body() body: { name: string, age: number }) {
        return this.studentService.updateStudent(Number(id), body);
    }

    @Patch(':id')
    partialUpdate(@Param('id') id: string, @Body() body: { name: string, age: number }) {
        return this.studentService.partialUpdate(Number(id), body);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(Number(id));
    }
}
