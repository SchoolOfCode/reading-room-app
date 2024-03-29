// write async function
export async function fetchUsers() {
  console.log("Fetch function works!!!");

  //   declare variable to store HTTP response
  const response = await fetch("http://localhost:5002/users", {
    headers: {
      Accept: "application/json",
    },
  });

  // Log an error if response not(!) ok
  if (!response.ok) {
    console.error(`Status:${response.status}`);
    console.error(`Status:${await response.text()}`);
    return;
  }

  // use JSON method to parse response and store in variable
  const userData = await response.json();

  // Log out parsed userData
  console.log(typeof userData, userData);
  // console.log(userData.userData[1].nickname);
  return userData;
}
