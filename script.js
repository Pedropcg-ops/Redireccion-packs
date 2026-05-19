// Entrada progresiva de las tarjetas sin añadir dependencias externas.
const cards = document.querySelectorAll(".pack-card");

const revealCard = (card, index) => {
  window.setTimeout(() => {
    card.classList.add("is-visible");
  }, index * 110);
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const cardIndex = Array.from(cards).indexOf(entry.target);
        revealCard(entry.target, Math.max(cardIndex, 0));
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  cards.forEach((card) => observer.observe(card));
} else {
  cards.forEach(revealCard);
}
