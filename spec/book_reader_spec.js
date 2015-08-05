var BookReader = require('../book_reader');

var exampleBook = ['any', 'array', 'of', 'text', 'is', 'a', 'book', 'to', 'us'];
var shortExampleBook = ['this', 'is', 'short'];


describe('properties', function() {
  var reader = new BookReader(exampleBook);

  it('has an array book to store the book', function() {
    expect(reader.book).toEqual(exampleBook);
  });

  it('has an integer currentPage to store the current page (index in book) the reader is on', function() {
    expect(reader.currentPage).toEqual(0);
  });
});

describe('#nextPage', function() {
  it('returns the next page that the reader should see', function() {
    var reader = new BookReader(exampleBook);
    expect(reader.nextPage()).toEqual('array');
    expect(reader.currentPage).toEqual(1);
    expect(reader.nextPage()).toEqual('of');
    expect(reader.currentPage).toEqual(2);
  });

  it('does not allow the user to turn beyond the last page of the book', function() {
    var reader = new BookReader(shortExampleBook);
    reader.nextPage();

    expect(reader.nextPage()).toEqual('short');
    expect(reader.nextPage()).toEqual('short');
    expect(reader.nextPage()).toEqual('short');
  });
});

describe('#previousPage', function() {
  it('returns the page prior to the one that the reader is currently on', function() {
    var reader = new BookReader(exampleBook);
    reader.nextPage();
    reader.nextPage();

    expect(reader.previousPage()).toEqual('array');
    expect(reader.currentPage).toEqual(1);
  });

  it('does not allow the user to turn back beyond the first page of the book', function() {
    var reader = new BookReader(exampleBook);
    expect(reader.previousPage()).toEqual('any');
  });
});

describe('#pagesLeft', function() {
  it('returns the next number of pages the reader has left', function() {
    var reader = new BookReader(exampleBook);
    reader.nextPage();
    reader.nextPage();

    expect(reader.pagesLeft()).toEqual(6);
  });
});

describe('#encouragement', function() {
  it('returns a String of encouragement for the reader', function() {
    var reader = new BookReader(shortExampleBook);

    expect(reader.encouragement()).toEqual("Keep going, only 2 pages left after this one!");
  });

  it('returns an extra special String of encouragement for the reader when they are on the last page', function() {
    var reader = new BookReader(shortExampleBook);
    reader.nextPage();

    expect(reader.encouragement()).toEqual("Keep going, this book is good 'til the last drop!");
  });
});
