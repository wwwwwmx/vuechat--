//主页即消息界面
<template>
	<div class="home-container">
		<div class="left-container">
			<div>
				<searchUser></searchUser>
			</div>
			<div>
				<!-- {{a.userInfo.value.account}} -->
				<!-- {{index.userInfo.username}} -->
				<ul>
					<li v-for="item in ff.friends">
						<div class="img-container"><img :src="item.imgUrl" alt=""></div>
						<div class="content-container">
							<div><span class="top">{{item.nickName?item.nickName:item.userName}}</span>
								<span class="top-time">时间</span>
							</div>
							<div><span class="bottom">内容</span></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="right-container">
			<div>
				<div class="chat-name">啥都没有一个名字</div>
				<div class="chat-history">这个是对话记录</div>
				<div class="chat-function">这个是一些功能</div>
			</div>
		</div>

	</div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, toRefs, toRef } from 'vue'
import { reqGetFriend, reqLogin } from '@/newApi/index'
import { indexStore } from '@/store/index'
import searchUser from '@/view/public/searchUser.vue'
let userInfo = toRefs(indexStore())
let ff = reactive({
	friends: [{ imgUrl: '', nickName: '', userName: '', account: '', circleIds: [] }]
})
onMounted(async () => {
	try {
		let data = userInfo.userInfo.value._id
		let result = await reqGetFriend({ data })
		console.log(result.data.data[0].friends, 'result')
		console.log(ff.friends, 'beforefriends')

		ff.friends = result.data.data[0].friends
		console.log(ff.friends, 'friends')
		ff.friends.forEach(async (item: any) => {
			try {
				console.log(item, item)
				let subItem = await reqLogin(item)
				subItem = subItem.data.data[0]
				console.log(subItem, 'subItem')
				item = { ...subItem, ...item }
				console.log(item, 'finallyItem')
			}
			catch (error) {
				console.log(error)
			}
		});
	} catch (error) {
		console.log(error)
	}
});
</script>
<style lang="less" scoped>
// * {
// 	margin: 0px;
// 	padding: 0px;
// }

// .home-container {
// 	width: 100%;
// 	height: 100%;
// 	background-color: aliceblue;

// 	.left-container {
// 		float: left;
// 		width: 250px;

// 		li {
// 			list-style: none;
// 			padding: 10px;

// 			&::after {
// 				content: '';
// 				display: block;
// 				height: 0;
// 				clear: both;
// 			}

// 			.img-container {
// 				float: left;
// 				width: 50px;
// 				height: 50px;

// 				img {
// 					width: 100%;
// 					height: 100%;
// 				}
// 			}

// 			.container {
// 				float: left;
// 				width: 180px;
// 				height: 50px;

// 				div {
// 					margin-left: 5px;

// 					.top-time {
// 						float: right;
// 						margin-right: 3px;
// 					}
// 				}
// 			}
// 		}
// 	}

// 	.right-container {
// 		margin-left: 250px;
// 		width: auto;
// 		height: 100%;
// 		border: 1px solid black;

// 		.chat-name {
// 			height: 30px;
// 			font-size: 16px;
// 			font-weight: 500;
// 			padding-left: 30px;
// 			line-height: 30px;
// 			border-bottom: 1px solid gray;
// 		}

// 		.chat-history {
// 			width: 100%;
// 			min-height: 420px;
// 		}

// 		.chat-function {
// 			width: 100%;
// 			height: 135px;
// 			border-top: 1px solid gray
// 		}
// 	}

// }
</style>