<template>
  <div>
    <navBar @search="pesquisa" />
    <tabela :data="listaDeVideos" class="mt-16" />
  </div>
</template>

<script>
import tabela from '../components/tabela.vue';
import navBar from '../components/navBar.vue';
export default {
  name: 'InspirePage',
  components: {
    tabela, navBar,
  },
  mounted() {
    this.listaDeVideos = this.valorInicial
  },
  data() {
    const valorInicial = [
      {
        id: 0,
        idCanal: 15555,
        title: 'dillas',
        media: '4.5 (8.13)',
        canal: 'GR6 EXPLODE',
        description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
        videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
      },
      {
        id: 1,
        idCanal: 15555,
        title: 'MC Ryan SP',
        media: '7.5 (4.13)',
        canal: 'GR6 EXPLODE',
        description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
        videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
      },
      {
        id: 2,
        idCanal: 15555,
        title: 'MC Ryan SP',
        media: '7.5 (4.13)',
        canal: 'GR6 EXPLODE',
        description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
        videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
      }, {
        id: 3,
        idCanal: 15555,
        title: 'MC Ryan SP',
        media: '7.5 (4.13)',
        canal: 'GR6 EXPLODE',
        description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
        videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
      }, {
        id: 4,
        idCanal: 15555,
        title: 'MC Ryan SP',
        media: '7.5 (4.13)',
        canal: 'GR6 EXPLODE',
        description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
        videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
      }, {
        id: 5,
        idCanal: 15555,
        title: 'MC Ryan SP',
        media: '7.5 (4.13)',
        canal: 'GR6 EXPLODE',
        description: 'Siga no Instagram: @gr6explodeoriginal | @gr6filmesoficial | @gr6music Produzido por GR6 Filmes',
        videoUrl: 'https://www.youtube.com/watch?v=ebE3W_D3qZw&embeds_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title'
      },
    ]

    const listaDeVideos = []
    const pesquisa = (e) => {
      const novoArray = []
      valorInicial.filter(item => {
        if (e == item.title) {
          novoArray.push(item)
        }

        if (novoArray === 0) {
          this.listaDeVideos = this.valorInicial
        } else {
          this.listaDeVideos = novoArray
        }

      })

    }
    return {
      valorInicial,
      listaDeVideos,
      pesquisa
    }
  }
}
</script>



        