'use strict';

// Start up DB Server
const { db } = require('./src/auth/models/index.js');
const { startup } = require('./src/server');

const PORT = process.env.PORT || 3000;



db.sync()
  .then(() => {
    startup(PORT); 
  }).catch(e => {
    console.error('Could not start server', e.message);
  })

