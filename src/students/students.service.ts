import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    return this.studentsRepository.findOneBy({id});
  }

  async create(studentData: Partial<Student>): Promise<Student> {
    const student = this.studentsRepository.create(studentData);
    return this.studentsRepository.save(student);
  }

  async update(id: number, studentData: Partial<Student>): Promise<Student> {
    await this.studentsRepository.update(id, studentData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }
}
