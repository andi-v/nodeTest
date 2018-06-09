const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    const dirPath1 = 'D:/IMAGES/smth';
    const dirPath2 = 'D:/IMAGES/smth2'; // bigger directory

    fs.readdir(dirPath2, (err, files) => {
        if (err) {
            console.error("Could not list the dir.", err);
        }

        let newFilesSize = 0;

        // Iterate 2nd folder's files and
        // check if present in 1st folder also
        files.forEach( (file, index) => {
            const filePath1 = path.join(dirPath1, file);
            const filePath2 = path.join(dirPath2, file);
            var currentFileSize = 0;
            
            fs.stat(filePath2, (err, stats) => {
                currentFileSize = stats.size;
                console.log(currentFileSize + " bytes");
            });
            console.log(currentFileSize);
            
            fs.stat(filePath1, (err, stats) => {
                if (err) {
                    //console.log(filePath2);
                    newFilesSize += currentFileSize;
                }
            });
        });

        console.log(`New files have ${newFilesSize} bytes`);
    });
}).listen(8081);