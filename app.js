const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');
const { off } = require('process');


const TMInput = () => {
return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager' name? (Required) ",
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
}

TMInput()
    //.then(console.log(userInput))
    

    