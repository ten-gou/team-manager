const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/team-manager-template');
const addmember = require('./src/team-member-template');

const { clear } = require('console');
const { off } = require('process');
var empInputType = '';

// Input Team Manager Information
const TMInput = () => {

    console.log(`
    ========================================================================================================

    Welcome to the Team Manager System!

    Follow these simple and short steps, and we'll build an HTML page complete with your team's information!

    Now, let's get started!
    
    ========================================================================================================
    `);

return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name? (Required) ",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Enter the Team Manager's Employee ID. (Required) ",
            validate: employeeIDInput => {
                if (employeeIDInput) {
                  return true;
                } else {
                  console.log('Please enter a valid Employee ID!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Team Manager's email address. (Required) ",
            validate: emailInput => {
                if (emailInput.indexOf("@") > -1) {
                    return true;
                }
                else {
                    console.log('Please enter a valid email address!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: "Enter the Team Manager's office number. (Required) ",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                }
                else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        } 
    ])
    .then(TMInputData => {
        console.log(TMInputData)
        return TMInputData
    })
}

// Choose between adding an engineer, an intern, or finishing
const employeeChoice = () => {
    console.log(`
    We have created the base! Now onto adding more people to this list!
    `);

return inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "Do you want to add an engineer or an intern?",
            choices: ["Add an engineer", "Add an intern"],
        }
    ])
    .then(employeeChoiceData => {
        console.log(employeeChoiceData)
        if (employeeChoiceData.employeeType == 'Add an engineer') {
            empInputType = 'engineer';
            employeeInput(empInputType);
            
        }
        else {
            empInputType = 'intern';
            employeeInput();
            
        }
    })
}

// Input Team Member information
const employeeInput = () => {

return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the ${empInputType}'s name? (Required) `,
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: `Enter the ${empInputType}'s Employee ID. (Required) `,
            validate: employeeIDInput => {
                if (employeeIDInput) {
                  return true;
                } else {
                  console.log('Please enter a valid Employee ID!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter the ${empInputType}'s email address. (Required) `,
            validate: emailInput => {
                if (emailInput.indexOf("@") > -1) {
                    return true;
                }
                else {
                    console.log('Please enter a valid email address!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officenumber',
            message: `Enter the ${empInputType}'s office number. (Required) `,
            validate: officeInput => {
                if (officeInput) {
                    return true;
                }
                else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        } 
    ])
    .then(memberInputData => {
        if (!memberInputData.employeeType) {
            memberInputData.employeeType = [];
        }
        
        memberInputData.employeeType.push(empInputType);

        const teamMemberAdd = addmember(memberInputData);

        fs.appendFile('./team-profile.html', teamMemberAdd, err => {
            if (err) throw new Error(err);
         });


        addMore();
        return memberInputData;
    })
}

const addMore = () => {
return inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeMore',
            message: "Do you want to add another team member?",
            choices: ["Yes", "No"],
        }
    ])
    .then(addMoreData => {
        if (addMoreData.employeeMore == 'Yes') {
            employeeChoice();
        }
        else {
            console.log(
                `Done! Enjoy the fruits of your labor!`
            )
        }
    }
    )
}


TMInput()
    .then(TMInputData => {
        const pageHTML = generateHTML(TMInputData);

        fs.writeFile('./team-profile.html', pageHTML, err => {
            if (err) throw new Error(err);
         });
    })
    .then(employeeChoice)

    

    