### To start developing your application
## $run npm run dev or $yarn dev.
## This starts the development server on http://localhost:3000.


### Adding Bootstrap
## Install reactstrap and Bootstrap from NPM. Reactstrap does not include Bootstrap CSS so this needs to be installed as well:

$npm install --save bootstrap
$npm install --save reactstrap react react-dom

## Create a pages/_app.js file if not already present. Then, import the styles.css file.
## Import Bootstrap CSS in the src/index.js file:

## Error
import 'bootstrap/dist/css/bootstrap.min.css';

## Run
npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
* https://stackoverflow.com/questions/48847885/module-not-found-cant-resolve-bootstrap-dist-css-bootstrap-theme-css-in-c

### Icon
## https://fontawesome.com/how-to-use/on-the-web/using-with/react
## https://fontawesome.com/how-to-use/on-the-web/using-with/react