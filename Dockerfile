FROM node

RUN mkdir /app
WORKDIR /app  

ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli 

RUN npm run build:ssr

EXPOSE 4000 
CMD npm run serve:ssr