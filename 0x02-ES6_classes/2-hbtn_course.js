export default class HolbertonCourse {
  constructor(name, length, students) {
    this.checkName(name);
    this.checkLength(length);
    this.checkStudents(students);
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this.checkName(val);
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    this.checkLength(val);
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    this.checkStudents(val);
    this._students = val;
  }

  // eslint-disable-next-line class-methods-use-this
  checkName(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkLength(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  checkStudents(val) {
    if (!Array.isArray(val)) {
      throw new TypeError('Students must be an array');
    }
  }
}
