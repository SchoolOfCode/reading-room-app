import { getUserByID } from "../helper_functions/get_user_by_id.js";

export async function getUsersByIdController(req, res) {
    try { 
        const id = req.params.id;
        const getUser= await getUserByID(id);
        res.status(200).json({ status: "success", data: getUser}) 
    }
catch (error){
    console.error ('Error getting user ID:', error);
    res.status(500).json({
        status: "error",
        message: "Error getting user ID . See get_users_by_id_controllers.js",
    });
    }
    }