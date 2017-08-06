FROM node:boron

# Expose the default port
EXPOSE 8080

# Create/Set the working directory
RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install --quiet

# Copy App
COPY . /app

# Run app
CMD npm start