let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.add("hidden");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.remove("hidden");
}

function createFlowers() {
  const container = document.getElementById("flower-container");
  const flowers = ["🌼", "🌸", "🌺", "🌻", "🌹"]; // Pakai emoji atau gambar

  for (let i = 0; i < 15; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";

    // Pilih random antara emoji atau gambar
    if (Math.random() > 0.5) {
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.fontSize = "50px";
      flower.style.backgroundImage = "none"; // Nonaktifkan BG jika pakai emoji
    } else {
      flower.style.backgroundImage =
        "url('https://cdn.pixabay.com/photo/2017/01/10/03/06/flowers-1968358_640.png')";
    }

    flower.style.left = Math.random() * 90 + "vw";
    flower.style.top = Math.random() * 90 + "vh";
    flower.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(flower);
  }
}

// Event listener tombol terakhir
document.getElementById("lastBtn").addEventListener("click", createFlowers);

function createFloatingHearts() {
  const loveBg = document.querySelector(".love-bg");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.animation = `floatLove ${Math.random() * 10 + 5}s linear infinite`;
    heart.style.animationDelay = Math.random() * 5 + "s";
    loveBg.appendChild(heart);
  }
}

// ===== Musik =====
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let isMusicPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "🎵 Putar Musik";
  } else {
    bgMusic.play();
    musicBtn.textContent = "❌ Stop Musik";
  }
  isMusicPlaying = !isMusicPlaying;
});

// ===== Inisialisasi =====
window.onload = function () {
  createFloatingHearts();
};

// Pastikan event listener untuk nextBtn berfungsi
// Perbaikan JavaScript dengan modal custom
const nextBtn = document.getElementById("nextBtn");
const musicAlert = document.getElementById("music-alert");
const alertPause = document.getElementById("alert-pause");
const alertContinue = document.getElementById("alert-continue");

if (nextBtn) {
  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Cek apakah musik sedang diputar
    if (isMusicPlaying) {
      // Tampilkan modal custom
      musicAlert.classList.remove("hidden");

      // Handler untuk tombol pause
      alertPause.onclick = function () {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Putar Musik";
        isMusicPlaying = false;
        musicAlert.classList.add("hidden");
        proceedToNextPage();
      };

      // Handler untuk tombol continue
      alertContinue.onclick = function () {
        musicAlert.classList.add("hidden");
        proceedToNextPage();
      };
    } else {
      proceedToNextPage();
    }
  });
}

function proceedToNextPage() {
  createFlowers();
  setTimeout(() => {
    window.location.href = "flower.html";
  }, 1500);
}

// Tambahkan di script.js
const runawayBtn = document.getElementById("runaway-btn");

// Efek button lari saat hover
runawayBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);

  runawayBtn.style.position = "absolute";
  runawayBtn.style.left = `${x}px`;
  runawayBtn.style.top = `${y}px`;
  runawayBtn.style.transform = "scale(1.1)";
});

// Kembali ke ukuran normal setelah mouse leave
runawayBtn.addEventListener("mouseleave", () => {
  runawayBtn.style.transform = "scale(1)";
});

// Efek saat hampir diklik
runawayBtn.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);

  runawayBtn.style.left = `${x}px`;
  runawayBtn.style.top = `${y}px`;
  runawayBtn.style.transform = "scale(0.9)";

  // Tambahkan efek gemeteran
//   setTimeout(() => {
//     runawayBtn.style.transform = "scale(1) translate(2px, 1px)";
//   }, 100);
});

// Tampilkan text saat button lari
runawayBtn.addEventListener("mouseover", () => {
  const text = document.getElementById("dont-run-text");
  text.classList.add("show");
  text.style.left = `${Math.random() * 200}px`;
  text.style.top = `${Math.random() * 100 + 50}px`;

  setTimeout(() => text.classList.remove("show"), 1000);
});

// Untuk device touchscreen
runawayBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 100);

  runawayBtn.style.left = `${x}px`;
  runawayBtn.style.top = `${y}px`;
});

// Deteksi perangkat mobile
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Modifikasi perilaku button runaway untuk mobile
if (isMobileDevice()) {
  const runawayBtn = document.getElementById("runaway-btn");
  if (runawayBtn) {
    runawayBtn.style.fontSize = "18px";
    runawayBtn.style.padding = "12px 24px";

    // Gerakan yang lebih besar untuk mobile
    runawayBtn.addEventListener("touchstart", function (e) {
      e.preventDefault();
      const container = this.parentElement;
      const containerRect = container.getBoundingClientRect();

      const newX = Math.random() * (containerRect.width - 150);
      const newY = Math.random() * (containerRect.height - 80);

      this.style.transform = `translate(${newX}px, ${newY}px)`;

      // Tampilkan pesan
      const text = document.getElementById("dont-run-text");
      if (text) {
        text.classList.add("show");
        text.style.left = `${newX + 50}px`;
        text.style.top = `${newY - 30}px`;
        setTimeout(() => text.classList.remove("show"), 1000);
      }
    });
  }
}
