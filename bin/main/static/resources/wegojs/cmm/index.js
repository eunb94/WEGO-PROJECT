var index = index || {}
index = (()=>{
const WHEN_ERR = 'app js를 찾을수 없습니다.'
	let js, mainHomejs, indexVuejs;
	let init =()=>{
		js = $.js()
        routerjs = js+`/cmm/router.js`
		mainHomejs = js+`/cmm/mainHome.js`
		indexVuejs = js+`/vue/indexVue.js`  
	}
	let onCreate = () => {
        init()
        $.when(
            $.getScript(mainHomejs),
            $.getScript(routerjs),
			$.getScript(indexVuejs)
        ).done(() => {
			setContentView()
          
        }).fail(() => {
            alert(WHEN_ERR)
        })
	}
	let setContentView=()=>{
		let x = {css:$.css(),img:$.img()}
        $(`body`).html(indexVue.index_body(x))
		$(`#project`).click(e=>{
			e.preventDefault()
			mainHome.onCreate()
		})
             
    }

	return{onCreate}

})()