const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, rejecting the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // return out of hte function her to make sure the Promise doesn't accidentally execute the resolve() function as well   
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Copied!'
            });
        });
    });
};
// Shorthand property names would be: module.exports = { writeFile, copyFile };
module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
};