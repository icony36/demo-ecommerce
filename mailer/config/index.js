const { google } = require("googleapis");

const user = "icode67658@gmail.com";
const refreshToken = "1/dsUUmssBed1AA3mUUHQP5R88vldPGWMaFAcr3XZsGYk";
const accessToken =
    "ya29.GltoBxRvU_r4WgbBLOsQPTt_CIHC4MM5xx_tTdfkNzw5VYX8w-n1LoGyVZBqL_gxl5Nsf5VJBa8ag6A3ug1a9sJTMdzXxluZPGjYdByLo8ZSu7c6I-NozkVqv4W_";
const clientId =
    "988666663964-51cd9e18ime6h3d7edifpavatmf70nk7.apps.googleusercontent.com";
const clientSecret = "KtYS-mSpBNu5x13vPGtWuQmZ";

// const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//     clientId,
//     clientSecret,
//     "https://developers.google.com/oauthplayground"
// );

// oauth2Client.setCredentials({
//     refresh_token: refreshToken
// });

// const accessToken = oauth2Client.getAccessToken();

module.exports = {
    user,
    clientId,
    clientSecret,
    refreshToken,
    accessToken
};
