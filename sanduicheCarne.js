
const Sanduiche = require('./sanduiche');  

class SanduicheCarne extends Sanduiche  {  
    constructor(price) {  
        super(price)
        let that = Object.create(new Sanduiche());
        this.price = () => that.price() + 7.49;
        console.log('Sanduíche de Carne custa $7,49');
        return this
    }  
}  

module.exports = SanduicheCarne;