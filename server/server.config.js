module.exports = {
  apps: [
    {
      name: "taskr-server",
      script: "node server.js",
      watch: true,
      env: {
        "NODE_ENV": "development",
      },
      env_production: {
        "NODE_ENV": "production"
      }
    }]
}
