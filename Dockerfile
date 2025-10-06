# Use official Bun image as base
FROM oven/bun:latest

# Set working directory inside container
WORKDIR /app

# Copy only bun.lockb and package.json first to cache dependencies
COPY bun.lockb package.json ./

# Install dependencies (cached if lock file doesn't change)
RUN bun install

# Now copy the rest of the app
COPY . .

# Default command for dev (you can override this in docker-compose)
CMD ["bun", "run", "index.ts"]
