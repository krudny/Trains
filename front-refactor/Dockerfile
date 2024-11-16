# Use the slim version of the Node 18 image as the base
FROM node:18-slim AS build

# Set working directory and create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies with legacy peer dependencies flag
RUN npm install --legacy-peer-deps

# Copy all files into the container
COPY . .

# Build the Next.js app
RUN npm run build

# ---- Serve Stage ----
FROM node:18-slim

# Set working directory and copy build files from the previous stage
WORKDIR /usr/src/app
COPY --from=build /usr/src/app ./

# Set environment variable for the application's port
ENV PORT=3000

# Expose the application's default port for Next.js
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
