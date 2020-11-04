## Deploying Backend Server

The backend is hosted on Google Compute Engine
To deploy:

1. Make sure the instance is turned on and SSH into it.
   Note: `pm2` is used so whenever the instance is turned on the node.js server is automatically started as well

2. `pm2 stop script` to turn off the server

3. Use `vim` to update the files necessary

4. Once updates are done, restart the server again `pm2 start script.js`

## Database

The postreSQL database is hosted on Google Cloud SQL.
It is best to use `pgadmin` as an interface to view the database.
