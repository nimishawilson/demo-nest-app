import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './students/students.controller';
import { Student } from './students/student.entity';
import { StudentsService } from './students/students.service';
import { CoursesController } from './courses/courses.controller';
import { Course } from './courses/course.entity';
import { CoursesService } from './courses/courses.service';
import { EnrollmentController } from './enrollments/enrollment.controller';
import { Enrollment } from './enrollments/enrollment.entity';
import { EnrollmentsService } from './enrollments/enrollment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, Course, Enrollment]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [
        Student,
        Course,
        Enrollment
      ],
      synchronize: true
    })
  ],
  controllers: [StudentsController, CoursesController, EnrollmentController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class AppModule {}
