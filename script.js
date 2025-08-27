const services = [
  { name: "জাতীয় জরুরি সেবা", en: "National Emergency", number: "999", icon: "police.png" },
  { name: "পুলিশ", en: "Police", number: "999", icon: "police.png" },
  { name: "ফায়ার সার্ভিস", en: "Fire Service", number: "999", icon: "fire.png" },
  { name: "অ্যাম্বুলেন্স", en: "Ambulance", number: "1994-999999", icon: "ambulance.png" },
  { name: "নারী ও শিশু সহায়তা", en: "Women & Child Helpline", number: "109", icon: "women.png" },
  { name: "দুদক", en: "Anti-Corruption", number: "106", icon: "anticorruption.png" },
  { name: "বিদ্যুৎ বিঘ্ন", en: "Electricity Outage", number: "16216", icon: "electricity.png" },
  { name: "ব্র্যাক", en: "Brac", number: "16445", icon: "brac.png" },
  { name: "বাংলাদেশ রেলওয়ে", en: "Bangladesh Railway", number: "163", icon: "railway.png" },
];

let coinCount = 100;
let copyCount = 0;
let heartCount = 0;

const cardsGrid = document.getElementById("cardsGrid");
const historyList = document.getElementById("historyList");

services.forEach(s => {
  const template = document.getElementById("cardTemplate").content.cloneNode(true);
  template.querySelector(".service-icon").src = `assets/${s.icon}`;
  template.querySelector(".bn-name").innerText = s.name;
  template.querySelector(".en-name").innerText = s.en;
  template.querySelector(".number").innerText = s.number;

  // Copy button
  template.querySelector(".copy-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(s.number);
    copyCount++;
    document.getElementById("copyCount").innerText = `${copyCount} Copy`;
  });

  // Call button
  template.querySelector(".call-btn").addEventListener("click", () => {
    if (coinCount < 20) {
      alert("কয়েন শেষ হয়ে গেছে!");
      return;
    }
    coinCount -= 20;
    document.getElementById("coinCount").innerText = coinCount;

    const li = document.createElement("li");
    li.innerText = `${s.name} - ${s.number} (${new Date().toLocaleTimeString()})`;
    historyList.prepend(li);
  });

  // Fav
  template.querySelector(".fav").addEventListener("click", (e) => {
    heartCount++;
    document.getElementById("heartCount").innerText = heartCount;
    e.target.innerText = "❤️";
  });

  cardsGrid.appendChild(template);
});

// Clear History
document.getElementById("clearHistory").addEventListener("click", () => {
  historyList.innerHTML = "";
});
