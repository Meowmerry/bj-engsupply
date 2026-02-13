
import fs from 'fs';
import pdf from 'pdf-parse';

const dataBuffer = fs.readFileSync('../COMPANY PROFILE B_J.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.error(error);
});
