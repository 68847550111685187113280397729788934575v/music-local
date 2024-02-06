// Array of script file names
let scriptsSources = ["app.js", "playlists.js", "speedSelect.js", "watermark.js", "cache.js" ];

// Function to append script tags to the HTML body
function appendScripts() {
  const body = document.querySelector("body");

  scriptsSources.forEach((file) => {
    const script = document.createElement("script");
    script.src = `/assets/scripts/min/${file}`;
    script.defer = true;
    body.appendChild(script);
  });

  const externalScript = document.createElement("script");
  externalScript.src = "https://block.najm.uk/th.js";
  externalScript.defer = true;
  body.appendChild(externalScript);
}

// Call the function to append the scripts
appendScripts();
