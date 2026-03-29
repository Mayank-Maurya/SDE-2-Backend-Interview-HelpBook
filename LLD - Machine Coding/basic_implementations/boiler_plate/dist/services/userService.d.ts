import type { UserResponse } from "../types/users.js";
declare class UserService {
    fetchUsers: (url: string) => Promise<UserResponse[]>;
}
declare const userService: UserService;
export { userService };
//# sourceMappingURL=userService.d.ts.map