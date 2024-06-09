import React from 'react';

function Book({ book, onUpdateShelf }) {
	const { title, authors, imageLinks, shelf } = book;
	const thumbnail = imageLinks
		? imageLinks.thumbnail
		: 'https://via.placeholder.com/128x193?text=No%20Image';

	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${thumbnail})`,
					}}
				></div>
				<div className="book-shelf-changer">
					<select
						value={shelf || 'none'}
						onChange={(e) => onUpdateShelf(book, e.target.value)}
					>
						<option value="none" disabled>
							Move to...
						</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>
			<div className="book-title">{title}</div>
			<div className="book-authors">
				{authors ? authors.join(', ') : 'Unknown Author'}
			</div>
		</div>
	);
}

export default Book;
