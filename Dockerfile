# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

# Serve stage
FROM nginx:stable-alpine

RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
