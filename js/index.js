window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var show1 = document.querySelector(".show1");
    var show2 = document.querySelector(".show2");
    
    // 현재 스크롤 위치 가져오기
    var scrollPosition = window.scrollY;
    
    // show1 및 show2의 표시/숨김 여부를 결정
    if (scrollPosition > 200) { // 스크롤 위치에 따라 조정
        show1.style.display = "none";
        show2.style.display = "block";
    } else {
        show1.style.display = "block";
        show2.style.display = "none";
    }
});
