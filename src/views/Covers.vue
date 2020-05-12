<template>
	<div class="covers-container">
		<article id="covers">
			<coverRendering
				v-for="book in books"
				v-bind:key="book.id"
                v-bind:book="book"
			/>
		</article>
	</div>
</template>

<script>
// // @ is an alias to /src
import coverRendering from "../components/CoverRendering.vue";

export default {
	components: {
		coverRendering: coverRendering
	},
	computed: {
		books() {
			return this.$root.getBooks()
		}
	}
};
</script>
<style lang="scss">
#covers {
	background-color: rgb(199, 0, 0);
    display: flex;
    flex-wrap: wrap;
    .coverRendering {
        flex-grow: 1;
        height: 200px;
        width: 150px;
    }
}
</style>
