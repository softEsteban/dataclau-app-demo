export default function requireAuth(to, from, next) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    next({ name: "Login" });
  } else {
    next();
  }
}
