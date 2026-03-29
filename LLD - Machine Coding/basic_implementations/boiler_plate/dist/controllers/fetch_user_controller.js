import { userService } from "../services/userService.js";
const getUsers = async (req, res, next) => {
    try {
        const users = await userService.fetchUsers("https://dummyjson.com/users");
        const ex = users.reduce((prev, cur) => {
            return {
                id: prev.id + cur.id,
                firstName: prev.firstName + cur.firstName,
                gender: prev.gender + cur.gender,
            };
        });
        console.log(ex);
        return res.status(200).json(users);
    }
    catch (err) {
        return res.status(500).json({
            error: err,
        });
    }
};
export default getUsers;
//# sourceMappingURL=fetch_user_controller.js.map