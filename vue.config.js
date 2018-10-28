const mockdata = require('./static/mock/index.json');
const Citydata = require('./static/city/city.json');
const MockDetall = require('./static/mock/detail.json');

module.exports={
  devServer: {
    port:8088,
    before(app){
      app.get('/static/mock',(req,res,next)=>{
        res.json(mockdata);
      }),
      app.get('/static/city',(req,res,next)=>{
        res.json(Citydata);
      }),
      app.get('/static/mock/detall',(req,res,next) => {
        res.json(MockDetall);
      })
    }
  }
}