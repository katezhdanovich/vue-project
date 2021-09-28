<template>
    <div>
        <b-modal id="modal-add" @ok="saveItem" @hidden="closeModal" title="Add">
            <form>
                <b-form-group label="Product name" label-for="name" invalid-feedback="Incorrect value" :state="nameState">
                    <b-form-input id="name" v-model="name" :state="nameState" required type="text"></b-form-input>
                </b-form-group>

                <b-form-group label="Unit price" label-for="price" invalid-feedback="Incorrect value" :state="priceState">
                    <b-form-input id="price" :state="priceState" required type="number" v-model.number="price" class="form-control" min=1></b-form-input>
                </b-form-group>

                <b-form-group label="In stock" label-for="count" invalid-feedback="Incorrect value" :state="countState">
                    <b-form-input id="count" :state="countState" required type="number" v-model.number="count" class="form-control"></b-form-input>
                </b-form-group>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="sale" id="sale">
                    <label class="form-check-label" for="sale">Discontinued</label>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        data: function(){
            return{
                name: "",
                price: "",
                count: 0,
                sale: false,

                nameState: null,
                priceState: null,
                countState: null
            }
        },
        methods:{
            checkFormValidity() {
                let isValid = true
                
                this.nameState = this.name ? true : false
                isValid = isValid && this.nameState

                this.priceState = (this.price ? true : false) && this.price >= 1
                isValid = isValid && this.priceState 

                this.countState = ((this.count === "") ? false : true) && this.count >= 0 && Number.isInteger(this.count)
                isValid = isValid && this.countState

                return isValid
            },

            saveItem(bvModalEvt){
                if (!this.checkFormValidity()) { 
                    bvModalEvt.preventDefault()
                    return 
                }

                this.$emit('save-item', {
                    productName: this.name,
                    unitPrice: this.price,
                    inStock: this.count,
                    discontinued: this.sale
                })

                this.closeModal()
            },

            closeModal(){
                this.$emit('close-modal')
                this.name = ""
                this.price = ""
                this.count = 0
                this.sale = false
                
                this.nameState = null
                this.priceState = null
                this.countState = null
            }
        }
    }
    
</script>