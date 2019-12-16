const fs = require('fs');
const jsdom = require('jsdom');
const jquery = require('jquery');

fs.readFile('../index.html', 'utf8', (err, data) => {
    const dom = new jsdom.JSDOM(data);
    const $ = jquery(dom.window);

    $('body').html('');
    fs.writeFile('2.html', dom.serialize(), err => {
        if(err){
            return console.log(err);// eslint-disable-line no-console 
        }else{
        console.log('done');// eslint-disable-line no-console 
        } 
    });
    
});