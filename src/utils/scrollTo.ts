const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  window.scrollTo({
    top: element.offsetTop - 64,
    behavior: "smooth",
  });
};

export default scrollTo;