const THEME_STORAGE_KEY = "favour-profile-theme";
const GITHUB_PROFILE_ENDPOINT = "https://api.github.com/users/ludenyo";

const themeToggleButton = document.querySelector("#theme-toggle");
const githubStatus = document.querySelector("#github-status");
const githubProfileContainer = document.querySelector("#github-profile");

function updateThemeToggleButton(isDarkMode) {
  themeToggleButton.setAttribute("aria-pressed", String(isDarkMode));
  themeToggleButton.textContent = isDarkMode
    ? "Switch to light mode"
    : "Switch to dark mode";
}

function applyTheme(isDarkMode) {
  document.documentElement.classList.toggle("theme-dark", isDarkMode);
  updateThemeToggleButton(isDarkMode);
}

function getSavedTheme() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark";
  } catch {
    return false;
  }
}

function saveTheme(isDarkMode) {
  try {
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      isDarkMode ? "dark" : "light",
    );
  } catch {
    // The selected theme still applies for this visit if storage is unavailable.
  }
}

function toggleTheme() {
  const isDarkMode = document.documentElement.classList.toggle("theme-dark");
  updateThemeToggleButton(isDarkMode);
  saveTheme(isDarkMode);
}

function setGithubStatus(message, isError = false) {
  githubStatus.textContent = message;
  githubStatus.classList.toggle("status-error", isError);
}

function createGithubStat(label, value) {
  const statistic = document.createElement("div");
  const statisticLabel = document.createElement("dt");
  const statisticValue = document.createElement("dd");

  statisticLabel.textContent = label;
  statisticValue.textContent = new Intl.NumberFormat().format(value ?? 0);
  statistic.append(statisticLabel, statisticValue);

  return statistic;
}

function renderGithubProfile(profile) {
  const displayName = profile.name || `@${profile.login}`;
  const profileCard = document.createElement("article");
  const avatar = document.createElement("img");
  const profileDetails = document.createElement("div");
  const name = document.createElement("h3");
  const biography = document.createElement("p");
  const statistics = document.createElement("dl");
  const profileLink = document.createElement("a");

  profileCard.className = "github-card";
  avatar.className = "github-avatar";
  avatar.src = profile.avatar_url;
  avatar.alt = `${displayName}'s GitHub avatar`;
  avatar.width = 96;
  avatar.height = 96;

  profileDetails.className = "github-details";
  name.textContent = displayName;
  biography.textContent = profile.bio || "No public bio is available.";

  statistics.className = "github-stats";
  statistics.append(
    createGithubStat("Public repositories", profile.public_repos),
    createGithubStat("Followers", profile.followers),
  );

  profileLink.className = "github-profile-link";
  profileLink.href = `https://github.com/${encodeURIComponent(profile.login)}`;
  profileLink.target = "_blank";
  profileLink.rel = "noopener noreferrer";
  profileLink.textContent = "View GitHub profile";

  profileDetails.append(name, biography, statistics, profileLink);
  profileCard.append(avatar, profileDetails);
  githubProfileContainer.replaceChildren(profileCard);
}

async function loadGithubProfile() {
  try {
    const response = await fetch(GITHUB_PROFILE_ENDPOINT);

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}`);
    }

    const profile = await response.json();
    renderGithubProfile(profile);
    setGithubStatus("Latest public profile data loaded from GitHub.");
  } catch {
    setGithubStatus(
      "GitHub profile data is unavailable right now. Please try again later or use the GitHub link in the footer.",
      true,
    );
  }
}

function initializePage() {
  applyTheme(getSavedTheme());
  themeToggleButton.addEventListener("click", toggleTheme);
  loadGithubProfile();
}

initializePage();
