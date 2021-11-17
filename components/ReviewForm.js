app.component('review-form', {
    template: `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">
    
    <label for="review">Review:</label>
    <textarea name="review" id="review" cols="30" rows="10" v-model="review"></textarea>
    
    <label for="rating">Rating:</label>
    <select name="rating" id="rating" v-model.number="rating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    
    <div class="flex">
      <label for="yes">Yes</label>
      <input type="radio" id="yes" name="recommendation" :value="true" checked v-model="picked">

      <label for="nope">Nope</label>
      <input type="radio" id="nope" name="recommendation" :value="false" v-model="picked">
    </div>
    
    <input type="submit" class="button" value="Submit">
</form>`,

    data() {
        return {
            name: '',
            review: '',
            rating: null,
            picked: true,
        }
    },

    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Review is incomplete. Please fill you every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                picked: this.picked
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
            this.picked = true
        }
    }
})