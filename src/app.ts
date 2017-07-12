import * as express from 'express';
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const users = require('./routes/users');
const spedizioni = require('./routes/spedizioni');

export class App {
  constructor() {
    this.app = express();

// view engine setup
    this.app
      .set(
        'views'
        ,
        path
          .join(__dirname,

            'views'
          ));
    this
      .app
      .set(
        'view engine'
        ,
        'hbs'
      );

// uncomment after placing your favicon in /public
//this.app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    this
      .app
      .use(logger

      (
        'dev'
      ));
    this
      .app
      .use(bodyParser

        .json()
      );
    this
      .app
      .use(bodyParser

        .urlencoded({extended: false})
      );
    this
      .app
      .use(cookieParser

      ());
    this
      .app
      .use(express

        .static(path

          .join(__dirname,

            'public'
          )));

    this
      .app
      .use(
        '/'
        ,
        routes
      );
    this
      .app
      .use(
        '/users'
        ,
        users
      );
    this
      .app
      .use(
        '/spedizioni'
        ,
        spedizioni
      );


// catch 404 and forward to error handler
    this
      .app
      .use(
        function (req: express.Request, res: express.Response, next: express.NextFunction) {
          const err: Error = new Error('Not Found');
          err.status = 404;
          next(err);
        }
      );

// error handlers

// development error handler
// will print stacktrace
    if (this

        .app

        .get(
          'env'
        ) ===
      'development'
    ) {
      this
        .app
        .use(
          function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            res.status(err.status || 500);
            res.send({
              esito: {
                esito: false,
                message: err.message
              },
              error: err
            });
          }
        );
    }

// production error handler
// no stacktraces leaked to user
    this.app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      res.status(err.status || 500).send({
        esito: {
          esito: false,
          message: err.message
        }
      });
    });
  }

}