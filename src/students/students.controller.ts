import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne(+id);
  }

  @Post()
  async create(@Body() studentData: Partial<Student>) {
    console.log('Received student data:', studentData);
    return this.studentsService.create(studentData);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentsService.update(+id, studentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.studentsService.remove(+id);
  }
}
