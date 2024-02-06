let redirectURL = "/playlists/ramadan";
window.addEventListener("load", function () {
  if (!window.location.pathname.includes(redirectURL)) {
    window.location.href = redirectURL;
  } else {
    console.log("No Redirect Active");
  }
});
