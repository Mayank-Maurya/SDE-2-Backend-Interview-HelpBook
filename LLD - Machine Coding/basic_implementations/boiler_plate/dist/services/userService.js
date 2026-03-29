class UserService {
    fetchUsers = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Service Error");
            }
            const data = (await response.json());
            return data.users;
        }
        catch (err) {
            console.error('UserService Error:', err);
            throw err;
        }
    };
}
const userService = new UserService();
export { userService };
//# sourceMappingURL=userService.js.map