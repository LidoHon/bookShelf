# BookShelf

BookShelf is a React-based application that allows users to search for books, view book details, and categorize books into different shelves such as "Currently Reading," "Want to Read," and "Read."

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/LidoHon/bookShelf.git
    ```
2. Navigate to the project directory:
    ```sh
    cd bookShelf
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173` to view the application.

## Features

- **Book Shelves**: Organize your books into different categories such as "Currently Reading," "Want to Read," and "Read."
- **Search Functionality**: Search for books and add them to your shelves.
- **Book Details**: View detailed information about each book, including the title, authors, publisher, published date, description, categories, language, and page count.
- **Responsive Design**: The application is designed to be responsive and works well on various devices.

## Project Structure

- `App.jsx`: Main application component that includes routing.
- `BookPage.jsx`: Component that displays the main book shelves and handles search functionality.
- `BookDetails.jsx`: Component that displays detailed information about a specific book.
- `Book.jsx`: Component representing a single book item with shelf management.
- `BooksAPI.js`: API utility for fetching book data.
- `Spinners.jsx`: Loading spinner component.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.



