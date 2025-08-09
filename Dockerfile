# Step 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Only copy dependency files first to leverage cache
COPY package.json package-lock.json ./

# Install dependencies (cached unless package files change)
RUN npm ci

# Now copy the rest of the app
COPY . ./

# Build the React app
RUN npm run build

# Step 2: Serve stage
FROM nginx:stable-alpine

# Remove default config
RUN rm -rf /etc/nginx/conf.d

# Add custom config
COPY nginx.conf /etc/nginx/

# Copy built app from builder
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
