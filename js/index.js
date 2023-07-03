const handleClickRating = (currentActive) => {
  const prevActive = document.querySelector(".active");
  try {
    prevActive.classList.remove("active");
  } catch (e) {
    console.log(e);
  } finally {
    currentActive.classList.add("active");
  }
};

const handleRedirect = () => {
  const active = document.querySelector(".active");
  const rating = active.innerText;
  window.location.href = `thank-you.html?rating= ${encodeURIComponent(rating)}`;
};
