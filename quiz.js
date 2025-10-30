function hitungSkor() {
  let skor = 0;
  const jawaban = {
    q1: "a",
    q2: "a",
    q3: "a",
    q4: "a",
    q5: "a"
  };

  for (let i = 1; i <= 5; i++) {
    const pilihan = document.querySelector(`input[name="q${i}"]:checked`);
    if (pilihan && pilihan.value === jawaban[`q${i}`]) {
      skor++;
    }
  }

  const hasil = document.getElementById("hasil");
  hasil.innerHTML = `Skor kamu: ${skor}/5`;

  if (skor === 5) {
    hasil.innerHTML += "<br><strong>Keren! Semua benar 🎉</strong>";
  } else if (skor >= 3 && skor < 5) {
    hasil.innerHTML += "<br>Bagus! Sedikit lagi sempurna 😄";
  } else if (skor >= 1 && skor < 3) {
    hasil.innerHTML += "<br>Yuk belajar lagi 💪";
  } else {
    hasil.innerHTML += "<br>Coba lagi ya! Jangan menyerah 🙌";
  }
}

function ubahWarna() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}  

function ucapanAcak() {
  const pesan = [
    "Semangat terus!",
    "Kamu hebat!",
    "Jangan menyerah!",
    "Belajar itu seru!",
    "Keep coding 😎"
  ];
  alert(pesan[Math.floor(Math.random() * pesan.length)]);
}

// function easterEgg() {
//   alert("🎉 Kamu menemukan rahasia Quiz ini!");
// }

// document.addEventListener("DOMContentLoaded", () => {


// }); 
let klikRahasia = 0;
document.getElementById("footer").addEventListener("click", (e) => {
  e.preventDefault();
  klikRahasia++;
  if (klikRahasia === 3) {
    alert("🎉 Kamu menemukan Easter Egg rahasia!");
  }
});


function shakePage() {
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 300);
}

function tampilkanJam() {
  const jam = new Date().toLocaleTimeString();
  document.getElementById("jam").innerText = `Waktu sekarang: ${jam}`;
}
setInterval(tampilkanJam, 1000);
