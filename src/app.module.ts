import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsController } from './students/students.controller';
import { Student } from './students/student.entity';
import { StudentsService } from './students/students.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [
        Student
      ],
      synchronize: true
    })
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class AppModule {}
