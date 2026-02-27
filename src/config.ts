export const SITE = {
  website: "https://armenski.de",
  author: "Robert Armenski",
  profile: "https://armenski.de/",
  desc: "My personal blog regarding development topics focusing on Apple technologies.",
  title: "Robert Armenski",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    disabled: true,
    url: "",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
