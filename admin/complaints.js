const filter = document.getElementById("statusFilter");
const complaints = document.querySelectorAll(".complaint-item");

filter.addEventListener("change", () => {
  const selected = filter.value;

  complaints.forEach(complaint => {
    const status = complaint.getAttribute("data-status");

    if (selected === "all" || status === selected) {
      complaint.style.display = "flex";
    } else {
      complaint.style.display = "none";
    }
  });
});
