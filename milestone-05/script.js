// get refernces of form and display area
var form = document.getElementById('resume-container');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkCont = document.getElementById('shareable-link-cont');
var shareableLink = document.getElementById('shareable-link');
var downloadBtn = document.getElementById('download-btn');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //save form data in local storage including username as key
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        address: address,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // genertaing resume content dynamically
    var resumeHTML = "<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable \"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable \"true\">").concat(email, "</span></p>\n<p><b>Contact No:</b><span contenteditable \"true\">").concat(contact, "</span></p>\n<p><b>Address:</b><span contenteditable \"true\">").concat(address, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable \"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable \"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable \"true\">").concat(skills, "</p>\n");
    //Display the genertaed resume
    resumeDisplay.innerHTML = resumeHTML;
    //Generateing a shareable URL with Username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //Display the shareable link
    shareableLinkCont.style.display = 'block';
    shareableLink.href = shareableURL;
    shareableLink.textContent = shareableURL;
});
//hanling PDF Downloading
downloadBtn.addEventListener('click', function () {
    window.print();
});
//prefill the form based on username in the url
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //autofill form if data is found in the Localstorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('contact').value = resumeData.Contact;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
            if (savedResumeData) {
                console.log("Resume Data Found:", savedResumeData);
            }
            else {
                console.error("No data found for username:", username);
            }
        }
    }
});
