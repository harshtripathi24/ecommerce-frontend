const baseUrl = "/Imgs/Products/";

const Products = [
  {
    pid: 1,
    categoryName: ["Self Help", "Featured Products"],
    author: "Morgan Housel",
    name: "Psychology of Money",
    price: "230",
    fakePrice: "450",
    img: "/Imgs/Products/psychologyOfMoney.jpg",
    imgs: [
      `${baseUrl}psychologyOfMoney.webp`,
      `${baseUrl}psychologyOfMoney2.webp`,
      `${baseUrl}psychologyOfMoney3.jpg`,
      `${baseUrl}psychologyOfMoney4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },

  {
    pid: 2,
    categoryName: ["Self Help", "Featured Products"],
    author: "Brian Stracy",
    name: "Eat that Frog",
    price: "150",
    fakePrice: "251",
    img: "/Imgs/Products/eatThatFrog.jpg",
    imgs: [
      `${baseUrl}eatThatFrog.jpg`,
      `${baseUrl}eatThatFrog2.jpg`,
      `${baseUrl}eatThatFrog3.jpg`,
      `${baseUrl}eatThatFrog4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 3,
    categoryName: ["Self Help", "New Arrivals"],
    author: "Napolean Hill",
    name: "Think and Grow Rich",
    price: "235",
    fakePrice: "495",
    img: "/Imgs/Products/thinkAndGrowRich.jpg",
    imgs: [
      `${baseUrl}thinkAndGrowRich.jpg`,
      `${baseUrl}thinkAndGrowRich2.jpg`,
      `${baseUrl}thinkAndGrowRich3.jpg`,
      `${baseUrl}thinkAndGrowRich4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 4,
    categoryName: ["Self Help", "Featured Products"],
    author: "Dale Carnegie",
    name: "how to win Friends and Influence People",
    price: "230",
    fakePrice: "450",
    img: "/Imgs/Products/howtoWInFriends.jpg",
    imgs: [
      `${baseUrl}howtoWInFriends.jpg`,
      `${baseUrl}howtoWInFriends2.jpg`,
      `${baseUrl}howtoWInFriends3.jpg`,
      `${baseUrl}howtoWInFriends4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 5,
    categoryName: ["Psychology", "Featured Products"],
    author: "Daniel Kehnman",
    name: "Thinking Fast and Slow",
    price: "300",
    fakePrice: "500",
    img: "/Imgs/Products/thinkingFastAndSlow.jpg",
    imgs: [
      `${baseUrl}thinkingFastAndSlow.jpg`,
      `${baseUrl}thinkingFastAndSlow2.jpg`,
      `${baseUrl}thinkingFastAndSlow3.jpg`,
      `${baseUrl}thinkingFastAndSlow4.jpg`,
    ],

    review: [
      {
        stars: 3,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 6,
    categoryName: ["Psychology", "Most Viewed"],
    author: "David Epstien",
    name: "Range",
    price: "399",
    fakePrice: "699",
    img: "/Imgs/Products/range.jpg",
    imgs: [
      `${baseUrl}range.jpg`,
      `${baseUrl}range2.jpg`,
      `${baseUrl}range3.jpg`,
      `${baseUrl}range4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 7,
    categoryName: ["Romance", "Most Viewed"],
    author: "Colen Hoover",
    name: "It Ends with Us",
    price: "159",
    fakePrice: "230",
    img: "/Imgs/Products/itEndsWithUS.jpg",
    imgs: [
      `${baseUrl}itEndsWithUS.jpg`,
      `${baseUrl}itEndsWithUS2.webp`,
      `${baseUrl}itEndsWithUS3.webp`,
      `${baseUrl}itEndsWithUS4.webp`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 8,
    categoryName: ["Romance", "New Arrivals"],
    author: "Own Nicholls",
    name: "Love Unscripted",
    price: "229",
    fakePrice: "435",
    img: "/Imgs/Products/loveUnscripted.webp",
    imgs: [
      `${baseUrl}loveUnscripted.webp`,
      `${baseUrl}loveUnscripted2.jpg`,
      `${baseUrl}loveUnscripted3.jpg`,
      `${baseUrl}loveUnscripted4.webp`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 9,
    categoryName: ["Fantasy", "Featured Products"],
    author: "Shane Lee",
    name: "Black Forest",
    price: "230",
    fakePrice: "450",
    img: "/Imgs/Products/blackForest.jpg",
    imgs: [`${baseUrl}blackForest.jpg`, `${baseUrl}blackForest2.jpg`],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 10,
    categoryName: ["Thriller", "New Arrivals"],
    author: "Ed Mckdonald",
    name: "Blackwing",
    price: "260",
    fakePrice: "450",
    img: "/Imgs/Products/blackwing.jpg",
    imgs: [
      `${baseUrl}blackwing.jpg`,
      `${baseUrl}blackwing2.jpg`,
      `${baseUrl}blackwing3.jpg`,
      `${baseUrl}blackwing4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 11,
    categoryName: ["Fantasy", "New Arrivals"],
    author: "S.M Boyce",
    name: "Heritage",
    price: "290",
    fakePrice: "550",
    img: "/Imgs/Products/heritage.jpg",
    imgs: [
      `${baseUrl}heritage.jpg`,
      `${baseUrl}heritage2.jpg`,
      `${baseUrl}heritage.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 12,
    categoryName: ["Horror", "New Arrivals"],
    author: "Madeleine Roux",
    name: "House Of Furies",
    price: "190",
    fakePrice: "250",
    img: "/Imgs/Products/houseOfFuries.jpg",
    imgs: [
      `${baseUrl}houseOfFuries.jpg`,
      `${baseUrl}houseOfFuries2.jpg`,
      `${baseUrl}houseOfFuries3.jpg`,
      `${baseUrl}houseOfFuries4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },

  {
    pid: 13,
    categoryName: ["Fantasy", "Most Viewed"],
    author: "Linda. K Hopkins",
    name: "Pursued By a Dragons",
    price: "350",
    fakePrice: "450",
    img: "/Imgs/Products/persuedByADragon.jpg",
    imgs: [`${baseUrl}persuedByADragon.jpg`, `${baseUrl}persuedByADragon.jpg`],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },

  {
    pid: 14,
    categoryName: ["Thriller", "Most Viewed"],
    author: "Lynda Renham",
    name: "Secret and Lies",
    price: "385",
    fakePrice: "460",
    img: "/Imgs/Products/secretAndLies.jpg",
    imgs: [
      `${baseUrl}secretAndLies.jpg`,
      `${baseUrl}secretAndLies2.jpg`,
      `${baseUrl}secretAndLies.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 15,
    categoryName: ["Thriller", "New Arrivals"],
    author: "B.B Griffith",
    name: "Shadow Land",
    price: "285",
    fakePrice: "360",
    img: "/Imgs/Products/shadowLand.jpg",
    imgs: [`${baseUrl}shadowLand.jpg`],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 16,
    categoryName: ["Fantasy", "New Arrivals"],
    author: "Kiersten White",
    name: "The Chaos of Stars",
    price: "485",
    fakePrice: "560",
    img: "/Imgs/Products/theChaosOfStars.jpg",
    imgs: [
      `${baseUrl}theChaosOfStars.jpg`,
      `${baseUrl}theChaosOfStars2.webp`,
      `${baseUrl}theChaosOfStars3.jpg`,
      `${baseUrl}theChaosOfStars4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 17,
    categoryName: ["Horror", "Featured Products"],
    author: "NIck Thornton",
    name: "The Last Chance Hotel",
    price: "385",
    fakePrice: "460",
    img: "/Imgs/Products/theLastChanceHotel.jpg",
    imgs: [
      `${baseUrl}theLastChanceHotel.jpg`,
      `${baseUrl}theLastChanceHotel2.jpg`,
      `${baseUrl}theLastChanceHotel3.jpg`,
      `${baseUrl}theLastChanceHotel4.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 18,
    categoryName: ["Thriller", "Featured Products"],
    author: "B.B Griffith",
    name: "The Sleep Walker",
    price: "485",
    fakePrice: "560",
    img: "/Imgs/Products/theSleepWalkers.webp",
    imgs: [`${baseUrl}theSleepWalkers.webp`, `${baseUrl}theSleepWalkers.webp`],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 19,
    categoryName: ["Fantasy", "Featured Products"],
    author: "Isabel Ibanez",
    name: "Woven in Moon",
    price: "185",
    fakePrice: "260",
    img: "/Imgs/Products/wovenInMoonLight.jpg",
    imgs: [
      `${baseUrl}wovenInMoonLight.jpg`,
      `${baseUrl}wovenInMoonLight2.webp`,
      `${baseUrl}wovenInMoonLight3.webp`,
      `${baseUrl}wovenInMoonLight4.webp`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
  {
    pid: 20,
    categoryName: ["Thriller", "Featured Products"],
    author: "James Nally",
    name: "Dance with The Dead",
    price: "485",
    fakePrice: "560",
    img: "/Imgs/Products/danceWithTheDead.jpg",
    imgs: [
      `${baseUrl}danceWithTheDead.jpg`,
      `${baseUrl}danceWithTheDead2.jpg`,
      `${baseUrl}danceWithTheDead3.jpg`,
    ],

    review: [
      {
        stars: 4,
        reviewText: "fadfas adfasdf gaagasdgasd wegawheefa good product",
      },
    ],

    options: ["Hard Copy", "PDF", "Audio Book"],

    publisher: "Jaico Publishing",
    availability: true,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque iure voluptatem exercitationem voluptas omnis unde perspiciatis ex numquam cum sed quod, ea, quas deleniti?",
  },
];

export default Products;
