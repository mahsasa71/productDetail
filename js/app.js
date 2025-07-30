      const tshirtImage = document.getElementById("tshirt");
      const colorBtns = document.querySelectorAll(".color-btn");
      const imgContainer = document.querySelector(".relative");

      colorBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          tshirtImage.src = btn.dataset.image;
        });
      });

      imgContainer.addEventListener("mousemove", (event) => {
        const rect = imgContainer.getBoundingClientRect();
        const xPos = event.clientX - rect.left;
        const yPos = event.clientY - rect.top;

        tshirtImage.style.transformOrigin = `${xPos}px ${yPos}px`;
        tshirtImage.style.transform = "scale(2)";
      });

      imgContainer.addEventListener("mouseleave", () => {
        tshirtImage.style.transformOrigin = `center`;
        tshirtImage.style.transform = "scale(1)";
      });

      if (colorBtns.length > 0) {
  colorBtns[0].click();  
}