// get refernces of form and display area

let form = document.getElementById('resume-container') as HTMLFormElement;
let resumeDisplay = document.getElementById('resume-display') as HTMLDivElement

// handle form submission

form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

    let name = (document.getElementById('name') as HTMLInputElement).value
    let email = (document.getElementById('email') as HTMLInputElement).value
    let contact = (document.getElementById('contact') as HTMLInputElement).value
    let address = (document.getElementById('address') as HTMLInputElement).value
    let education = (document.getElementById('education') as HTMLInputElement).value
    let experience = (document.getElementById('experience') as HTMLInputElement).value
    let skills = (document.getElementById('skills') as HTMLInputElement).value

// genertaing resume content dynamically

const resumeHTML =
`<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Contact No:</b>${contact}</p>
<p><b>Address:</b>${address}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

if (resumeDisplay){
    resumeDisplay.innerHTML = resumeHTML
}});
