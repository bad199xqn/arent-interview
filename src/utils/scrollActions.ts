export const scrollToElementById = (id:string, behavior:ScrollBehavior = "smooth") => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: behavior });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}