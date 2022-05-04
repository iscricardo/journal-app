import mongoose from "mongoose";

/*
* 0 = disconected
* 1 = connected
* 2 = connecting
* 3 = disconnecting
*/

const mongooseConnection = {
    isConnected: 0
}

export const connect = async()=>{

    if( mongooseConnection.isConnected ){
        console.log('Ya estabamos conectados');
        return;
    }

    if ( mongoose.connections.length > 0 ){
        mongooseConnection.isConnected = mongoose.connections[0].readyState;
        
        if ( mongooseConnection.isConnected === 1){
            console.log('Usando conexión Anterior');
            return;
    
    
        }
        await mongoose.disconnect();
    }


    await mongoose.connect( process.env.MONGO_URL || '');
    mongooseConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL );
}

export const disconect = async()=>{

    if ( process.env.NODE_ENV === 'development') return;

    if ( mongooseConnection.isConnected === 0) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
}