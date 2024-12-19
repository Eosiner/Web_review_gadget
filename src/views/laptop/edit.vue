<script setup>
    // Import ref dan onMounted
    import { ref, onMounted } from "vue";

    // Import router
    import { useRouter, useRoute } from 'vue-router';

    // Import API
    import api from "../../api";

    // Init router
    const router = useRouter();

    // Init route
    const route = useRoute();

    // Define state
    const nama = ref("");
    const merk = ref("");
    const harga = ref("");
    const review = ref("");
    const errors = ref([]);

    // onMounted
    onMounted(async () => {
        // Fetch detail data laptop by ID
        await api.get(`/api/laptops/${route.params.id}`)
            .then(response => {
                // Set response data to state
                nama.value = response.data.data.nama;
                merk.value = response.data.data.merk;
                harga.value = response.data.data.harga;
                review.value = response.data.data.review;
            });
    });

    // Method "updateLaptop"
    const updateLaptop = async () => {
        // Init formData
        let formData = new FormData();

        // Assign state value to formData
        formData.append("nama", nama.value);
        formData.append("merk", merk.value);
        formData.append("harga", harga.value);
        formData.append("review", review.value);
        formData.append("_method", "PATCH");

        // Update data with API
        await api.post(`/api/laptops/${route.params.id}`, formData)
            .then(() => {
                // Redirect
                router.push({ path: "/laptops" });
            })
            .catch((error) => {
                // Assign response error data to state "errors"
                errors.value = error.response.data.errors;
            });
    };
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="updateLaptop()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama</label>
                                <input type="text" class="form-control" v-model="nama" placeholder="Nama Laptop">
                                <div v-if="errors.nama" class="alert alert-danger mt-2">
                                    <span>{{ errors.nama[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Merk</label>
                                <input type="text" class="form-control" v-model="merk" placeholder="Merk Laptop">
                                <div v-if="errors.merk" class="alert alert-danger mt-2">
                                    <span>{{ errors.merk[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Harga</label>
                                <input type="number" class="form-control" v-model="harga" placeholder="Harga Laptop">
                                <div v-if="errors.harga" class="alert alert-danger mt-2">
                                    <span>{{ errors.harga[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Review</label>
                                <textarea class="form-control" v-model="review" rows="5" placeholder="Review Laptop"></textarea>
                                <div v-if="errors.review" class="alert alert-danger mt-2">
                                    <span>{{ errors.review[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
