<template>
    <div>
        <navBar @search="search" style="position: fixed; z-index: 0;" />
        <ul class="quadro">

            <li v-for="item in listVideos" :key="item.id">
                <card :item="item" />

            </li>
        </ul>
        <Form @formValue="formValue" />
    </div>
</template>

<script>
import card from '../components/card.vue';
import Form from '../components/form/form.vue';
import navBar from '../components/navBar.vue';
export default {
    components: {
        navBar,
        card,
        Form
    },
    mounted() {
        this.listVideos = this.initialValue
        this.$axios.get('/file/apicep/06233-030.json')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    },

    data() {
        const initialValue = [
            {
                id: 0,
                idCanal: 15555,
                title: 'MC Ryan SP',
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

        const listVideos = []
        const search = (e) => {
            const newArray = [];
            const regex = new RegExp([...e].join('.*'), 'i');
            initialValue.filter(item => {
                if (item.title.match(regex)) {
                    newArray.push(item);
                }
            });

            if (newArray.length === 0) {
                this.listVideos = this.initialValue;
            } else {
                this.listVideos = newArray;
            }
        };
        const formValue = (e) => {
            console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeee', e);
        }
        return {
            listVideos,
            search,
            initialValue,
            formValue


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
    margin-top: 150px;

}

li {
    list-style: none;
    flex-grow: 2rem;
}
</style>