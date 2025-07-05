function loadinganimation(){
    var tl=gsap.timeline();
    tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5

    })
    tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer=document.querySelector("#line1-part1 h5");
        var grow=0;
        setInterval(function(){
        if(grow<100){
             h5timer.innerHTML=grow++;
        }
        else{
             h5timer.innerHTML=grow;
        }

    
        },20);
    }
    })

    tl.to(".line h2",{
    animationName:"anime",
    opacity:1
    })

    tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:2
    })
    tl.from("#page1",{
    delay:0.2,

    opacity:0,
    duration:0.5,
    y:1200,
    ease:"power4"
})

tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero h1",{
    y:120,
    stagger:0.2
})
}
loadinganimation();

function cursoranimation(){
    
document.addEventListener("mousemove", function(dets){
   gsap.to("#crsr",{
    left:dets.x,
    top:dets.y
   })
});


Shery.makeMagnet("#nav-part2 h4" , {
    ease:"cubic-bezier(0.23,1,0.320,1)"
});
}
cursoranimation();