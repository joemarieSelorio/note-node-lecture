const   os   = require('os'),
         _   = require('lodash'),
      yargs  = require('yargs'),

      notes  = require('./note');
     
         
// var user = os.userInfo();
// fs.appendFileSync('greetings.txt', `Hello ${user.username} You are ${notes.age}`);
// var res = notes.addNote();
// var sum = notes.addNum(1,2);
// console.log(res);
// console.log(sum);

const argv = yargs.argv;
console.log(argv);
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log(`Note created`);
        console.log(`Title: ${note.title} Body: '${note.body}'`)
    }
}else if(command === 'list'){
   notes.getAll();
}else if(command === 'read'){
    notes.readNote(argv.title);
}else if (command === 'remove'){
    notes.removeNote(argv.title);
}

