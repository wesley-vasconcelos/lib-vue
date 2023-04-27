<template>
    <v-card flat height="80" tile class="navbar">
        <v-toolbar>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>LISTA DE MUSICAS</v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="barra-pesquisa">
                <v-text-field v-model="search" label="Pesquisa"></v-text-field>


                <v-btn icon>

                    <v-icon @click="$emit('search', search)">mdi-magnify</v-icon>
                </v-btn>
            </div>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>

export default {
    name: 'navBar',

    data() {
        return {
            search: ''
        }
    },
    methods: {
        handleSearch() {
            // Lógica para tratar a pesquisa aqui
            console.log('Pesquisa realizada: ' + this.search)
        }
    }
}
</script>

<style scoped>
.navbar {
    position: absolute;
    width: 87vw;
    left: 190px;
    top: 0;
}

.barra-pesquisa {
    display: flex;
    align-items: center;
}
</style>