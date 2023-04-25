export default function getListStudents() {
  const makeStudent = (id, firstName, location) => ({
    id,
    firstName,
    location,
  });

  return [
    makeStudent(1, 'Guillaume', 'San Francisco'),
    makeStudent(2, 'James', 'Columbia'),
    makeStudent(5, 'Serena', 'San Francisco'),
  ];
}
