const Sanduiche = require('./sanduiche');

class SanduicheFrango extends Sanduiche  {  
    constructor(price) {  
        super(price)
        let that = Object.create(new Sanduiche());
        this.price = () => that.price() + 4.50;
        console.log('Sanduíche de Frango custa $4,50');
        return this
    }  
}  

module.exports = SanduicheFrango;