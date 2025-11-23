# Using node 20 as it is the latest LTS
FROM node:20-alpine AS base

# Install pnpm
RUN npm i -g pnpm

# Set up the working directory
WORKDIR /app

# Copy the dependency files
COPY package.json pnpm-lock.yaml ./

COPY prisma ./

# Install dependencies
RUN pnpm i

# Copy the rest of the files
COPY . .

# Build the application
RUN pnpm build


# Start a new stage for the production environment
FROM node:20-alpine AS production

# Set up the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/prisma ./prisma

# Install production dependencies
RUN npm i -g pnpm
RUN npm i -g prisma@6.19.0
RUN pnpm i --prod

# Expose the port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
