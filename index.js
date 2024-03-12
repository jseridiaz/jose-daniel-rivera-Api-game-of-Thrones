import { functionPrintSearch } from './printcharacter.js'
import { clearFilters } from './clearFilter.js'

let arrayDescription = [
  {
    nameOfCharacter: 'Ned',
    description:
      'Eddard Stark, also known as Ned, is the Lord of Winterfell and Warden of the North in Westeros. He is an honorable and brave man, known for his loyalty and sense of duty. Throughout the story, he faces political and personal challenges, making tough decisions to protect his family and home. His life becomes entangled in intrigue and tragedy, leaving an indelible mark on the history of Westeros.',
    haus: 'Stark',
    hausUrl:
      'https://i.pinimg.com/originals/fb/ab/c9/fbabc998e4e6fa9b2734b4d1b14253e5.png'
  },
  {
    nameOfCharacter: 'Jon',
    description:
      "Jon Snow, the bastard son of Eddard Stark, is a central character in Game of Thrones. Raised in Winterfell, Jon faces the stigma of his bastard status. Throughout the series, he joins the Night's Watch and confronts threats beyond the Wall. His quest for identity and his role in the fight against the White Walkers make him a memorable protagonist.",
    haus: 'Stark',
    hausUrl:
      'https://i.pinimg.com/originals/fb/ab/c9/fbabc998e4e6fa9b2734b4d1b14253e5.png'
  },
  {
    nameOfCharacter: 'Daenerys',
    description:
      'Daenerys Targaryen, the last surviving member of House Targaryen, seeks to reclaim the Iron Throne. Initially sold as a wife in Essos, Daenerys becomes a powerful leader with three dragons at her command. Her journey is marked by the liberation of slaves, the conquest of cities, and the struggle for power. As her story unfolds, Daenerys faces moral dilemmas and challenges that test her ability to rule.'
  },
  {
    nameOfCharacter: 'Tyrion',
    description:
      'Tyrion Lannister, known as "The Imp" or "The Halfman," is a member of House Lannister. Despite his small stature, Tyrion possesses a sharp wit and intellect. He navigates the dangerous political landscape of Westeros with cunning and humor, often finding himself in precarious situations. His complex relationships within the Lannister family and his strategic acumen make him a fan-favorite character.'
  },
  {
    nameOfCharacter: 'Arya',
    description:
      "Arya Stark, the youngest daughter of Eddard Stark, is a fierce and independent character. After witnessing the brutal events in her family's life, Arya embarks on a journey for revenge and self-discovery. Her training with the Faceless Men and her list of names for those she seeks to kill showcase her determination and resilience.",
    haus: 'Stark',
    hausUrl:
      'https://i.pinimg.com/originals/fb/ab/c9/fbabc998e4e6fa9b2734b4d1b14253e5.png'
  },
  {
    nameOfCharacter: 'Cersei',
    description:
      'Cersei Lannister, the twin sister of Jaime Lannister, is a central antagonist in Game of Thrones. As the Queen and mother of three children born of incest, Cersei is ruthless in her pursuit of power. Her complex and manipulative character is marked by a deep-seated desire to maintain the Lannister legacy and secure her position on the Iron Throne.'
  },
  {
    nameOfCharacter: 'The High Sparrow',
    description:
      'Although the High Sparrow seems a harmless old man, he has a will of steel. Though his devotion to the Seven is genuine, he is also a deeply ambitious man, seeking to obtain political power in order to enforce what he sees as the will of the Gods on the populace, whether they want to or not.'
  },
  {
    nameOfCharacter: 'Jamie',
    description:
      'Jaime Lannister, known as the "Kingslayer," is the elder son of Tywin Lannister. Initially seen as arrogant and dishonorable, Jaime undergoes significant character development throughout the series. His complex relationship with his sister Cersei and his evolving sense of honor make him a compelling figure in the Game of Thrones narrative.'
  },
  {
    nameOfCharacter: 'Sansa',
    description:
      'Sansa Stark, the eldest daughter of Eddard and Catelyn Stark, undergoes a profound transformation in the series. Initially portrayed as naive and idealistic, Sansa learns to navigate the political intrigues of Westeros. Her resilience and ability to adapt to changing circumstances make her a key player in the unfolding events.',
    haus: 'Stark',
    hausUrl:
      'https://i.pinimg.com/originals/fb/ab/c9/fbabc998e4e6fa9b2734b4d1b14253e5.png'
  },
  {
    nameOfCharacter: 'Robb',
    description:
      "Robb Stark, the eldest son of Eddard Stark, becomes the King in the North during the War of the Five Kings. Known for his military prowess and sense of honor, Robb seeks justice for his father's death. His leadership is tested as he faces both political and military challenges in the quest for an independent North.",
    haus: 'Stark',
    hausUrl:
      'https://i.pinimg.com/originals/fb/ab/c9/fbabc998e4e6fa9b2734b4d1b14253e5.png'
  },
  {
    nameOfCharacter: 'Brandon',
    description:
      'Bran Stark, the fourth child of Eddard and Catelyn Stark, undergoes a mystical transformation in the series. After a fall that leaves him paralyzed, Bran discovers his latent magical abilities. His journey involves exploring the mysterious powers of the Three-Eyed Raven and uncovering the ancient history of Westeros.',
    haus: 'Stark',
    hausUrl:
      'https://i.pinimg.com/originals/fb/ab/c9/fbabc998e4e6fa9b2734b4d1b14253e5.png'
  },
  {
    nameOfCharacter: 'Cateyln Stark',
    description:
      'Catelyn Stark, the wife of Eddard Stark, is a strong and protective mother. Devoted to her family, Catelyn faces numerous challenges, including the loss of her husband and the separation from her children. Her strategic acumen and unwavering commitment to her family shape her role in the complex political landscape of Westeros.',
    haus: 'Stark',
    hausUrl:
      'https://i.pinimg.com/originals/fb/ab/c9/fbabc998e4e6fa9b2734b4d1b14253e5.png'
  },
  {
    nameOfCharacter: 'Joffrey',
    description:
      "Joffrey Baratheon, the eldest 'son' of King Robert Baratheon, becomes the ruler of the Seven Kingdoms. Known for his cruelty and sadistic nature, Joffrey's reign is marked by tyranny and chaos. His contentious relationship with his family and the people of King's Landing contributes to the instability in the realm."
  },
  {
    nameOfCharacter: 'Tormund',
    description:
      'Tormund Giantsbane is a fierce and loyal wildling warrior. Known for his distinctive red beard and imposing presence, Tormund plays a crucial role in the defense of the Wall against the White Walkers. His friendship with Jon Snow and his humorous demeanor make him a beloved character in Game of Thrones.'
  },
  {
    nameOfCharacter: 'Brienne',
    description:
      'Brienne of Tarth, also known as the "Maid of Tarth" or "Brienne the Beauty," is a skilled and honorable warrior. Renowned for her prowess in combat and her unwavering sense of duty, Brienne serves various leaders throughout the series. Her journey is marked by the challenges faced as a woman in a male-dominated world.'
  },
  {
    nameOfCharacter: 'Davos',
    description:
      'Davos Seaworth, often referred to as the "Onion Knight," is a former smuggler turned trusted advisor. Loyal to Stannis Baratheon, Davos plays a crucial role in many key events. His pragmatic and honorable nature sets him apart in the political intrigues of Westeros.'
  },
  {
    nameOfCharacter: 'Melisandre',
    description:
      'Melisandre, often referred to as the "Red Woman," is a powerful priestess of R\'hllor, the Lord of Light. Known for her prophetic abilities and use of dark magic, Melisandre becomes a key advisor to Stannis Baratheon. Her mysterious and enigmatic nature plays a crucial role in the events of Westeros.'
  },
  {
    nameOfCharacter: 'Samwell',
    description:
      "Samwell Tarly, commonly known as Sam, is a former member of the Night's Watch. Despite his initial struggles, Sam proves himself to be intelligent and resourceful. His knowledge about the White Walkers and his loyalty to Jon Snow make him an essential character in the series."
  },
  {
    nameOfCharacter: 'Gendry',
    description:
      "Gendry, a skilled blacksmith and a bastard of King Robert Baratheon, plays a significant role in the War of the Five Kings. His journey involves escaping King's Landing, discovering his true parentage, and forging alliances. Gendry's skills with a hammer and his connection to the Baratheon bloodline make him a notable character."
  },
  {
    nameOfCharacter: 'Margaery',
    description:
      'Margaery Tyrell is a shrewd and ambitious woman from House Tyrell. Known for her beauty and political acumen, Margaery becomes involved with various prominent figures in Westeros, including Renly Baratheon and Joffrey Baratheon. Her strategic marriages and manipulation of power dynamics make her a key player in the Game of Thrones.'
  },
  {
    nameOfCharacter: 'Theon',
    description:
      "Theon Greyjoy, the youngest son of Balon Greyjoy, undergoes a complex and tragic journey in the series. Initially a hostage in Winterfell, Theon's loyalty is torn between his birth family and the Starks. His actions and their consequences lead to profound changes in his identity and allegiances."
  },
  {
    nameOfCharacter: 'Varys',
    description:
      'Varys, often referred to as the "Spider," is a master of whisperers and a skilled manipulator. Known for his vast network of spies, Varys serves various rulers throughout Westeros, always working in the shadows to achieve his own mysterious goals. His loyalty to the realm and his pragmatic approach make him a complex and intriguing character.'
  },
  {
    nameOfCharacter: 'Lord Bronn',
    description:
      'Bronn, a skilled sellsword, starts as a simple mercenary and becomes a key figure in the political landscape of Westeros. Known for his sharp wit and combat skills, Bronn forms alliances with powerful individuals, including Tyrion Lannister and Jaime Lannister. His pragmatic and self-serving nature sets him apart in the dangerous world of Game of Thrones.'
  },
  {
    nameOfCharacter: 'Oberyn',
    description:
      "Oberyn Martell, also known as the 'Red Viper', is a charismatic and skilled warrior from Dorne. Seeking vengeance for his sister's death, Oberyn becomes involved in the politics of King's Landing. His combat prowess and memorable duel against the Mountain make him a memorable character in the series."
  },
  {
    nameOfCharacter: 'Ygritte',
    description:
      'Ygritte is a fierce and free-spirited wildling woman. Known for her archery skills and her relationship with Jon Snow, Ygritte plays a significant role in the events beyond the Wall. Her fiery personality and commitment to the Free Folk make her a fan-favorite character.'
  },
  {
    nameOfCharacter: 'Wylis',
    description:
      "Hodor, a gentle giant with limited speech abilities, serves House Stark at Winterfell. His life takes a tragic turn as he becomes an unwitting participant in Bran Stark's journey beyond the Wall. Hodor's character is marked by loyalty, sacrifice, and the heartbreaking revelation of the origin of his name."
  },
  {
    nameOfCharacter: 'Jorah',
    description:
      "Jorah Mormont, an exiled knight, starts as a spy for Varys but later becomes a devoted advisor to Daenerys Targaryen. Despite his initial betrayal, Jorah's loyalty and unrequited love for Daenerys drive him to redeem himself. His complex character grapples with honor, loyalty, and the pursuit of forgiveness."
  },
  {
    nameOfCharacter: 'Podrick',
    description:
      'Podrick Payne, often called Pod, is a squire who serves various characters, including Tyrion Lannister and Brienne of Tarth. Despite his humble beginnings, Podrick proves to be loyal and capable, earning the respect and admiration of those around him. His kind nature and unexpected talents make him a charming character.'
  },
  {
    nameOfCharacter: 'Missandei',
    description:
      "Missandei, originally a slave from Astapor, becomes a trusted advisor and confidante to Daenerys Targaryen. Known for her intelligence and linguistic skills, Missandei plays a key role in Daenerys' journey across Essos. Her friendship with Grey Worm and her support for Daenerys showcase her strength and resilience."
  },
  {
    nameOfCharacter: 'Gilly',
    description:
      "Gilly is a wildling woman who forms a unique bond with Samwell Tarly. Escaping from the dangers beyond the Wall, Gilly's journey involves survival, motherhood, and adapting to the unfamiliar world of the South. Her character highlights the stark contrast between the harsh realities of the North and the political intrigues of Westeros."
  },
  {
    nameOfCharacter: 'Euron',
    description:
      'Euron Greyjoy, the younger brother of Balon Greyjoy, is a charismatic and unpredictable pirate captain. Known for his ruthless and cunning nature, Euron seeks power and control over the Iron Islands and beyond. His dark ambitions and willingness to do whatever it takes to achieve his goals make him a formidable antagonist.'
  },
  {
    nameOfCharacter: 'Beric',
    description:
      'Beric Dondarrion, the leader of the Brotherhood Without Banners, is a knight who has been resurrected multiple times by the Lord of Light. Known for his sense of justice and determination, Beric plays a key role in the events of the Riverlands. His unwavering commitment to his cause and the sacrifices he makes define his character.'
  },
  {
    nameOfCharacter: 'Tommen',
    description:
      "Tommen Baratheon, the youngest son of Cersei Lannister and King Robert Baratheon, becomes the ruler of the Seven Kingdoms after his brother Joffrey. Tommen's reign is marked by his young age and vulnerability, making him susceptible to the influences of those around him. His character explores the challenges of leadership and the consequences of being a pawn in the political game."
  },
  {
    nameOfCharacter: 'Stannis',
    description:
      'Stannis Baratheon is the head of House Baratheon of Dragonstone and the Lord of Dragonstone. He is frequently described as a large and sinewy man that towers over others, such as Davos Seaworth and Jon Snow, a Baratheon trait. He lacks the long black hair of his brothers, and is instead balding, although he keeps a close-cropped beard of the signature Baratheon black.'
  },
  {
    nameOfCharacter: 'Shireen',
    description:
      'Shireen Baratheon, the daughter of Stannis Baratheon, faces the challenges of being marked by greyscale from a young age. Despite the discrimination she faces, Shireen is a kind-hearted and intelligent girl. Her relationship with her parents and her tragic fate explore themes of sacrifice and the consequences of the pursuit of power.'
  },
  {
    nameOfCharacter: 'Ramsay',
    description:
      'Ramsay Bolton, the illegitimate son of Roose Bolton, is a sadistic and cruel character who becomes the Warden of the North. Known for his brutality and psychological torture, Ramsay is a ruthless antagonist. His actions have far-reaching consequences and contribute to the chaos in the North.'
  },
  {
    nameOfCharacter: 'Olenna',
    description:
      'Olenna Tyrell, also known as the "Queen of Thorns," is the matriarch of House Tyrell. Sharp-tongued and politically savvy, Olenna is a formidable player in the game of thrones. Her cunning and strategic alliances contribute to the rise and fall of House Tyrell in the power struggles of Westeros.'
  },
  {
    nameOfCharacter: 'Viserys',
    description:
      "Viserys I is the son of Prince Baelon and Princess Alyssa Targaryen. He is violent and abusive with many, including his sister Daenerys, whom he blames for their mother's death. The fifteen years Viserys spend in exile were hard on him. He kept lusting after his father's throne, and became obsessed with winning back the Seven Kingdoms."
  },

  {
    nameOfCharacter: 'Lyanna',
    description:
      'Lyanna Mormont, the young and formidable Lady of Bear Island, becomes known for her courage and leadership during the Battle of the Bastards. Despite her age, Lyanna commands respect and loyalty from her people. Her character showcases the strength and resilience found in unexpected places.'
  },
  {
    nameOfCharacter: 'Pycelle',
    description:
      "Pycelle is a Grand Maester of the Citadel who has served in King's Landing and on the small council for over forty years."
  },
  {
    nameOfCharacter: 'Qyburn',
    description:
      "Qyburn, a former maester expelled from the Citadel, becomes a key advisor to Cersei Lannister. Known for his expertise in unconventional methods, Qyburn's scientific pursuits lead to the creation of the undead Gregor Clegane. His loyalty to Cersei and his questionable ethics make him a morally ambiguous character."
  },
  {
    nameOfCharacter: 'Meera',
    description:
      'Meera Reed, the daughter of Howland Reed, accompanies Bran Stark on his journey beyond the Wall. Skilled in survival and combat, Meera plays a crucial role in protecting Bran. Her character explores themes of loyalty, sacrifice, and the impact of war on individuals.'
  },
  {
    nameOfCharacter: 'Jaqen',
    description:
      "Jaqen H'ghar, a mysterious and skilled assassin, is a Faceless Man from the House of Black and White. Encountered by Arya Stark, Jaqen offers her the opportunity to join the Faceless Men. His enigmatic nature and connection to the magical and secretive order add an element of intrigue to the series."
  },
  {
    nameOfCharacter: 'Syrio Forel',
    description:
      "Syrio Forel is a master swordfighter from Braavos, hired by Eddard Stark to train Arya Stark in the art of combat. His unconventional teaching methods and memorable 'not today' philosophy leave a lasting impact on Arya's character and journey."
  },
  {
    nameOfCharacter: 'Daario Naharis',
    description:
      "Daario Naharis is a charismatic and skilled sellsword who becomes a loyal ally to Daenerys Targaryen. Known for his flamboyant appearance and prowess in battle, Daario plays a significant role in Daenerys' quest to reclaim the Iron Throne."
  },
  {
    nameOfCharacter: 'Barristan Selmy',
    description:
      "Barristan Selmy, also known as 'Barristan the Bold,' is a legendary knight with a storied history of service. He serves as a member of Daenerys Targaryen's Queensguard, showcasing his unwavering commitment to honor and duty."
  },
  {
    nameOfCharacter: 'Worm',
    description:
      "Grey Worm is the leader of the Unsullied, the highly trained slave soldiers freed by Daenerys Targaryen. Known for his loyalty and skill in combat, Grey Worm becomes a trusted commander in Daenerys' army. His character explores themes of identity, freedom, and camaraderie."
  },
  {
    nameOfCharacter: 'Yara Greyjoy',
    description:
      'Yara Greyjoy, the daughter of Balon Greyjoy, is a skilled and fearless naval commander. Known for her ambition and loyalty to her family, Yara faces the challenges of navigating the complex politics of the Iron Islands.'
  },
  {
    nameOfCharacter: 'Ellaria Sand',
    description:
      "Ellaria Sand is the paramour of Oberyn Martell and a key figure in Dorne. After Oberyn's death, Ellaria seeks revenge against the Lannisters, contributing to the political turmoil in the Seven Kingdoms."
  },
  {
    nameOfCharacter: 'Tywin',
    description:
      'Tywin Lannister, the head of House Lannister and father to Jaime, Cersei, and Tyrion, is a strategic and ruthless leader. His political maneuvers and military prowess shape the destiny of House Lannister and have a lasting impact on the events of Westeros.'
  },
  {
    nameOfCharacter: 'Maester Aemon',
    description:
      "Maester Aemon, a wise and venerable member of the Night's Watch, serves as the maester at Castle Black. Despite his advanced age, Aemon's knowledge and guidance play a crucial role in the defense against the dangers beyond the Wall."
  },
  {
    nameOfCharacter: 'Mance Rayder',
    description:
      "Mance Rayder, also known as the 'King-Beyond-the-Wall,' leads the Free Folk in their quest for survival beyond the Wall. Mance's leadership and attempts to unite the diverse wildling clans make him a key player in the struggle against the Night's Watch and the White Walkers."
  },
  {
    nameOfCharacter: 'Edmure Tully',
    description:
      "Edmure Tully, the younger brother of Catelyn Stark, is the Lord of Riverrun. Known for his well-intentioned but often misguided efforts, Edmure's actions have significant consequences in the War of the Five Kings and the broader political landscape of Westeros."
  },
  {
    nameOfCharacter: 'Podrick Payne',
    description:
      'Podrick Payne, often called Pod, is a squire who serves various characters, including Tyrion Lannister and Brienne of Tarth. Despite his humble beginnings, Podrick proves to be loyal and capable, earning the respect and admiration of those around him. His kind nature and unexpected talents make him a charming character.'
  },
  {
    nameOfCharacter: 'Ros',
    description:
      "Ros is a prostitute in King's Landing who becomes a recurring character in the series. Her interactions with various key players, including Tyrion Lannister and Petyr Baelish, provide insight into the darker aspects of the city's intrigues."
  },
  {
    nameOfCharacter: 'Hot Pie',
    description:
      "Hot Pie is a former baker's apprentice who becomes an unlikely companion to Arya Stark. Known for his culinary skills and simple demeanor, Hot Pie's character adds moments of warmth and humor to the harsh realities of the War of the Five Kings."
  },
  {
    nameOfCharacter: 'Gilly',
    description:
      "Gilly is a wildling woman who forms a unique bond with Samwell Tarly. Escaping from the dangers beyond the Wall, Gilly's journey involves survival, motherhood, and adapting to the unfamiliar world of the South. Her character highlights the stark contrast between the harsh realities of the North and the political intrigues of Westeros."
  },
  {
    nameOfCharacter: 'Roslin Frey',
    description:
      "Roslin Frey is a member of House Frey and plays a significant role in the events of the Red Wedding. Her marriage to Edmure Tully is part of the Frey's alliance with House Stark, but the betrayal that follows leads to one of the most shocking moments in the series."
  },
  {
    nameOfCharacter: 'Sandor',
    description:
      "Sandor Clegane, also known as the Hound, is a fearsome and brutal warrior with a burned face. Despite his harsh exterior, the Hound's complex character undergoes significant development throughout the series. His interactions with Sansa Stark and Arya Stark reveal layers of vulnerability and redemption."
  },
  {
    nameOfCharacter: 'Beric Dondarrion',
    description:
      'Beric Dondarrion, the leader of the Brotherhood Without Banners, is a knight who has been resurrected multiple times by the Lord of Light. Known for his sense of justice and determination, Beric plays a key role in the events of the Riverlands. His unwavering commitment to his cause and the sacrifices he makes define his character.'
  },
  {
    nameOfCharacter: "Jaqen H'ghar",
    description:
      'Jaqen Hghar, a mysterious and skilled assassin, is a Faceless Man from the House of Black and White. Encountered by Arya Stark, Jaqen offers her the opportunity to join the Faceless Men. His enigmatic nature and connection to the magical and secretive order add an element of intrigue to the series.'
  },
  {
    nameOfCharacter: 'Talisa Stark',
    description:
      'Talisa Stark, originally from Volantis, becomes the wife of Robb Stark. Known for her compassion and medical skills, Talisa plays a key role in the War of the Five Kings. Her presence adds a personal and emotional dimension to the political intrigue of Westeros.'
  },

  {
    nameOfCharacter: 'Osha',
    description:
      "Osha is a wildling woman who becomes a captive at Winterfell but later forms an alliance with Bran and Rickon Stark. Known for her survival skills and pragmatism, Osha's character showcases the complexities of relationships and allegiances beyond the Wall."
  },
  {
    nameOfCharacter: 'Roose',
    description:
      'Roose Bolton was the head of House Bolton. He has a plain face, beardless and ordinary, with his only noticeable feature being his strange eyes, paler than stone and darker than milk, like two white moons.'
  },
  {
    nameOfCharacter: 'Khal Drogo',
    description:
      "Khal Drogo is a powerful Dothraki warlord who marries Daenerys Targaryen. Known for his strength and combat skills, Khal Drogo's character undergoes significant development as he becomes entwined in the destiny of the Targaryen family."
  },
  {
    nameOfCharacter: 'Tyene Sand',
    description:
      'Tyene Sand is one of the Sand Snakes, the daughters of Oberyn Martell. Known for her proficiency with twin daggers, Tyene becomes involved in the political intrigues of Dorne. Her character explores themes of vengeance, loyalty, and the consequences of familial ties.'
  },
  {
    nameOfCharacter: 'Dolorous Edd',
    description:
      "Dolorous Edd, often called Edd, is a member of the Night's Watch. Known for his sarcastic and pessimistic demeanor, Edd becomes a loyal friend to Jon Snow. His character adds humor to the challenges faced by the Night's Watch beyond the Wall."
  },
  {
    nameOfCharacter: 'Nymeria',
    description:
      "Nymeria is the direwolf companion of Arya Stark. After being released into the wild to save her from the fate of the other Stark direwolves, Nymeria forms a formidable wolf pack in the Riverlands. Her character symbolizes Arya's journey and the untamed spirit of the North."
  },
  {
    nameOfCharacter: 'Yoren',
    description:
      "Yoren is a recruiter for the Night's Watch who becomes involved in the events of the War of the Five Kings. Known for his rough exterior and commitment to duty, Yoren plays a crucial role in the protection and guidance of Arya Stark."
  },
  {
    nameOfCharacter: 'Jeor',
    description:
      "Jeor Mormont, nicknamed 'the Old Bear', is the Lord Commander of the Night's Watch and leads from his headquarters at the fortress of Castle Black. Jeor was once the Lord of Bear Island and head of House Mormont until he abdicated his seat in favor of his son, Ser Jorah Mormont, and joined the Night's Watch."
  },
  {
    nameOfCharacter: 'Shae',
    description:
      "Shae is a camp-follower whom Bronn, a sellsword in the service of Tyrion, finds as Tyrion requests. She is attached to a ginger-haired Knight, but Bronn 'persuades' him to give her up to Tyrion, who is fighting with the army of Lannister in the Riverlands."
  },
  {
    nameOfCharacter: 'Rickon Stark',
    description:
      'Rickon Stark was the youngest child and third son of Eddard and Catelyn Stark. Rickon is a naturally aggressive and strong-willed child, but his youth makes it difficult for him to cope with the terrible changes that come to his family and life.'
  },
  {
    nameOfCharacter: 'Petyr Baelish',
    description:
      "Lord Petyr Baelish, popularly called Littlefinger, was the Master of Coin on the Small Council under King Robert Baratheon and King Joffrey Baratheon. He was a skilled manipulator and used his ownership of brothels in King's Landing to both acquire vast wealth and accrue intelligence on political rivals."
  },
  {
    nameOfCharacter: 'Robert',
    description:
      'Robert war der erstgeborene Sohn von Lord Steffon Baratheon und Lady Cassana Baratheon. Robert was quite tall (his best friend Ned Stark estimated his height at more than six feet), strong, courageous, loved by his soldiers, and very handsome in his youth, though these traits greatly diminished upon becoming King.'
  },
  {
    nameOfCharacter: 'Ramsey',
    description:
      'Ramsay considers himself a true Bolton despite his birth and is highly resentful of his baseborn status, referring to himself proudly as the trueborn scion of the Dreadfort and violently correcting those who refer to him otherwise. Ramsay is a sadist; he is cruel, savage and wild, taking delight in torturing others.'
  }
]
let arrayImgHauses = [
  {
    haus: 'Stark',
    hausUrl: './assets/img/Shield.png'
  },

  {
    haus: 'Viper',
    hausUrl: './assets/img/b9bd997aea68c14ad427fd66728eae3a.png'
  },
  {
    haus: 'Baratheon',
    hausUrl:
      'https://freepngimg.com/save/93921-stannis-shield-thrones-house-symbol-baratheon-game/500x551'
  },

  {
    haus: 'Lannister',

    hausUrl:
      'https://pro-heraldica.de/wp-content/uploads/2019/06/lannister_sigil_by_varvara64-d5ukyr3.png'
  },
  {
    haus: 'Lanister',

    hausUrl:
      'https://pro-heraldica.de/wp-content/uploads/2019/06/lannister_sigil_by_varvara64-d5ukyr3.png'
  },
  {
    haus: 'Targaryen',
    hausUrl: './assets/img/111.png'
  },
  {
    haus: 'Targaryan',
    hausUrl: './assets/img/111.png'
  },

  {
    haus: 'Tarly',
    hausUrl: './assets/img/Screenshot 2023-09-28 090454.png'
  },
  {
    haus: 'Greyjoy',
    hausUrl:
      'https://awoiaf.westeros.org/images/thumb/5/5b/House_Greyjoy.svg/1200px-House_Greyjoy.svg.png'
  },
  {
    haus: 'Clegane',
    hausUrl:
      'https://i.pinimg.com/originals/31/ee/9c/31ee9c2e20a093e136a0e77dae1a6af8.png'
  },
  {
    haus: 'Tyrell',
    hausUrl:
      'https://pro-heraldica.de/wp-content/uploads/2019/06/tyrell_sigil_by_varvara64-d5ul53s.png'
  },
  {
    haus: 'Free Folk',
    hausUrl: './assets/img/Free_folk_main_shield.png'
  },
  {
    haus: 'Tarth',
    hausUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37d4fca9-4e1a-4b6b-b9ae-083dbfbcfe8a/dg8uod4-6bcbcfeb-f7f3-4748-834c-d3b4d50e1900.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3ZDRmY2E5LTRlMWEtNGI2Yi1iOWFlLTA4M2RiZmJjZmU4YVwvZGc4dW9kNC02YmNiY2ZlYi1mN2YzLTQ3NDgtODM0Yy1kM2I0ZDUwZTE5MDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CvtSi7WKFTY4Cw_-YERuXe3Agc2SI16Tk0_jZjwa6NI'
  },
  {
    haus: 'Mormont',
    hausUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ccbc2539-8c17-4731-9db8-57d90cf5bff7/dcvb88c-cfd9f3b3-12bc-4a8d-80aa-9ab0cdf63c51.png/v1/fill/w_1024,h_1024/house_mormont___got_by_nunkij_dcvb88c-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2NjYmMyNTM5LThjMTctNDczMS05ZGI4LTU3ZDkwY2Y1YmZmN1wvZGN2Yjg4Yy1jZmQ5ZjNiMy0xMmJjLTRhOGQtODBhYS05YWIwY2RmNjNjNTEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EzqArkPZcpCK44qgSy7rrOqen733HHTD2qctr5WAOKs'
  }
]

