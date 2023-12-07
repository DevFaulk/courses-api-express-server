'use strict';
const courseTableBody = document.getElementById('courseTableBody');

async function fetchCourses() {
  const responses = await fetch('http://localhost:8081/api/courses');
  const data = await responses.json();
  createTableData(data);
}

function createTableData(courses) {
  for (const course of courses) {
    let tr = courseTableBody.insertRow();
    let tc1 = tr.insertCell();
    tc1.innerText = course.dept;
    let tc2 = tr.insertCell();
    tc2.innerText = course.courseNum;
    let tc3 = tr.insertCell();
    tc3.innerText = course.courseName;
  }
}

window.onload = fetchCourses;
