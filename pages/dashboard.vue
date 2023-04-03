<template>
    <ul class="quadro">

        <li v-for="item in listVideos" :key="item.id">
            <card :item="item" />

        </li>
    </ul>
</template>

<script>
import card from '../components/card.vue';

export default {
    components: {
        card
    },

    data() {
        const listVideos = [
            {
                id: 0,
                idCanal: 15555,
                title: 'MC Ryan SP E MC Hariel - O Dia Chegou (GR6 Explode) DJ Pedro',
                media: '4.5 (8.13)',
                canal: 'GR6 EXPLODE',
                description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
                videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            },
            {
                id: 1,
                idCanal: 15555,
                title: 'Dillas',
                media: '7.5 (4.13)',
                canal: 'GR6 EXPLODE',
                description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
                videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            },
            {
                id: 2,
                idCanal: 15555,
                title: 'Dillas',
                media: '7.5 (4.13)',
                canal: 'GR6 EXPLODE',
                description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
                videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            }, {
                id: 3,
                idCanal: 15555,
                title: 'Dillas',
                media: '7.5 (4.13)',
                canal: 'GR6 EXPLODE',
                description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
                videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            }, {
                id: 4,
                idCanal: 15555,
                title: 'Dillas',
                media: '7.5 (4.13)',
                canal: 'GR6 EXPLODE',
                description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
                videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            }, {
                id: 5,
                idCanal: 15555,
                title: 'Dillas',
                media: '7.5 (4.13)',
                canal: 'GR6 EXPLODE',
                description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
                videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
            },
        ]


        return {
            listVideos,

        }
    }
}

</script>

<style scoped>
.quadro {
    display: flex;
    flex-wrap: wrap;
    gap: 45px;
    justify-content: center;

}

li {
    list-style: none;
    flex-grow: 2rem;
}
</style>