const NAVBAR_HEIGHT = 80;

export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
