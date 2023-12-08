// write async function
export async function fetchUserByNickname(input) {
  let nickname = input;
  console.log("Fetch function works!!!");

  //   declare variable to store HTTP response
  const response = await fetch(
    `http://localhost:5002/users/nickname/${nickname}`,
    {
      headers: {
        Accept: "application.json",
      },
    }
  );

  // Log an error if response not(!) ok
  if (!response.ok) {
    console.error(`Status:${response.status}`);
    console.error(`Status:${await response.text()}`);
    return;
  }

  // use JSON method to parse response and store in variable
  const nicknameData = await response.json();

  // Log out parsed nicknameData
  console.log(typeof nicknameData, nicknameData);
  console.log(nicknameData);
  const userNickname = nicknameData.data.nickname;
  console.log(userNickname);
  return userNickname;
}
// fetchUserByNickname("Chad");
