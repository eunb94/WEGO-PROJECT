"use strict"
var adminjoin = adminjoin ||{}
adminjoin=(()=>{
	const WHEN_ERR = '호출하는 admin 페이지가 없음'
	let js;
	let mainVuejs;
	let adminjoinvuejs
	let mainHomejs
	let loginjs
	let init = () => {
		js = $.js()
		adminjoinvuejs = js + '/adminvue/adminjoin_vue.js'
		mainVuejs = js +'/vue/mainVue.js'
		mainHomejs = js + '/cmm/mainHome.js'
		loginjs =js+'/withcs/login.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(mainVuejs),
			$.getScript(adminjoinvuejs),
			$.getScript(mainHomejs),
			$.getScript(loginjs)
		).done(()=>{
			setContentView()
			goadminjoin()
			addr()
			
		}).fail(()=>{
			alert(WHEN_ERR)
		})
	}
	let setContentView=()=>{
		$(`#mainbody`).html(adminjoin_vue.adminjoin_body())
		  $(`html, body`).scrollTop(0);
	}

	
	let goadminjoin=()=>{
		$('#pwdck').keyup(()=>{
			if( $('#apwd').val() != $('#pwdck').val() ){
				$('#pwdNotice')
				.val('비밀번호가 일치하지 않습니다')
				.css('color', 'red')
		        
			}else{
				$('#pwdNotice')
				.val('비밀번호 일치 합니다')
				.css('color', 'blue')
				}
			})
		$('#adminjoin_btn').click(e=>{
			e.preventDefault() 
		let data = {admin_id:$(`#aid`).val(),admin_pwd:$(`#apwd`).val(),
					tel:($(`#tel1`).val()+$(`#tel2`).val()+$(`#tel3`).val()),
					admin_addr:($(`#sample6_address`).val()+$(`#sample6_detailAddress`).val())}
		
			$.ajax({
	    	url : '/admin/',
	    	type : 'POST',
	    	dataType : 'json',
	    	data : JSON.stringify(data),
	    	contentType : 'application/json',
	    	success : d => {
	    			if(d.msg === 'SUCCESS'){
	    				login.onCreate()
	    			}else
	    				alert('회원가입 실패')
	    	},
	    	error : e => {
	    		alert('AJAX 실패');
	    	}
		})
		
			})
	}

	
	let addr=()=>{
		$(`#addr_btn`).click(()=>{
			new daum.Postcode({
            oncomplete: function(data) {
                var addr = ''; 
                var extraAddr = '';
                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }
                if(data.userSelectedType === 'R'){
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
		})

	}
	
	
	
	return{onCreate}
})()
