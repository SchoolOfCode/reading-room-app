// write async function
export async function fetchReadingNotes() {
  console.log("Fetch function works!!!");

  //   declare variable to store HTTP response
  const response = await fetch("http://localhost:5002/reading_notes", {
    headers: {
      Accept: "application.json",
    },
  });

  // Log an error if response not(!) ok
  if (!response.ok) {
    console.error(`Status:${response.status}`);
    console.error(`Status:${await response.text()}`);
    return;
  }

  // use JSON method to parse response and store in variable
  const readingNotesData = await response.json();

  // Log out parsed readingNotesData
  console.log(typeof readingNotesData, readingNotesData);
  console.log(readingNotesData.readingNotesData);

  const chadData = {
    title: readingNotesData.data[1].title,
    author: readingNotesData.data[1].author,
    note: readingNotesData.data[1].notes,
    users_id: readingNotesData.data[1].users_id,
  };
  return chadData;
}
// return latest data, where users_id = Chad's ID - 2
