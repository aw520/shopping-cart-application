# Use Node.js 24 to build the app
FROM node:24 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy only dependency files for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app (e.g., React/Vite)
RUN npm run build


# Use Nginx to serve the built frontend
FROM nginx:alpine

# Copy built files from previous stage into Nginx's web folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
