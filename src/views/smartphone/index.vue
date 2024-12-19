<script setup>
    // import ref and onMounted
    import { ref, onMounted } from 'vue';

    // import api
    import api from '../../api';

    // define state for smartphones
    const smartphones = ref([]);

    // method to fetch smartphones data
    const fetchDataSmartphones = async () => {
        // fetch data from the API
        await api.get('/api/smartphones')
        .then(response => {
            // set response data to state "smartphones"
            smartphones.value = response.data.data;
        });
    };

    // run onMounted hook to fetch data
    onMounted(() => {
        // call the method to fetch smartphones data
        fetchDataSmartphones();
    });

    // method to delete a smartphone post
    const deleteSmartphone = async (id) => {
        // delete smartphone via the API
        await api.delete(`/api/smartphones/${id}`)
        .then(() => {
            // call fetchDataSmartphones to refresh the list
            fetchDataSmartphones();
        });
    };
</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'smartphones.create' }" class="btn btn-md btn-success rounded shadow border-0 mb-3">ADD NEW SMARTPHONE</router-link>
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
                                <tr v-if="smartphones.length == 0">
                                    <td colspan="5" class="text-center">
                                        <div class="alert alert-danger mb-0">
                                            Data Not Available!
                                        </div>
                                    </td>
                                </tr>
                                <tr v-else v-for="(smartphone, index) in smartphones" :key="index">
                                    <td>{{ smartphone.nama }}</td>
                                    <td>{{ smartphone.merk }}</td>
                                    <td>{{ smartphone.harga }}</td>
                                    <td>{{ smartphone.review }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'smartphones.edit', params:{id: smartphone.id} }" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</router-link>
                                        <button @click.prevent="deleteSmartphone(smartphone.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0">DELETE</button>
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
