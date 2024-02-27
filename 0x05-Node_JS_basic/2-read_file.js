#!/usr/bin/env node
// 2. Reading a file synchronously with Node JS
const { readFileSync } = require('fs');

const delimeter = '\n';

function countStudents(dbPath) {
  try {
    let students = readFileSync(dbPath, 'utf-8');
    students = students.split(delimeter);
    students = students.slice(1, students.length - 1);
    const courses = new Map();

    // Parse CSV data creating a map of courseData objects.
    students.forEach((student) => {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[3];
      if (courses.has(field)) {
        courses.get(field).students.push(firstName);
        courses.get(field).count += 1;
      } else {
        courses.set(field, { students: [firstName], count: 1 });
      }
    });

    // Display information from map
    console.log(`Number of students: ${students.length}`);
    courses.forEach((courseData, course) => {
      console.log(
        `Number of students in ${course}: ${
          courseData.count
        }. List: ${courseData.students.join(', ')}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
