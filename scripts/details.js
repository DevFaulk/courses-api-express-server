'use strict';
const urlParams = new URLSearchParams(location.search);

async function fetchCourse(id) {
  const response = await fetch(`http://localhost:8081/courses/${id}`);
  const data = await response.json();
  appendCourseData(data);
}

function appendCourseData(course) {
  let pageContent = document.querySelectorAll('div, span');
  console.log(pageContent);
}

window.onload = function () {
  let id;
  if (urlParams.has('courseid') === true) {
    id = urlParams.get('courseid');
    fetchCourse(id);
  }
};
