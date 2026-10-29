import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "Kajal", age: 24 },
        { id: 2, name: "Kumari", age: 23 },
        { id: 3, name: "Tiwari", age: 25 }
    ]
    getStudents() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find((st) => st.id === id);
        if (!student) throw new NotFoundException("Student Not Found!")
        return student;
    }

    addStudent(data: { name: string, age: number }) {
        const newStudent = { id: Date.now(), ...data };
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(id: number, data: { name: string, age: number }) {
        const index = this.students.findIndex((s) => s.id === id);
        
        if (index == -1) throw new NotFoundException("Student Not Found!")
        this.students[index] = { id, ...data };
        return this.students[index];
    }

    partialUpdate(id:number, data : Partial<{name:string, age:number}>) {
        const student = this.getStudentById(id);
        if (!student) throw new NotFoundException("Student Not Found!");
        Object.assign(student, data);
        return student;
    }

    deleteStudent(id:number) {
        const index = this.students.findIndex(st=> st.id === id);
        if (index === -1) throw new NotFoundException("Student Not Found!");   
        const deleted = this.students.splice(index, 1);
        return {message : "Student deleted successfully!", student : deleted[0]};
    }
}
