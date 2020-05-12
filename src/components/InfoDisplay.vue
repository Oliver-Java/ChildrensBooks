<template>
	<article class="bookContent">
		<div>{{bookInfo.title}}w</div>
        <p>{{bookInfo.plot}}</p>
	</article>
</template>

<script>
export default {
    props: {
        bookInfo: Object
    }
};
</script>

<style>
</style>