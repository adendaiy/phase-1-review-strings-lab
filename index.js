// Define currentUser variable
const currentUser = "John Doe"; // Replace "John Doe" with the actual current user's name

// Define welcomeMessage
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";

// Define excitedWelcomeMessage
const excitedWelcomeMessage = "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!";

// Define shortGreeting
const shortGreeting = "Welcome, " + currentUser.charAt(0) + "!";

// Export variables for testing
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};
