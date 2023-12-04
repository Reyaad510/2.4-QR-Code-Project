import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


inquirer
  .prompt([{
    // Tells user to type on the URL of their choice
    message: "Type in your URL:",
    name: "URL"
   
     }])
  .then((answers) => {
    // storing the answer
    const url = answers.URL;

    // turns url into qr code
    var qr_svg = qr.image(url);

    // in terminal node index.js when done creates png file and takes to url that was typed!
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




