let panel = document.querySelector(".panel");
let panel_li = document.querySelectorAll("li");
let btns = document.querySelectorAll(".btns li");
//유사배열로 li를 바인딩해서 반환한 값이 btns

btns.forEach(function (el, index) {
  //유사배열이니까 fotEach문 사용
  el.addEventListener("click", function (e) {
    e.preventDefault();
    //a태그를 사용할 때 들어가는 코딩, 디폴트 이벤트 값 없애기.

    /* 모든 버튼을 반복을 돌면서 비활성화 시킨뒤 클릭한 순번의 버튼만 활성화를 시킨다. */
    for (let el of btns) {
      el.classList.remove("on");
    }
    btns[index].classList.add("on");

    panel.style.marginLeft = "-100" * index + "%";
    /* panel의 너비 값은 400px의 500%인 2000px이다. 각 패널의 너비가 차지하고 있는 100%만큼 margin으로 이동을 시켜주면 된다. 0번째 인덱스는 기준점 0, 
    1번째 인덱스는 -100%만큼 좌측으로 이동을 해야 정 가운데 배치, 2번째 인덱스는 거기에서 또 -100%만큼 좌측으로 이동해야 정가운데 배치가 된다. */
  });
});
