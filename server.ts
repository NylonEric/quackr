require('dotenv').config();
import { server, app } from './app.ts';
const environment = process.env.NODE_ENV;
const debug_mode = !!process.env.DEBUG_MODE;
const reload = require('reload');
const appName = 'Quackr'; // ? get dynamically from package.json
// reload in dev environment only:
if (environment === 'development') {
  reload(app)
  .then( function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README
  
    // Reload started, start web server
    server.listen(app.get('port'), function () {
      console.log(`${appName} launched with Reload on http://localhost:${app.get('port')}\nmode: ${environment}\ndebug: ${debug_mode}`);
    });
  }).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err);
  });
} else {
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`${appName} launched on http://localhost:${port}\nmode: ${environment}\ndebug: ${debug_mode}`); // eslint-disable-line no-console
  });
}
