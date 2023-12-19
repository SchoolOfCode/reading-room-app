// Write async function
export async function fetchReadingNotes(userInput) {
  console.log("Fetching all data by nickname");
  let nicknameToSearch = userInput;
  try {
    // Declare variable to store HTTP response
    const response = await fetch(
      `https://reading-room-back-end.onrender.com/reading_notes/users_id/${idToSearch}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    // Throw an error if response not ok
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }

    // Use JSON method to parse response and store in variable
    const readingNotesData = await response.json();

    // Log out parsed readingNotesData
    console.log(typeof readingNotesData, readingNotesData);
    console.log(readingNotesData.readingNotesData);

    // Chad Data!
    // const chadData = {
    //   title: readingNotesData.data[1].title,
    //   author: readingNotesData.data[1].author,
    //   note: readingNotesData.data[1].notes,
    //   users_id: readingNotesData.data[1].users_id,
    // };

    console.log(readingNotesData);

    return readingNotesData;
  } catch (error) {
    console.error("Error fetching reading notes:", error);
    throw error; // Rethrow the error for better error handling upstream
  }
}

// Example usage:
// const data = await fetchReadingNotes();
// console.log(data);
