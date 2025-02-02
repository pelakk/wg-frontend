# Step 1: Use the official Node.js image as the base
FROM node:18-alpine AS builder

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the application
RUN npm run build

# Step 7: Use a lightweight server image to serve the app
FROM node:18-alpine

# Step 8: Set the working directory in the runtime image
WORKDIR /app

# Step 9: Copy the built application from the builder stage
COPY --from=builder /app ./

# Step 10: Install only production dependencies
RUN npm ci --only=production

# Step 11: Expose the application port
EXPOSE 3000

# Step 12: Set the command to run the application
CMD ["npm", "start"]