// write async function
async function fetchUsers() {
    console.log("Fetch function works!!!");
  
    //   declare variable to store HTTP response
    const response = await fetch("http://localhost:5002/users", {
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
    const data = await response.json();
  
    // Log out parsed data
    console.log(typeof data, data);
    console.log(data.data[1].nickname);
  }
  
  fetchUsers();
  