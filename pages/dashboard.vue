<template>
    <ul class="quadro">
        <li>
            <card />
        </li>
        <li>
            <card />
        </li>
        <li>
            <card />
        </li>
        <li>
            <card />
        </li>
        <li>
            <card />
        </li>
        <li>
            <card />
        </li>
    </ul>
</template>

<script>
import card from '../components/card.vue';

export default {
    components: {
        card
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