console.log(arrayDescription.length)
console.log(arrayDescription)

fetch('https://thronesapi.com/api/v2/Characters')
  .then((res) => res.json())
  .then((res) => {
    let array = res
    console.log(res)
    // * Depurado de código

    let functionRemoveFamily = (array) => {
      for (const element of array) {
        if (element.family.includes('House ')) {
          element.family = element.family.replace('House ', '')
        }
      }
    }
    let functionFamilyNameFix = (array) => {
      for (const element of array) {
        if (element.family.includes('Lanister')) {
          element.family = element.family.replace('Lanister', 'Lannister')
        } else if (element.family.includes('Targaryan')) {
          element.family = element.family.replace('Targaryan', 'Targaryen')
        } else if (element.family.includes('Lorathi')) {
          element.family = element.family.replace('Lorathi', 'Lorath')
        }
      }
    }
    array.splice(34, 1)
    functionFamilyNameFix(array)

    functionRemoveFamily(array)

    // *Final de la depuración del
    console.log(array)
    let sectionReading = document.querySelector('#info-all-Characters')

    let selectCharacter = document.querySelector('#character-list')
    let selectHouses = document.querySelector('#house-list')

    for (const element of array) {
      // * Creation of elements
      let divCharacter = document.createElement('div')
      let titleHTML = document.createElement('h2')
      const divImg = document.createElement('div')
      let img = document.createElement('img')

      const nameHTML = document.createElement('h3')
      const firstName = document.createElement('p')
      const secondName = document.createElement('p')
      const familyGroup = document.createElement('p')

      divCharacter.classList.add('flex-container-column', 'single-character')

      titleHTML.textContent = element.title
      let conditionImg = () => {
        if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/daenerys.jpg'
        ) {
          img.src =
            'https://i.pinimg.com/736x/41/68/20/416820c171bfe87559c59e3bb4d51a41.jpg'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/sam.jpg'
        ) {
          img.src =
            'https://i.pinimg.com/originals/6e/86/4a/6e864a9caba8eb53dc6d9bd0e18c78aa.png'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/jon-snow.jpg'
        ) {
          img.src =
            'https://media.gq-magazine.co.uk/photos/62ac38f82da9f5f89888eba9/16:9/w_1280,c_limit/jon-snow-series-1200.jpeg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/arya-stark.jpg'
        ) {
          img.src =
            'https://i.pinimg.com/originals/37/9a/7f/379a7f7fa7f6dd0797cfeffcc0b68f9c.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/sansa-stark.jpeg'
        ) {
          img.src =
            'https://i.pinimg.com/474x/8e/81/9f/8e819f5e6e61fa5343c3c831b1aa6c7a.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/jaime-lannister.jpg'
        ) {
          img.src =
            'https://i.pinimg.com/564x/64/3c/55/643c559b1185c1ff85adc9e6ecca6fef.jpg'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/cersei.jpg'
        ) {
          img.src =
            'https://media1.popsugar-assets.com/files/thumbor/NExPwilevJr0wWGvp1uSNDLTRB4/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2012/10/42/3/192/1922283/1e86d0bb4a023a1b_418898_10151010844577734_486007402_n/i/Cersei-Lannister-From-Game-Thrones.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/tywin-lannister.jpg'
        ) {
          img.src =
            'https://images4.fanpop.com/image/photos/21000000/Tywin-Lannister-game-of-thrones-21005419-500-280.png'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/theon.jpg'
        ) {
          img.src =
            'https://i.pinimg.com/736x/ff/d6/4b/ffd64bd477c25b93be8c6f1635b17982.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/tyrion-lannister.jpg'
        ) {
          img.src =
            'https://hips.hearstapps.com/hmg-prod/images/theory-1553634761.jpg?crop=0.501xw:1.00xh;0,0&resize=640:*'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/the-hound.jpg'
        ) {
          img.src =
            'https://metro.co.uk/wp-content/uploads/2017/08/pri_50645254.jpg?quality=90&strip=all'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/littlefinger.jpg'
        ) {
          img.src =
            'https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2017/07/game-thrones-why-you-should-root-littlefinger-1.jpg?fit=1200%2C700&ssl=1else'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/varys.jpg'
        ) {
          img.src =
            'https://hips.hearstapps.com/esquire/assets/17/30/1501077567-varys-game-of-thrones.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/margaery-tyrell.jpg'
        ) {
          img.src =
            'https://assets.mycast.io/actor_images/actor-margaery-tyrell-561946_large.jpg?1665339004'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/ygritte.jpg'
        ) {
          img.src =
            'https://i.pinimg.com/564x/63/51/75/63517555ab5c94489acbcc6518ed00bc.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/brienne-tarth.jpeg'
        ) {
          img.src =
            'https://hips.hearstapps.com/hmg-prod/images/game-of-thrones-season-8-gwendoline-christie-brienne-1554392447.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/missandei.jpeg'
        ) {
          img.src =
            'https://modernpaintbynumbers.com/wp-content/uploads/2020/08/Missandei-Game-Of-Thrones.jpg'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/gilly.jpg'
        ) {
          img.src =
            'https://hips.hearstapps.com/hmg-prod/images/game-of-thrones-gilly2-1558110080.jpg?crop=0.565xw:1.00xh;0.103xw,0&resize=1200:*'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/roose-bolton.jpg'
        ) {
          img.src =
            'https://www.telegraph.co.uk/content/dam/tv/2016/04/24/roose_trans_NvBQzQNjv4Bq5CleMo9isD8GZWOb6mXblYSoKcc6Fjni46ABBRE_ho4.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/talisa-stark.jpg'
        ) {
          img.src =
            'https://i.pinimg.com/originals/65/40/37/6540378324f78b1ab33a5292deb76d40.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/melisandre.jpg'
        ) {
          img.src =
            'https://i.insider.com/572d284152bcd023008c1811?width=1200&format=jpeg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/tormund-giantsbane.jpg'
        ) {
          img.src =
            'https://www.hollywoodreporter.com/wp-content/uploads/2019/04/tormund-1_copy.jpg?w=1296'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/yara-greyjoy.jpg'
        ) {
          img.src =
            'https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/character/s5/yara-greyjoy-1920.jpg?w=1200'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/hodor.jpg'
        ) {
          img.src =
            'https://cdn.vox-cdn.com/thumbor/WgK3YjFlOLF-foMemre2hyPU6AY=/0x0:1200x600/1400x1050/filters:focal(504x204:696x396):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49659867/hodor-1.0.jpg'
        } else if (
          element.imageUrl ==
          'https://thronesapi.com/assets/images/greyworm.jpg'
        ) {
          img.src =
            'https://hellogiggles.com/wp-content/uploads/sites/7/2017/12/12/worm.png'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/bronn.jpg'
        ) {
          img.src =
            'https://preview.redd.it/2gav91o4lsu31.png?width=640&crop=smart&auto=webp&s=933530c1d4c333bd62008b7fa09daf909623427f'
        } else if (
          element.imageUrl == 'https://thronesapi.com/assets/images/qyburn.jpg'
        ) {
          img.src =
            'https://media1.popsugar-assets.com/files/thumbor/R9kGbC4W1uXXzS4HCT7EY9gHt5s=/1920x1080/top/filters:format_auto():quality(85):extract_cover()/2016/05/08/220/n/1922398/8fa99d9d8784d2e0_qyburn-1920.jpg'
        } else {
          img.src = element.imageUrl
        }
      }
      conditionImg()
      img.loading = 'lazy'

      nameHTML.textContent = element.fullName
      firstName.textContent = `First Name is: ${element.firstName}`
      secondName.textContent = `Last Name is: ${element.lastName}`
      familyGroup.textContent = `House: ${element.family}`

      divCharacter.appendChild(titleHTML)
      divImg.appendChild(img)
      divCharacter.appendChild(divImg)

      divCharacter.appendChild(nameHTML)
      divCharacter.appendChild(firstName)
      divCharacter.appendChild(secondName)
      divCharacter.appendChild(familyGroup)
      sectionReading.appendChild(divCharacter)

      let printFiltered = () => {
        //* Creation of the Event throw a method for looking for a single Character
        let divCharacterFilter = document.createElement('div')
        let titleHTMLFilter = document.createElement('h2')
        const divImgFilter = document.createElement('div')
        let img = document.createElement('img')
        const divInfo = document.createElement('div')

        const nameHTMLFilter = document.createElement('h3')
        const firstNameFilter = document.createElement('p')
        const secondNameFilter = document.createElement('p')
        const familyGroupFilter = document.createElement('p')
        const description = document.createElement('p')
        let divFilter = document.querySelector('#div-img')
        let divHaus = document.createElement('div')
        let imgHaus = document.createElement('img')

        divCharacterFilter.classList.add('single-filtered', 'flex-container')

        let functionPrint = (e, comparation) => {
          let firstOptionValue = document.querySelector('option')

          if (e.target.value == firstOptionValue.textContent) {
            divFilter.innerHTML = ''
          } else if (e.target.value === comparation) {
            divFilter.innerHTML = ''

            divCharacter.classList.add(
              'flex-container-column',
              'single-character'
            )

            titleHTMLFilter.textContent = element.title
            let allSingleDiv = document.querySelectorAll('.single-character')
            console.log(allSingleDiv)
            for (const item of allSingleDiv) {
              if (item.children[2].textContent.includes(element.fullName)) {
                img.src = item.children[1].children[0].src
              }
            }
            conditionImg()

            nameHTMLFilter.textContent = element['fullName']
            firstNameFilter.textContent = `First Name is: ${element.firstName}`
            secondNameFilter.textContent = `Last Name is: ${element.lastName}`
            familyGroupFilter.textContent = `House: ${element.family}`
            divInfo.id = 'info-character'
            divInfo.classList.add('flex-container-column')
            divHaus.classList.add('absolute', 'single-haus')

            let value = arrayDescription.find((each) => {
              if (e.target.value == 'Pycelle') {
                return each.nameOfCharacter == 'Pycelle'
              } else if (e.target.value == 'Grey Worm') {
                return each.nameOfCharacter === 'Worm'
              } else if (each.nameOfCharacter.includes(element.firstName)) {
                console.log(each)
                return each
              }
            })

            description.textContent = value.description

            divCharacterFilter.appendChild(titleHTMLFilter)
            divImgFilter.appendChild(img)
            divCharacterFilter.appendChild(divImgFilter)

            divInfo.appendChild(nameHTMLFilter)
            divInfo.appendChild(firstNameFilter)
            divInfo.appendChild(secondNameFilter)
            divInfo.appendChild(familyGroupFilter)
            divInfo.appendChild(description)
            for (const item of arrayImgHauses) {
              if (element.family.includes(item.haus)) {
                imgHaus.src = item.hausUrl
                imgHaus.loading = 'lazy'

                divHaus.appendChild(imgHaus)
              }
              divFilter.appendChild(divHaus)
            }
            divCharacterFilter.appendChild(divInfo)
            divFilter.appendChild(divCharacterFilter)
          }
        }
        selectCharacter.addEventListener('change', (e) => {
          functionPrint(e, element.fullName)
        })
      }

      printFiltered()
    }
    selectHouses.addEventListener('change', (e) => {
      let divFilter = document.querySelector('#div-img')
      divFilter.innerHTML = ''
      let newArray = array.filter((each) => {
        if (each.family == '') {
          return
        } else {
          return e.target.value.includes(each.family)
        }
      })
      for (const element of newArray) {
        let divCharacterFilter = document.createElement('div')
        let titleHTMLFilter = document.createElement('h2')
        const divImgFilter = document.createElement('div')
        let img = document.createElement('img')
        const divInfo = document.createElement('div')
        let divHaus = document.createElement('div')
        let imgHaus = document.createElement('img')

        const nameHTMLFilter = document.createElement('h3')
        const firstNameFilter = document.createElement('p')
        const secondNameFilter = document.createElement('p')
        const familyGroupFilter = document.createElement('p')
        const description = document.createElement('p')

        for (const item of arrayImgHauses) {
          if (e.target.value.includes(item.haus)) {
            imgHaus.src = item.hausUrl
            imgHaus.loading = 'lazy'
            divHaus.classList.add('absolute')
            divHaus.classList.add('shield-haus')
          }
        }
        divCharacterFilter.classList.add(
          'single-filtered-houses',
          'flex-container',
          'relative'
        )
        divCharacterFilter.id = `${element.firstName}`

        titleHTMLFilter.textContent = element.title

        nameHTMLFilter.textContent = element['fullName']
        firstNameFilter.textContent = `First Name is: ${element.firstName}`
        secondNameFilter.textContent = `Last Name is: ${element.lastName}`
        familyGroupFilter.textContent = `House: ${element.family}`
        divInfo.classList.add('info-div-houses')

        divInfo.classList.add('flex-container-column')

        let allSingleDiv = document.querySelectorAll('.single-character')

        for (const item of allSingleDiv) {
          if (item.children[2].textContent.includes(element.fullName)) {
            img.src = item.children[1].children[0].src
          }
        }

        let value = arrayDescription.find((each) => {
          if (element.lastName == 'Pycelle') {
            return each.nameOfCharacter == 'Pycelle'
          } else if (element.fullName == 'Grey Worm') {
            return each.nameOfCharacter === 'Worm'
          } else if (each.nameOfCharacter.includes(element.firstName)) {
            return each
          }
        })

        description.textContent = value.description

        divHaus.appendChild(imgHaus)
        divCharacterFilter.appendChild(divHaus)

        divInfo.appendChild(nameHTMLFilter)
        divInfo.appendChild(firstNameFilter)
        divInfo.appendChild(secondNameFilter)
        divInfo.appendChild(familyGroupFilter)
        divInfo.appendChild(description)
        divCharacterFilter.appendChild(divInfo)
        divCharacterFilter.appendChild(titleHTMLFilter)
        divImgFilter.appendChild(img)
        divFilter.appendChild(divCharacterFilter)
        divCharacterFilter.appendChild(divImgFilter)

        if (imgHaus.src == '') {
          divHaus.classList.add('none')
        }
      }
    })
    let inputSearch = document.querySelector('#input-search >input')
    let buttonSearch = document.querySelector('#input-search >button')

    console.log()
    let divFilter = document.querySelector('#div-img')
    buttonSearch.addEventListener('click', () => {
      for (const element of array) {
        element.fullName.toLowerCase()
        if (!inputSearch.value) {
          return
        } else if (
          element.fullName
            .toLowerCase()
            .includes(inputSearch.value.toLowerCase())
        ) {
          divFilter.innerHTML = ''
          functionPrintSearch(
            arrayDescription,
            element,
            inputSearch,
            divFilter,
            arrayImgHauses
          )
        }
      }
    })

    let buttonReading = document.querySelector('#container-selector > button')
    buttonReading.addEventListener('click', () => clearFilters())

    let fillarray = []

    let fillfunction = function (groupName, selectToappend, part) {
      fillarray = []
      for (const element of array) {
        if (!fillarray.includes(element[part])) {
          fillarray.push(element[part])
        }
      }
      for (let i = 0; i < fillarray.length; i++) {
        const element = fillarray[i]
        if (element == '') {
          fillarray.splice(i, 1)
        }
      }

      let selectReading = document.querySelector(selectToappend)
      const group = document.createElement('optgroup')

      group.label = groupName

      let firstOption = document.createElement('option')
      firstOption.value = `All ${groupName}`
      firstOption.textContent = `All ${groupName}`
      group.appendChild(firstOption)
      for (const item of fillarray) {
        const option = document.createElement('option')
        option.value = item
        option.textContent = item
        group.appendChild(option)
      }
      selectReading.appendChild(group)

      console.log(fillarray)
    }
    fillfunction('Characters', '#character-list', 'fullName')
    fillfunction('Family Houses', '#house-list', 'family')
  })
