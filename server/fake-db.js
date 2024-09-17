const Product = require("./model/product");

class FakeDb{
    constructor(){
        this.products = [
            {
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                coverImage: 'img/phone-cover.jpg',
                heading:[
                    { 
                      title: 'heading-1',
                      content: 'content-1',
                    },
                    { 
                      title: 'heading-2',
                      content: 'content-2',
                    },
                    { 
                      title: 'heading-3',
                      content: 'content-3',
                    },
                ]
              },
              {
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                coverImage: 'img/phone-cover.jpg',
                heading:[
                  { 
                    title: 'heading-1',
                    content: 'content-1',
                  },
                  { 
                    title: 'heading-2',
                    content: 'content-2',
                  },
                ]
              },
              {
                name: 'Phone Standard',
                price: 299,
                coverImage: 'img/phone-cover.jpg',
                description: ''
              }

        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProdustsToDb()
    }
    async cleanDb(){
       await Product.deleteMany({})  // 全削除
    }

    pushProdustsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
        });
    }

    seeDb(){
        this.pushProdustsToDb()
    }
}

module.exports = FakeDb