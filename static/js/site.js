// Reliance Business : petits comportements de l'interface.
document.addEventListener("DOMContentLoaded", function () {
  // Garde visible l'onglet actif du menu sur téléphone (menu défilant).
  var actif = document.querySelector(".nav a.on");
  if (actif && window.matchMedia("(max-width: 760px)").matches) {
    actif.scrollIntoView({ inline: "center", block: "nearest" });
  }
  // Une seule question ouverte à la fois dans les FAQ.
  document.querySelectorAll("details.faq").forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (!d.open) return;
      document.querySelectorAll("details.faq[open]").forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
});
