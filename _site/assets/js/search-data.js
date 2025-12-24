// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-was-featured-on-talking-robotics-to-talk-about-my-work-full-episode-here",
          title: 'I was featured on Talking Robotics to talk about my work — full...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-at-the-northeast-systems-and-control-workshop-at-columbia-university",
          title: 'I gave a talk at the Northeast Systems and Control Workshop at Columbia...',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-icuas-and-icra-let-s-connect-if-you-re-around",
          title: 'I will be attending ICUAS and ICRA, let’s connect if you’re around!',
          description: "",
          section: "News",},{id: "news-three-papers-submitted-to-icra-check-out-the-preprints-1-2-3",
          title: 'Three papers submitted to ICRA. Check out the preprints → 1, 2, 3....',
          description: "",
          section: "News",},{id: "news-our-dq-nmpc-paper-got-accepted-in-ra-l",
          title: 'Our DQ-NMPC paper got accepted in RA-L!',
          description: "",
          section: "News",},{id: "news-i-defended-my-phd-you-can-either-read-the-thesis-or-watch-the-talk",
          title: 'I defended my PhD ! You can either read the thesis or watch...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
