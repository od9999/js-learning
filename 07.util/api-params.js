// polyfill
let window = this; //模拟全局对象 delete
window.encodeURIComponent = encodeURIComponent;

let $ = {
	extend: Object.assign
};


// html
window.PAGE_DATA = {
	requestUrl: 'http://i1.hdfimg.com/orderdetail/1',
	params: {
		advisoryId: '123456'
	},

	postRequestUrl: 'http://i1.hdfimg.com/posts/1',
	postParams: {
		advisoryId: 123456,
		pageId: 1,
		pageSize: 10,
		pageNumParam: 'pageId',
		pageSizeParam: 'pageSize'
	}
};




// js
var page = {
	pageData: {
		requestUrl: 'x',
		params: {},

		postRequestUrl: '',
		postParams: {}
	},

	init: function() {
		this.setRequestData();
	},

	render: function() {
		console.log(this.generateRequestUrl(this.pageData.requestUrl, this.pageData.params));
		console.log(this.generateRequestUrl(this.pageData.postRequestUrl, this.pageData.postParams));
	},

	setRequestData: function() {
		this.pageData =  $.extend(this.pageData, window.PAGE_DATA || {});
	},
	generateRequestUrl: function(apiUrl, params) {
		var paramArr = [];
		var requestUrl = '';
		for (var attr in params) {
			if(params.hasOwnProperty(attr)) {
				paramArr.push(attr + '=' + window.encodeURIComponent(params[attr]));
			}
		}
		requestUrl = apiUrl + '?' + paramArr.join('&');
		return requestUrl;
	},
	run: function() {
		this.init();
		this.render();
	}
};

page.run();