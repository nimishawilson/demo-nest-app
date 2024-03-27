import { Enrollment } from 'src/enrollments/enrollment.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  registrationNo: string; // Assuming registration number is unique alphanumeric 6-digit string

  @ManyToMany(() => Enrollment)
  @JoinTable()
  enrollments: Enrollment[];
}
