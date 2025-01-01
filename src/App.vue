<script setup lang="ts">
import {
	Message
} from '@element-plus/icons-vue'
import Test from '@/components/Test.vue'
</script>

<template>
	<h1>
		根目录
		<el-button type="info" :icon="Message" circle />
		<Test></Test>
	</h1>
	<svg>
		<!-- 属性值为 #icon- 加上图标名称 -->
		<use xlink:href="#icon-up"></use>
	</svg>
</template>

<style scoped lang="scss">
h1 {

	width: 600px,
	h2 {
		height: 300px;
	}
}
</style>
