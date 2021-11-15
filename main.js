const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'Some description I guess',
            imageURL: './assets/images/socks_green.jpg',
            imageDescription: 'Socks image',
            inStock: true,
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes: ['big', 'not so big', 'smol']
        }
    },
    methods: {
        addToCart() {
            if(this.inventory !== this.cart) { this.cart += 1 }
        },
        removeFromCart() {
            if(this.cart > 0) { this.cart -= 1 }
        },
        updateImage(variantImage) {
            this.imageURL = variantImage
        }
    }
})
