const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes')
const db = require('./config/db')
const app = express();
const methodOverride = require('method-override')
const port = 3000;
//connet db
db.connect();
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))
// http logger
app.use(morgan('combined'));
app.use(express.urlencoded())
app.use(express.json())
// template engine - cấu hình handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs', // Đảm bảo bạn cung cấp phần mở rộng cho tên template
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoucces/views'));



//Routes init
route(app)

app.listen(port, () => console.log(`hello http://localhost:${port}`));
