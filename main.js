const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Some description I guess',
            imageURL: './assets/images/socks_green.jpg',
            imageDescription: 'Socks image',
            inStock: true,
            inventory: 8,
            onSale: true
        }
    }
})