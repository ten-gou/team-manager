module.exports = (TMInputData) => {
    const {
        name,
        employeeID,
        email,
        officenumber
    } = TMInputData
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Meet the Team!</title>
    </head>
    <body>
        <header class="bg-blue-400 p-12 mb-20 w-auto">
            <div class="text-4xl text-center" style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;">Meet the Team!</div>
        </header>
    
        <main class="flex flex-row justify-center justify-evenly flex-wrap overflow-x-auto overflow-visible">

        <!--template box--> 
        <article class="w-64 flex-col bg-sky-200 rounded-lg p-2 m-4">
            <section class="information">
                <div class="text-lg font-bold">${name} <span class="text-sm">team manager</span></div>
                <div class="italic">EMPLOYEE ID: ${employeeID}</div>
                <div class="italic">EMAIL: <a href="mailto:${email}">${email}</a></div>
                <div class="italic">OFFICE NUMBER: ${officenumber}</div>
            </section>
            <br />
            <section class="biography">
                <div class="indent-8">Insert a short biography here!</div>
            </section>
        </article>
    `;
};