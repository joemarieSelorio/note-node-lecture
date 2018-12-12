const fs = require('fs');

var fetchNotes = () =>{
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return  JSON.parse(noteString);
    }catch(e){
        return [];
    }
};

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body)=> {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        
    }
};

var getAll = ()=>{
 return fetchNotes();
};

var readNote = (title) =>{
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}


var logNote = (note) =>{
    debugger;
    console.log(`Title '${note.title}'`);
    console.log(`Body: ${note.body}`);
}

var removeNote = (title) =>{
   //fetchnote
   var notes = fetchNotes();
   //filter note, removing the one with the title of argument
    var filteredNotes = notes.filter((note)=>  note.title !== title );
   //save new notes array
   saveNotes(filteredNotes);

   return notes.length !== filteredNotes.length;

}

module.exports = {
    addNote,
    getAll,
    logNote,
    readNote,
    removeNote
};