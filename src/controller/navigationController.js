
const navigationController ={
    getHome : (req, res , next) => {
        res.render('index')
    },
    getList : (req, res) => {
        try {
            const arraycliente = await.find()
        } catch (error){
            console.log(error)
        }
        res.render("clientes",)
    },
    
    getApert : (req, res) => {
        res.render('apertura')
    },
    getTrans: (req, res) => {
        res.render('trans')
    },
 
}

module.exports =navigationController