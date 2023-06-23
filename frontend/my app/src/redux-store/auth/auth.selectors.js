export const selectIsSignedUp = ({ auth }) => auth.isSignedUp;

export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectAuthError = ({ auth }) => auth.authError;
