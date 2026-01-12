const names = [
  'Emma Thompson',
  'Liam Carter',
  'Olivia Bennett',
  'Noah Reynolds',
  'Ava Mitchell',
  'Elijah Foster',
  'Sophia Hayes',
  'Jameson Cole',
  'Isabella Quinn',
  'Benjamin Price',
  'Mia Alvarez',
  'Alexander Kim',
  'Charlotte Ward',
  'Michael Brooks',
  'Amelia Stone',
  'Daniel Rivera',
  'Harper Scott',
  'Matthew Hughes',
  'Evelyn Morales',
  'David Chen'
];

const commentsArray = [
  'Absolutely mind-blowing visuals and a story that stays with you long after the credits roll.',
  'One of the best films I\'ve seen this decade — emotional, smart, and beautifully shot.',
  'The soundtrack alone is worth the watch. Pure cinematic magic!',
  'Not my cup of tea, but I respect the craftsmanship behind it.',
  'A masterpiece of modern storytelling. Every frame feels intentional.',
  'I cried three times. No spoilers, but bring tissues!',
  'Fast-paced, witty, and full of surprises. Couldn\'t look away.',
  'The character development was weak, but the action sequences were top-notch.',
  'Feels like a love letter to classic cinema — nostalgic yet fresh.',
  'Overhyped. I expected more depth from such a talented cast.',
  'The post-credit scene blew my mind — can\'t stop thinking about it!',
  'Perfect blend of humor and heart. Rewatched it the same day!',
  'Visually stunning, but the plot lost me halfway through.',
  'A film that changed my perspective on life. Truly inspiring.',
  'Great performances, especially from the lead actor. Oscar-worthy!',
  'Too long and slow for my taste, but the cinematography is gorgeous.',
  'Unexpected twist at the end! Did not see that coming.',
  'Feels like a dream. Surreal, poetic, and hauntingly beautiful.',
  'Fun, light, and perfect for a cozy movie night.',
  'Not just entertainment — it made me reflect on human nature.'
];

const dates = [
  '2019-05-11T16:12:32.554Z',
  '2020-02-18T09:45:21.123Z',
  '2021-07-03T14:30:00.987Z',
  '2019-11-22T22:17:44.321Z',
  '2022-01-05T11:08:59.654Z',
  '2020-09-14T18:22:37.789Z',
  '2023-04-30T07:55:12.432Z',
  '2021-12-01T19:41:03.210Z',
  '2022-08-19T13:27:50.876Z',
  '2024-03-12T10:03:18.543Z',
  '2019-08-07T15:39:26.321Z',
  '2023-11-25T20:14:09.654Z',
  '2020-06-29T05:51:33.987Z',
  '2022-10-17T12:00:45.321Z',
  '2024-07-04T17:28:52.765Z',
  '2021-03-08T08:34:19.432Z',
  '2023-01-21T23:49:07.210Z',
  '2022-05-13T16:36:28.876Z',
  '2024-09-30T04:22:41.543Z',
  '2020-12-25T00:15:59.999Z'
];

const titles = [
  'A Little Pony Without The Carpet',
  'The Last Frame',
  'Echoes in the Rain',
  'Beneath Silent Stars',
  'Midnight in Verona',
  'Fragments of Tomorrow',
  'The Clockmaker\'s Daughter',
  'Where Shadows Sleep',
  'Paper Wings',
  'The Velvet Horizon',
  'Whispers from the Attic',
  'Breaking the Surface',
  'The Amber Protocol',
  'Glass Hearts',
  'Neon Requiem',
  'The Forgotten Lighthouse',
  'Dust and Diamond',
  'When the Tide Turns',
  'The Silent Archive',
  'Edge of the Aurora'
];

const alternativeTitles = [
  'Laziness Who Sold Themselves',
  'Procrastination That Cried Wolf',
  'Anxiety Eating Toast Alone',
  'The Day My To-Do List Betrayed Me',
  'Sadness With Wi-Fi Issues',
  'Existential Dread in Sweatpants',
  'Imposter Syndrome Wears a Tie',
  'My Pillow Is My Co-Founder',
  'Netflix and Regret',
  'The Tragedy of Unwashed Dishes',
  'Ambition That Never Left Bed',
  'Coffee Without Purpose',
  'Deadline Running Away From Me',
  'My Plant Died and So Did I',
  'Motivation Ghosted Me',
  'The Algorithm Knows I\'m Faking It',
  'Silent Panic During Small Talk',
  'I Forgot My Password and My Dreams',
  'The Curse of Infinite Tabs',
  'Adulting Is a Scam They Told Me'
];

const countries = [
  'France',
  'Japan',
  'Brazil',
  'Canada',
  'Australia',
  'Germany',
  'India',
  'South Africa',
  'Mexico',
  'New Zealand'
];

const posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'History',
  'Horror',
  'Musical',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War'
];

const descriptions = [
  'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.',
  'A heart-wrenching sci-fi epic about loneliness in space, inspired by "Winnie the Pooh" and "The Godfather", featuring zero dialogue and 47 minutes of rain.',
  'Critically acclaimed comedy that redefines friendship, co-directed by the minds behind "SpongeBob SquarePants" and "Schindler\'s List", with a soundtrack by chickens.',
  'An animated thriller about tax auditors in 19th-century Kyoto, blending the visual style of "My Neighbor Totoro" and the tension of "John Wick".',
  'A silent black-and-white romance filmed entirely on a Nokia 3310, praised by Tarantino and banned in three countries for excessive use of the color beige.',
  'From the studio that brought you "Barbie" and "The Texas Chain Saw Massacre" — a musical about depressed potatoes trying to escape a grocery store.',
  'Award-winning documentary following a squirrel\'s journey across Siberia, narrated by Morgan Freeman and scored by Yanni. Contains one scene that will make you question reality.',
  'A gritty crime drama set in a kindergarten, starring actual toddlers, with fight choreography by Jackie Chan and emotional depth rivaling "The Notebook".',
  'From the creators of "Peppa Pig" and "Requiem for a Dream" — a psychedelic western about a cowboy who only speaks in emojis.',
  'Shot in one take on a rollercoaster, this existential drama combines the pacing of "Mad Max" with the philosophical weight of a fortune cookie. Features a cameo by a confused penguin.'
];

export{names, commentsArray, dates, titles, alternativeTitles, countries, posters, genres, descriptions};
