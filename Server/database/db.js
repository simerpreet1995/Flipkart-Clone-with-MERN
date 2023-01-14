import mongoose from 'mongoose'

// mongodb+srv://simer:<password>@simer.d1mobp5.mongodb.net/?retryWrites=true&w=majority

 const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@simer.d1mobp5.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected successfully')

    } catch(error){
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection