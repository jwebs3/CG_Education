console.log("This file is linked!");

var teacher = "Sally Jones";
var department = "Physics";
var rating1 = 3.4;
var rating2 = 5.0;
var rating3 = 4.2;
var avgRating = (Rating1+Rating2+Rating3);

console.log(teacher);
console.log(department);
console.log(rating1, rating2, rating3);
console.log(Math.round(10*avgRating/3)/10);

var student = "Sally Jones";
var major = "Major";
var email = "sally@cg.edu";
var gpa = 6.0;
var avgGpa = gpa;
var studentCourse1 = "Calculus";
var studentCourse2 = "Econ";

console.log(student);
console.log(major);
console.log(Math.round(10*avgGpa)/10);
console.log(studentCourse1, studentCourse2);

var teacherCourse1 = "Astronomy";
var teacherCourse2 = "Physics";
var semester = "Fall 2017";

console.log(teacherCourse1, teacherCourse2);
console.log(teacher);
console.log(semester);

var teacherRating = [3.4, 5.0, 4.2];

function getRatingAverage(teacherRating) {
  var teacherRating = [3.4, 5.0, 4.2];
  var total = 0;
  for(var i = 0; i < teacherRating.length; i++) {
      total += grades[i];
  }
  var avg = total / grades.length;
  console.log(avg);
}

function addTeacherRating () {
  var teacherRating = [3.4, 5.0, 4.2];
  teacherRating.push(4.5);
  console.log(teacherRating);
}

var review = window.prompt("We would like for you to review. Please enter a rating between 0.0-5.0?");

if (review >= 0.0; review <= 5.0); //review between 0 and 5
//add value to array
//alert "Thanks for your review!"
//else prompt again
