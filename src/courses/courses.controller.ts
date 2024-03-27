import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Course> {
    return this.coursesService.findOne(+id);
  }

  @Post()
  async create(@Body() courseData: Partial<Course>): Promise<Course> {
    return this.coursesService.create(courseData);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() courseData: Partial<Course>): Promise<Course> {
    return this.coursesService.update(+id, courseData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.coursesService.remove(+id);
  }
}