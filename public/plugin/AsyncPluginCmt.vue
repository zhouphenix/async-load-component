<template>
	<div class="async-plugin-cmt">
		<p>
			我是异步方式加载的插件组件AsyncPluginCmt
		</p>
		<img src="../favicon.ico">
		<!-- 本地项目的资源无法访问 -->
		<!-- <img src="../../src/assets/logo.png"> -->
		<p>	
			第三方组件ant-design-vue引用示例 
		</p>
		<a-button type="primary" @click="handleClick">
		    Primary
		  </a-button>
		  <a-button @click="handleClick">Default</a-button>
		  <a-button type="dashed" @click="handleClick">
		    Dashed
		  </a-button>
		  <a-button type="danger" @click="handleClick">
		    Danger
		  </a-button>
		  <a-config-provider :auto-insert-space-in-button="false">
		    <a-button type="primary" @click="handleClick">
		      按钮
		    </a-button>
		  </a-config-provider>
		  <a-button type="primary" @click="handleClick">
		    按钮
		  </a-button>
		  <a-button type="link" @click="handleClick">
		    Link
		  </a-button>
	</div>
</template>

<script>
	export default {
		name: 'AsyncPluginCmt',
		mounted() {
			console.log("异步组件AsyncPluginCmt加载完成: ");
		},
		methods:{
			handleClick(e) {
				console.log('e:', e);
				alert(JSON.stringify(e.pageX))
			}
		}
	}
</script>

<style scoped>
	.async-plugin-cmt {
		color: white;
		font-size: 22px;
	}
</style>
