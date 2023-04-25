import inquirer from 'inquirer';

import fs from "fs/promises";

inquirer
let { description, size,  } = await inquirer
    .prompt([
        {
            type: 'input',
            message: 'Write a description of your project:',
            name: 'description',
        },

        {
            type: 'list',
            message: 'What languages do you speak?',
            name: 'size',
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
            filter(val) {
                return val.toLowerCase();
            }
        },


    ])


let readmeText = `# Project Description
    ${description}
    
    ## The second largest heading
    
    ${generateLicense(size)}
    
    ###### The smallest heading
    
    `

fs.writeFile("README.md", readmeText)



function generateLicense(license) {
    console.log(license)

    if(license === "Jumbo"){
        
        return ""
        
    }



}






console.log(description, size);


