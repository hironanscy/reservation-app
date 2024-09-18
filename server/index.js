const express = require('express')
const mongoose = require('mongoose');
const config = require('./config')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')
const path = require('path')

mongoose.connect(config.DB_URI)
  .then(() => console.log('Connected!'))
  .then(
    () => {
      if(process.env.NODE_ENV !== 'prod') {
        const fakeDb = new FakeDb()
        // fakeDb.initDb()
      }
    }
  )

const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res){
//     res.json({'success': true })
// })

if(process.env.NODE_ENV === 'prod') {

  const appPath = path.join( __dirname, '..', 'dist', 'reservation-app', 'browser' )
  app.use(express.static(appPath))
  app.get("*", function(req, res){
    res.sendFile(path.resolve(appPath, 'index.csr.html'))
  })

}

const PORT = process.env.PORT || '3001'

app.listen(PORT, function(){
    console.log('hello');

})

