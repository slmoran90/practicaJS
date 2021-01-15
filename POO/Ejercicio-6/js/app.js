class Book
{
	constructor(isbn, title, author, nPages)
	{
		this._isbn = isbn;
		this._title = title;
		this._author = author;
		this._nPages = nPages;
	}

	get getIsbn()
	{
		return this._isbn;
	}

	set setIsbn(isbn)
	{
		this._isbn = isbn;
	}

	get getTitle()
	{
		return this._title;
	}

	set setTitle(title)
	{
		this._title = title;
	}

	get getAuthor()
	{
		return this._author;
	}

	set setAuthor(author)
	{
		this._author = author;
	}

	get getPages()
	{
		return this._nPages;
	}

	set setPages(pages)
	{
		this._nPages = pages;
	}

	showBook()
	{
		console.log(`El libro "${this.getTitle}" con ISBN ${this.getIsbn} creado por el autor ${this.getAuthor} tiene ${this.getPages} páginas.`);
	}
}

let bigBook = (...pages) =>
{
	let arr = [];
	let num = 0;

	for(let i=0; i<pages.length;i++)
	{
		num = pages[i]._nPages;
		arr.push(num);
	}

	arr.sort(function(a,b){
		return a-b;
	});

	return arr[arr.length-1];
}

let book1 = new Book(1998, 'Los ojos del perro siberiano', 'Antonio Santa Ana', 136);
let book2 = new Book(1304, 'Divina comedia', 'Dante Alighieri', 322);

let theBigBook = bigBook(book1, book2);