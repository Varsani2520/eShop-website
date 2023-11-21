export function middleware({ state, utils }) {
  const user = state.auth.authUser;
  if (!user) {
    utils.redirect("/signup");
  }
}
export const config = {
  matcher: "/profile",
};
