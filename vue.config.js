const mockdata = require('./static/mock/index.json');
const Citydata = require('./static/city/city.json')

module.exports={
  devServer: {
    port:8080,
    before(app){
      app.get('/static/mock',(req,res,next)=>{
        res.json(mockdata);
      }),
      app.get('/static/city',(req,res,next)=>{
        res.json(Citydata);
      })
    }
  }
}