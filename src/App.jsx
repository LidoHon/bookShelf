import './App.css';
import { useState, useEffect } from 'react';
import * as BookAPI from './BooksAPI.js';
import BookShelf from './Bookshelf.jsx';
import SearchBooks from './SearchBooks';

function App() {
	const [showSearchPage, setShowSearchpage] = useState(false);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		BookAPI.getAll().then((books) => {
			setBooks(books);
		});
	}, []);

	const updateBookShelf = (book, shelf) => {
		BookAPI.update(book, shelf).then(() => {
			setBooks(books.map((b) => (b.id === book.id ? { ...b, shelf } : b)));
		});
	};

	return (
		<div className="app">
			{showSearchPage ? (
				<SearchBooks
					onClose={() => setShowSearchpage(false)}
					onUpdateShelf={updateBookShelf}
				/>
			) : (
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<BookShelf
							title="Currently Reading"
							books={books.filter((book) => book.shelf === 'currentlyReading')}
							onUpdateShelf={updateBookShelf}
						/>
						<BookShelf
							title="Want to Read"
							books={books.filter((book) => book.shelf === 'wantToRead')}
							onUpdateShelf={updateBookShelf}
						/>
						<BookShelf
							title="Read"
							books={books.filter((book) => book.shelf === 'read')}
							onUpdateShelf={updateBookShelf}
						/>
					</div>
					<div className="open-search">
						<a onClick={() => setShowSearchpage(true)}>Add a book</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
