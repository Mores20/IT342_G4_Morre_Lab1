const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Backend (Express) running at http://localhost:${port}/`);
});
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/hello') {
    const payload = { message: 'Hello from backend' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(payload));
    return;
  }

  // serve static files from public/
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    const stream = fs.createReadStream(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const map = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml' };
    res.writeHead(200, { 'Content-Type': map[ext] || 'application/octet-stream' });
    stream.pipe(res);
  });
});

server.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}/`);
});
