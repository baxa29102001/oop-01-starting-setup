class Product {
    constructor(title,img,price,desc) {
        this.title = title
        this.imageUrl = img
        this.price = price
        this.description = desc
    }
}

class ShoppingCart {
    items = [];

    addproduct(prod) {
        this.items.push(prod)
        this.total.innerHTML = `<h2>Total \$${1}</h2>`
    }

    render() {
        const section = document.createElement('section')
        section.innerHTML = `
            <h2>Total \$${0}</h2>
            <button>Add order</button>
        `
        this.total = section.querySelector('h2')

        section.className = 'cart'
        return section
    }
}

class ProductItem {
    constructor(product) {
        this.product = product
    }
     

    addToCart() {
      App.addItem(this.product)
    }
   

    render() {
        const prodLi = document.createElement('li')
            prodLi.className = 'product-item'
            prodLi.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="rasm" >
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add cart</button>
                </div>
            </div>
            `
        let btn = prodLi.querySelector('button')
        btn.addEventListener('click',this.addToCart.bind(this))
        return prodLi
    }

     
}

class ProductList {
    products = [
        new Product('A Pillow',
            'https://picsum.photos/500/500',
            19.99,
            'A good Pillow'
        ),
        new Product(
            'A carpet',
            'https://picsum.photos/500/600',
            99.99,
            'A good chooice from carpet'
        )
   
    
    ];

    constructor() { }
    
       render() {
        const prodList = document.createElement('ul')
        prodList.className = 'product-list'
        for (let pro of this.products) {
            let product = new ProductItem(pro)
            let prodLi = product.render()
            prodList.append(prodLi)
           }
           return prodList
    }
}


class Shop {
    render() {
        const renderHook = document.getElementById('app')

        this.cart  = new ShoppingCart()
        const shopRender = this.cart.render()

        const productList = new ProductList()

        const productrender = productList.render()
        renderHook.append(shopRender)
        renderHook.append(productrender)
    }
}

class App {
    static init() {
        const shop = new Shop()
        shop.render()
        this.cart = shop.cart
    }

    static addItem(product) {
        this.cart.addproduct(product)
    }

}

App.init()



