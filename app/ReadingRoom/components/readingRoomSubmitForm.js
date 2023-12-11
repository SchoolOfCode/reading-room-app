'use client';

import { useState, useEffect } from 'react';
import { Container, Input, Textarea, Heading } from '@chakra-ui/react';

// Define component for the submit form
const BookForm = () => {
  // State variables to store the form input values
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [notes, setNotes] = useState('');

  // Success message once user submits the form
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // This line prevents the default form submission behavior

    // Error handling
    try {
      // Send a POST request to the 'api/reading_notes' endpoint - see notes
      const response = await fetch('api/reading_notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Convert form data to JSON and include it in the request body
        body: JSON.stringify({ title, author, notes }),
      });

      // If request successful, parse the response JSON and log the result
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setSubmissionMessage('You are a champ! Keep up the good work.');
      } else {
        console.error('Failed to add note. Try later, please.');
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  // Clear form after submission and redirect to Welcome Page
  useEffect(() => {
    let timeoutId = null;

    if (submissionMessage) {
      timeoutId = setTimeout(() => {
        window.location.href = 'https://reading-room-app.vercel.app/WelcomePage';
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [submissionMessage]);

  return (
    <Container>
      <Heading>Add a New Note</Heading>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <Input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          color="black"
          required
        />
        <br />

        <label htmlFor="author">Author:</label>
        <Input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          color="black"
          required
        />
        <br />

        <label htmlFor="notes">Notes:</label>
        <Textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows="4"
          color="black"
          required
        ></Textarea>
        <br />

        {submissionMessage && <p style={{ color: 'green' }}>{submissionMessage}</p>}

        <input type="submit" value="Submit" />
      </form>
    </Container>
  );
};

export default BookForm;
