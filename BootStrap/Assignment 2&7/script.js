document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const confirmed = confirm("Do you really want to submit this form?");
  if (!confirmed) {
    return;
  }

  document.getElementById('outName').textContent = document.getElementById('name').value;
  document.getElementById('outEmail').textContent = document.getElementById('email').value;
  document.getElementById('outPassword').textContent = document.getElementById('password').value;
  document.getElementById('outDOB').textContent = document.getElementById('dob').value;

  const gender = document.querySelector('input[name="gender"]:checked').value;
  document.getElementById('outGender').textContent = gender;

  const selectedCourses = [];
  const checkboxes = document.querySelectorAll('input[name="course"]:checked');
  checkboxes.forEach(checkbox => {
    selectedCourses.push(checkbox.value);
  });
  document.getElementById('outCourses').textContent = selectedCourses.join(', ');

  document.getElementById('output').style.display = 'block';
});