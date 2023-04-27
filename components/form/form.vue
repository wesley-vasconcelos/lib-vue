<template>
    <form>
        <v-text-field :value="form.nameUser" v-model="form.nameUser" label="name"></v-text-field>
        <v-text-field v-model="form.email" label="E-mail"></v-text-field>
        <div class="flex">

            <v-text-field type="number" v-model="form.cep" label="CEP"></v-text-field>
            <v-text-field :value="form.rua" v-model="form.rua" label="Rua"></v-text-field>

            <v-btn class="mr-4" @click="searchAdress()">
                Buscar Endereço
            </v-btn>
        </div>




        <v-btn class="mr-4" @click="$emit('formValue', form)">
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn>
    </form>
</template>
<script>
export default {
    name: 'formVueExample',

    data() {
        const searchAdress = () => {
            const cep = this.form.cep.slice(0, 5) + '-' + this.form.cep.slice(-3)
            this.$axios.get(`/file/apicep/${cep + '.json'}`)
                .then((response) => {
                    console.log('end===>', response.data);
                    this.form.rua = response.data.address

                })
                .catch((error) => {
                    console.error(error);
                    alert('Erro! Digite um cep valido')
                });
        }

        return {
            searchAdress,
            form: {
                nameUser: '',
                email: '',
                rua: ''
            },

        }
    }
}
</script>