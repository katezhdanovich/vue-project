<template>
    <div>
        <b-modal id="modal-edit" @ok="updateItem" @hidden="closeModal" title="Edit">
            <form>
                <b-form-group label="Product name" label-for="name" invalid-feedback="Incorrect value" :state="nameState">
                    <b-form-input id="name" v-model="name" :state="nameState" required type="text"></b-form-input>
                </b-form-group>

                <b-form-group label="Unit price" label-for="price" invalid-feedback="Incorrect value" :state="priceState">
                    <b-form-input id="price" :state="priceState" required type="number" v-model.number="price" class="form-control"></b-form-input>
                </b-form-group>

                <b-form-group label="In stock" label-for="count" invalid-feedback="Incorrect value" :state="countState">
                    <b-form-input id="count" :state="countState" required type="number" v-model.number="count" class="form-control"></b-form-input>
                </b-form-group>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="sale" id="sale">
                    <label class="form-check-label" for="sale">Discontied</label>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        data(){
            return{
                name: "",
                price: "",
                count: "",
                sale: "",

                nameState: null,
                priceState: null,
                countState: null
            }
        },
        methods:{
            setupEditModel(info){
                this.name = info.productName
                this.price = info.unitPrice
                this.count = info.inStock
                this.sale = info.discontied
            },

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
            
            updateItem(bvModalEvt){
                if (!this.checkFormValidity()) { 
                    bvModalEvt.preventDefault()
                    return 
                }

                this.$emit('update-item', {
                    productName: this.name,
                    unitPrice: this.price,
                    inStock: this.count,
                    discontied: this.sale
                })

                this.closeModal()
            },

            closeModal(){
                this.nameState = null
                this.priceState = null
                this.countState = null
                
                this.$emit('close-modal')
            }    
        }
    }

</script>