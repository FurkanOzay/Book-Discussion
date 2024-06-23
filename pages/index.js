import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
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
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    } else {
      axios.get('http://localhost:5000/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        // Backend çağrısından başarılı sonuç alındığında kitapları yükleyin
        setBooks(tempBooks);
      }).catch(error => {
        router.push('/login');
      });
    }
  }, []);

  const handleChange = (event) => {
    const bookId = event.target.value;
    setSelectedBook(bookId);
    router.push(`/books/${bookId}`);
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Select a Book</Typography>
      <FormControl fullWidth>
        <InputLabel id="book-select-label">Book</InputLabel>
        <Select
          labelId="book-select-label"
          value={selectedBook}
          onChange={handleChange}
          label="Book"
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
