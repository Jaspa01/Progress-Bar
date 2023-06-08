

const nextVal = document.querySelector("#next");
const prevVal = document.getElementById("prev");

const progressBar = document.querySelector(".progress-bar-front");

const stepsVal = document.querySelectorAll(".step")

let currentChecked = 1;

nextVal.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsVal.length) {
    currentChecked = stepsVal.length;
  }
  updateProgress();
});

prevVal.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1
  }
  updateProgress();
  cancel();
});

function cancel() {
  stepsVal.forEach((stepVal, idx) => {
    if (idx === currentChecked) {
      stepVal.classList.add("canceled");
    }
  })
};

function updateProgress() {
  stepsVal.forEach((stepVal, idx) => {
    if (idx < currentChecked) {
      stepVal.classList.add("checked");
      stepVal.innerHTML = `
        <i class="fas fa-check"></i>
        <small>${
            idx === 0
          ? "Begin"
          : idx === stepsVal.length - 1
          ? "Final"
          : idx
        }</small>
      `; 
    } else {
      stepVal.classList.remove("checked");
      stepVal.innerHTML = `
        <i class="fas fa-times"></i>
      `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

    progressBar.style.width =
      ((checkedNumber.length - 1) / (stepsVal.length - 1)) * 100 + "%";
  



if (currentChecked === 1) {
  prevVal.disabled = true;
} else if (currentChecked === stepsVal.length) {
  nextVal.disabled = true;
} else {
  nextVal.disabled = false;
  prevVal.disabled = false;
}
};



