/**
 * Represents a book with a title and an author.
 */
class Book {
    /**
     * Creates a new Book instance.
     *
     * @param {string} title - The title of the book.
     * @param {string} author - The author of the book.
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * Returns a description of the book.
     *
     * @returns {string} A formatted string with the book's title and author.
     */
    getDescription() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}