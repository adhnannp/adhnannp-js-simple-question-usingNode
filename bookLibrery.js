var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        readingStatus: true
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        readingStatus: true
    },
    {
        title: 'Suzanne Collins',
        author: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
for (var i = 0; i < library.length; i++) {
    var book = library[i];
    if (book.readingStatus) {
        console.log(`\nAlready read '${book.title}' by ${book.author}.`);
    } else {
        console.log(`\nYou still need to read '${book.title}' by ${book.author}.`);
    }
}
