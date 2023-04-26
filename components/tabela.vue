<template>
    <div class="row-12" style="color: black;">
        <h1 class="mt-8 mb-8">Lista</h1>
        <v-data-table :headers="headers" :items="data" :items-per-page="5" class="elevation-1"></v-data-table>

        <!-- <v-text-field v-model="search" label="pesquisa"></v-text-field> -->
    </div>
</template>
  
<script>
export default {
    props: {
        dados: Array,
        data: Array
    },
    data(props) {
        const search = ""


        return {
            headers: [
                {
                    text: 'id',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {
                    text: 'idCanal',
                    align: 'start',
                    sortable: false,
                    value: 'idCanal',
                },
                {
                    text: 'title',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
                {
                    text: 'media',
                    align: 'start',
                    sortable: false,
                    value: 'media',
                },
                {
                    text: 'canal',
                    align: 'start',
                    sortable: false,
                    value: 'canal',
                },
                {
                    text: 'description',
                    align: 'start',
                    sortable: false,
                    value: 'description',
                },
                {
                    text: 'videoUrl',
                    align: 'start',
                    sortable: false,
                    value: 'videoUrl',
                },

            ],
            data: props.data
            // data: [
            //     {
            //         id: 0,
            //         idCanal: 15555,
            //         title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
            //         media: '4.5 (8.13)',
            //         canal: 'GR6 EXPLODE',
            //         description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
            //         videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            //     },
            //     {
            //         id: 0,
            //         idCanal: 15555,
            //         title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
            //         media: '4.5 (8.13)',
            //         canal: 'GR6 EXPLODE',
            //         description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
            //         videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            //     }, {
            //         id: 0,
            //         idCanal: 15555,
            //         title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
            //         media: '4.5 (8.13)',
            //         canal: 'GR6 EXPLODE',
            //         description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
            //         videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            //     }, {
            //         id: 0,
            //         idCanal: 15555,
            //         title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
            //         media: '4.5 (8.13)',
            //         canal: 'GR6 EXPLODE',
            //         description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
            //         videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            //     }, {
            //         id: 0,
            //         idCanal: 15555,
            //         title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
            //         media: '4.5 (8.13)',
            //         canal: 'GR6 EXPLODE',
            //         description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
            //         videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            //     }, {
            //         id: 0,
            //         idCanal: 15555,
            //         title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
            //         media: '4.5 (8.13)',
            //         canal: 'GR6 EXPLODE',
            //         description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
            //         videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            //     }, {
            //         id: 0,
            //         idCanal: 15555,
            //         title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
            //         media: '4.5 (8.13)',
            //         canal: 'GR6 EXPLODE',
            //         description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
            //         videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            //     },

            // ],
        }
    },
}
</script>
<style scoped lang="scss"></style>