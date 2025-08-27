const services = [
  { name: "জাতীয় জরুরি সেবা", en: "National Emergency", number: "999", tag: "জাতীয়", icon: "emergency.png" },
  { name: "পুলিশ", en: "Police", number: "999", tag: "পুলিশ", icon: "police.png" },
  { name: "ফায়ার সার্ভিস", en: "Fire Service", number: "999", tag: "ফায়ার", icon: "fire.png" },
  { name: "অ্যাম্বুলেন্স", en: "Ambulance", number: "1994-999999", tag: "স্বাস্থ্য", icon: "ambulance.png" },
  { name: "নারী ও শিশু সহায়তা", en: "Women & Child Helpline", number: "109", tag: "সহায়তা", icon: "women.png" },
  { name: "দুদক", en: "Anti-Corruption", number: "106", tag: "সরকারি", icon: "anticorruption.png" },
  { name: "বিদ্যুৎ বিঘ্ন", en: "Electricity Outage", number: "16216", tag: "বিদ্যুৎ", icon: "electricity.png" },
  { name: "ব্র্যাক", en: "Brac", number: "16445", tag: "এনজিও", icon: "brac.png" },
  { name: "বাংলাদেশ রেলওয়ে", en: "Bangladesh Railway", number: "163", tag: "পরিবহন", icon: "railway.png" },
];

const cardsGrid = document.getElementById("cardsGrid");
const historyList = document.getElementById("historyList");

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
    alert(`${s.name} (${s.number}) কপি হয়েছে!`);
  });

  // Call button
  template.querySelector(".call-btn").addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = `${s.name}\n${s.number}  (${new Date().toLocaleTimeString()})`;
    historyList.prepend(li);
  });

  // Fav
  template.querySelector(".fav").addEventListener("click", (e) => {
    e.target.innerText = "❤️";
  });

  cardsGrid.appendChild(template);
});

// Clear History
document.getElementById("clearHistory").addEventListener("click", () => {
  historyList.innerHTML = "";
});
