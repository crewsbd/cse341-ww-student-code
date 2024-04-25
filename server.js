const express = require("express");
const cors = require("cors");

const app = express();

const host = "localhost";
const port = "8080";

app.use(cors());

app.get("/professional", (request, response) => {
  response.json({
    professionalName: "Brian",
    primaryDescription: "This is a description",
    base64Image: "BrianImg",
    workDescription1: "Work1",
    workDescription2: "Work 2",
    linkTitleText: "A link to something",
    nameLink: {
      firstName: "Name Link",
      url: "https://www.google.com",
    },
    linkedInLink: {
      text: "lLink",
      link: "https://www.linkedin.com",
    },
    githubLink: {
      text: "Git hub link",
      link: "https://www.github.com",
    },
  });
});

function startApp() {
  try {
    app.listen(port, host, () => {
      console.log(`Server started on ${host}:${port}`);
    });
  } catch {
    console.log("App failed start");
  }
}

startApp();
