//********************

 // Initial code
  let product = {name: 'cargador',
  price: 280,
  doesItWork: false,
  previousOwner: "Bob"
  };

 for (let i = 0; i < product.length; i++) 
 {
     console.log(`${key}: ${product[key]}`)
 }
 
  delete product.previousOwner
  product.doesItWork = true

  if (product.price > 100) { 
    product.discountPercentage = 10
    
    console.log(`Tenemos el ${product.name} en venta por $${product.price}, con el  ${product.discountPercentage}% de descuento!`);
    
    console.log("Precio sin porcentaje= " + product.price )
   
    totalPorcentaje = product.price * product.discountPercentage / 100
    console.log("El monto del 10% es: " + totalPorcentaje)
    product.price = product.price - totalPorcentaje;
    console.log("El precio con el 10% de descuento es: "+ product.price);
  } 