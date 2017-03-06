(function () {
	var defaults = {
		container: 'body',
		pageNum: 1,
		pageSize: 20,
		height: $(window).height(),
		pageNumParam: 'pageNum',
		pageSizeParam: 'pageSize',
		finishMsg: "没有更多了",
		firstLoadNoDataMsg: '暂无数据',
		loadingImgUrl: 'data:image/gif;base64,R0lGODlhfABPALMKAP///5mZme7u7szMzLu7u93d3aqqqmZmZoiIiHd3d////wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUY4RDE0NUM1MEY0MTFFMzlDNjdBRDRBNDQ4RTdDODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUY4RDE0NUQ1MEY0MTFFMzlDNjdBRDRBNDQ4RTdDODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjhEMTQ1QTUwRjQxMUUzOUM2N0FENEE0NDhFN0M4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjhEMTQ1QjUwRjQxMUUzOUM2N0FENEE0NDhFN0M4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn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',
		dataUrl: '',
		data: {},
		jsonToDom: function () {
		},
		fn: function (data) {
		},
		finishFunc: function (data) {
		},
		showLoadMsg: function () {
		},
		hideLoadMsg: function () {
		}
	};


	var loadHtml = {
		loadingImg: '<div class = "loadingImg" style = "text-align:center; display:none; color:#999999; min-height:30px; margin-top:10px;" >'
		+ 'loading' + '</div>'
	};


	function loadMore(options) {
		this.options = $.extend(defaults, options || {});
		this.init();
	};

	loadMore.prototype = {

		constructor: loadMore,
		init: function () {
			this.initUI();
			this.appendLoadImg();
			this.initFirstPage();
			this.doScroll();

		},
		initUI: function () {
			this.isLoading = false;
			this.isFinish = false;
			this.TimeoutFlag = null;
			this.time = 0;
		},
		initFirstPage: function () {
			var _this = this;
			_this.ajaxFun();
		},
		doScroll: function () {

			var _this = this;
			var container = _this.options.container = _this.isObject(_this.options.container);

			container.css({'height': this.options.height + 'px', 'overflow': 'auto'});

			_this.appendLoadImg();

			container.on("scroll", function (e, args) {
				args = args || {};
				_this.time = args.time > 0 || args.time === 0 ? args.time : 300;

				if (_this.time === 0) {
					_this.doGetData();
					return;
				}
				if (_this.TimeoutFlag) {
					window.clearTimeout(_this.TimeoutFlag);
					_this.TimeoutFlag = null;
				}
				_this.TimeoutFlag = window.setTimeout(function () {
					_this.doGetData();
				}, _this.time);
			});


		},
		doGetData: function () {
			var _this = this;
			if (_this.getScrollHeight() || _this.isLoading || _this.isFinish || _this.TimeoutFlag == null) {
				return;
			}
			_this.showLoadingMsg();
			_this.ajaxFun();

		},
		ajaxFun: function () {

			var _this = this;
			var postData = {};
			postData[_this.options.pageNumParam] = _this.options.pageNum;
			postData[_this.options.pageSizeParam] = _this.options.pageSize;

			$.ajax({
				url: _this.options.dataUrl,
				data: $.extend(_this.options.data, postData),
				type: "POST",
				cache: false,
				dataType: 'json',
				success: function (data, status, xhr) {
					if(typeof _this.options.filterListFunc === 'function') {
						data = _this.options.filterListFunc(data);
					} else {
						data = data.dataList;
					}

					if (!data || (Object.prototype.toString.call(data) === '[object Array]' && !data.length)) {
						_this.isFinish = true;
						_this.showLoadingMsg(window.parseInt(postData[_this.options.pageNumParam]) <= 1 ? _this.options.firstLoadNoDataMsg : _this.options.finishMsg);
						return;
					}


					$(_this.options.container).prepend(_this.options.jsonToDom(data));

					_this.options.pageNum++;
					_this.hideLoadingMsg();

					if (typeof _this.fn == 'function') {
						_this.options.fn(data);
					}

					if (typeof _this.options.finishFunc) {
						_this.isFinish = _this.options.finishFunc(data);
						if (_this.isFinish === true) {
							_this.showLoadingMsg(_this.options.finishMsg);
						}
					}
					_this.isLoading = false;
				},
				complete: function (xhr, status) {
					_this.isLoading = false;
				},
				error: function (error) {
					switch (error.status + '') {
						case '404':
							$.haodf.inform('抱歉！好像网络出问题了，请检查您的网络设置');
							// _this.showLoadingMsg('抱歉！好像网络出问题了，请检查您的网络设置');
							break;
						case '500':
							$.haodf.inform('抱歉！好像系统有异常！请联系管理员解决');
							// _this.showLoadingMsg('抱歉！好像系统有异常！请联系管理员解决');
							break;
						default:
							$.haodf.inform('抱歉！可能系统出现异常或网络质量不好');
							// _this.showLoadingMsg('抱歉！可能系统出现异常或网络质量不好');

							break;
					}
					_this.hideLoadingMsg();
				}
			});
		},
		appendLoadImg: function () {
			var _this = this;
			var options = _this.options;
			var container = (typeof(_this.options.container) == "object") ? _this.options.container : $(_this.options.container);
			var loadImg = $('.loadingImg');
			var html;
			if (options.loadingImgUrl && !loadImg.length) {
				html = $(loadHtml.loadingImg).html('<img src="' + options.loadingImgUrl + '" alt="loading...">');
			}
			container.append(html);
		},
		isObject: function (obj) {
			var obj = (typeof(obj) == "object") ? obj : $(obj);
			return obj;
		},
		showLoadingMsg: function (msg) {
			var _this = this;
			_this.isLoading = true;
			_this.options.container.find(".loadingImg").show().html(msg);
			if (typeof _this.options.showLoadMsg == 'function') {
				_this.options.showLoadMsg();
			}

		},

		hideLoadingMsg: function () {
			var _this = this;
			_this.options.container.find(".loadingImg").hide();
			_this.isLoading = false;
			if (typeof _this.options.hideLoadMsg == 'function') {
				_this.options.hideLoadMsg();
			}
		},
		getScrollHeight: function () {
			var _this = this;
			var container = _this.options.container;
			var aScrollHeight = !container[0].scrollHeight ? $(document).height() : container[0].scrollHeight,
				aScrollTop = container.scrollTop(),
				aHeight = container.height();
			if (aScrollTop + aHeight + 50 < aScrollHeight) {
				return true;
			}
		}

	};

	if (typeof module !== 'undefined' && module && module.exports) {
		module.exports = loadMore;
	} else {
		window.fe = window.fe || {};
		window.fe.loadMore = loadMore;
	}
})();