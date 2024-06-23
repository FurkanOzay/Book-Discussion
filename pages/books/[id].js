import React from 'react';
import { useRouter } from 'next/router';
import {Container, Typography} from '@mui/material';


const tempBooks = [
    { id: 1, title: 'Book One', author: 'Author One', description: 'Description for Book One' },
    { id: 2, title: 'Book Two', author: 'Author Two', description: 'Description for Book Two' },
    { id: 3, title: 'Book Three', author: 'Author Three', description: 'Description for Book Three' },
  ];


  const BookDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const book = tempBooks.find((book) => book.id === parseInt(id));
  
    if (!book) {
      return <Typography variant="h5">Book not found</Typography>;
    }
  
    return (
      <Container>
        <Typography variant="h4">{book.title}</Typography>
        <Typography variant="h6">{book.author}</Typography>
        <Typography>{book.description}</Typography>
      </Container>
    );
  };
  
  export default BookDetails;