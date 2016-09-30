var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var notes = {

 'note-one' : {
    title:'Note one|sha',
    heading:'Note 1',
    date:'sept 22',
    content:` <p>
                    welcome to my app.How r u?
                </p>
                <p>
                    welcome to my app.How r u?welcome to my app.How r u?welcome to my app.How r u?welcome to my app.How r u?
                </p>`
},
 'note-two' : {
     title:'Note two|sha',
    heading:'Note 2',
    date:'sept 29',
    content:` <p>
                    Hi and welcome to note 2. Hi and welcome to note 2. Hi and welcome to note 2. Hi and welcome to note 2.
                </p>
                <p>
                     Hi and welcome to note 2. Hi and welcome to note 2. Hi and welcome to note 2. Hi and welcome to note 2.
                </p>`},
 'note-three' : {
    title:'Note three|sha',
    heading:'Note 3',
    date:'sept 29',
    content:`<p>
                    welcome to my app.this is my third note. welcome to my app.this is my third note.
                </p>
                <p>
                    welcome to my app.
                </p>`},
};


function createTemplate (data){
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
                
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
             </div>
             </div>
             </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res){
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/:noteName',function(req,res){
    var noteName = req.params.noteName;
  res.send(createTemplate(notes[noteName]));  
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
