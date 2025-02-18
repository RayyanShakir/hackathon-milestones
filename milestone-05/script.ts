// get refernces of form and display area

const form = document.getElementById('resume-container') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement
const shareableLinkCont = document.getElementById('shareable-link-cont') as HTMLDivElement
const shareableLink = document.getElementById('shareable-link') as HTMLAnchorElement
const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement

// handle form submission

form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    //save form data in local storage including username as key

    const resumeData = {
        name,
        email,
        contact,
        address,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));


// genertaing resume content dynamically

const resumeHTML =
`<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable "true">${name}</span></p>
<p><b>Email:</b><span contenteditable "true">${email}</span></p>
<p><b>Contact No:</b><span contenteditable "true">${contact}</span></p>
<p><b>Address:</b><span contenteditable "true">${address}</span></p>

<h3>Education</h3>
<p contenteditable "true">${education}</p>

<h3>Experience</h3>
<p contenteditable "true">${experience}</p>

<h3>Skills</h3>
<p contenteditable "true">${skills}</p>
`;
//Display the genertaed resume
resumeDisplay.innerHTML = resumeHTML;
 
//Generateing a shareable URL with Username only

const shareableURL = 
`${window.location.origin}?username=${encodeURIComponent(username)}`;

//Display the shareable link
shareableLinkCont.style.display = 'block';
shareableLink.href = shareableURL;
shareableLink.textContent = shareableURL;
});

//hanling PDF Downloading
downloadBtn.addEventListener('click' , () => {
    window.print();
});

//prefill the form based on username in the url
window.addEventListener('DOMContentLoaded' , ()=> {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        //autofill form if data is found in the Localstorage
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('contact') as HTMLInputElement).value = resumeData.Contact;
            (document.getElementById('address') as HTMLInputElement).value = resumeData.address;
            (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;

            if (savedResumeData) {
                console.log("Resume Data Found:", savedResumeData);
            } else {
                console.error("No data found for username:", username);
            }
        }
    }
});


