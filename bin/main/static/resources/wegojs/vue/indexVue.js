"use strict"
var indexVue = indexVue || {}
indexVue = {
	index_body: x=>{
		return `<body>
     <div id="intro">
              <link rel="stylesheet"  href="http://www.kaiwa-projects.com/assets/css/qbkl-grid.css">
         <link rel="stylesheet"  href="http://www.kaiwa-projects.com/assets/css/style-ko.css">
              <div class="top-decorations">
                                         <a href="#" style="
                                  position: absolute;
                                  left: 15px;
                                  top: 20px;
                                  text-decoration: none;
                                  color: #ffffff;
                           "></a>
                                  </div>
              <!--  <div class="top-decorations" style="width: 100%; position:  absolute; "></div>  -->
       
              <section id="intro" class="fx-backstretch">
                     <div class="info" style="position: relative; z-index: 0;  background: none;">
                           <div class="container" style="top: 18%;">
                                  <div class="row">
                                         <div class="col-full"><h1  style="margin-top: 100px;">이은비</h1></div>
                                  </div>
                                  <div class="row">
                                         <div class="col-1-4 centered line"></div>
                                  </div>
                                  <div class="row">
                                         <div  class="col-full"><h4>웹 개발자</h4></div>
                                  </div>
                           </div>
                           <div class="backstretch" style="left: 0px; top: 0px;  overflow: hidden; margin: 0px; padding: 0px; height: 91%; width: 100%; z-index:  -999998; position: absolute;">
<!--                              <img  src="http://www.kaiwa-projects.com/assets/img/backstretch.jpg" style="position:  absolute; margin: 0px; padding: 0px; border: none; width: 100%; height: 825px;  max-height: none; max-width: none; z-index: -999999; left: -129.833px; top: 0px;">  -->
                                  <img  src="<%=application.getContextPath()%>/resources/img/main.png" style="opacity:  0.5; margin: 0px; padding: 0px; border: none; width: 100%; height: 99%;  max-height: none; max-width: none; z-index: -999999; left: -129.833px; top: 0px;">
                           </div>
                     </div>
                     <div id="nav-sticky-wrapper" class="sticky-wrapper"  style="height: 60px;">
                           <nav id="nav" style="z-index: 100; font-size: 30px">
                                  <ul class="clearfix" style="width:610px;  font-weight: bold;">
                                         <li class="current" style="margin-right:  60px;"><a href="#aboutme">인사 소개</a></li>
                                         <li class="" style="margin-right:  60px;"><a href="#skills"><span></span>기술</a></li>
                                         <li class="" style="margin-right:  60px;"><a href="#portfolio">프로젝트</a></li>
                                         <li class=""><a  href="#contact">연락</a></li>
                                  </ul>
                           </nav>
                     </div>
              </section>
      <section id="aboutme" class="section">
         <div class="container" style="width : 70%">
            <div class="row">
               <div class="col-full">
                  <h2 class="section-title">인사 소개</h2>
                  <div class="centered line"></div>
               </div>
            </div>
            <div class="row section-content">
               <div class="col-1-3" style="text-align: center;">
                  <img src="resources/wegoimg/me.jpg" style="height: 200px;" src="">
               </div>
               <div class="col-1-3" style="color: black">
                  <h3>안녕하세요? 이은비입니다.</h3>
                  <h4>저의 웹 사이트에 방문해주셔서 감사합니다. </br> 제가 참여한 프로젝트 위고는  '서울여행'을 주제로 만든 프로젝트 입니다.</br>열심히 참여하여 포트폴리오로 제작하였으니 자세한 사항은  <a href="#portfolio">여기를 누르시거나</a> 페이지 아래쪽에서 구경해 보세요. </br>그 외 궁금하신 사항은  <a href="#contact">연락처</a>로 연락바랍니다.</h4>
             
               </div>
            </div>
         </div>
      </section>
      <section id="skills" class="section-alt">
         <div class="container" style="width:1000px">
            <div class="row" style="margin:0 auto">
               <div class="col-full">
                  <h2 class="section-title">전문 기술</h2>
                  <div class="centered line"></div>
               </div>
            </div>
            <div class="row section-content" style="margin:0 auto">
               <div class="skill-container">
                  <div class="col-full">
                     <div class="col-full text-center" style="color: #333;">
                                     전체적으로 Framework는 SpringBoot와 Bootstrap, MyBatis를, JAVA 라이브러리는 Gradle 방식으로 했으며, DB는 MariaDB를 사용했습니다. </br>
                                     또한, 프론트 단은 Bootstrap과 jQuery를 이용하였고, MyBatis를 사용하여 Query문과 Code를 분리하였으며</br> 
               RestfulAPI 방식과 jQuery를 통한 Ajax를 적극 활용하여 좀 더 퀄리티있는 웹사이트가 만들어지도록 노력하였습니다.
                     </div>
                  </div>
                  <div class="col-1-5 skill">
                     <h4>Java</h4>
                  </div>
                  <div class="col-1-5 skill">
                     <h4>Jquery</h4>
                  </div>
                  <div class="col-1-5 skill">
                     <h4>JavaScript</h4>
                  </div>
                   <div class="col-1-5 skill">
                     <h4>Vue.js</h4>
                  </div>
                  <div class="col-1-5 skill">
                     <h4>Node.js</h4>
                  </div>
               </div>
               <div class="col-full skill-container">
                  <h3>자주 사용하는 소프트웨어</h3>
               </div>
               <div class="col-2-3 col-wrap centered skill-container" style="with:100%;justify-content: center;">
                  <div class="col-1-3" style="padding-left:100px">
                     <h4>프레임워크</h4>
                     <ul style="color: #333;">
                     <li>Spring 5</li>
                     <li>Spring Boot</li>
                     <li>전자정부</li>
                     <li>Eclipse</li>
                     <li>MyBatis</li>
                     </ul>                   
                  </div>
                  <div class="col-1-3" style="padding-left:100px">
                     <h4>데이터베이스</h4>
                     <ul style="color: #333;">
                     <li>Oracle</li>
                     <li>MySQL</li>
                     <li>MariaDB</li>
                     </ul>   
                  </div>
                  <div class="col-1-3" style="padding-left:100px">
                     <h4>그 외</h4>
                     <ul style="color: #333;">
                     <li>AWS</li>
                     <li>EC2</li>
                     <li>RDS</li>
                     <li>Git</li>
                     <li>Maven</li>
                     <li>Gradle</li>
                     </ul> 
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section id="portfolio" class="section">
         <div class="container">
            <div class="row">
               <div class="col-full">
                  <h2 class="section-title">프로젝트 & Git Hub</h2>
                  <div class="centered line"></div>
               </div>
            </div>
            <div class="row section-content">
               <div class="row">
               </div>
               <div class="row projects gallery" style="margin-left: 320px;">
                  <div class="col-1-6 project port-application mix_all" style="display: inline-block;  opacity: 1; padding-top: 30px;">
                                    <h2 style="color:black">프로젝트</h2>
                     <a target="_blank" id="project" href="#">
                        <img src="/resources/wegoimg/wego.png" alt="project">
                     </a>
                  </div>
                  <div class="col-1-6 project port-game mix_all" style="display: inline-block;  opacity: 1; padding-top: 30px;">
                                                         <h2 style="color:black">github 주소</h2>
                     <a target="_blank" href="https://github.com/eunb94" title="github" >
                        <img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" alt="Super Puzzle Platformer is a Unity game developed in 14 days.">
                     </a>
                  </div>           
                  <div class="col-1-6 project port-game mix_all" style="display: inline-block;  opacity: 1; padding-top: 30px;">
                   <h2 style="color:black">포트폴리오</h2>
							<a target="_blank" href="https://docs.google.com/presentation/d/1V5ykfX-ungR4CxVneAYMXLSRcuvPXnSUrsWpSOV2Jro/edit#slide=id.p4">
								<img src="/resources/wegoimg/ppt.png">
							</a>
                  </div>   
                  <div class="col-1-6 project port-game mix_all" style="display: inline-block;  opacity: 1; padding-top: 30px;">
                   <h2 style="color:black">YouTube 링크</h2>
							<a target="_blank" href="https://docs.google.com/presentation/d/1V5ykfX-ungR4CxVneAYMXLSRcuvPXnSUrsWpSOV2Jro/edit#slide=id.p4">
								<img src="/resources/wegoimg/YouTube.jpg">
							</a>
						</div>          
               </div>
            </div>
         </div>
      </section>
      <section id="contact" class="section">
         <div class="container">
            <div class="row">
               <div class="col-full">
                  <h2 class="section-title">연락처</h2>
                  <div class="centered line"></div>
               </div>
            </div>
            <div class="row section-content">
               <div class="col-2-3 col-wrap centered text-center">
                  <div class="row">
                     <div class="col-full" style="margin-bottom: 25px;">
                      고객과 회사의 소리에 귀 기울여 그 요구에 능숙히 응할 수 있는 사람이 될 것이며, <br>
                      현재에 안주하지 않고 끊임없이 실력을 향상시키는 인재가 되겠습니다.<br>
                        eunb94@gmail.com으로 이메일 주세요. 곧 답장 드리겠습니다.<br>언제든지 연락주세요.
                     </div>
                  </div>
                  <div id="form-contact-container">
                     <div class="col-full">
                        <label for="">이름
                           <h2>이은비</h2>
                        </label>
                     </div>
                     <div class="col-full">
                        <label for="">Email 주소
                           <h2 style="text-transform: lowercase">eunb94@gmail.com</h2>
                        </label>
                     </div>
                     <div class="col-full">
                        <label for="">휴대폰 번호
                           <h2>010-6861-4956</h2>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
   <div id="root">   
   </div>
   <div id="popup-root"></div>
   <div id="popup-exchange"></div>

</body>`






	}
}