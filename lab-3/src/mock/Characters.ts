export const characters = [
  {
    id: 1,
    name: 'HULK',
    description:
      'Dr. Bruce Banner lives a life caught between the soft-spoken scientist he is always been and the uncontrollable green monster powered by his rage.',
    thumbnail: {
      path: '../public/hulk',
      extension: 'png'
    },
    comics: {
      items: [
        {
          link: '/comics/4',
          name: 'Planet Hulk: Worldbreaker (2022) #1'
        },
        {
          link: '/comics/5',
          name: 'Thor (2020) #26'
        }
      ]
    },
    series: {
      items: [
        {
          link: '/series/7',
          name: 'The Avengers'
        },
        {
          link: '/series/8',
          name: 'Avengers: Infinity War'
        },
        {
          link: '/series/9',
          name: 'Avengers: Endgame'
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Thor',
    description:
      'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
    thumbnail: {
      path: '../public/thor',
      extension: 'png'
    },
    comics: {
      items: [
        {
          link: '/comics/5',
          name: 'Thor (2020) #26'
        }
      ]
    },
    series: {
      items: [
        {
          link: '/series/7',
          name: 'The Avengers'
        },
        {
          link: '/series/8',
          name: 'Avengers: Infinity War'
        },
        {
          link: '/series/9',
          name: 'Avengers: Endgame'
        }
      ]
    }
  },
  {
    id: 3,
    name: 'Iron Man',
    description:
      'Genius. Billionaire. Philanthropist. Tony Stark is confidence is only matched by his high-flying abilities as the hero called Iron Man.',
    thumbnail: {
      path: '../public/ironMan',
      extension: 'png'
    },
    comics: {
      items: [
        {
          link: '/comics/6',
          name: 'Tony Stark: Iron Man (2018) #17'
        }
      ]
    },
    series: {
      items: [
        {
          link: '/series/7',
          name: 'The Avengers'
        },
        {
          link: '/series/8',
          name: 'Avengers: Infinity War'
        },
        {
          link: '/series/9',
          name: 'Avengers: Endgame'
        }
      ]
    }
  }
];
