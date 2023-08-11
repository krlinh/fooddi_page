const db = require('../app/models/index');

async function connect(){
  try{
    await db.mongoose.connect('mongodb://localhost:27017/fooddi_page',{  
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('connect to mongooes successfully!');
  }catch(error){
    console.log('connect failure!');

  }
}

module.exports = {connect};