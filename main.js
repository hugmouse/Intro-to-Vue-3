const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'Some really handy socks!',
            selectedVariant: 0,
            imageDescription: 'Socks image',
            inventory: 8,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
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
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            if(this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale'
            }
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})
