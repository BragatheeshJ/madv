# Use the latest Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port that your React app is running on (default is 3000)
EXPOSE 3000

# Set the command to start the React app
CMD ["npm", "start"]
