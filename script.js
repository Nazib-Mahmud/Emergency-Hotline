const services = [
  { name: "জাতীয় জরুরি সেবা", en: "National Emergency", number: "999", tag: "জাতীয়", icon: "emergency.png" },
  { name: "পুলিশ", en: "Police", number: "999", tag: "পুলিশ", icon: "police.png" },
  { name: "ফায়ার সার্ভিস", en: "Fire Service", number: "999", tag: "ফায়ার", icon: "fire-service.png" },
  { name: "অ্যাম্বুলেন্স", en: "Ambulance", number: "1994-999999", tag: "স্বাস্থ্য", icon: "ambulance.png" },
  { name: "নারী ও শিশু সহায়তা", en: "Women & Child Helpline", number: "109", tag: "সহায়তা", icon: "emergency.png" },
  { name: "দুদক", en: "Anti-Corruption", number: "106", tag: "সরকারি", icon: "emergency.png" },
  { name: "বিদ্যুৎ বিঘ্ন", en: "Electricity Outage", number: "16216", tag: "বিদ্যুৎ", icon: "emergency.png" },
  { name: "ব্র্যাক", en: "Brac", number: "16445", tag: "এনজিও", icon: "emergency.png" },
  { name: "বাংলাদেশ রেলওয়ে", en: "Bangladesh Railway", number: "163", tag: "পরিবহন", icon: "emergency.png" },
];

const cardsGrid = document.getElementById("cardsGrid");
const historyList = document.getElementById("historyList");

// Navbar Counters
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");

services.forEach(s => {
  const template = document.getElementById("cardTemplate").content.cloneNode(true);
  template.querySelector(".service-icon").src = `assets/${s.icon}`;
  template.querySelector(".bn-name").innerText = s.name;
  template.querySelector(".en-name").innerText = s.en;
  template.querySelector(".number").innerText = s.number;
  template.querySelector(".tag").innerText = s.tag;

  // Copy button
  template.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(s.number);
    copyCount++;
    copyDisplay.innerText = `📋 ${copyCount}`;
    alert(`${s.name} (${s.number}) কপি হয়েছে!`);
  });

  // Call button
  template.querySelector(".call-btn").addEventListener("click", () => {
    if (coinCount < 20) {
      alert("🚫 পর্যাপ্ত কয়েন নেই! অন্তত 20 কয়েন থাকতে হবে।");
      return;
    }

    coinCount -= 20;
    coinDisplay.innerText = `🪙 ${coinCount}`;
    alert(`📞 ${s.name} (${s.number}) এ কল হচ্ছে...`);

    const li = document.createElement("li");
    li.innerText = `${s.name} - ${s.number} (${new Date().toLocaleTimeString()})`;
    historyList.prepend(li);
  });

  // Fav button
  template.querySelector(".fav").addEventListener("click", (e) => {
    if (e.target.innerText === "♡") {
      e.target.innerText = "❤️";
      heartCount++;
    } else {
      e.target.innerText = "♡";
      heartCount--;
    }
    heartDisplay.innerText = `❤️ ${heartCount}`;
  });

  cardsGrid.appendChild(template);
});

// Clear History
document.getElementById("clearHistory").addEventListener("click", () => {
  historyList.innerHTML = "";
});
