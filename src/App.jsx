import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookPage from './BookPage';
import BookDetails from './BookDetails';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<BookPage />} />
				<Route path="/books/:id" element={<BookDetails />} />
			</Routes>
		</Router>
	);
};

export default App;
