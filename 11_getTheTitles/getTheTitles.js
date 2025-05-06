const getTheTitles = function(booksInfo) {
    let booksTitleArray = [];
  //loop through the array
  for (const books of booksInfo) {
    //for each item, extract the key-value that includes the title (objectName.keyName)
    booksTitleArray.push(books.title);   
  }
  return booksTitleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
