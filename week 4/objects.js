const aCourse = {
  code: "CSE121b",
  name: "JavaScript Language",
  section: [
    {
      sectionNum: 1,
      roomNum: "STC 347",
      enrolled: 26,
      days: "TTH",
      instructor: "Sis A",
    },

    {
      sectionNum: 2,
      roomNum: "STC 353",
      enrolled: 25,
      days: "TTH",
      instructor: "Bro T",
    },

  ],


  enrolledStudent: function(sectionNum) {
    const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections)
    }
  },

  dropStudent: function(sectionNum) {
    const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },
};



function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseNum = document.querySelector("#courseNum")
  courseName.textContent = course.name;
  courseNum.textContent = course.code;
}

function  renderSections(sections) {
  const html = sections.map((section) => `<tr>
  <td>${section.sectionNum}</td>
  <td>${section.roomNum}</td>
  <td>${section.enrolled}</td>
  <td>${section.days}</td>
  <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join(",");
}

document.querySelector("#enrollStudent").addEventListener("click", function() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrolledStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
})

setCourseInfo(aCourse);
renderSections(aCourse.sections);