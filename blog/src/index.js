const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes')
const db = require('./config/db')
const app = express();
const port = 3000;
//connet db
db.connect();
app.use(express.static(path.join(__dirname, 'public')))

// http logger
app.use(morgan('combined'));

// template engine - cấu hình handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs' // Đảm bảo bạn cung cấp phần mở rộng cho tên template
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoucces/views'));



//Routes init
route(app)

app.listen(port, () => console.log(`hello http://localhost:${port}`));
