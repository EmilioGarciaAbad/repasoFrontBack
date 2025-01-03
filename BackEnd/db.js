import mongoose from 'mongoose';

const connectdb = async() => {
    try {
        await mongoose.connect("mongodb://localhost/RecuperacionDB")
            console.log('Conexión exitosa con la base de datos')
    } catch (error) {
        console.log(error);
    }
}

export default connectdb;