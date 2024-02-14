const reasons = {
  wife: [
    "You show (or feign) interest in the things I'm interested in.",
    "You care about how I'm feeling.",
    "You patiently try to help me in areas where I'm lacking.",
    "You call me on my BS.",
  ],
  mother: [
    "You parent with empathy.",
    "You parent with a focus on child psychology.",
    "You sacrifice so much of your time, friendships, career, interests, and aspirations (and so much more) in order to be there for our family.",
  ],
  daughter: [
    "You have such a close relationship with your mom.",
    "You walk your mom through her fears and help her in times of indecision.",
    "You had the foresight to record a Q&A session with your dad before he passed.",
  ],
  sister: [
    "You often carry the weight of your sibling's burdens for them.",
    "You are a voice of reason in your sibling's lives.",
    "You continue to be a loving and supportive sister to your siblings despite repeated failures and shortcomings.",
  ],
  aunt: [
    "You really look out for Jeremiah and keep his best interests at heart.",
    "You intentionally try to fulfill multiple roles that have been missing or neglected in Jeremiah's life.",
    "You're the cool aunt who teases like an older sibling, but who also gives it straight when no one else will.",
  ],
  singer: [
    "You have a beautiful voice.",
    "You possess musical talent that is both natural and hard-earned.",
    "You continue to invest in your vocal talent by participating in choirs and other activities.",
    "You have the confidence and courage to sing solos in front of audiences.",
    "You possess a level of talent that earned you a place in the Saint Louis Symphony Chorus.",
    "You performed at CARNEGIE. FREAKING. HALL!!!",
  ],
  friend: [
    "You value your friendships and maintain them even when you're apart.",
    "You show up for friends in need, even when it's uncomfortable or inconvenient.",
    "You regularly practive kindness, patience, and understanding with your friends.",
    "You are reliable and consistent.",
  ],
  teacher: [
    "You not only have the talent and ability to be a teacher, but also a heart for the children.",
    "You spent so much of your time preparing lesson plans to ensure your students were continually challenged.",
    "You genuinely care for your students and their wellbeing.",
  ],
  person: [
    "You strive to help those less fortunate than yourself.",
    "You are a voice for those that cannot speak up for themselves.",
    "You value hard work, patience, loyalty, and fair play (just like a good little Hufflepuff).",
  ],
  lover: [
    "You have a sexy, curvy, voluptuous body.",
    "You are willing to indulge my fantasies.",
    "You aren't afraid to indulge in your own fantasies.",
    "You give the best fellatio I've ever had! Hands down!",
  ],
};

const categoriesContainer = document.querySelector("#categories-container");
const categoryTemplate = document.querySelector("#category-template");
const reasonsModal = document.querySelector("#reasons-modal");
const reasonsModalCategory = document.querySelector("#reasons-modal-category");
const reasonsModalList = document.querySelector("#reasons-modal-list");

function openModal(category) {
  reasonsModalCategory.textContent = category;
  reasons[category].forEach((reason) => {
    const liReason = document.createElement("li");
    liReason.textContent = reason;
    reasonsModalList.appendChild(liReason);
  });
  categoriesContainer.classList.add("invisible");
  reasonsModal.classList.remove("invisible");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeModal() {
  reasonsModal.classList.add("invisible");
  reasonsModalCategory.textContent = "";
  reasonsModalList.innerHTML = "";
  categoriesContainer.classList.remove("invisible");
}

document.querySelector("html").onclick = (e) => {
  closeModal();
};

reasonsModal.onclick = (e) => {
  e.stopPropagation();
};

Object.keys(reasons).forEach((category) => {
  const clone = categoryTemplate.content.cloneNode(true);
  const div = clone.querySelectorAll("div");
  div[1].textContent = category;
  // div[2].textContent = reasons[category].length;
  clone.querySelector("h2").onclick = (e) => {
    e.stopPropagation();
    openModal(category);
  }
  categoriesContainer.appendChild(clone);
});
