// write async function
export async function fetchAvatars() {
  console.log("Fetch function works!!!");

  //   declare variable to store HTTP response
  const response = await fetch("http://localhost:5002/avatars", {
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
  const avatarData = await response.json();

  // Log out parsed avatarData
  console.log(typeof avatarData, avatarData);
  // console.log(avatarData.avatarData[0].avatar_img);
  const chadAvatarData = {
    avatar: avatarData.data[1].avatar_img,
    users_id: avatarData.data[1].users_id,
  };
  return chadAvatarData;
}
