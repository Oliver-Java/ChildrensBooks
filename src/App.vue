<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Covers</router-link>|
			<router-link to="/about">about</router-link>|
		</div>
		<router-view />
	</div>
</template>
// TODO: 
// - Byt namn:
// About -> Info
// BookInfoRend.. -> InfoDisplay
// Covers -> BookGallery
// CoverRendering -> BookDisplay
// Or similiar by convention

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	// text-align: center;
	color: #2c3e50;
}

#nav {
	// padding: 30px;
	background-color: rgb(98, 98, 98);
	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
