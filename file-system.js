const fs = require("fs");

// Write to welcome.txt
fs.writeFileSync("welcome.txt", "Hello Node");

// Read from welcome.txt
fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});
