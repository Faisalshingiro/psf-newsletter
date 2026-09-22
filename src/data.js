// All editorial content for the PSF Expo 2026 Newsletter.
// Sourced from the PSF Expo 2026 newsletter document.

export const meta = {
  brand: 'Private Sector Federation Rwanda',
  issue: 'PSF Expo 2026 Newsletter',
  title: 'Expo 2026',
  titleAccent: 'A celebration of business, innovation, partnership & possibility',
  dek: 'Reflecting on the people, businesses, ideas and moments that made Expo 2026 memorable.',
  heroImage: 'https://www.kigalitoday.com/IMG/jpg/bk_expo.jpg',
  heroCaption: 'Expo 2026 at the Gikondo Expo Grounds — where business and community came together.'
}

export const stats = [
  { value: '500+', label: 'Exhibitors' },
  { value: '20+', label: 'Countries represented' },
  { value: '2,000+', label: 'Youth casual jobs' },
  { value: '27', label: 'Years of longest participation' }
]

export const gallery = [
  {
    src: 'https://s3.innovaterwanda.rw/public.drive/cloudinary/images/20251016T073741_1sfrqt345j.jpg',
    label: 'Innovation taking centre stage'
  },
  {
    src: 'https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2019/11/22/0l8a6570.jpg',
    label: 'Electric mobility'
  },
  {
    src: 'https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2020/12/08/parents-look-how-their-children-playing-l-at-gikondo-expo-ground-last-year.children-below-12-years-not-allowed-in-expo-2020-sam-ngendahimana-.jpg',
    label: 'A place for families'
  },
  {
    src: 'https://www.kigalitoday.com/IMG/jpg/bk_expo.jpg',
    label: 'A meeting point for business and community'
  }
]

