

## Description

A Student can enroll in many Courses (through the Enrollment entity).
A Course can have many enrolled Students (through the Enrollment entity).
The Enrollment entity acts as a bridge between Student and Course, capturing additional information about the enrollment (e.g., levelId).
The @ManyToMany decorator on both Student and Course entities signifies this relationship.
The @JoinTable decorator (used on both sides) specifies the name of the junction table (enrollment in this case, likely created automatically by TypeORM) that stores the foreign key relationships.
