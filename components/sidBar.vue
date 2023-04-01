<template>
    <v-sheet class="overflow-hidden sidBar" style="position: relative;">
        <v-container class="position-menu">
            <v-row align="left" justify="left">
                <v-btn color="pink" dark @click.stop="drawer = !drawer">
                    Toggle
                </v-btn>
                <v-icon dark @click.stop="drawer = !drawer">fas fa-list</v-icon>
            </v-row>
        </v-container>
        <!-- temporary "props disabled click" -->
        <v-navigation-drawer v-model="drawer" absolute>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" link>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-sheet>
</template>
  
<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'About', icon: 'mdi-forum' },
            ],
        }
    },
}
</script>
  