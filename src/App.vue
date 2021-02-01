<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<div class="flex-center" >
			<div style="width: 350px; height: 300px; border: 1px solid #002B36; position: relative;">
				<component :is="currentComponent"></component>

				<div style="position: absolute;bottom: 0; right: 0; margin: -1px;">
					<button @click="currentComponent = 'async-cmp0'">异步show0</button>
					<button @click="currentComponent = 'async-cmp1'">异步show0</button>
					<button @click="currentComponent = 'async-cmp2'">异步show0</button>
				</div>

				<div style="position: absolute;bottom: 0; left: 0; margin: -1px;">
					<button @click="currentComponent = 'SyncCmp1'">同步show1</button>
				</div>

			</div>
			
			<div style="margin-top: 20px;">
				<button @click="currentComponent = 'async-plugin-cmp'">加载async-plugin-cmp</button>
			</div>
			------------------------------------------------
			<!-- <async-plugin-cmt></async-plugin-cmt> -->
		
		</div>
		<a-button type="link" >
		  Link
		</a-button>
		<remote url="/plugin/AsyncPluginCmt.vue"></remote>
	</div>
</template>

<script>
	import Vue from 'vue'
	import SyncCmp1 from './components/SyncCmt1'
	import Remote from './components/Remote.vue'

	export default {
		name: 'app',
		components: {
			// 异步导入组件方式 ①
			'async-cmp0': resolve => {
				// 向 `resolve` 回调传递组件定义
				setTimeout(_ => {
					console.log("开始加载异步组件0: ");
					resolve({
						name: 'AsyncCmp0',
						template: '<div>I am SyncCmp0!</div>',
						mounted() {
							console.log("异步组件0加载完成: ");
						}
					})
				}, 3000)

			},
			// 异步导入组件方式 ②
			'async-cmp1': (resolve, reject) => {
				// 这个特殊的 `require` 语法将会告诉 webpack
				// 自动将你的构建代码切割成多个包，这些包
				// 会通过 Ajax 请求加载
				require(['./components/AsyncCmt1'], resolve)
			},
			// 异步导入组件方式 ③
			'async-cmp2': () => import('./components/AsyncCmt2'), // 这个动态导入会返回一个 `Promise` 对象。
			// 'async-cmp3': () => import('./components/AsyncPluginCmt'), // 这个动态导入会返回一个 `Promise` 对象。
			// 异步导入组件方式 ①
			'async-plugin-cmp': resolve => {
				console.log("开始加载异步组件async-plugin-cmp: ", this);
				// 向 `resolve` 回调传递组件定义
				Vue.http.get('/plugin/AsyncPluginCmt.vue').then(res => {
					console.log("数据为:" , res, typeof res.body) //此处的res对象包含了json的文件信息和数据，我们需要的json数据存在于body属性中
					resolve(res.body)
				})


			},
			// 同步方式导入组件
			SyncCmp1,
			Remote

		},
		data() {
			return {
				currentComponent: null
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column;
	}
</style>
