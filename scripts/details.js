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
  console.log(course);
  for (const element of elementsWithId) {
    let elementSelected = document.getElementById(
      `${element.getAttribute('id')}`
    );
    switch (element.getAttribute('id')) {
      case 'mainHeader':
        elementSelected.innerText = `${course.dept} ${course.courseNum}`;
        break;
      case 'courseName':
        elementSelected.innerText = `${course.courseName}`;
        break;
      case 'courseDept':
        elementSelected.innerText = `${course.dept}`;
        break;
      case 'courseCode':
        elementSelected.innerText = `${course.courseNum}`;
        break;
      case 'courseInstructor':
        elementSelected.innerText = `${course.courseInstructor}`;
        break;
      case 'courseDescription':
        elementSelected.innerText = `${course.dept} ${course.courseNum} is Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae egestas sem. Fusce neque nunc, porta non finibus eu, venenatis et lorem. Phasellus sed pellentesque lacus. Nullam consequat, mauris eget rutrum euismod, ex nunc vestibulum orci, a vestibulum nisi est vel ipsum. Duis ex erat, dapibus non porttitor quis, efficitur a ligula. Sed pulvinar dignissim neque at lobortis. Praesent quam tortor, convallis vel libero quis, egestas pulvinar lacus. Aliquam nisl turpis, interdum non felis luctus, consectetur molestie arcu. Aenean vehicula id nisl in sollicitudin. Vivamus tincidunt tincidunt ipsum vitae pellentesque. Etiam vitae elementum mi. Aenean vehicula cursus viverra. Nunc iaculis. `;
        break;
      case 'courseStart':
        elementSelected.innerText = course.startDate;
        break;
      case 'courseEnd':
        elementSelected.innerText = `${DateTime.fromFormat(
          `${course.startDate} 2023`,
          'DD'
        )
          .plus({ days: course.numDays })
          .toLocaleString(DateTime.DATE_FULL)}`;
        break;
      case 'courseLength':
        elementSelected.innerText = `${course.numDays} days`;
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
