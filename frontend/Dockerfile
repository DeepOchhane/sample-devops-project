# Use official Node.js image to build the React app
FROM node:18 as build

# Set working directory inside container
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app source code
COPY . .

# Build the app for production
RUN npm run build

# ---------
# Stage 2: Serve the built app with nginx
# ---------
FROM nginx:alpine

# Copy build output to nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
