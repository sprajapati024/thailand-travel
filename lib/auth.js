const PASSWORD = "thailand2026";

export function verifyPassword(password) {
  return password === PASSWORD;
}

export function isAuthenticated(req) {
  if (typeof window === "undefined") return false; // Server-side
  const token = localStorage.getItem("thailand-auth");
  return token === "authenticated";
}

export function authenticate(password) {
  if (verifyPassword(password)) {
    if (typeof window !== "undefined") {
      localStorage.setItem("thailand-auth", "authenticated");
    }
    return true;
  }
  return false;
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("thailand-auth");
  }
}
