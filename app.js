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

const titleOption = {
    describe: 'Title of the note',
    demand  : true,
    alias   : 't'
}

const bodyOption = {
    describe: 'Body of the note',
    demand  : true,
    alias   : 'b'
}

const argv = yargs
            .command('add', 'Adding new Note', {
                title: titleOption ,
                body: bodyOption
             })
             .command('list', 'List of all notes')
             .command('read', 'Reading a note', {
                title: titleOption
             })
             .command('remove', 'Removes a note', {
                 title: titleOption
             })
             .help()
            .argv;
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log(`Note created`);
        console.log(`Title: ${note.title} Body: '${note.body}'`)
    }else{
        console.log('Note already exist');
    }
}else if(command === 'list'){
   let allNotes = notes.getAll();
   allNotes.forEach((note) =>{
      console.log('==============');
      console.log(`Title: ${note.title}, \nBody: ${note.body}`);
      console.log('==============');
   });
}else if(command === 'read'){
    let note = notes.readNote(argv.title);
    if(note){
        notes.logNote(note);
    }else{
        console.log('Note not found')
    }
}else if (command === 'remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed': 'Note not found';
    console.log(message);
}

