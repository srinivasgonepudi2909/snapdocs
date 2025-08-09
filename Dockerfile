# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps first for better caching
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build
RUN npm run build

# Serve stage
FROM nginx:alpine
# Replace default config
RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
