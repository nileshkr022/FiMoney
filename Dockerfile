FROM node:18

WORKDIR /usr/src/app

COPY inventory-backend/package*.json ./
RUN npm install

COPY inventory-backend/. .

EXPOSE 8080   
# EXPOSE informs Docker which port to map, but your app must use $PORT!

ENV NODE_ENV=production

# Entrypoint—uses whatever PORT is set, as controlled in your app code above.
CMD ["npm", "run", "dev"]
