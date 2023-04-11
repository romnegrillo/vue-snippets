const app = Vue.createApp({
  //   template: "<h1>Hello Rom!</h1>",
  data() {
    return {
      message: "Hello, I'm learning Vue!",
      link: "https://vuejs.org",
      count: 0,
      person: {
        name: "Romulo Negrillo Jr.",
        title: "Software Engineer",
      },
      heroes: [
        { id: 1, name: "Gusion", role: "assassin", isFav: true },
        { id: 2, name: "Aaamon", role: "assassin", isFav: true },
        { id: 3, name: "Zilong", role: "fighter", isFav: false },
      ],
      displayHeroes: true,
    };
  },
  methods: {
    incrementCount() {
      this.count += 1;
    },
    decrementCount() {
      this.count -= 1;
    },
    toggleDisplayHeroes() {
      this.displayHeroes = !this.displayHeroes;
    },
    toggleFav(targetHero) {
      this.heroes.forEach((hero) => {
        if (hero.id === targetHero.id) {
          hero.isFav = !hero.isFav;
        }
      });
    },
  },
});

app.mount("#app");
