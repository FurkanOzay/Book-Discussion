import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

// Geçici kitap verileri
const tempBooks = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
  { id: 3, title: 'Book Three', author: 'Author Three' },
];

const Home = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Backend hazır olana kadar geçici verileri kullan
    setBooks(tempBooks);
  }, []);

  const handleChange = (event) => {
    const bookId = event.target.value;
    setSelectedBook(bookId);
    router.push(`/books/${bookId}`);
  };

  return (
    <Container>
      <Typography variant="h4">Select a Book</Typography>
      <FormControl fullWidth>
        <InputLabel id="book-select-label">Book</InputLabel>
        <Select
          labelId="book-select-label"
          value={selectedBook}
          onChange={handleChange}
        >
          {books.map((book) => (
            <MenuItem key={book.id} value={book.id}>
              {book.title} - {book.author}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default Home;
