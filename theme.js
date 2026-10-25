// Loaded in <head> so the saved theme applies before the page paints.
(function () {
    var root = document.documentElement;
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

    document.addEventListener("DOMContentLoaded", function () {
        var button = document.querySelector(".theme-toggle");
        if (!button) return;
        button.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            try { localStorage.setItem("theme", next); } catch (e) {}
        });
    });
})();
