<template>
	<div class="about">
		<h1>This is an blog page</h1>
		<infoDisplay v-bind:bookInfo="book" />
	</div>
</template>
<script>
import InfoDisplay from "@/components/InfoDisplay";

export default {
	components: {
		infoDisplay: InfoDisplay
	},
	computed: {
		book() {
			return this.$root.getShowcaseBook(this.$route.params.id);
		}
	}
};
</script>