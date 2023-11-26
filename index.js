const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('./lib/validateColor');
const { Circle, Square, Triangle } = require('./lib/shapes')


inquirer
  .prompt([
    {
      type: 'input',
      name: 'textChar',
      message: 'Please enter the text you would like in your logo (up to 3 characters):',
      validate: function (input) {
        if (input.length <= 3) {
          return true;
        } else {
          return 'Please enter up to 3 characters.';
        }
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter the text color for your logo (CSS color name or hex code):',
      validate: validateColor,
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'Please select the logo shape:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Please enter the shape color for your logo (CSS color name or hex code):',
      validate: validateColor,
    },
  ])
  .then((answers) => {
    // Determine the selected shape and create the corresponding object
    let shape;
    if (answers.logoShape === 'circle') {
        shape = new Circle(answers.color, answers.textChar, answers.textColor);
    } else if (answers.logoShape === 'square') {
        shape = new Square(answers.color, answers.textChar, answers.textColor);
    } else if (answers.logoShape === 'triangle') {
        shape = new Triangle(answers.color, answers.textChar, answers.textColor);
    } else {
        console.log('Invalid shape selected.');
        return;
    }

    // Generate the SVG markup for the selected shape
    const svgMarkup = shape.render();

    const savedAs = `./examples/${answers.logoShape}-logo.svg`;

    // Save the SVG markup to a file with the formatted logo name in the Assets folder
    fs.writeFileSync(savedAs, svgMarkup, 'utf-8');

    console.log(`Logo created and saved as "${savedAs}".`);
});







