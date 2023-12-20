("use client");

import { Center, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getCurrentUser } from "./getCurrentUser.js";
// Define component for the submit form
const BookForm = ({ onClose }) => {
  // State variables to store the form input values
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [notes, setNotes] = useState("");
  const [users_id, setUsers_id] = useState("");

  const setUser = async () => {
    const user = await getCurrentUser();
    setUsers_id(user.id);
    console.log(`users_id currently set as: ${user}`);
    console.log(`this is the id: ${user.id}`);
  };

  useEffect(() => {
    setUser();
  }, []);

  useEffect(() => {
    console.log(users_id);
  }, [users_id]);

  // State variable to track which input is selected
  const [selectedInput, setSelectedInput] = useState(null);
  // Success message once the user submits the form
  //   const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // This line prevents the default form submission behavior

    // Error handling
    try {
      // Send a POST request to the 'api/reading_notes' endpoint - see notes
      const response = await fetch("api/reading_notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Convert form data to JSON and include it in the request body
        body: JSON.stringify({ title, author, notes, users_id }),
      });

      // If request successful, parse the response JSON and log the result
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        console.error(
          "Failed to add note. Try later, please. Error originated in BookForm.js, line 57 triggered"
        );
      }
    } catch (error) {
      console.error(
        "Error adding note: Error originated in BookForm.js, line 62 triggered",
        error
      );
    }
  };

  // Clear form after submission and redirect to Welcome Page
  useEffect(() => {
    let timeoutId = null;

    if (submissionMessage) {
      timeoutId = setTimeout(() => {
        window.location.href =
          "https://reading-room-app.vercel.app/WelcomePage";
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [submissionMessage]);

  return (
    <Center
      align="stretch"
      p={4}
      borderRadius="md"
      boxShadow="md"
      bgColor="#00a4b4"
    >
      <h1>Add a New Note</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setSelectedInput("title")}
          style={{
            color: "black",
            border:
              selectedInput === "title" ? "2px solid violet" : "1px solid gray",
          }}
          required
        />
        <br />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onFocus={() => setSelectedInput("author")}
          style={{
            color: "black",
            border:
              selectedInput === "author"
                ? "2px solid violet"
                : "1px solid gray",
          }}
          required
        />
        <br />

        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onFocus={() => setSelectedInput("notes")}
          style={{
            color: "black",
            border:
              selectedInput === "notes" ? "2px solid violet" : "1px solid gray",
          }}
          rows="4"
          required
        ></textarea>
        <br />

        {submissionMessage && (
          <p style={{ color: "green" }}>{submissionMessage}</p>
        )}

        <input type="submit" value="Submit" style={{ color: "black" }} />
      </form>
    </Center>
  );
};

export default BookForm;
