<template>
	<div class="coverRendering" v-on:click="ChangeDisplayID" 
     v-bind:style= " { 'background-color': book.color } ">
		<router-link v-bind:to="'/about/' + book.id">
			<div>
				<ul>
					<li>Title: {{book.title}}</li>
                    <br>
					<li>Author: {{book.author}}</li>
				</ul>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "coverRendering",
	props: {
		book: Object
	},
	methods: {
		ChangeDisplayID() {
			this.$root.setDisplayID(this.book.id);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"> 
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
