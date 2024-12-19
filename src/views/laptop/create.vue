<script setup>
    // Import ref dari Vue
    import { ref } from "vue";

    // Import router untuk navigasi
    import { useRouter } from "vue-router";

    // Import API
    import api from "../../api";

    // Inisialisasi router
    const router = useRouter();

    // Definisikan state untuk kolom di tabel laptops
    const nama = ref("");
    const merk = ref("");
    const harga = ref("");
    const review = ref("");
    const errors = ref([]);

    // Method untuk menyimpan data baru
    const storeLaptop = async () => {
        try {
            // Kirim data ke API
            await api.post("/api/laptops", {
                nama: nama.value,
                merk: merk.value,
                harga: harga.value,
                review: review.value,
            });

            // Redirect ke halaman daftar
            router.push({ path: "/laptops" });
        } catch (error) {
            // Jika ada error, simpan ke state errors
            errors.value = error.response.data.errors || {};
        }
    };
</script>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <form @submit.prevent="storeLaptop()">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Nama Laptop</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="nama"
                                    placeholder="Masukkan Nama Laptop"
                                />
                                <div v-if="errors.nama" class="alert alert-danger mt-2">
                                    <span>{{ errors.nama[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Merk Laptop</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="merk"
                                    placeholder="Masukkan Merk Laptop"
                                />
                                <div v-if="errors.merk" class="alert alert-danger mt-2">
                                    <span>{{ errors.merk[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Harga Laptop</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    v-model="harga"
                                    placeholder="Masukkan Harga Laptop"
                                />
                                <div v-if="errors.harga" class="alert alert-danger mt-2">
                                    <span>{{ errors.harga[0] }}</span>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold">Review Laptop</label>
                                <textarea
                                    class="form-control"
                                    v-model="review"
                                    rows="5"
                                    placeholder="Masukkan Review Laptop"
                                ></textarea>
                                <div v-if="errors.review" class="alert alert-danger mt-2">
                                    <span>{{ errors.review[0] }}</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-md btn-primary rounded-sm shadow border-0">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
