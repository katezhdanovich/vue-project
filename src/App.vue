<template>
    <div class="container">
        <b-button v-b-modal.modal-add style="margin: 10px 0">Add new record</b-button>
        <Table :info="info" @show-delete-modal="showDeleteModal" @show-edit-modal="showEditModal"/>
        <ModalEdit ref="editForm" @update-item="updateItem" @close-modal="closeModal"/>
        <ModalAdd @save-item="saveItem"/>
        <ModalDelete @delete-item = "deleteItem" @close-modal="closeModal"/>
    </div>
</template>

<script>

    import Table from './components/Table.vue'
    import ModalEdit from './components/ModalEdit.vue'
    import ModalAdd from './components/ModalAdd.vue'
    import ModalDelete from './components/ModalDelete.vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {  
        name: 'App',
        components: {
            Table, ModalEdit, ModalAdd, ModalDelete
        },
        data() {
            return {
                info: [
                    { productName: "Product 1", unitPrice: 3, inStock: 7, discontinued: true},
                    { productName: "Product 2", unitPrice: 4, inStock: 0, discontinued: false},
                    { productName: "Product 3", unitPrice: 32, inStock: 15, discontinued: true},
                    { productName: "Product 4", unitPrice: 3, inStock: 8, discontinued: true}
                ],
                updatedIndex: -1,
                deletedIndex: -1
            }
        },
        methods:{
            deleteItem(){
                this.info.splice(this.deletedIndex, 1)
                this.deletedIndex = -1
            },
            showEditModal(index){
                this.updatedIndex = index
                this.$refs.editForm.setupEditModel(this.info[index])
            },
            showDeleteModal(index){
                this.deletedIndex = index
            },
            updateItem(data){
                this.info[this.updatedIndex].productName = data.productName
                this.info[this.updatedIndex].unitPrice = data.unitPrice
                this.info[this.updatedIndex].inStock = data.inStock
                this.info[this.updatedIndex].discontinued = data.discontinued
                this.updatedIndex = -1
            },
            saveItem(data){
                this.info.unshift(data)
            },
            closeModal(){
                this.updatedIndex = -1
                this.deletedIndex = -1
            }
        }
    }

</script>