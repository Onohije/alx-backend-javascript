export default function getListStudents() {
  function makeStudent(id, firstName, location) {
    return {
      id,
      firstName,
      location,
    };
  }

  const students = [
    [1, 'Guillaume', 'San Francisco'],
    [2, 'James', 'Columbia'],
    [5, 'Serena', 'San Francisco'],
  ];

  return students.map((student) => makeStudent(...student));
}
