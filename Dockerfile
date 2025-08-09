# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy only package manifest(s) first for better caching
COPY package.json ./
# If you DO have a lockfile, copy it too:
# COPY package.json package-lock.json ./

# Use install when no lockfile exists
RUN npm install --no-audit --no-fund

# Now copy the rest and build
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
# If you have a custom nginx.conf:
# COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
