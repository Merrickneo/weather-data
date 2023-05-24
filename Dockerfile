# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Expose the port that the Angular app will run on
EXPOSE 4200

# Start the Angular app
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
