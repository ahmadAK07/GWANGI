function fadeAnimateFunc(divToObserve, elemsToAnimate) {
  const animateCards = () => {
    const cards = document.querySelectorAll(elemsToAnimate);
    cards.forEach((card, index) => {
      card.classList.add("fade-in-animation");
      const delay = index * 0.19;

      card.style.animationDelay = `${delay}s`;
    });
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCards();
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, {
    threshold: 0.1,
  });
  const container = document.querySelector(divToObserve);
  observer.observe(container);
}

function moveAnimateFunc(divToObserve, elemToMove, xVal) {
  const animateCards = () => {
    let elem = document.querySelector(elemToMove);
    elem.style.transition = "all 1s";
    elem.style.transitionDelay = ".3s";
    elem.style.transform = `translateX(${xVal})`;
    elem.style.opacity = 1;
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCards();
        observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(callback, {
    threshold: 0.1,
  });
  const container = document.querySelector(divToObserve);
  observer.observe(container);
}
