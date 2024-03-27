import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './enrollment.entity';
import { Student } from '../students/student.entity';
import { Course } from '../courses/course.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentsRepository: Repository<Enrollment>,
  ) {}

  async create(student: Student, coursesData: { course: Course, levelId: number }[]): Promise<void> {
    const enrollments = coursesData.map(({ course, levelId }) => {
      const enrollment = new Enrollment();
      enrollment.student = student;
      enrollment.course = course;
      enrollment.levelId = levelId;
      return enrollment;
    });
    await this.enrollmentsRepository.save(enrollments);
  }
}
