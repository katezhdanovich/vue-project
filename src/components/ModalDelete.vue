<template>
    <div>
        <b-modal id="modal-delete" @ok="deleteItem" @hidden="closeModal" title="Delete">
            <div>Are you sure you want to delete this record?</div>
        </b-modal>
    </div>
</template>

<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        methods:{
            deleteItem(){
                this.$emit('delete-item')
            },
            closeModal(){
                this.$emit('close-modal')
            }
        }
    }
    
</script>