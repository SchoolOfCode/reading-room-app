import { getUsers } from "../helper_functions/get_users.js";

export async function getUsersController(req, res) {
    try { 
        const allUsers = await getUsers();
        res.status(200).json({ status: "success", data: allUsers}) 

}
catch (error){
console.error ('Error getting users:', error);
res.status(500).json({
    status: "error",
    message: "Error getting users. See get_users_controllers.js",
});
}
}