// The full ordered list of newsletter stories.
export const sections = [
  {
    id: 'marked',
    no: '01',
    kicker: 'The big picture',
    title: 'What marked Expo 2026',
    images: ['/1A.jpg', '/1B.jpg'],
    lead: 'Expo 2026 was more than an exhibition. It was a meeting point for businesses, entrepreneurs, innovators, investors, families, young people and members of the wider community.',
    body: [
      'Over the course of the Expo, exhibitors had an opportunity to showcase their products and services, connect with potential customers, build relationships and demonstrate the diversity of Rwanda\u2019s private sector.',
      'From business exhibitions and electric vehicles to food, entertainment, innovation and children\u2019s activities, Expo 2026 created a space where business and community came together.',
      'For PSF, the Expo remains an important platform for connecting businesses with consumers, creating opportunities for networking and showcasing the contribution of the private sector to Rwanda\u2019s economic development.'
    ],
    cards: [
      {
        title: 'Business meets community',
        text: 'Exhibitors showcased products and services, connected with potential customers and built relationships across Rwanda\u2019s private sector.'
      },
      {
        title: 'A platform for growth',
        text: 'Business exhibitions, electric vehicles, food, entertainment, innovation and children\u2019s activities created a space where business and community came together.',
        accent: true
      }
    ]
  },
  {
    id: 'countries',
    no: '02',
    kicker: 'New faces',
    title: 'New markets, new opportunities',
    images: ['/2A.jpg', '/2B.jpg'],
    lead: 'Expo 2026 welcomed countries participating for the first time, including Ethiopia and Senegal.',
    body: [
      'Their participation added another dimension to the Expo by creating opportunities for greater regional and continental interaction.',
      'The presence of new countries also demonstrated the potential of the Expo as a platform for businesses to discover new markets, products, partnerships and investment opportunities.',
      'For exhibitors and visitors alike, new participation means new conversations \u2014 and potentially, new business relationships.'
    ],
    // tags: ['Ethiopia', 'Senegal', 'Regional trade', 'New markets']
  },
  {
    id: 'longest',
    no: '03',
    kicker: 'A remarkable journey',
    title: '27 years of showing up',
    images: ['/3.jpg'],
    lead: 'Some Expo stories are measured not in days or editions, but in decades.',
    body: [
      'Among the remarkable stories of long-standing participation is the story of a lady from Ghana who has participated for 27 years.',
      'Her journey represents something bigger than simply attending an exhibition. It reflects consistency, relationships, trust and the value that businesses can find in continuing to participate year after year.',
      'Twenty-seven years of participation is a story worth celebrating.'
    ],
    // statHighlight: { value: '27', label: 'Years of continuous participation' }
  },
  {
    id: 'exhibitors',
    no: '04',
    kicker: 'Recognition',
    title: 'Businesses that stood out',
    images: ['/4A.jpg', '/4B.jpg'],
    lead: 'Expo 2026 brought together exhibitors from different sectors, each presenting unique products, services and ideas.',
    body: [
      'Among them, some exhibitors stood out through their presentation, customer engagement, innovation, product offering and ability to attract visitors.',
      'This story highlights the best-performing exhibitors of Expo 2026, celebrating the businesses that made a strong impression throughout the exhibition.'
    ]
  },
  {
    id: 'ev',
    no: '05',
    kicker: 'Mobility',
    title: 'Driving towards a more sustainable future',
    images: ['/5.jpg'],
    lead: 'One of the eye-catching features of Expo 2026 was the exhibition of electrical cars.',
    body: [
      'The presence of electric vehicles provided visitors with an opportunity to see emerging mobility solutions and learn more about the possibilities offered by cleaner transportation.',
      'The exhibition also brought the conversation around innovation, sustainability and the future of mobility closer to the public.',
      'As Rwanda continues to explore sustainable solutions, electric mobility is becoming an important part of the conversation about the future.'
    ]
  },
  {
    id: 'food',
    no: '06',
    kicker: 'Experience',
    title: 'Where business met fun',
    images: ['/6A.jpg', '/6B.jpg'],
    lead: 'Expo 2026 was not only about business meetings and product displays.',
    body: [
      'Food, entertainment and the fun fair created an environment where visitors could relax, enjoy themselves and experience a different side of the Expo.',
      'Food vendors brought a variety of tastes and experiences to the grounds, while the fun fair added excitement for visitors of different ages.',
      'It was a reminder that a successful exhibition can create opportunities for business while also creating memorable experiences for the wider community.'
    ]
  },
  {
    id: 'music',
    no: '07',
    kicker: 'Culture',
    title: 'Music that brought the Expo to life',
    images: ['/7A.jpg', '/7B.jpg'],
    lead: 'Music added another layer of energy to Expo 2026.',
    body: [
      'The performances created moments for visitors to come together, enjoy themselves and celebrate throughout the exhibition.',
      'Special credit goes to Pemcam for organizing the amazing performances that helped make the Expo experience even more memorable.',
      'From the exhibition stands to the stage, Expo 2026 demonstrated that business, culture and entertainment can share the same space.'
    ],
    // tags: ['Riderman', 'Bushali', 'Kenny Sol', 'Zeo Trap']
  },
  {
    id: 'staff',
    no: '08',
    kicker: 'Behind the scenes',
    title: 'The PSF staff understood the assignment',
    images: ['/8A.jpg', '/8B.jpg'],
    lead: 'Behind every successful Expo is a team working before, during and after the event.',
    body: [
      'The PSF staff played an important role in the organization and coordination of Expo 2026, ensuring that different activities and stakeholders were brought together throughout the exhibition.',
      'From coordinating exhibitors and activities to supporting the overall flow of the Expo, the work behind the scenes contributed to the experience visitors encountered on the ground.',
      'This is a story about the people behind the Expo \u2014 the coordination, teamwork, long hours and commitment that helped bring Expo 2026 together.'
    ]
  },
  {
    id: 'turnup',
    no: '09',
    kicker: 'The people came through',
    title: 'A strong general turnout',
    images: ['/9A.jpg', '/9B.jpg'],
    lead: 'An Expo is only as vibrant as the people who attend it.',
    body: [
      'Expo 2026 attracted a strong turnout, bringing together businesses, families, young people, entrepreneurs, consumers and visitors alongside nearly 500 exhibitors from over 20 countries.',
      'The general turnout demonstrated the public\u2019s interest in discovering businesses, products, services, entertainment and new experiences.',
      'The crowds became part of the story themselves \u2014 turning the Expo grounds into a busy meeting point for business and community.'
    ]
  },
  {
    id: 'leadership',
    no: '10',
    kicker: 'Leadership perspective',
    title: 'What PSF leadership says about Expo 2026',
    images: ['/10.jpg'],
    lead: 'Expo 2026 brought together businesses and stakeholders from different sectors, and PSF leadership played an important role in reflecting on the significance of the event.',
    quote: {
      text: 'This is a premier platform for business growth, innovation, investment, and regional collaboration. Let us forge new partnerships, and unlock opportunities that will drive sustainable economic growth and prosperity.',
      author: 'Callixte Kanamugire',
      role: 'Acting Chief Executive Officer, PSF'
    }
  },
  {
    id: 'security',
    no: '11',
    kicker: 'Appreciation',
    title: 'Credit to the security organs',
    lead: 'A successful public event depends on more than exhibitors and visitors.',
    body: [
      'Security organs played an important role throughout Expo 2026, helping maintain a safe and orderly environment for businesses, visitors and participants.',
      'Their presence and coordination contributed to an environment where people could attend, interact, shop, network and enjoy the Expo peacefully.',
      'PSF recognises and appreciates the role played by the security organs during Expo 2026.'
    ]
  },
  {
    id: 'beauty',
    no: '12',
    kicker: 'Beauty & personal care',
    title: 'A different kind of Expo experience',
    images: ['/12A.jpg', '/12B.jpg'],
    lead: 'Beyond business exhibitions and commercial activities, Expo 2026 also created room for creativity, presentation and memorable experiences.',
    body: [
      'The Beauty and Pen Entry added another element to the Expo experience, giving visitors something different to discover and engage with.',
      'The beauty and personal-care sector was visibly represented. Movit returned to Expo 2026 with \u201CThe World of Ubwiza\u201D \u2014 an experience inspired by Rwanda\u2019s culture and beauty \u2014 featuring hair care, skincare, baby-care and oral-care products.',
      'Johana Cosmetics, a Made-in-Rwanda hair and skincare company, used the Expo to interact directly with customers and businesses and showcase its products.'
    ],
    // tags: ['Movit Africa', 'Johana Product', 'Manebu Industry', 'Dzetshal Rwanda', 'Ai Glamor Avenue', 'Roba Industries']
  },
  {
    id: 'future',
    no: '13',
    kicker: 'Looking ahead',
    title: 'Expo 2027 & the 30-year journey',
    images: ['/13.jpg'],
    lead: 'As Expo 2026 comes to a close, the journey does not stop here.',
    body: [
      'The next edition, Expo 2027, will bring another opportunity for businesses, exhibitors, partners and visitors to connect, showcase and create new possibilities.',
      'PSF is also looking ahead to its 30-years journey \u2014 a moment to reflect on decades of representing and supporting Rwanda\u2019s private sector.',
      'Stay tuned. The journey continues.'
    ],
    // timeline: [
    //   { label: 'Expo 2026', text: 'Connections made' },
    //   { label: 'Expo 2027', text: 'The next chapter' },
    //   { label: '30 years', text: 'A journey to reflect on' }
    // ]
  },
  {
    id: 'investment',
    no: '14',
    kicker: 'Beyond the grounds',
    title: 'From exhibition to opportunity',
    images: ['/14.jpg'],
    lead: 'An Expo does not end when the exhibition grounds close.',
    body: [
      'The relationships created during Expo 2026 can continue long after exhibitors pack up their stands.',
      'New connections between businesses, customers, investors and partners can create opportunities for future investments, partnerships and business expansion.',
      'The real measure of the Expo may ultimately be what happens after it \u2014 more investments, new businesses and new partnerships emerging from the connections made.'
    ]
  },
  {
    id: 'youth',
    no: '15',
    kicker: 'Youth',
    title: 'More than 2,000 youth got casual jobs',
    images: ['/15.jpg'],
    lead: 'Expo 2026 also created employment opportunities for young people.',
    body: [
      'More than 2,000 youth got casual jobs during Expo 2026, providing them with an opportunity to earn income while contributing to the smooth running of the event.',
      'From different support roles across the Expo, young people became part of the workforce that helped make the event possible.',
      'The story is a reminder that large events can create opportunities beyond the exhibition stands themselves.'
    ],
    // statHighlight: { value: '2,000+', label: 'Young people employed' }
  },
  {
    id: 'conduct',
    no: '16',
    kicker: 'Community',
    title: 'Good conduct of the masses',
    images: ['/16A.jpg', '/16B.jpg'],
    lead: 'One of the important features of Expo 2026 was the good conduct of the masses.',
    body: [
      'With large numbers of people attending the event, maintaining a calm and peaceful environment was essential for businesses, exhibitors and visitors.',
      'The orderly environment allowed people to move around, interact with exhibitors, enjoy activities and conduct business comfortably.',
      'A peaceful business environment benefits everyone \u2014 and Expo 2026 provided a space where people could come together and participate respectfully.'
    ]
  },
  {
    id: 'busy',
    no: '17',
    kicker: 'Visitor attention',
    title: 'Where everyone wanted to be',
    images: ['/17.jpg'],
    lead: 'Every Expo has those stands that seem to attract visitors from the moment the doors open.',
    body: [
      'At Expo 2026, NIDA and Irembo were among the stands that attracted significant attention and activity.',
      'Their stands provided services and information that visitors were interested in accessing, making them some of the busiest points at the Expo.',
      'The visitor experience, the services offered and the value delivered are what drew people to the stands throughout Expo 2026.'
    ],
    // tags: ['NIDA', 'Irembo']
  },
  {
    id: 'innovation',
    no: '18',
    kicker: 'Ideas in action',
    title: 'Innovation takes centre stage',
    images: ['/18.jpg'],
    lead: 'Innovation was another important part of Expo 2026.',
    body: [
      'Across the exhibition grounds, businesses had an opportunity to demonstrate products, services and ideas designed to respond to changing consumer needs and market opportunities.',
      'From technology to mobility, services and new business solutions, the Expo provided a platform for innovators to put their ideas in front of the public.',
      'Innovation is not only about having a new idea. It is also about finding better ways to solve problems and create value.'
    ]
  },
  {
    id: 'children',
    no: '19',
    kicker: 'Families',
    title: 'An adventure for the youngest visitors',
    images: ['/19A.jpg', '/19B.jpg'],
    lead: 'Expo 2026 was also a place for children.',
    body: [
      'The children\u2019s corner created a space where younger visitors could enjoy themselves while experiencing the Expo in their own way.',
      'Games, activities and entertainment gave families another reason to spend time at the exhibition.',
      'For children, the Expo became more than a business event \u2014 it became a place to explore, play and create memories.'
    ]
  },
  {
    id: 'green',
    no: '20',
    kicker: 'The way forward',
    title: 'Building a more sustainable future',
    images: ['/20.jpg'],
    lead: 'As the private sector continues to evolve, sustainability is becoming increasingly important.',
    body: [
      'Expo 2026 provided an opportunity to reflect on the role businesses can play in building a green economy and creating more sustainable approaches to production, consumption, transport and investment.',
      'The exhibition of electric cars, innovation and discussions around sustainable business solutions all contribute to a larger conversation about the direction of Rwanda\u2019s economy.',
      'The way forward requires businesses, policymakers, investors and communities to continue exploring solutions that support economic growth while protecting the environment.'
    ],
    cards: [
      {
        title: 'How can we build it together?',
        text: 'The question is no longer whether we should build a greener economy, but how we can build it together \u2014 bringing businesses, policymakers, investors and communities into the conversation.',
        accent: true
      }
    ]
  }
]

export const closing = {
  kicker: 'Looking ahead',
  title: 'Expo 2027 & the 30-year journey',
  body: [
    'Expo 2026 may be over, but the conversations, relationships and opportunities created during the exhibition can continue.',
    'From businesses looking for new markets to young people gaining work opportunities, exhibitors showcasing innovation, international participants building connections and visitors discovering new products and services, Expo 2026 created a platform for many different stories.',
    'The next chapter is already ahead \u2014 Expo 2027, and the journey toward 30 years of PSF.'
  ],
  cta: 'Stay tuned.'
}

export const footer = {
  title: 'PSF EXPO 2026',
  tagline: 'BUSINESS. INNOVATION. CONNECTION. OPPORTUNITY.',
  note: 'See you at Expo 2027.',
  org: 'Private Sector Federation Rwanda',
  address: 'KK 34 Ave, Kigali, Rwanda',
  email: 'secretariat@psf.org.rw',
  phone: '+250 (788) 123-300',
  tollFree: '2233'
}
