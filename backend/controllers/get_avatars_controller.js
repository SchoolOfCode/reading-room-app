import { getAvatars } from "../helper_functions/get_avatars.js";

export async function getAvatarsControllers(req, res) {
    try { 
        const allAvatars = await getAvatars();
        res.status(200).json({ status: "success", data: allAvatars}) 

}
catch (error){
    console.error ('Error getting all avatars:', error);
    res.status(500).json({
        status: "error",
        message: "Error getting all avatars. See get_avatars_controllers.js",
    });
    }
    }