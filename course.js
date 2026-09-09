const library = document.getElementById("video-library");

const courseVideos = videos.filter(
  video => video.course === currentCourse
);

const sections = [
  ...new Set(courseVideos.map(video => video.section))
];

sections.forEach(sectionName => {

  const section = document.createElement("section");
  section.className = "video-section";

  const heading = document.createElement("h2");
  heading.textContent = sectionName;

  section.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "video-grid";

  const sectionVideos = courseVideos.filter(
    video => video.section === sectionName
  );

  sectionVideos.forEach(video => {

    const card = document.createElement("article");

    card.className = "video-card";
    card.id = video.id;

    let videoDisplay;

    if (video.youtubeId) {

      videoDisplay = `
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${video.youtubeId}"
            title="${video.title}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      `;

    } else {

      videoDisplay = `
        <div class="video-placeholder">
          Video coming soon
        </div>
      `;
    }

    card.innerHTML = `
      ${videoDisplay}

      <div class="video-card-content">

        <p class="video-topic">
          ${video.topic.toUpperCase()}
        </p>

        <h3>${video.title}</h3>

        <p>${video.description}</p>

      </div>
    `;

    grid.appendChild(card);
  });

  section.appendChild(grid);
  library.appendChild(section);

});
