const facts = [
  "5G can be up to 100x faster than 4G.",
  "5G supports up to 1 million devices per square kilometer.",
  "Latency on 5G can be as low as 1 millisecond.",
  "5G is essential for self-driving cars to communicate in real time.",
  "Most 5G networks use three frequency bands: low, mid, and high.",
  "5G makes remote surgeries and real-time VR experiences possible."
];

function showFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  alert(facts[randomIndex]);
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

function zoomImage(img) {
  const zoomed = img.classList.toggle("zoomed");
  img.style.transform = zoomed ? "scale(1.5)" : "scale(1)";
}

window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  topBtn.style.display = document.documentElement.scrollTop > 100 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
