const SanduicheCarne = require('./sanduicheCarne');
const SanduicheFrango = require('./sanduicheFrango');


function QueijoMussarelaRalado(c) {
    let that = Object.create(c);
    that.price = () => c.price() + 2.00;
    console.log('Adicional queijo mussarela ralado custa $2,00');
    console.log('preço total:', that.price());
    return that;
  }

function Bacon(c) {
    let that = Object.create(c);
    that.price = () => c.price() + 3.00;
    console.log('Adicional bacon custa $3,00');
    console.log('preço total:', that.price());
    return that;
  }

function Pepperoni(c) {
    let that = Object.create(c);
    that.price = () => c.price() + 0.99;
    console.log('Adicional pepperoni custa $0,99');
    console.log('preço total:', that.price());
    return that;
  }

  var sanduicheCarne = new SanduicheCarne();
  var sanduicheCarneQueijoMussarelaRalado = new QueijoMussarelaRalado(sanduicheCarne);
  var sanduicheCarneQueijoMussarelaRaladoBacon = new Bacon(sanduicheCarneQueijoMussarelaRalado);
 

  var sanduicheFrango = new SanduicheFrango();
  var sanduicheFrangoQueijoMussarelaRalado = new QueijoMussarelaRalado(sanduicheFrango);
  var sanduicheFrangoQueijoMussarelaRaladoPepperoni = new Pepperoni(sanduicheFrangoQueijoMussarelaRalado);
  