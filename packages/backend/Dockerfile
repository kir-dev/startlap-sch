# Stage 1: Build the application
# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:20-alpine AS build
ENV NODE_ENV=development

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json ./

# Install the project dependencies using Yarn
RUN yarn install

# Copy the rest of the project files to the container
COPY . .

# Build the NestJS application
RUN yarn prisma generate
RUN yarn build

# Stage 2: Create a lightweight container with the built application
FROM node:20-alpine AS production
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/yarn.lock ./yarn.lock
COPY --from=build /app/prisma ./prisma

# Install only production dependencies
RUN yarn install --production --frozen-lockfile
RUN yarn prisma generate

# Command to run the application
CMD ["node", "dist/main"]
