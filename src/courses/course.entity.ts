import { Enrollment } from 'src/enrollments/enrollment.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Enrollment)
  @JoinTable()
  enrollments: Enrollment[];
}