const path = require('path')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

app.engine('hbs', handlebars(
  {extname: '.hbs'}
))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})