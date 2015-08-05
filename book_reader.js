function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  this.currentPage++;
  if (!this.book[this.currentPage]) {
    this.currentPage = this.book.length-1;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.previousPage = function() {
  this.currentPage--;
  if (!this.book[this.currentPage]) {
    this.currentPage = 0;
  }
  return this.book[this.currentPage];
};

BookReader.prototype.pagesLeft = function() {
  return this.book.slice(this.currentPage).length-1;
};

BookReader.prototype.encouragement = function() {
  var pages = this.pagesLeft();
  if (pages === 1){
    return "Keep going, this book is good 'til the last drop!";
  } else {
    return "Keep going, only " + pages + " pages left after this one!"
  }
};

// DO NOT MODIFY BELOW THIS COMMENT
module.exports = BookReader;
