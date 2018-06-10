const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const oldDirPath = "D:/IMAGES/Others'/Co";
    const newDirPath = "D:/IMAGES/Others'/Co - Copy"; // bigger directory

    fs.readdir(newDirPath, (err, files) => {
        if (err) {
            console.error("Could not list the dir.", err);
        }

        let newFilesSize = 0,
            newFiles = [];

        // Iterate the new folder's files and
        // check if present in the old folder also
        files.forEach( (file, index) => {
            const filePath1 = path.join(oldDirPath, file);
            const filePath2 = path.join(newDirPath, file);
            var currentFileSize = 0;
            
            fs.stat(filePath2, (err, stats) => {
                currentFileSize = stats.size;

                fs.stat(filePath1, (err, stats) => {
                    if (err) {
                        newFilesSize += currentFileSize;
                        newFiles.push(file);
                    }
                    if (index == files.length-1){
                        console.log(`There are ${newFiles.length} new files,` + 
                                    ` having ${newFilesSize/1048576} MB :`);
                        for (let i in newFiles)
                            console.log(newFiles[i]);
                    }
                });
            });
        });
    });
}).listen(8081);