const scrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64,
      behavior: "smooth",
    });
    // Update URL with anchor
    window.history.pushState(null, '', `#${id}`);
  }
};

export default scrollTo;