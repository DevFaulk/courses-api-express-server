'use strict';

async function fetchCourse(id) {
  const response = await fetch(`http://localhost:8081/api/courses/${id}`);
  const data = await response.json();
  appendCourseData(data);
}

function appendCourseData(course) {
  let elements = document.querySelectorAll('div, span');
  let elementsWithId = Array.from(elements).filter((element) => {
    return element.hasAttribute('id');
  });
  console.log(course)
  for (const element of elementsWithId) {
    let elementSelected = document.getElementById(
      `#${element.getAttribute('id')}`
    );
    switch (element) {
      case element.hasAttribute('#mainHeader'):
        elementSelected.innerText
        break;

      default:
        break;
    }
  }
}

window.onload = function () {
  const urlParams = new URLSearchParams(location.search);
  let id = 0;
  if (urlParams.has('courseid') === true) {
    id = urlParams.get('courseid');
    fetchCourse(id);
  }
};
