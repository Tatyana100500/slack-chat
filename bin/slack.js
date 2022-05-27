#!/usr/bin/env node

import getApp from '../server/index.js';

const port = 5005;
const address = '0.0.0.0';

getApp({ port }).then((app) => {
  app.listen(port, address, () => {
    console.log(`Server has been started on ${port}`);
  });
});
