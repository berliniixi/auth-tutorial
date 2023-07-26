export default function authHeader() {
  // Retrieve the "user" object from the browser's local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Check if the "user" object exists and contains an "accessToken"
  if (user && user.accessToken) {
    // If the user is logged in and has an access token, return it as an HTTP Authorization header
    // The access token is typically preceded by the word "Bearer" and a space
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    // If the user is not logged in or the access token is missing, return an empty object
    return {};
  }
}
