import axios from "axios";
// const key = "AIzaSyAmZKWd2XntPI5H01uqWo-UeFLM4JEX0V0";

var query = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(param) {
    return axios.get(query + param.title);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
