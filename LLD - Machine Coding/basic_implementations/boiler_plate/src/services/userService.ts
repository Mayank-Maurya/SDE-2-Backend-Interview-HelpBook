import type { ExternalApiResponse, UserResponse } from "../types/users.js";

class UserService {
    public fetchUsers = async (url: string): Promise<UserResponse[]> => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Service Error");
            }

            const data = (await response.json()) as ExternalApiResponse
            return data.users;
        } catch (err) {
            console.error('UserService Error:', err);
            throw err;
        }
    };
}

const userService = new UserService();

export { userService };