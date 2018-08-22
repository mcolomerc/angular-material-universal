FROM node

RUN mkdir /app
WORKDIR /app  

ENV PATH /app/node_modules/.bin:$PATH

# add app
ADD . /app

RUN npm install
RUN npm run build:ssr

EXPOSE 4000 
CMD npm run serve:ssr