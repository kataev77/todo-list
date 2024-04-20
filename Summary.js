function summary() {
   const cart = {
       cartItems: [],
       addToCart: function (nameItem) {
           const newItem = { name: nameItem, price: Math.floor(Math.random()* 10000) + 100}

           if (typeof nameItem !== 'string') {
               console.log('Ошибка. Невозможно добавить товар.')
           } else {
               this.cartItems.push(newItem)
               console.log(`${newItem.name}, успешно добавлен в корзину.`)
           }
       },
       viewCart: function() {
           const itemCart = this.cartItems.map(newItem => `${newItem.name} за ${newItem.price}R`)

           if (this.cartItems <= 0) {
               console.log('Корзина пуста')
           }else {
               console.log(`В корзине ${itemCart}`)
           }
       },
       total: function () {
           const sum = this.cartItems.reduce((summ, itemm) => summ + itemm.price, 0)
           console.log(`Итого: ${sum}r`)
       },
       removeFromCart: function (nameProductRemoved) {
           const remove = this.cartItems.findIndex(item => item.name === nameProductRemoved)

           if (remove !== -1) {
               this.cartItems.splice(nameProductRemoved, 1);
               console.log(`${nameProductRemoved} удален из корзины.`);
           } else {
               console.log('Такого товара нет в корзине.');
           }
       },
       placeOrder: function(cardNumber) {
           if (typeof cardNumber !== 'number') {
               console.log('Извините. Ваш способ оплаты не принят');
           }else {
               const sum = this.cartItems.reduce((summ, itemm) => summ + itemm.price, 0)
               console.log(`Ваш счет: ${sum}. Вы оплатили данную сумму с карты под номером: ${cardNumber}`)
           }
           this.cartItems = []
       }
   }
   return cart
}
const result = summary()
result.addToCart('Морковь')
result.addToCart('Свекла')
result.viewCart()
result.total()
result.removeFromCart('Морковь')
result.placeOrder(45)
