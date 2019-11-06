module.exports = {
  apps: [
    {
      name: "taskr-client",
      script: "serve -s build -l 3000",
      watch: true,
      env: {
        "NODE_ENV": "development",
      },
      env_production: {
        "NODE_ENV": "production"
      }
    }]
}


