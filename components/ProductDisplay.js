app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!-- image goes here -->
                <img :class="{ 'out-of-stock-img': !inStock }" :src="image" :alt="imageDescription">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p class="description"> {{ description }}</p>
                <hr>
                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
                <p v-else>Out of Stock</p>
              
              <p> Shipping: {{ shipping }}</p>
                <hr>
                <product-details :details="details"></product-details>
                <div
                        class="color-circle"
                        v-for="(variant, index) in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(index)"
                        :style="{ backgroundColor: variant.color }"></div>
                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>
                <div class="flex">
                    <button 
                        class="button" 
                        :class="{ disabledButton: !inStock }" 
                        @click="addToCart" 
                        :disabled="!inStock">Add to Cart</button>
                    <button 
                        class="button" 
                        :class="{ disabledButton: !inStock }" 
                        @click="removeFromCart" 
                        :disabled="!inStock">Remove from Cart</button>
                </div>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
  data() {
    return {
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
      sizes: ['big', 'not so big', 'smol'],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      if(this.inventory !== this.cart) { this.$emit('add-to-cart', this.variants[this.selectedVariant].id) }
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
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
    },
    shipping() {
      if (this.premium) {
        return 'free'
      }
      return '2.99'
    }
  }
})