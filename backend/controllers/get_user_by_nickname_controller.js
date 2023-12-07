import { getUserByNickname } from "../helper_functions/get_user_by_nickname.js";

export async function getUserByNicknameController(req, res) {
  try {
    const nickname = req.params.nickname;
    console.log("Nickname:", nickname); // Add this line
    const getUser = await getUserByNickname(nickname);
    res.status(200).json({ status: "success", data: getUser });
  } catch (error) {
    console.error("Error getting user nickname:", error);
    res.status(500).json({
      status: "error",
      message:
        "Error getting user nickname. See get_user_by_nickname_controller.js",
    });
  }
}
