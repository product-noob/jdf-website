export type Language = 'en' | 'hi';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      darshanTours: 'Darshan Tours',
      pastYatras: 'Past Yatras',
      seva: 'Seva',
      aboutUs: 'About Us',
      joinUs: 'Join Us',
    },
    hero: {
      welcome: 'Welcome to Jain Dosti Federation',
      title1: 'Journey Together.',
      title2: 'Serve Together.',
      title3: 'Grow Together.',
      subtitle: 'Finding profound spiritual community through shared values. Join us on transformative spiritual Darshan tours and meaningful philanthropic missions.',
      exploreTours: 'Explore Tours',
      joinCommunity: 'Join the Community',
    },
    motto: {
      text: "A Step Towards Service",
    },
    pastYatras: {
      title: 'Past Darshan Yatras',
      subtitle: 'Cherished memories and spiritual milestones from our previous journeys.',
      viewDetails: 'View Details',
      close: 'Close',
      itineraryTitle: 'Broad Itinerary',
      galleryTitle: 'Gallery',
      list: [
        {
          id: 101,
          title: 'Palitana Shashwat Tirth Yatra',
          location: 'Gujarat, India',
          dates: 'Nov 10 - Nov 15, 2025',
          image: 'https://images.unsplash.com/photo-1549473889-14f410d83298?auto=format&fit=crop&w=800&q=80',
          gallery: [
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80'
          ],
          itinerary: [
            'Day 1: Arrival in Bhavnagar & transfer to Palitana',
            'Day 2: First climbing & Taleti darshan',
            'Day 3: Navtuk Darshan & Chaityavandan',
            'Day 4: Gheti Pag Darshan & Seva at local Panjrapole',
            'Day 5: Departure'
          ]
        },
        {
          id: 102,
          title: 'Sammed Shikharji Yatra',
          location: 'Jharkhand, India',
          dates: 'Oct 01 - Oct 08, 2024',
          image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=800&q=80',
          gallery: [
            'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=400&q=80'
          ],
          itinerary: [
            'Day 1-2: Travel to Madhuban',
            'Day 3: Base camp acclimatization and local darshan',
            'Day 4: Pahad Yatra (Vandana) - 27 Tonks',
            'Day 5: Bhomiyaji Maharaj Darshan',
            'Day 6: Medical Camp Seva & Departure'
          ]
        }
      ]
    },
    pillars: {
      title: 'The Pillars of Our Brotherhood',
      subtitle: 'We unite individuals through the shared pursuits of inward reflection and outward compassion.',
      travelWithUs: 'Travel With Us',
      spiritualDarshan: 'Spiritual Darshan',
      travelDesc: 'Embark on carefully curated Yatras to sacred destinations. Experience comfortable travel thoughtfully designed for all ages, fostering deep spiritual connections and lasting friendships along the way.',
      serveWithUs: 'Serve With Us',
      philanthropySeva: 'Philanthropy & Seva',
      serveDesc: 'Extend the values of Jainism into active service. From organizing medical camps for the under-resourced to championing Jivdaya (animal welfare), we believe true friendship is built through shared selflessness.',
      learnMore: 'Learn more',
    },
    tours: {
      title: 'Upcoming Spiritual Journeys',
      subtitle: 'Meticulously planned for comfort, safety, and deep spiritual immersion.',
      filterAll: 'All',
      filterNational: 'National',
      filterInternational: 'International',
      viewItinerary: 'View Itinerary',
      comfortLevel: 'Comfort Level:',
      toursList: [
        {
          id: 1,
          title: 'Shikharji Mahayatra 2026',
          location: 'Jharkhand, India',
          type: 'National',
          dates: 'Oct 12 - Oct 20, 2026',
          comfort: 'High Comfort',
          image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?q=80&w=3174&auto=format&fit=crop',
        },
        {
          id: 2,
          title: 'Girnar Ji Ascent & Retreat',
          location: 'Gujarat, India',
          type: 'National',
          dates: 'Jan 05 - Jan 10, 2027',
          comfort: 'Moderate',
          image: 'https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=2938&auto=format&fit=crop',
        },
        {
          id: 3,
          title: 'Southeast Asia Jain Temples',
          location: 'Thailand & Malaysia',
          type: 'International',
          dates: 'Mar 15 - Mar 25, 2027',
          comfort: 'Premium Luxury',
          image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2600&auto=format&fit=crop',
        }
      ]
    },
    philanthropy: {
      mealsServed: 'Meals Served',
      medicalCamps: 'Medical Camps run',
      activeVolunteers: 'Active Volunteers',
      title: 'Seva: Service Beyond Self',
      subtitle: 'Our commitment to uplifting communities and protecting life, turning compassion into actionable impact.',
      causes: [
        {
          title: "Jivdaya (Animal Welfare)",
          description: "Compassion towards all living beings is the core of Jain philosophy. We support gaushalas, panjrapoles, and emergency medical camps to provide shelter, food, and care for animals in need.",
          image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=2940&q=80"
        },
        {
          title: "Educational Support",
          description: "Empowering the next generation. Our federation funds educational scholarships, supplies to underserved schools, and mentorship programs to guarantee every child has the opportunity to shine.",
          image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=3032&q=80"
        },
        {
          title: "Medical Aid Camps",
          description: "Providing accessible healthcare to those who cannot afford it. We regularly organize free eye-checkup camps, general health screening, and provide necessary medications to local communities.",
          image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=3000&q=80"
        }
      ],
      directInvolvement: 'Direct community involvement',
      transparentFunding: '100% transparent funding',
      joinUsTitle: 'Join Us in Making a Difference',
      joinUsSubtitle: "Your contribution enables us to expand our reach. Whether it's feeding the hungry or educating a child, every act of Seva matters.",
      supportCauses: 'Support Our Causes'
    },
    testimonials: {
      title: 'Voices of Our Community',
      subtitle: 'Hear from the individuals whose lives have been touched by friendship and purpose.',
      list: [
        {
          quote: "Traveling with JDF to Shikharji was phenomenal. The arrangements were perfect for my parents, and seeing our younger volunteers serve alongside us was truly beautiful.",
          author: "Ramesh Shah",
          role: "Member since 2018",
          ageGroup: "55 years",
        },
        {
          quote: "I found a true sense of belonging here. The medical camps we organized last year opened my eyes to the power of community when united by Jain principles.",
          author: "Priya Desai",
          role: "Youth Volunteer",
          ageGroup: "28 years",
        },
        {
          quote: "The seamless blend of spirituality during Yatras and active charity work gives my life immense purpose. It's more than an organization; it's an extended family.",
          author: "Ketan Mehta",
          role: "Committee Lead",
          ageGroup: "45 years",
        }
      ]
    },
    footer: {
      title: 'Jain Dosti Fed.',
      desc: 'Building lifelong friendships grounded in Jain values through spiritual journeys and philanthropic service.',
      explore: 'Explore',
      aboutUs: 'About Us',
      upcomingYatras: 'Upcoming Yatras',
      philanthropyProjects: 'Philanthropy Projects',
      memberDirectory: 'Member Directory',
      resources: 'Resources',
      downloadItineraries: 'Download Itineraries',
      volunteerGuidelines: 'Volunteer Guidelines',
      donationFaqs: 'Donation FAQs',
      safetyProtocols: 'Safety Protocols',
      contact: 'Contact',
      address1: '108 Ahimsa Marg, Heritage District',
      address2: 'Mumbai, India 400001',
      rights: 'Jain Dosti Federation. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    }
  },
  hi: {
    nav: {
      home: 'होम',
      darshanTours: 'दर्शन यात्राएं',
      pastYatras: 'पिछली यात्राएं',
      seva: 'सेवा',
      aboutUs: 'हमारे बारे में',
      joinUs: 'हमसे जुड़ें',
    },
    hero: {
      welcome: 'जैन दोस्ती फेडरेशन में आपका स्वागत है',
      title1: 'एक साथ यात्रा करें।',
      title2: 'एक साथ सेवा करें।',
      title3: 'एक साथ बढ़ें।',
      subtitle: 'साझा मूल्यों के माध्यम से गहन आध्यात्मिक समुदाय खोजना। परिवर्तनकारी आध्यात्मिक दर्शन यात्राओं और सार्थक परोपकारी मिशनों में हमारे साथ जुड़ें।',
      exploreTours: 'यात्राएं खोजें',
      joinCommunity: 'समुदाय से जुड़ें',
    },
    motto: {
      text: "एक कदम सेवा की ओर",
    },
    pastYatras: {
      title: 'पिछली दर्शन यात्राएं',
      subtitle: 'हमारी पिछली यात्राओं की संजोई हुई यादें और आध्यात्मिक मील के पत्थर।',
      viewDetails: 'विवरण देखें',
      close: 'बंद करें',
      itineraryTitle: 'विस्तृत यात्रा कार्यक्रम',
      galleryTitle: 'गैलरी',
      list: [
        {
          id: 101,
          title: 'पालीताणा शाश्वत तीर्थ यात्रा',
          location: 'गुजरात, भारत',
          dates: '10 नवंबर - 15 नवंबर, 2025',
          image: 'https://images.unsplash.com/photo-1549473889-14f410d83298?auto=format&fit=crop&w=800&q=80',
          gallery: [
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80'
          ],
          itinerary: [
            'दिन 1: भावनगर आगमन और पालीताणा प्रस्थान',
            'दिन 2: पहली चढ़ाई और तलेटी दर्शन',
            'दिन 3: नवटूक दर्शन और चैत्यवंदन',
            'दिन 4: घेटी पग दर्शन और स्थानीय पांजरापोल में सेवा',
            'दिन 5: प्रस्थान'
          ]
        },
        {
          id: 102,
          title: 'सम्मेद शिखरजी यात्रा',
          location: 'झारखंड, भारत',
          dates: '01 अक्टूबर - 08 अक्टूबर, 2024',
          image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=800&q=80',
          gallery: [
            'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400&q=80',
            'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=400&q=80'
          ],
          itinerary: [
            'दिन 1-2: मधुबन की यात्रा',
            'दिन 3: बेस कैंप अनुकूलन और स्थानीय दर्शन',
            'दिन 4: पहाड़ यात्रा (वंदना) - 27 टोंक',
            'दिन 5: भोमियाजी महाराज दर्शन',
            'दिन 6: चिकित्सा शिविर सेवा और प्रस्थान'
          ]
        }
      ]
    },
    pillars: {
      title: 'हमारे भाईचारे के स्तंभ',
      subtitle: 'हम आंतरिक चिंतन और बाहरी करुणा की साझा खोज के माध्यम से व्यक्तियों को एकजुट करते हैं।',
      travelWithUs: 'हमारे साथ यात्रा करें',
      spiritualDarshan: 'आध्यात्मिक दर्शन',
      travelDesc: 'पवित्र स्थलों की सावधानीपूर्वक तैयार की गई यात्राओं पर निकलें। सभी उम्र के लोगों के लिए विचारपूर्वक डिजाइन की गई आरामदायक यात्रा का अनुभव करें, जो गहरे आध्यात्मिक संबंध और स्थायी मित्रता को बढ़ावा देती है।',
      serveWithUs: 'हमारे साथ सेवा करें',
      philanthropySeva: 'परोपकार और सेवा',
      serveDesc: 'जैन धर्म के मूल्यों को सक्रिय सेवा में विस्तारित करें। कम संसाधन वालों के लिए चिकित्सा शिविर आयोजित करने से लेकर जीवदया (पशु कल्याण) को बढ़ावा देने तक, हमारा मानना है कि सच्ची मित्रता साझा निस्वार्थता के माध्यम से बनती है।',
      learnMore: 'और जानें',
    },
    tours: {
      title: 'आगामी आध्यात्मिक यात्राएं',
      subtitle: 'आराम, सुरक्षा और गहरे आध्यात्मिक विसर्जन के लिए सावधानीपूर्वक योजना बनाई गई।',
      filterAll: 'सभी',
      filterNational: 'राष्ट्रीय',
      filterInternational: 'अंतर्राष्ट्रीय',
      viewItinerary: 'कार्यक्रम देखें',
      comfortLevel: 'आराम का स्तर:',
      toursList: [
        {
          id: 1,
          title: 'शिखरजी महायात्रा 2026',
          location: 'झारखंड, भारत',
          type: 'राष्ट्रीय',
          dates: '12 अक्टूबर - 20 अक्टूबर, 2026',
          comfort: 'उच्च आराम',
          image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?q=80&w=3174&auto=format&fit=crop',
        },
        {
          id: 2,
          title: 'गिरनार जी आरोहण और वापसी',
          location: 'गुजरात, भारत',
          type: 'राष्ट्रीय',
          dates: '05 जनवरी - 10 जनवरी, 2027',
          comfort: 'मध्यम',
          image: 'https://images.unsplash.com/photo-1549473889-14f410d83298?q=80&w=2938&auto=format&fit=crop',
        },
        {
          id: 3,
          title: 'दक्षिण पूर्व एशिया जैन मंदिर',
          location: 'थाईलैंड और मलेशिया',
          type: 'अंतर्राष्ट्रीय',
          dates: '15 मार्च - 25 मार्च, 2027',
          comfort: 'प्रीमियम लग्जरी',
          image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2600&auto=format&fit=crop',
        }
      ]
    },
    philanthropy: {
      mealsServed: 'भोजन परोसा गया',
      medicalCamps: 'चिकित्सा शिविर चलाए गए',
      activeVolunteers: 'सक्रिय स्वयंसेवक',
      title: 'सेवा: स्वार्थ से परे सेवा',
      subtitle: 'समुदायों के उत्थान और जीवन की रक्षा के लिए हमारी प्रतिबद्धता, करुणा को कार्रवाई योग्य प्रभाव में बदलना।',
      causes: [
        {
          title: "जीवदया (पशु कल्याण)",
          description: "सभी जीवित प्राणियों के प्रति करुणा जैन दर्शन का मूल है। हम जरूरतमंद जानवरों को आश्रय, भोजन और देखभाल प्रदान करने के लिए गौशालाओं, पंजरापोल और आपातकालीन चिकित्सा शिविरों का समर्थन करते हैं।",
          image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=2940&q=80"
        },
        {
          title: "शैक्षिक सहायता",
          description: "अगली पीढ़ी को सशक्त बनाना। हमारा फेडरेशन शैक्षिक छात्रवृत्ति, कम सेवा वाले स्कूलों को आपूर्ति और हर बच्चे को चमकने का अवसर सुनिश्चित करने के लिए मेंटरशिप कार्यक्रमों को निधि देता है।",
          image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=3032&q=80"
        },
        {
          title: "चिकित्सा सहायता शिविर",
          description: "उन लोगों को सुलभ स्वास्थ्य सेवा प्रदान करना जो इसे वहन नहीं कर सकते। हम नियमित रूप से मुफ्त नेत्र जांच शिविर, सामान्य स्वास्थ्य जांच और स्थानीय समुदायों को आवश्यक दवाएं प्रदान करते हैं।",
          image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=3000&q=80"
        }
      ],
      directInvolvement: 'प्रत्यक्ष सामुदायिक भागीदारी',
      transparentFunding: '100% पारदर्शी वित्तपोषण',
      joinUsTitle: 'बदलाव लाने में हमारे साथ जुड़ें',
      joinUsSubtitle: 'आपका योगदान हमें अपनी पहुंच का विस्तार करने में सक्षम बनाता है। चाहे वह भूखों को खाना खिलाना हो या किसी बच्चे को शिक्षित करना हो, सेवा का हर कार्य मायने रखता है।',
      supportCauses: 'हमारे कारणों का समर्थन करें'
    },
    testimonials: {
      title: 'हमारे समुदाय की आवाज़ें',
      subtitle: 'उन व्यक्तियों से सुनें जिनके जीवन को मित्रता और उद्देश्य ने छुआ है।',
      list: [
        {
          quote: "जेडीएफ के साथ शिखरजी की यात्रा अभूतपूर्व थी। मेरे माता-पिता के लिए व्यवस्था एकदम सही थी, और हमारे युवा स्वयंसेवकों को हमारे साथ सेवा करते देखना वास्तव में सुंदर था।",
          author: "रमेश शाह",
          role: "2018 से सदस्य",
          ageGroup: "55 वर्ष",
        },
        {
          quote: "मुझे यहाँ अपनेपन का सच्चा एहसास मिला। पिछले साल हमने जो चिकित्सा शिविर आयोजित किए थे, उन्होंने जैन सिद्धांतों द्वारा एकजुट होने पर समुदाय की शक्ति के प्रति मेरी आँखें खोल दीं।",
          author: "प्रिया देसाई",
          role: "युवा स्वयंसेवक",
          ageGroup: "28 वर्ष",
        },
        {
          quote: "यात्राओं के दौरान आध्यात्मिकता का सहज मिश्रण और सक्रिय दान कार्य मेरे जीवन को अपार उद्देश्य देता है। यह एक संगठन से कहीं अधिक है; यह एक विस्तारित परिवार है।",
          author: "केतन मेहता",
          role: "समिति प्रमुख",
          ageGroup: "45 वर्ष",
        }
      ]
    },
    footer: {
      title: 'जैन दोस्ती फेड.',
      desc: 'आध्यात्मिक यात्राओं और परोपकारी सेवा के माध्यम से जैन मूल्यों पर आधारित आजीवन मित्रता का निर्माण।',
      explore: 'खोजें',
      aboutUs: 'हमारे बारे में',
      upcomingYatras: 'आगामी यात्राएं',
      philanthropyProjects: 'परोपकार परियोजनाएं',
      memberDirectory: 'सदस्य निर्देशिका',
      resources: 'संसाधन',
      downloadItineraries: 'यात्रा कार्यक्रम डाउनलोड करें',
      volunteerGuidelines: 'स्वयंसेवक दिशानिर्देश',
      donationFaqs: 'दान संबंधी सामान्य प्रश्न',
      safetyProtocols: 'सुरक्षा प्रोटोकॉल',
      contact: 'संपर्क करें',
      address1: '108 अहिंसा मार्ग, हेरिटेज डिस्ट्रिक्ट',
      address2: 'मुंबई, भारत 400001',
      rights: 'जैन दोस्ती फेडरेशन। सर्वाधिकार सुरक्षित।',
      privacyPolicy: 'गोपनीयता नीति',
      termsOfService: 'सेवा की शर्तें',
    }
  }
};
