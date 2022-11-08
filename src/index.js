import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import { route } from './routes/index.js';
import { connect } from './config/db/index.js';
import methodOverride from 'method-override';

//connect to db
connect();

const app = express();
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const hbs = create({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  },
});

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resource/views'));
app.use(express.static(path.join(__dirname, '/public')));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
