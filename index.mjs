import inquirer from 'inquirer';

import fs from "fs/promises";

inquirer
let { description, description2, license, questions, questions2  } = await inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?:',
            name: 'description',
        },

        {
            type: 'input',
            message: 'Write a description of your project:',
            name: 'description2',
        },

        {
            type: 'list',
            message: 'Select your license:',
            name: 'license',
            choices: ['License1', 'License2', 'License3'],
            filter(val) {
                return val.toLowerCase();
            }
        },

        {
            type: 'input',
            message: 'What is your GitHub username?:',
            name: 'questions',
        },

        {
            type: 'input',
            message: 'What is your email?:',
            name: 'questions2',
        },


    ])


let readmeText = `# Project Description
    ${description}
    ${description2}
    ## The second largest heading
    
    ${license}
    
    ###### The smallest heading
    ${questions}
    ${questions2}
    `

fs.writeFile("README.md", readmeText)



function generateLicense(license) {
    console.log(license);

    if(license === "License1"){
        
        return "License1"
        
    }

    if(license === "License2"){
        
        return "License2"
        
    }

    if(license === "License3"){
        
        return "License3"
        
    }

    

}






console.log(description, description2, license, questions, questions2);


