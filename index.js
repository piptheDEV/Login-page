import express from 'express';
import path from 'path';
import { "https://github.com/piptheDEV/Login-page/blob/main/public/index.html" } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Setup for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
