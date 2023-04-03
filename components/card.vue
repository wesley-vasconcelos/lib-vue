<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400">
        <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
        </template>

        <div><iframe width="400" height="315" src="https://www.youtube.com/embed/ebE3W_D3qZw" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe></div>

        <v-card-title>MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro</v-card-title>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                <div class="grey--text ms-4">
                    4.5 (413)
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                GR6 EXPLODE
            </div>

            <div>Siga no Instagram:
                @gr6explodeoriginal | @gr6filmesoficial | @gr6music

                Produzido por GR6 Filmes</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>



        <v-card-actions class="pt-0">
            <v-btn color="deep-purple lighten-2" text @click="reserve">
                Assistir
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'Card',
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    },
}

</script>

<style></style>