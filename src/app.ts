import * as express from 'express';
import * as path from 'path';
// const favicon = require('serve-favicon'); 
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import * as routes from './routes/index';
import * as users from './routes/users';
import * as shipments from './routes/shipments';
import HttpError from './classes/HttpError';

export default class App {
  public app: express.Express;
  constructor() {
    this.app = express();

    // view engine setup
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'hbs');

    // uncomment after placing your favicon in /public
    // this.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, 'public')));

    this.app.use('/', routes);
    this.app.use('/users', users);
    this.app.use('/shipments', shipments);


    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      const err: HttpError = new HttpError('Not Found', 404);
      next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (this.app.get('env') === 'development') {
      this.app.use((err: HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(err.status || 500);
        res.send({
          esito: {
            esito: false,
            message: err.message,
          },
          error: err,
        });
      });
    }

    // production error handler
    // no stacktraces leaked to user
    this.app.use((err: HttpError, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(err.status || 500).send({
        esito: {
          esito: false,
          message: err.message,
        },
      });
    });
  }
}
