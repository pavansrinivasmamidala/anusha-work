const yarg = require('yargs').argv;
const fs = require('fs');
const readline = require('readline');



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


if (yarg._[0] == 'write') {
        askForUserInput('Enter the filename:');
    }
    else {
        console.log('No write operation');
    }

function writeToFile(fileName) {
        fs.appendFile('fileNameList.txt', fileName + "\n", err => {
            if (err) {
                console.log('Error occured');
                return;
            }
            fs.writeFile(fileName, 'You are Awesome', err => {
                if (err) {
                    console.log('Error occured');
                    return
                }
            });
        });
    }


       function askForUserInput(message) {
        rl.question(message, (fileName) => {
            if (ifFileExists(fileName)) {
                askForUserInput('File already exists, Enter a new filename:');
            } else {
                writeToFile(fileName);
                rl.close();
            }
        });
    }



 function ifFileExists(filepath) {
        try {
            fs.accessSync(filepath, fs.constants.F_OK);
            return true;
        } catch (e) {
            return false;
        }
    }
