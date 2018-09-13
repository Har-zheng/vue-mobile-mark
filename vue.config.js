const mockdata = require('./static/mock/index.json');

module.exports={
  devServer: {
    port:8080,
    before(app){
      app.get('/static/mock',(req,res,next)=>{
        res.json(mockdata);
      })
    }
  }
}