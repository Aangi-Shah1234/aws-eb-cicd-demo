const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AWS CI/CD Demo</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: #f4f6f9;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          text-align: center;
          max-width: 500px;
        }
        h1 {
          color: #232f3e; /* AWS dark blue color */
          margin-top: 0;
        }
        .badge {
          background: #ff9900; /* AWS orange */
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        p {
          color: #666;
          line-height: 1.6;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <span class="badge">Success</span>
        <h1>Hello AWS Free Tier!</h1>
        <p>This Node.js application is running successfully on AWS Elastic Beanstalk, deployed completely automatically via <strong>AWS CodePipeline & CodeBuild</strong>!</p>
        <p>Try making a local code change, push it to your GitHub repository, and watch AWS CodePipeline redeploy this page in real-time.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
