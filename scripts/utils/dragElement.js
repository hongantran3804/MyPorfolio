const imgFrames = document.querySelectorAll(".imageFrame");
const mainSection = document.querySelector(".mainSection");
function dragImg() {
  let isDragging = false,
    startX = 0,
    velocity = 0;
  const initialState = 0 + "px";
  let cnt = 0;
  imgFrames.forEach((imgFrame, index) => {
    imgFrame.style.left = initialState;
    imgFrame.style.zIndex = 50 - cnt;
    imgFrame.style.rotate = `${parseInt((Math.random() * 2 - 1) * 10)}deg`;
    cnt++;
    imgFrame.addEventListener("mousedown", (e) => {
      e.preventDefault();
      isDragging = true;
      startX = e.clientX;
      imgFrame.style.animation = "chosen 0.2s forwards";
    });
    imgFrame.addEventListener("mouseup", (e) => {
      e.preventDefault();

      if (imgFrame.style.left < initialState) {
        imgFrame.style.animation = "img-to-left 1s forwards";
        imgFrame.style.zIndex = 50 - cnt;
        cnt++;
      } else if (imgFrame.style.left > initialState) {
        imgFrame.style.animation = "img-to-right 1s forwards";
        imgFrame.style.zIndex = 50 - cnt;
        cnt++;
      } else {
        imgFrame.style.animation = "";
      }

      isDragging = false;
      if (cnt >= 2 * imgFrames.length) {
        for (let i = imgFrames.length - 1; i >= 0; i--) {
          setTimeout(() => {
            e.preventDefault();
            if (imgFrames[i].style.left < initialState) {
              imgFrames[i].style.animation = "img-comeback-right 1s";
            } else if (imgFrames[i].style.left > initialState) {
              imgFrames[i].style.animation = "img-comeback-left 1s";
            }
          }, 1000 + (imgFrames.length - i) * 100);
          setTimeout(() => {
            imgFrames[i].style.left = 0;
            imgFrames[i].style.top = 0;
          }, 1000 + (imgFrames.length - i) * 100);
          imgFrames[i].style.rotate = `${parseInt(
            (Math.random() * 2 - 1) * 10
          )}deg`;
        }
        cnt = 3;
      }
      console.log(cnt);
    });

    imgFrame.addEventListener("mousemove", (e) => {
      e.preventDefault();
      if (isDragging) {
        const dx = e.clientX - startX;
        startX = e.clientX;
        velocity = dx;
        imgFrame.style.left = `${imgFrame.offsetLeft + dx}px`;
      }
    });
  });
}

dragImg();
