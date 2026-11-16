/* No external dependencies, analytics, cookies or network services. */
(() => {
  "use strict";
  const video = document.getElementById("overview-video");
  const placeholder = document.getElementById("video-placeholder");
  if (!video || !placeholder || video.dataset.ready !== "true") return;

  const message = placeholder.querySelector("p");
  message.textContent = "Loading video…";
  video.addEventListener("loadedmetadata", () => {
    placeholder.hidden = true;
    video.hidden = false;
  }, { once: true });
  video.addEventListener("error", () => {
    video.hidden = true;
    placeholder.hidden = false;
    message.textContent = "Video temporarily unavailable";
  });
  video.preload = "metadata";
  video.src = video.dataset.src;
})();
