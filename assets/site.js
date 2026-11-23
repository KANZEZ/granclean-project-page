/* No external dependencies, analytics, cookies or network services. */
(() => {
  "use strict";
  const video = document.getElementById("overview-video");
  const placeholder = document.getElementById("video-placeholder");
  if (!video || !placeholder || video.dataset.ready !== "true") return;

  const message = placeholder.querySelector("p");
  // Show the slide poster immediately, including while metadata is loading.
  placeholder.hidden = true;
  video.hidden = false;
  video.addEventListener("error", () => {
    video.hidden = true;
    placeholder.hidden = false;
    message.textContent = "Video temporarily unavailable";
  });
  video.preload = "metadata";
  video.src = video.dataset.src;
})();
