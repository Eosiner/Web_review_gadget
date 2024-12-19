<script setup>
    // import ref and onMounted
    import { ref, onMounted } from 'vue';

    // import api
    import api from '../../api';

    // define state for laptops
    const laptops = ref([]);

    // method to fetch laptops data
    const fetchDataLaptops = async () => {
        // fetch data from the API
        await api.get('/api/laptops')
        .then(response => {
            // set response data to state "laptops"
            laptops.value = response.data.data;
        });
    };

    // run onMounted hook to fetch data
    onMounted(() => {
        // call the method to fetch laptops data
        fetchDataLaptops();
    });

    // method to delete a laptop post
    const deleteLaptop = async (id) => {
        // delete laptop via the API
        await api.delete(`/api/laptops/${id}`)
        .then(() => {
            // call fetchDataLaptops to refresh the list
            fetchDataLaptops();
        });
    };
</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'laptops.create' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW LAPTOP</router-link>
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead class="bg-dark text-white">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Review</th>
                                    <th scope="col" style="width:15%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="laptops.length == 0">
                                    <td colspan="5" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Not Available!
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="(laptop, index) in laptops" :key="index">
                                    <td>{{ laptop.nama }}</td>
                                    <td>{{ laptop.merk }}</td>
                                    <td>{{ laptop.harga }}</td>
                                    <td>{{ laptop.review }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'laptops.edit', params:{id: laptop.id} }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</router-link>
                                        <button @click.prevent="deleteLaptop(laptop.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
