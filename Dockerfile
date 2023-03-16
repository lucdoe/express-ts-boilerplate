# --- Build stage ---
FROM node:14-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

# --- Production stage ---
FROM node:14-alpine

WORKDIR /usr/src/app

# Copy necessary files from the build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

# Add a new user and switch to that user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000
CMD [ "npm", "run", "start"]
