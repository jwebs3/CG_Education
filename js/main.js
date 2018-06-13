console.log("This file is linked!");

var teacher = "Sally Jones";
var department = "Physics";
var rating1 = 3.4;
var rating2 = 5.0;
var rating3 = 4.2;
var avgRating = (rating1+rating2+rating3);

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
  return avg;
}

function addTeacherRating (teacherRating) {
  teacherRating.push(4.5);
  return teacherRating;
}
console.log(teacherRating);

//var review = window.prompt("We would like for you to review. Please enter a rating between 0.0-5.0?");

//if (review >= 0.0, review <= 5.0) {
//  teacherRating.push(review);
// alert("Thanks for your review!" + teacher + "average rating is now" + avg ".");
//} else {
//  window.prompt("We would like for you to review. Please enter a rating between 0.0-5.0?");
//}

var courses = [["Astronomy", "Physics"], ["Calculus", "Physics"], ["Statistics", "Physics"], ["Writing", "English"]];
var department = "Physics";

var departmentFilter = function filterByDepartment(courses, department) {
  if (department == courses [0][0]) {
    return courses;
  } else if (department == courses [0][1]) {
    return courses;
  } else if (department == courses [0][2]) {
    return courses;
  } else if (department == courses [0][3]) {
    return courses;
  } else {
    return undefined;
  }
var newCourses = courses.filter(departmentFilter);
console.log(newCourses);

//function departmentFilter()

//  var coursesType = courses.filter(
//    (callback(courses[0][1] == department, courses[1][1] == department, courses[2][1] == department, courses[3][1] == department);
//  return coursesType;
//}
//console.log(departmentFilter(courses));

var allDepartments = ["Physics", "History", "English", "Math", "Science"];
var physicsClasses = ["Astronomy", "Calculus", "Statistics"];
var historyClasses = ["WWII", "WWI", "Sparta"];
var englishClasses = ["Writing", "Linguistics", "Teaching"];
var mathClasses = ["Algebra", "Geometry", "Calculus"];
var scienceClasses = ["Biology", "Chemistry", "Organic Chemistry"];

var departmentChoice = window.prompt("What department are you looking for a course in?");

function classReturn(departmentChoice) {
if (departmentChoice == allDepartments[0]) {
  alert(physicsClasses);
} else if (departmentChoice == allDepartments[1]) {
  alert(historyClasses);
} else if (departmentChoice == allDepartments[2]) {
  alert(englishClasses);
} else if (departmentChoice == allDepartments[3]) {
  alert(mathClasses)
} else if (departmentChoice == allDepartments[4]) {
  alert(scienceClasses);
} else
  window.prompt("What department are you looking for a course in?");
}



//console.log(classReturn(departmentChoice));
