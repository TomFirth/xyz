import createError from 'http-errors'
import express from 'express';

var logger = require('morgan');

import indexRouter from './src/routes';

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
console.error(err);
    res.send('error');
});

app.listen(3000, ()=>{
    console.log('App listening on port 3000');
});


export default app;
