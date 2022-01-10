const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('Todo salio bien');
    
  } catch (e) {
    console.log(e);
    throw new Error("Error a la hora de inicializar BD");
  }
};

module.exports ={ 
  dbConnection
}   