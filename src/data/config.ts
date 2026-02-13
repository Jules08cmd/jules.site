const config = {
  title: "Julian Kaufmann | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Julian, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Julian, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Julian",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Julian Kaufmann",
  email: "julian.kaufmann@icloud.com",
  site: "https://juliankaufmann.site",

  // for github stars button
  githubUsername: "Jules08cmd",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
social: {
    instagram: "https://instagram.com/juliank.ig",
    github: "https://github.com/Jules08cmd",
    twitter: "https://x.com/kauf9955",
    linkedin: "https://www.linkedin.com/in/julian-k-b228573a4",
  },
};
export { config };
