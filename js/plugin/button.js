function initBt1(){var e=document.querySelectorAll("#component-1")[0],t=document.querySelector(".button__container"),o=e.querySelectorAll(".circle.top-left"),l=e.querySelectorAll(".circle.bottom-right"),c=document.querySelectorAll("#filter-goo-1")[0],a=new TimelineLite,i=new TimelineLite,n=new TimelineLite({paused:!0,onUpdate:function(){c.setAttribute("x",0)},onComplete:function(){t.style.filter="none"}});a.to(o,1.2,{x:-35,y:-35,scaleY:2,ease:SlowMo.ease.config(.1,.7,!1)}),a.to(o[0],.1,{scale:.2,x:"+=6",y:"-=2"}),a.to(o[1],.1,{scaleX:1,scaleY:.8,x:"-=10",y:"-=7"},"-=0.1"),a.to(o[2],.1,{scale:.2,x:"-=15",y:"+=6"},"-=0.1"),a.to(o[0],1,{scale:0,x:"-=5",y:"-=15",opacity:0}),a.to(o[1],1,{scaleX:.4,scaleY:.4,x:"-=10",y:"-=10",opacity:0},"-=1"),a.to(o[2],1,{scale:0,x:"-=15",y:"+=5",opacity:0},"-=1");var r=new TimelineLite,s=new TimelineLite;r.set(o,{x:0,y:0,rotation:-45}),r.add(a),i.to(l,1.2,{x:35,y:35,scaleY:2,ease:SlowMo.ease.config(.1,.7,!1)}),i.to(l[0],.1,{scale:.2,x:"-=6",y:"+=3"}),i.to(l[1],.1,{scale:.8,x:"+=7",y:"+=3"},"-=0.1"),i.to(l[2],.1,{scale:.2,x:"+=15",y:"-=6"},"-=0.1"),i.to(l[0],1,{scale:0,x:"+=5",y:"+=15",opacity:0}),i.to(l[1],1,{scale:.4,x:"+=7",y:"+=7",opacity:0},"-=1"),i.to(l[2],1,{scale:0,x:"+=15",y:"-=5",opacity:0},"-=1"),s.set(l,{x:0,y:0,rotation:-45}),s.add(i),n.add(r),n.to(e.parentNode.querySelectorAll(".button__bg"),.8,{scaleY:1.1},.1),n.add(s,.2),n.to(e.parentNode.querySelectorAll(".button__bg"),1.8,{scale:1,ease:Elastic.easeOut.config(1.2,.4)},1.2),n.timeScale(2.6),e.addEventListener("click",function(){t.style.filter="url(#filter-goo-1)",n.restart()})}initBt1();