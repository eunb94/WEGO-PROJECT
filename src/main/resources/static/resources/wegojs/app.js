"use strict";
var app = app || {};
app = (() => {
	const WHEN_ERR = 'app js를 찾을수 없습니다.'
	let js;
	let mainHomejs;
	let indexjs;
	let run = () => {
		$.getScript('/resources/wegojs/cmm/router.js', () => {
			$.extend(new Session());
			onCreate();
		})
	}
	let init = () => {
		js = $.js();
		indexjs = js + `/cmm/index.js`
	}
	let onCreate = () => {
		init();
		$.when(
			$.getScript(indexjs)
		)
			.done(() => {
				index.onCreate()
			})
			.fail(() => {
				alert(WHEN_ERR)
			})
	}
	return { run }
})();