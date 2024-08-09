const year = document.querySelector(".year");
const month = document.querySelector(".month");

function toggleYearPlans() {
  year.addEventListener("click", () => {
    const starter = document.querySelector("#starter-price");
    starter.textContent = "$88.67";
    const pro = document.querySelector("#pro-price");
    pro.textContent = "$157.33";
    const period = document.querySelector("#period-free");
    period.textContent = "Year";
    const periodStarter = document.querySelector("#period-starter");
    periodStarter.textContent = "Year";
    const periodPro = document.querySelector("#period-pro");
    periodPro.textContent = "Year";
  });
}

function toggleMonthPlans() {
  month.addEventListener("click", () => {
    const starter = document.querySelector("#starter-price");
    starter.textContent = "$30.00";
    const pro = document.querySelector("#pro-price");
    pro.textContent = "$60.00";
    const period = document.querySelector("#period-free");
    period.textContent = "Month";
    const periodStarter = document.querySelector("#period-starter");
    periodStarter.textContent = "Month";
    const periodPro = document.querySelector("#period-pro");
    periodPro.textContent = "Month";
  });
}

toggleMonthPlans();

toggleYearPlans();
