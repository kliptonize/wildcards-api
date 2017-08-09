FROM node:8.2.1

# Expose the default port
EXPOSE 8443

# Create/Set the working directory
RUN mkdir /app
WORKDIR /app

COPY package.json /app
RUN npm install --quiet

# Copy App
COPY . /app

# Run app
CMD npm start