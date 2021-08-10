window.onload = function(){
    let current = 0;
    let isSlide = false;

    function slide(target, dir){
        if(target >= $(".slide-image").length + 1 || target < - 1 || isSlide) return;

        console.log(target, dir, current);

        isSlide = true;

        $(".slide-image").eq(target).css({"left": `${dir * 100}%`}).animate({"left":0}, 800);

        $(".slide-image").eq(current).animate({"left":`${-100 * dir}%`}, 800, function(){
            isSlide = false;
        });

        if(target == 7 && dir == 1) {
            $(".slide-image").eq(0).css({"left":"100%"});
            $(".slide-image").eq(0).animate({"left":0}, 800, function(){
                isSlide = false;
            });
        }
        // $(".slide-image").eq(current - 1).css({"left": `${dir * 100}%`});

        if(target >= 7) {
            target = 0;
        };

        if(target <= -1) {
            target = 6;
        };
        current = target;
        //핀에대한 작업은 여기서 나중에
        $(".pin").removeClass("active");
        $(".pin").eq(target).addClass("active");
    }

    $(".slide-image").css({"left":"100%"});
    $(".slide-image").eq(current).css("left", 0);

    $(".pin").on("click", function(){
        let idx = $(this).index();
        slide(idx, idx - current < 0 ? -1 : 1);
        
        $(".pin").removeClass("active");
        $(".pin").eq(idx).addClass("active");
    });

    setInterval(function () {
        let dir = $(".slide-btn1").data("dir") * 1;
        slide(current + dir, dir);
    }, 5000);

    $(".slide-btn").on("click", function(){
        let dir = $(this).data("dir") * 1; //숫자로 강제 형변환
        slide(current + dir, dir);
    });

};


















// $(document).ready(function(){

// });

// $(function(){
    

// });
