// get refernces of form and display area
var form = document.getElementById('resume-container');
var resumeDisplay = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // genertaing resume content dynamically
    var resumeHTML = "<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable \"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable \"true\">").concat(email, "</span></p>\n<p><b>Contact No:</b><span contenteditable \"true\">").concat(contact, "</span></p>\n<p><b>Address:</b><span contenteditable \"true\">").concat(address, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable \"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable \"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable \"true\">").concat(skills, "</p>\n");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
});
