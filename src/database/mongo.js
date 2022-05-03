const mongoose=require('mongoose')

const mongoPath='mongodb+srv://BGT:1234@cluster0.qduer.mongodb.net/BTG?retryWrites=true&w=majority'


module.exports = async () => {
    await mongoose.connect(mongoPath, {})
    return mongoose
}