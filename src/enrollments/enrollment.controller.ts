import { Controller, Post, Body, Param } from '@nestjs/common';
import { Course } from '../courses/course.entity';
import { StudentsService } from 'src/students/students.service';
import { EnrollmentsService } from './enrollment.service';
import { Student } from 'src/students/student.entity';

@Controller('enrollment')
export class EnrollmentController {
  constructor(
    private readonly studentsService: StudentsService,
    private readonly enrollmentsService: EnrollmentsService,
  ) {}

  @Post(':id/courses')
  async addCoursesToStudent(
    @Param('id') id: string, //student's id
    @Body() coursesData: { course: Course, levelId: number }[]
  ): Promise<Student> {
    console.log(coursesData)
    const student = await this.studentsService.findOne(+id);
    await this.enrollmentsService.create(student, coursesData);
    return student;
  }
}
