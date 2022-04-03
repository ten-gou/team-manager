module.exports = (memberInputData) => {
    console.log(memberInputData)
    const {
        name,
        employeeID,
        email,
        employeeType,
        githubschool: [{
            githubOrSchool,
        }],
        employeeGitSchool
    } = memberInputData
if (employeeType == 'engineer') {
    return `
    <!--template box--> 
    <article class="w-64 flex-col bg-sky-200 rounded-lg p-2 m-4">
        <section class="information">
            <div class="text-lg font-bold">${name} <span class="text-sm">${employeeType}</span></div>
            <div class="italic">EMPLOYEE ID: ${employeeID}</div>
            <div class="italic">EMAIL: <a href="mailto:${email}">${email}</a></div>
            <div class="italic">${employeeGitSchool}: <a href="https://www.github.com/${githubOrSchool}">${githubOrSchool}</div>
        </section>
        <br />
        <section class="biography">
            <div class="indent-8">Insert a short biography here!</div>
        </section>
    </article>
    `;
}
else {
    return `
    <!--template box--> 
    <article class="w-64 flex-col bg-sky-200 rounded-lg p-2 m-4">
        <section class="information">
            <div class="text-lg font-bold">${name} <span class="text-sm">${employeeType}</span></div>
            <div class="italic">EMPLOYEE ID: ${employeeID}</div>
            <div class="italic">EMAIL: <a href="mailto:${email}">${email}</a></div>
            <div class="italic">${employeeGitSchool}: ${githubOrSchool}</div>
        </section>
        <br />
        <section class="biography">
            <div class="indent-8">Insert a short biography here!</div>
        </section>
    </article>
    `;

}
};