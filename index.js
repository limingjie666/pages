import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	latitude: '', // 当前位置纬度
	longitude: '', // 当前位置经度
	cartList: {}, // 加入购物车的商品列表
	shopDetail: null,
	userInfo: null, 
	shopid: null,
	remarkText: null,
	inputText: '',
	invoice: false,
	newAddress: [], 
	searchAddress: null,
	geohash: '31.22299,121.36025',
	choosedAddress: null,
	addressIndex: null,
	needValidation: null,
	cartId: null,
	sig: null,
	orderParam: null,
	orderMessage: null, 
	orderDetail: null, 
	login: true,
	imgPath:null,
	removeAddress:[],
	addAddress:'',	
	question: null,
	cartPrice: null, 
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})