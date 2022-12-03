export const comics = [
  {
    id: 4,
    name: 'Planet Hulk: Worldbreaker (2022) #1',
    description:
      'A thousand years from now on the planet Sakaar, a young woman with green skin searches for the legendary Green Scar to help save her brother from a group of apocalyptic cultists. But which Hulk will she find? And after all these years, is he truly the Sakaarson, who will save us all — or the Worldbreaker, who will destroy us? A shocking expansion and culmination of the mythos of Sakaar and the heart of the Hulks from PLANET HULK scribe Greg Pak and visionary DEVIL’S REIGN artist Manuel Garcia.',
    thumbnail: {
      path: '../public/Planethulk',
      extension: 'png'
    },
    heroes: {
      items: [
        {
          link: '/characters/1',
          name: 'HULK'
        }
      ]
    }
  },
  {
    id: 5,
    name: 'Thor (2020) #26',
    description:
      '"BANNER OF WAR" PART 4 Thor and Hulk is epic rivalry continues in the fourth installment of the characters 60th Anniversary crossover celebration! Thanks to Odin, Thor now realizes the gravity of Banner`s situation - and its connection to that mysterious, violent incident in El Paso. But when Iron Man`s interference causes more harm than good, our two rivals face shocking changes that change the stakes of the battle…for good.',
    thumbnail: {
      path: '../public/thor_comic',
      extension: 'png'
    },
    heroes: {
      items: [
        {
          link: '/characters/1',
          name: 'HULK'
        },
        {
          link: '/characters/2',
          name: 'Thor'
        }
      ]
    }
  },
  {
    id: 6,
    name: 'Tony Stark: Iron Man (2018) #17',
    description:
      '""THE ULTRON AGENDA"" continues! Chapter 2: Compatible Parts! Is Tony Stark dead? Is he alive? Who can tell? Whatever he is, he IS Iron Man. And he`s all that`s standing in the way of Ultron Pym and everyone that Tony Stark loves. Or loved. Because Tony might be dead. 2020 is coming. The robot revolution has begun. So suit up, fleshbags. Suit up or die.',
    thumbnail: {
      path: '../public/ironMan_comic',
      extension: 'png'
    },
    heroes: {
      items: [
        {
          link: '/characters/3',
          name: 'Iron Man'
        }
      ]
    }
  }
];
