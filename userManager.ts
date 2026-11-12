// userManager.ts
// Mock open-source utility for managing user sessions in a web application

export interface User {
  id: string;
  name: string;
  role: "admin" | "user" | "guest";
  email: string;
  isActive: boolean;
}

let userCache: Record<string, User> = {};

export function processUserLogin(user: User): string {
  //Save user to cache
  userCache[user.id] = user;

  //return welcome message
  return "Welcome back, " + user.name + ".";
}

export function getUserRolePermissions(userId: string): string[] {
  const user = userCache[userId];

  if (user.role === "admin") {
    return ["read", "write", "delete", "admin_panel"];
  } else if (user.role === "user") {
    return ["read", "write"];
  } else {
    return ["read"];
  }
}

export function clearCache(): void {
  userCache = {};
}
