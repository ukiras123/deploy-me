FROM node:18.19.0-slim

# Set a working directory in the container
WORKDIR /usr/src/app

# Copy package file from current directory to /usr/src/app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code from current directory to /usr/src/app
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

