export type Language = 'en' | 'hi';

type Tour = {
  id: number;
  title: string;
  location: string;
  type: string;
  dates: string;
  comfort: string;
  image: string;
};

type Cause = {
  title: string;
  description: string;
  image: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  ageGroup: string;
};

export type PastYatra = {
  id: number;
  title: string;
  location: string;
  dates: string;
  image: string;
  gallery: string[];
  itinerary: string[];
  pdf?: {
    title: string;
    href: string;
  };
};

const imagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/${fileName}`;
const pdfPath = (fileName: string) => `${import.meta.env.BASE_URL}pdfs/${fileName}`;

const yatraImages = {
  hero1: imagePath('JDF_Hero_001.jpeg'),
  hero2: imagePath('JDF_Hero_002.jpg'),
  hero3: imagePath('JDF_Hero_003.jpeg'),
  hero4: imagePath('JDF_Hero_004.png'),
  hero5: imagePath('JDF_Hero_005.jpg'),
  hero6: imagePath('JDF_Hero_006.png'),
  seva: imagePath('file_00000000050c7208a2b568b976545586.png'),
  sneh: imagePath('file_00000000a62c720b9908d1b35d8e3e67.png'),
  cricket: imagePath('file_00000000a64c720b87adb941358be3bd.png'),
  navpravas: imagePath('file_00000000d98472089c666b89678b25d5.png'),
  overseas: imagePath('file_000000001e4471f88638d1164b89154f.png'),
};

const gallery = (...images: string[]) => images;

const pastYatrasEn: PastYatra[] = [
  {
    id: 2015,
    title: 'Pau Dasham Sangh Yatra',
    location: 'Dakshin Nakoda Parshwanath Dham, Arsikere',
    dates: '2015',
    image: yatraImages.hero1,
    gallery: gallery(yatraImages.hero1, yatraImages.hero2, yatraImages.hero3, yatraImages.hero4),
    itinerary: [
      'JDF began its organized yatra tradition with 80 devotees travelling together for darshan.',
      'The first journey established the model for shared arrangements, group discipline, and care for families.',
      'This yatra became the foundation for Jain Dosti Federation as a friendship-led spiritual community.',
    ],
  },
  {
    id: 2016,
    title: 'Pau Dasham Mela Sangh Yatra',
    location: 'Dakshin Nakoda Parshwanath Dham, Tiptur',
    dates: '2016',
    image: yatraImages.hero2,
    gallery: gallery(yatraImages.hero2, yatraImages.hero3, yatraImages.hero4, yatraImages.hero5),
    itinerary: [
      'The group expanded its seva work with support for gaushalas and children in need.',
      'Devotees travelled with stronger coordination and a growing volunteer network.',
      'Participation grew from 80 to around 180 members, marking a major step in community trust.',
    ],
  },
  {
    id: 2017,
    title: 'Pau Dasham Mela Sangh Yatra',
    location: 'Dakshin Nakoda Parshwanath Dham, Huncha, Birur',
    dates: '2017',
    image: yatraImages.hero3,
    gallery: gallery(yatraImages.hero3, yatraImages.hero4, yatraImages.hero5, yatraImages.hero6),
    itinerary: [
      'The federation supported orphanages and children homes with blankets, fruits, sweets, and sports kits.',
      'The yatra combined darshan, seva, and shared meals for families across age groups.',
      'Participation increased to around 300 devotees.',
    ],
  },
  {
    id: 2018,
    title: 'Pau Dasham Mela Sangh Yatra',
    location: 'Dakshin Nakoda Parshwanath Dham, Sushil Dham, Krishnagiri',
    dates: '2018',
    image: yatraImages.hero4,
    gallery: gallery(yatraImages.hero4, yatraImages.hero5, yatraImages.hero6, yatraImages.seva),
    itinerary: [
      'Seva activities continued through support for orphanages, gaushalas, hospital bills, and school fees.',
      'The yatra route included important spiritual stops and stronger member coordination.',
      'The annual gathering crossed around 500 devotees.',
    ],
  },
  {
    id: 2019,
    title: 'Pau Dasham Mela Sangh Yatra',
    location: 'Dakshin Nakoda Parshwanath Dham, Tirupati, Shravanabelagola, Ramanagara',
    dates: '2019',
    image: yatraImages.hero5,
    gallery: gallery(yatraImages.hero5, yatraImages.hero6, yatraImages.hero1, yatraImages.overseas),
    itinerary: [
      'JDF supported Jain community programs and service initiatives through the year.',
      'The yatra included darshan across Dakshin Nakoda, Tirupati, Shravanabelagola, and Ramanagara.',
      'Participation reached around 600 devotees.',
    ],
  },
  {
    id: 2020,
    title: 'COVID Seva Initiative',
    location: 'Bengaluru and nearby regions',
    dates: '2020-2021',
    image: yatraImages.hero6,
    gallery: gallery(yatraImages.hero6, yatraImages.hero1, yatraImages.hero2, yatraImages.seva),
    itinerary: [
      'During the COVID emergency, JDF helped families with hospital bills, medicines, and critical support.',
      'Volunteers arranged masks, sanitizers, ration kits, food packets, beds, oxygen cylinders, and injections.',
      'Blood donation and ration distribution efforts reached many families in need.',
    ],
  },
  {
    id: 2022,
    title: 'Seva, Sneh Milan, and JDF Cricket Premier League',
    location: 'Rajajinagar Terapanth Bhavan, Ganesh Bagh, and Hebbal',
    dates: '2022',
    image: yatraImages.sneh,
    gallery: gallery(yatraImages.sneh, yatraImages.cricket, yatraImages.navpravas, yatraImages.hero4),
    itinerary: [
      'JDF hosted a blood donation camp during the Terapanth Yuvak Parishad mega drive.',
      'The federation supported event management during a large chaturmas gathering at Ganesh Bagh.',
      'A community sneh milan and cricket league helped members connect beyond formal programs.',
    ],
  },
  {
    id: 2023,
    title: 'Special Sangh Yatra',
    location: 'Details to be updated',
    dates: '2023',
    image: yatraImages.cricket,
    gallery: gallery(yatraImages.cricket, yatraImages.navpravas, yatraImages.hero5, yatraImages.hero6),
    itinerary: [
      'JDF organized a special yatra and seva program for members.',
      'The program centered on darshan, group prayer, meals, and volunteer service.',
      'Detailed route and gallery information will be updated as archival material is finalized.',
    ],
  },
  {
    id: 2024,
    title: 'NavPravas Yatra',
    location: 'NavPravas',
    dates: '2024',
    image: yatraImages.navpravas,
    gallery: gallery(yatraImages.navpravas, yatraImages.hero5, yatraImages.hero6, yatraImages.hero1),
    itinerary: [
      'The NavPravas yatra brought JDF families together for a renewed spiritual journey.',
      'The program included darshan, group prayer, member introductions, and seva-led activities.',
      'A detailed itinerary and photo archive are available in the attached PDF.',
    ],
    pdf: {
      title: 'NavPravas Yatra PDF',
      href: pdfPath('2024.pdf'),
    },
  },
  {
    id: 2025,
    title: 'Malaysia, Singapore, and Thailand Yatra',
    location: 'Malaysia, Singapore, and Thailand',
    dates: '2025',
    image: yatraImages.overseas,
    gallery: gallery(yatraImages.overseas, yatraImages.seva, yatraImages.navpravas, yatraImages.hero1),
    itinerary: [
      'JDF planned an international yatra across Malaysia, Singapore, and Thailand.',
      'The journey focuses on Jain temple darshan, local spiritual landmarks, and shared cultural experiences.',
      'Detailed day-wise routes, hotels, and photo archives will be added as they are finalized.',
    ],
  },
  {
    id: 2026,
    title: 'Udupi Yatra',
    location: 'Udupi',
    dates: '2026',
    image: yatraImages.hero6,
    gallery: gallery(yatraImages.hero6, yatraImages.hero5, yatraImages.hero4, yatraImages.sneh),
    itinerary: [
      'The Udupi yatra is planned as a family-focused spiritual program.',
      'The proposed format includes darshan, group meals, seva activities, and member fellowship.',
      'Final itinerary, dates, and images will be added once available.',
    ],
  },
];

const pastYatrasHi: PastYatra[] = pastYatrasEn.map((item) => ({
  ...item,
  title:
    {
      2015: 'पौ दशम संघ यात्रा',
      2016: 'पौ-दशम मेला संघ यात्रा',
      2017: 'पौ-दशम मेला संघ यात्रा',
      2018: 'पौ-दशम मेला संघ यात्रा',
      2019: 'पौ-दशम मेला संघ यात्रा',
      2020: 'कोविड सेवा अभियान',
      2022: 'सेवा, स्नेह मिलन और JDF क्रिकेट प्रीमियर लीग',
      2023: 'विशेष संघ यात्रा',
      2024: 'नवप्रवास यात्रा',
      2025: 'मलेशिया, सिंगापुर और थाईलैंड यात्रा',
      2026: 'उडुपी यात्रा',
    }[item.id] ?? item.title,
  location:
    {
      2015: 'दक्षिण नाकोड़ा पार्श्वधाम, अरसीकेरे',
      2016: 'दक्षिण नाकोड़ा पार्श्वधाम, टिपटूर',
      2017: 'दक्षिण नाकोड़ा पार्श्वधाम, हुंचा, बीरूर',
      2018: 'दक्षिण नाकोड़ा पार्श्वधाम, सुशील धाम, कृष्णगिरि',
      2019: 'दक्षिण नाकोड़ा पार्श्वधाम, तिरुपति, श्रवणबेलगोला, रामनगर',
      2020: 'बेंगलुरु और आसपास के क्षेत्र',
      2022: 'राजाजीनगर तेरापंथ भवन, गणेश बाग और हेब्बाल',
      2023: 'विवरण जल्द अपडेट होगा',
      2024: 'नवप्रवास',
      2025: 'मलेशिया, सिंगापुर और थाईलैंड',
      2026: 'उडुपी',
    }[item.id] ?? item.location,
  itinerary: item.itinerary.map((_, index) => {
    const lines: Record<number, string[]> = {
      2015: [
        '80 दर्शनार्थियों के साथ JDF की संगठित यात्रा परंपरा की शुरुआत हुई।',
        'इस यात्रा ने समूह व्यवस्था, अनुशासन और परिवारों की देखभाल की नींव रखी।',
        'यहीं से Jain Dosti Federation की सेवा और मैत्री-आधारित पहचान मजबूत हुई।',
      ],
      2016: [
        'गौशाला सेवा और बच्चों की सहायता के साथ सेवा कार्यों का विस्तार हुआ।',
        'यात्रा में बेहतर समन्वय और सक्रिय स्वयंसेवक व्यवस्था दिखाई दी।',
        'सदस्यों की संख्या लगभग 80 से बढ़कर 180 तक पहुंची।',
      ],
      2017: [
        'अनाथ आश्रमों और बच्चों के घरों में कंबल, फल, मिठाई और खेल सामग्री दी गई।',
        'यात्रा में दर्शन, सेवा और सामूहिक भोजन को सुंदर रूप से जोड़ा गया।',
        'सदस्य संख्या लगभग 300 तक बढ़ी।',
      ],
      2018: [
        'अनाथ आश्रम, गौशाला, अस्पताल बिल और स्कूल फीस में सहयोग जारी रहा।',
        'यात्रा में महत्वपूर्ण तीर्थ स्थानों और बेहतर सदस्य व्यवस्था को शामिल किया गया।',
        'वार्षिक संघ में लगभग 500 दर्शनार्थी जुड़े।',
      ],
      2019: [
        'JDF ने वर्ष भर जैन समुदाय के सेवा और धार्मिक कार्यक्रमों में सहयोग किया।',
        'यात्रा में दक्षिण नाकोड़ा, तिरुपति, श्रवणबेलगोला और रामनगर शामिल रहे।',
        'सदस्य संख्या लगभग 600 तक पहुंची।',
      ],
      2020: [
        'कोविड आपदा के दौरान JDF ने अस्पताल बिल, दवाइयों और आवश्यक सहायता में सहयोग किया।',
        'स्वयंसेवकों ने मास्क, सैनिटाइजर, राशन किट, भोजन, बेड, ऑक्सीजन और इंजेक्शन की व्यवस्था में मदद की।',
        'रक्तदान और राशन वितरण से अनेक परिवारों तक सहायता पहुंची।',
      ],
      2022: [
        'JDF ने मेगा ब्लड डोनेशन ड्राइव में रक्तदान शिविर आयोजित किया।',
        'गणेश बाग में बड़े चातुर्मास आयोजन के दौरान व्यवस्था में सहयोग दिया गया।',
        'स्नेह मिलन और क्रिकेट लीग ने सदस्यों को और करीब जोड़ा।',
      ],
      2023: [
        'JDF परिवार के लिए विशेष यात्रा और सेवा कार्यक्रम आयोजित किया गया।',
        'कार्यक्रम का केंद्र दर्शन, सामूहिक प्रार्थना, भोजन और स्वयंसेवक सेवा रहा।',
        'मार्ग और फोटो गैलरी की जानकारी सामग्री मिलते ही अपडेट होगी।',
      ],
      2024: [
        'नवप्रवास यात्रा ने JDF परिवारों को नई आध्यात्मिक ऊर्जा के साथ जोड़ा।',
        'कार्यक्रम में दर्शन, सामूहिक आराधना, परिचय सत्र और सेवा गतिविधियां शामिल रहीं।',
        'विस्तृत यात्रा PDF के रूप में उपलब्ध है।',
      ],
      2025: [
        'मलेशिया, सिंगापुर और थाईलैंड की अंतरराष्ट्रीय यात्रा की योजना बनाई गई।',
        'यात्रा में जैन मंदिर दर्शन, स्थानीय आध्यात्मिक स्थल और सांस्कृतिक अनुभव शामिल होंगे।',
        'दिनवार कार्यक्रम और फोटो गैलरी अंतिम रूप मिलते ही जोड़ी जाएगी।',
      ],
      2026: [
        'उडुपी यात्रा को परिवार-केंद्रित आध्यात्मिक कार्यक्रम के रूप में प्रस्तावित किया गया है।',
        'दर्शन, सामूहिक भोजन, सेवा और स्नेह मिलन इसका मुख्य हिस्सा रहेंगे।',
        'अंतिम itinerary, तारीखें और तस्वीरें उपलब्ध होते ही अपडेट होंगी।',
      ],
    };
    return lines[item.id]?.[index] ?? item.itinerary[index] ?? '';
  }),
}));

const toursEn: Tour[] = [
  {
    id: 1,
    title: 'Shikharji Mahayatra 2026',
    location: 'Jharkhand, India',
    type: 'National',
    dates: 'Oct 12 - Oct 20, 2026',
    comfort: 'High Comfort',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?q=75&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Girnar Ji Ascent and Retreat',
    location: 'Gujarat, India',
    type: 'National',
    dates: 'Jan 05 - Jan 10, 2027',
    comfort: 'Moderate',
    image: 'https://images.unsplash.com/photo-1549473889-14f410d83298?q=75&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Southeast Asia Jain Temples',
    location: 'Thailand and Malaysia',
    type: 'International',
    dates: 'Mar 15 - Mar 25, 2027',
    comfort: 'Premium Comfort',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=75&w=1600&auto=format&fit=crop',
  },
];

const tourImage = (index: number) => toursEn[index]?.image ?? '';

const toursHi: Tour[] = [
  {
    id: 1,
    title: 'शिखरजी महायात्रा 2026',
    location: 'झारखंड, भारत',
    type: 'राष्ट्रीय',
    dates: '12 अक्टूबर - 20 अक्टूबर, 2026',
    comfort: 'उच्च आराम',
    image: tourImage(0),
  },
  {
    id: 2,
    title: 'गिरनार जी आरोहण और वापसी',
    location: 'गुजरात, भारत',
    type: 'राष्ट्रीय',
    dates: '05 जनवरी - 10 जनवरी, 2027',
    comfort: 'मध्यम',
    image: tourImage(1),
  },
  {
    id: 3,
    title: 'दक्षिण पूर्व एशिया जैन मंदिर',
    location: 'थाईलैंड और मलेशिया',
    type: 'अंतरराष्ट्रीय',
    dates: '15 मार्च - 25 मार्च, 2027',
    comfort: 'प्रीमियम आराम',
    image: tourImage(2),
  },
];

const causesEn: Cause[] = [
  {
    title: 'Jivdaya',
    description:
      'Compassion for every living being is central to Jain values. We support gaushalas, panjrapoles, and emergency care programs with food, shelter, and medical help.',
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1600&q=75',
  },
  {
    title: 'Educational Support',
    description:
      'We help students through scholarships, school supplies, and mentorship so that families with fewer resources still see a clear path forward.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=75',
  },
  {
    title: 'Medical Aid Camps',
    description:
      'Our volunteers support health camps, eye checkups, medicines, and urgent medical assistance for local communities.',
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1600&q=75',
  },
];

const causeImage = (index: number) => causesEn[index]?.image ?? '';

const causesHi: Cause[] = [
  {
    title: 'जीवदया',
    description:
      'हर जीव के प्रति करुणा जैन मूल्यों का केंद्र है। हम गौशाला, पंजरापोल और आपातकालीन देखभाल में भोजन, आश्रय और चिकित्सा सहायता देते हैं।',
    image: causeImage(0),
  },
  {
    title: 'शैक्षिक सहायता',
    description:
      'हम छात्रवृत्ति, स्कूल सामग्री और मार्गदर्शन के माध्यम से बच्चों और परिवारों को आगे बढ़ने का अवसर देते हैं।',
    image: causeImage(1),
  },
  {
    title: 'चिकित्सा सहायता शिविर',
    description:
      'स्वयंसेवक स्वास्थ्य शिविर, नेत्र जांच, दवाइयों और जरूरी चिकित्सा सहयोग में सक्रिय भूमिका निभाते हैं।',
    image: causeImage(2),
  },
];

const testimonialsEn: Testimonial[] = [
  {
    quote:
      'Traveling with JDF to Shikharji was phenomenal. The arrangements were thoughtful for my parents, and the volunteer spirit stayed with us long after the journey.',
    author: 'Ramesh Shah',
    role: 'Member since 2018',
    ageGroup: '55 years',
  },
  {
    quote:
      'I found a real sense of belonging here. The medical camps showed me how powerful a community can be when service is organized with care.',
    author: 'Priya Desai',
    role: 'Youth Volunteer',
    ageGroup: '28 years',
  },
  {
    quote:
      'The blend of spirituality during yatras and active charity work gives life a deeper purpose. JDF feels like an extended family.',
    author: 'Ketan Mehta',
    role: 'Committee Lead',
    ageGroup: '45 years',
  },
];

const testimonialsHi: Testimonial[] = [
  {
    quote:
      'JDF के साथ शिखरजी यात्रा अद्भुत रही। मेरे माता-पिता के लिए व्यवस्था बहुत सोच-समझकर की गई थी और सेवा भाव ने हमें गहराई से छुआ।',
    author: 'रमेश शाह',
    role: '2018 से सदस्य',
    ageGroup: '55 वर्ष',
  },
  {
    quote:
      'यहां मुझे अपनापन मिला। चिकित्सा शिविरों ने दिखाया कि जब सेवा व्यवस्थित होती है तो समुदाय कितनी बड़ी शक्ति बन जाता है।',
    author: 'प्रिया देसाई',
    role: 'युवा स्वयंसेवक',
    ageGroup: '28 वर्ष',
  },
  {
    quote:
      'यात्राओं की आध्यात्मिकता और सक्रिय सेवा का संगम जीवन को उद्देश्य देता है। JDF एक विस्तारित परिवार जैसा लगता है।',
    author: 'केतन मेहता',
    role: 'समिति प्रमुख',
    ageGroup: '45 वर्ष',
  },
];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      darshanTours: 'Darshan Tours',
      pastYatras: 'Past Yatras',
      seva: 'Seva',
      aboutUs: 'About Us',
      joinUs: 'Join Us',
      team: 'Team',
    },
    hero: {
      welcome: 'Welcome to Jain Dosti Federation',
      title1: 'Journey Together.',
      title2: 'Serve Together.',
      title3: 'Grow Together.',
      subtitle:
        'Finding spiritual community through shared values, carefully organized darshan yatras, and meaningful seva.',
      exploreTours: 'Explore Tours',
      joinCommunity: 'Join the Community',
    },
    motto: {
      text: 'A Step Towards Service',
    },
    pastYatras: {
      title: 'Jain Dosti Federation Since 2015',
      subtitle: 'A timeline of memorable yatras, seva milestones, and community gatherings.',
      viewDetails: 'View details',
      close: 'Close',
      itineraryTitle: 'Detailed itinerary',
      galleryTitle: 'Yatra gallery',
      list: pastYatrasEn,
    },
    pillars: {
      title: 'The Pillars of Our Brotherhood',
      subtitle: 'We unite individuals through inward reflection, friendship, and outward compassion.',
      travelWithUs: 'Travel With Us',
      spiritualDarshan: 'Spiritual Darshan',
      travelDesc:
        'Join carefully planned yatras to sacred sites, designed for comfort, safety, spiritual focus, and lasting friendship.',
      serveWithUs: 'Serve With Us',
      philanthropySeva: 'Philanthropy and Seva',
      serveDesc:
        'Extend Jain values into active service through medical aid, education, jivdaya, and direct community support.',
      learnMore: 'Learn more',
    },
    tours: {
      title: 'Upcoming Spiritual Yatras',
      subtitle: 'Thoughtfully planned journeys for comfort, safety, and deep spiritual immersion.',
      filterAll: 'All',
      filterNational: 'National',
      filterInternational: 'International',
      viewItinerary: 'View Itinerary',
      comfortLevel: 'Comfort Level:',
      toursList: toursEn,
    },
    philanthropy: {
      mealsServed: 'Meals Served',
      medicalCamps: 'Medical Camps',
      activeVolunteers: 'Active Volunteers',
      title: 'Seva: Service Beyond Self',
      subtitle: 'Turning compassion into practical help for people, animals, and communities.',
      causes: causesEn,
      directInvolvement: 'Direct community involvement',
      transparentFunding: 'Transparent funding',
      joinUsTitle: 'Join Us in Making a Difference',
      joinUsSubtitle: 'Every act of seva matters, whether it feeds a family, educates a child, or protects a living being.',
      supportCauses: 'Support Our Causes',
    },
    testimonials: {
      title: 'Voices of Our Community',
      subtitle: 'Hear from members whose lives have been shaped by friendship and purpose.',
      list: testimonialsEn,
    },
    footer: {
      title: 'Jain Dosti Federation',
      desc: 'Building lifelong friendships grounded in Jain values through spiritual journeys and philanthropic service.',
      explore: 'Explore',
      aboutUs: 'About Us',
      upcomingYatras: 'Upcoming Yatras',
      philanthropyProjects: 'Seva Projects',
      memberDirectory: 'Team',
      resources: 'Resources',
      downloadItineraries: 'Past Yatras',
      volunteerGuidelines: 'Volunteer Guidelines',
      donationFaqs: 'Donation FAQs',
      safetyProtocols: 'Safety Protocols',
      contact: 'Contact',
      address1: 'No. 2, 5th Main Road, Ganganagar',
      address2: 'Bengaluru, India 560032',
      rights: 'Jain Dosti Federation. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      darshanTours: 'दर्शन यात्राएं',
      pastYatras: 'पिछली यात्राएं',
      seva: 'सेवा',
      aboutUs: 'हमारे बारे में',
      joinUs: 'हमसे जुड़ें',
      team: 'टीम',
    },
    hero: {
      welcome: 'जैन दोस्ती फेडरेशन में आपका स्वागत है',
      title1: 'एक साथ यात्रा करें।',
      title2: 'एक साथ सेवा करें।',
      title3: 'एक साथ आगे बढ़ें।',
      subtitle: 'साझा मूल्यों, सुव्यवस्थित दर्शन यात्राओं और अर्थपूर्ण सेवा से जुड़ा आध्यात्मिक समुदाय।',
      exploreTours: 'यात्राएं देखें',
      joinCommunity: 'समुदाय से जुड़ें',
    },
    motto: {
      text: 'सेवा की ओर एक कदम',
    },
    pastYatras: {
      title: 'वर्ष 2015 से जैन दोस्ती फेडरेशन',
      subtitle: 'यादगार यात्राओं, सेवा उपलब्धियों और सामुदायिक मिलन की समयरेखा।',
      viewDetails: 'और देखें',
      close: 'बंद करें',
      itineraryTitle: 'विस्तृत विवरण',
      galleryTitle: 'यात्रा की झलकियां',
      list: pastYatrasHi,
    },
    pillars: {
      title: 'हमारे भाईचारे के स्तंभ',
      subtitle: 'हम आत्मचिंतन, मैत्री और करुणामय सेवा के माध्यम से लोगों को जोड़ते हैं।',
      travelWithUs: 'हमारे साथ यात्रा करें',
      spiritualDarshan: 'आध्यात्मिक दर्शन',
      travelDesc:
        'पवित्र स्थलों की सुव्यवस्थित यात्राओं में शामिल हों, जहां आराम, सुरक्षा, आध्यात्मिकता और मैत्री का ध्यान रखा जाता है।',
      serveWithUs: 'हमारे साथ सेवा करें',
      philanthropySeva: 'परोपकार और सेवा',
      serveDesc:
        'चिकित्सा सहायता, शिक्षा, जीवदया और सामुदायिक सहयोग के माध्यम से जैन मूल्यों को सेवा में बदलें।',
      learnMore: 'और जानें',
    },
    tours: {
      title: 'आगामी आध्यात्मिक यात्राएं',
      subtitle: 'आराम, सुरक्षा और गहरे आध्यात्मिक अनुभव के लिए योजनाबद्ध यात्राएं।',
      filterAll: 'सभी',
      filterNational: 'राष्ट्रीय',
      filterInternational: 'अंतरराष्ट्रीय',
      viewItinerary: 'कार्यक्रम देखें',
      comfortLevel: 'आराम का स्तर:',
      toursList: toursHi,
    },
    philanthropy: {
      mealsServed: 'भोजन परोसा गया',
      medicalCamps: 'चिकित्सा शिविर',
      activeVolunteers: 'सक्रिय स्वयंसेवक',
      title: 'सेवा: स्वार्थ से परे',
      subtitle: 'करुणा को लोगों, जीवों और समुदायों के लिए व्यावहारिक सहायता में बदलना।',
      causes: causesHi,
      directInvolvement: 'प्रत्यक्ष सामुदायिक भागीदारी',
      transparentFunding: 'पारदर्शी सहयोग',
      joinUsTitle: 'बदलाव लाने में हमारे साथ जुड़ें',
      joinUsSubtitle: 'सेवा का हर कार्य मायने रखता है, चाहे वह भोजन, शिक्षा या जीवदया से जुड़ा हो।',
      supportCauses: 'सेवा कार्यों का समर्थन करें',
    },
    testimonials: {
      title: 'हमारे समुदाय की आवाजें',
      subtitle: 'उन सदस्यों से सुनें जिनके जीवन को मैत्री और उद्देश्य ने छुआ है।',
      list: testimonialsHi,
    },
    footer: {
      title: 'जैन दोस्ती फेडरेशन',
      desc: 'आध्यात्मिक यात्राओं और परोपकारी सेवा के माध्यम से जैन मूल्यों पर आधारित आजीवन मित्रता का निर्माण।',
      explore: 'खोजें',
      aboutUs: 'हमारे बारे में',
      upcomingYatras: 'आगामी यात्राएं',
      philanthropyProjects: 'सेवा परियोजनाएं',
      memberDirectory: 'टीम',
      resources: 'संसाधन',
      downloadItineraries: 'पिछली यात्राएं',
      volunteerGuidelines: 'स्वयंसेवक दिशानिर्देश',
      donationFaqs: 'दान संबंधी प्रश्न',
      safetyProtocols: 'सुरक्षा प्रोटोकॉल',
      contact: 'संपर्क',
      address1: 'नं. 2, 5वीं मेन रोड, गंगानगर',
      address2: 'बेंगलुरु, भारत 560032',
      rights: 'जैन दोस्ती फेडरेशन। सर्वाधिकार सुरक्षित।',
      privacyPolicy: 'गोपनीयता नीति',
      termsOfService: 'सेवा की शर्तें',
    },
  },
};
