<!-- svg图标组件 -->
<template>
	<svg :style="{ width: width, height: height }">
		<!-- 属性值为 #icon- 加上图标名称 -->
		<use :xlink:href="prefix + name" :fill="color"></use>
	</svg>
</template>

<script setup lang="ts">
	// 接收父组件传递过来的参数
	// 包括：图标、颜色、大小
	defineProps({
		// 前缀
		prefix: {
			type: String,
			default: '#icon-',
		},
		name: {
			type: String,
		},
		color: {
			type: String,
			default: 'null',
		},
		height: {
			type: String,
			default: '16px',
		},
		width: {
			type: String,
			default: '16px',
		},
	})
</script>

<style lang="scss" scoped></style>
