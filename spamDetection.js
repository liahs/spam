const natural = require('natural');
const Fs = require('fs');
const CsvReadableStream = require('csv-reader');
const path = require('path');
var classifier = new natural.BayesClassifier();
let inputStream = Fs.createReadStream(path.join(__dirname,'spam.csv'), 'utf8');
inputStream
    .pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        if(typeof(row[1])=="string"&&typeof(row[0])=="string"&&"hamspam".includes(row[0])){
            classifier.addDocument(row[1], row[0]);
        }else{
            console.log("Not used data",row)
        }
    })
    .on('end', function () {
        classifier.train()
    })

const spamDetection = (text) => {
    const classification = classifier.classify(text);
    console.log("Classified as", classification);
    return classification === "spam";
}

module.exports = spamDetection