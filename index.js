const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());

const links = [
    'https://www.linkedin.com/in/onishgarg/',
    'https://www.linkedin.com/in/barun-parruck-2bb60928/?originalSubdomain=uk',
    'https://www.researchgate.net/profile/Divij-Singh',
    'https://www.researchgate.net/profile/Adwaiya-Srivastav'
];

app.get('/randomchadgenerator', (req, res) => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const randomLink = links[randomIndex];
    res.send(randomLink);
});

app.listen(3001, () => {
    console.log("Running on Port: 3001");
});
