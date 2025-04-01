import config from '../config';

// Access API URL
fetch(`${config.API_URL}users/`)
  .then(response => response.json())
  .then(data => console.log(data));
  
// Check environment settings
if (config.DEBUG) {
  console.log('Running in debug mode');
}