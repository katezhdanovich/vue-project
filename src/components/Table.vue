<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Product name</th>
                    <th>Unit price</th>
                    <th>Units in stock</th>
                    <th>Discontinued</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(element, index) in info" :key="index">
                    <td>{{ element.productName }}</td>
                    <td>{{ "$" + element.unitPrice.toFixed(2)}}</td>
                    <td>{{ element.inStock }}</td>
                    <td>{{ element.discontinued }}</td>
                    <td>
                        <b-button @click="showEditModal(index)" v-b-modal.modal-edit style="margin: 0 5px">Edit</b-button>
                        <b-button @click="showDeleteModal(index)" v-b-modal.modal-delete style="margin: 0 5px">Delete</b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
        props: ["info"],
        methods:{
            showDeleteModal(index){
                this.$emit('show-delete-modal', index)
            },
            
            showEditModal(index){
                this.$emit('show-edit-modal', index)
            }
        }
    }
    
</script>