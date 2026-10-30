export const INITIAL_NEWS = [
  {
    id: "news-1",
    title: "Toshkent va Samarqand o‘rtasida yangi tezyurar poyezdlar qatnovi yo‘lga qo‘yiladi",
    slug: "toshkent-samarqand-yangi-tezyurar-poyezdlar",
    category: "uzbekistan",
    categoryName: "O‘zbekiston",
    summary: "O‘zbekiston temir yo‘llari Janubiy Koreyaning Hyundai Rotem kompaniyasi bilan hamkorlikda yangi avlod elektropoyezdlarini qatnovga chiqarmoqda.",
    content: [
      {
        type: "paragraph",
        text: "O‘zbekiston hukumati va Janubiy Koreyaning yetakchi mashinasozlik korxonasi Hyundai Rotem o‘rtasida erishilgan kelishuvga binoan, yurtimizga 6 ta zamonaviy yuqori tezlikda harakatlanuvchi elektropoyezd keltirilishi ma'lum qilindi."
      },
      {
        type: "quote",
        text: "Yangi poyezdlar soatiga 250 km tezlikda harakatlana oladi va Toshkentdan Samarqandga yetib borish vaqtini 1 soat 30 daqiqagacha qisqartiradi.",
        author: "Transport vazirligi matbuot xizmati"
      },
      {
        type: "paragraph",
        text: "Loyihaning umumiy qiymati qariyb 200 million dollarni tashkil etadi. Mazkur poyezdlarda yo‘lovchilar uchun barcha qulayliklar: simsiz internet (Wi-Fi), individual planshetlar, maxsus ovqatlanish vagonlari hamda nogironligi bo‘lgan shaxslar uchun qulay sharoitlar yaratilgan."
      },
      {
        type: "paragraph",
        text: "Mutaxassislarning fikricha, bu loyiha nafaqat ichki turizmni yangi bosqichga olib chiqadi, balki poytaxt va viloyatlar o‘rtasidagi iqtisodiy faollikni ham bir necha barobar oshiradi."
      }
    ],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Zamonaviy tezyurar temir yo‘l tarmog‘i",
    author: {
      name: "Sardorbek Ergashev",
      role: "Transport va infratuzilma sharhlovchisi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(), // 35 min ago
    readTime: "3 daqiqa",
    views: 18450,
    likes: 1240,
    tags: ["Toshkent", "Samarqand", "Poyezd", "Transport", "Hyundai"],
    isBreaking: true,
    isFeatured: true,
    isTrending: true,
    comments: [
      {
        id: "c1",
        author: "Azamat Nurmatov",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        date: "20 daqiqa oldin",
        text: "Juda ajoyib yangilik! Afrosiyob poyezdlariga chipta topish qiyin bo'layotgan edi, yangi sostavlar qatnovi juda asqotadi."
      },
      {
        id: "c2",
        author: "Malika Qosimova",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        date: "10 daqiqa oldin",
        text: "Koreya texnologiyalari juda ishonchli. Xizmat ko'rsatish sifati ham yuqori bo'ladi deb umid qilamiz."
      }
    ]
  },
  {
    id: "news-2",
    title: "O‘zbekiston IT-xizmatlari eksporti 1 milliard dollarlik marraga yaqinlashmoqda",
    slug: "ozbekiston-it-xizmatlari-eksporti-1-milliard-dollar",
    category: "tech",
    categoryName: "Texnologiya",
    summary: "Raqamli texnologiyalar vazirligi hisobotiga ko‘ra, mahalliy dasturiy mahsulotlar va autsorsing xizmatlarining xorijiy bozorlarga eksporti rekord sur'atlarda o‘smoqda.",
    content: [
      {
        type: "paragraph",
        text: "O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligi hamda IT Park taqdim etgan so‘nggi ma'lumotlarga ko‘ra, mamlakatimiz IT-kompaniyalari eksport hajmi o‘tgan yilning mos davriga nisbatan 85 foizga oshgan."
      },
      {
        type: "quote",
        text: "O‘zbekiston Markaziy Osiyoning yetakchi mintaqaviy IT-habiga aylanmoqda. Bizning yosh dasturchilarimiz bugun AQSH, Germaniya, Yaponiya va BAA kompaniyalariga sifatli mahsulot taqdim etmoqda.",
        author: "Raqamli texnologiyalar vaziri o‘rinbosari"
      },
      {
        type: "paragraph",
        text: "Bugungi kunda IT Park rezidentlari soni 2000 dan oshdi, ularning yuzlablari to‘liq xorijiy sarmoyadorlar tomonidan ochilgan venchur va autsorsing korxonalaridir. Toshkent, Samarqand va Farg‘onadagi kovorking markazlarida minglab yoshlar global loyihalarda masofadan ishlamoqda."
      }
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "IT Park rezidentlari va zamonaviy axborot texnologiyalari",
    author: {
      name: "Dildora Rahimova",
      role: "IT va innovatsiyalar muharriri",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 75).toISOString(),
    readTime: "4 daqiqa",
    views: 14210,
    likes: 980,
    tags: ["IT Park", "Eksport", "Texnologiya", "Startap", "Raqamlashtirish"],
    isBreaking: false,
    isFeatured: true,
    isTrending: true,
    comments: [
      {
        id: "c3",
        author: "Jamshid Aliyev",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        date: "45 daqiqa oldin",
        text: "O'zbekistonda dasturlash sohasiga e'tibor juda kuchaydi. Yoshlarga ingliz tili va kodlashni o'rgatish o'z samarasini bermoqda."
      }
    ]
  },
  {
    id: "news-3",
    title: "Oltin narxi jahon bozorida yangi tarixiy rekordni yangiladi",
    slug: "oltin-narxi-tarixiy-rekord-yangiladi",
    category: "business",
    categoryName: "Iqtisodiyot",
    summary: "Geosiyosiy noaniqliklar va global inflyatsiya xavfi fonida bir troya unsiyasi oltin narxi xalqaro birjalarda eng yuqori darajaga ko‘tarildi.",
    content: [
      {
        type: "paragraph",
        text: "Nyu-York tovar birjasi (COMEX) savdolarida oltinning narxi bir unsiya uchun 2 750 dollarlik psixologik chegaradan oshib ketdi. Investorlar o‘z aktivlarini himoyalash maqsadida ushbu qimmatbaho metallga bo‘lgan talabni keskin oshirgan."
      },
      {
        type: "quote",
        text: "Markaziy banklarning oltin zaxiralarini muttasil oshirib borayotgani hamda foiz stavkalarining pasayishi kutilayotgani bozor ishtirokchilarini oltinga yo‘naltirmoqda.",
        author: "Bloomberg tahlilchisi Devid Miller"
      },
      {
        type: "paragraph",
        text: "Eslatib o‘tamiz, O‘zbekiston dunyodagi eng yirik oltin qazib oluvchi va eksport qiluvchi davlatlardan biri sanaladi. Jahon bozoridagi bu o‘sish mamlakatimiz oltin-valyuta zaxiralari va eksport daromadlariga ijobiy ta'sir ko‘rsatmoqda."
      }
    ],
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Qimmatbaho metallar bozoridagi savdolar",
    author: {
      name: "Sherzod Yoqubov",
      role: "Iqtisodiy tahlilchi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    readTime: "3 daqiqa",
    views: 16700,
    likes: 1110,
    tags: ["Oltin", "Moliya", "Iqtisodiyot", "Birja", "Investitsiya"],
    isBreaking: true,
    isFeatured: false,
    isTrending: true,
    comments: []
  },
  {
    id: "news-4",
    title: "O‘zbekiston milliy terma jamoasi Jahon chempionati saralashida muhim g‘alabaga erishdi",
    slug: "ozbekiston-terma-jamoasi-jch-saralash-galaba",
    category: "sport",
    categoryName: "Sport",
    summary: "O‘zbekiston milliy terma jamoasi dramatik uchrashuvda yorqin g‘alaba qozonib, guruh yetakchiligi uchun kurashni davom ettirmoqda.",
    content: [
      {
        type: "paragraph",
        text: "Toshkentdagi 'Bunyodkor' stadionida 34 mingdan ortiq muxlis ko‘z o‘ngida bo‘lib o‘tgan o‘yinda milliy terma jamoamiz g‘oyat yuqori shijoat va taktika namoyish etdi."
      },
      {
        type: "paragraph",
        text: "Uchrashuvning ikkinchi bo‘limida kiritilgan yagona hal qiluvchi gol jamoamizga muhim 3 ochkoni taqdim etdi. Bosh murabbiy uchrashuvdan so‘ng yigitlarning intizomini va muxlislarning betakror qo‘llab-quvvatlashini alohida ta'kidladi."
      },
      {
        type: "quote",
        text: "Biz har bir o‘yinga final deb qaraymiz. Xalqimizning ko‘p yillik orzusini ro‘yobga chiqarish — bizning eng ustuvor burchimiz.",
        author: "Terma jamoa bosh murabbiyi"
      }
    ],
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Stadiondagi ehtirosli saralash uchrashuvi",
    author: {
      name: "Bobur Karimov",
      role: "Sport jurnalisti",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    readTime: "3 daqiqa",
    views: 31200,
    likes: 3450,
    tags: ["Futbol", "JCH-2026", "Terma jamoa", "Sport", "Toshkent"],
    isBreaking: false,
    isFeatured: true,
    isTrending: true,
    comments: [
      {
        id: "c4",
        author: "Otabek Rustamov",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
        date: "2 soat oldin",
        text: "Mana bu haqiqiy xarakter! Butun jamoaga ofarin, Jahon chempionatiga chiqishimizga ishonamiz!"
      }
    ]
  },
  {
    id: "news-5",
    title: "Sun'iy intellekt inqilobi: Yangi multimodal modellar inson aqliga yana bir qadam yaqinlashdi",
    slug: "suniy-intellekt-yangi-multimodal-modellar",
    category: "tech",
    categoryName: "Texnologiya",
    summary: "Dunyoning yetakchi ilmiy laboratoriyalari real vaqt rejimida ovoz, video va matnni sinxron tahlil qiluvchi avtonom sun'iy intellekt tizimlarini taqdim etdi.",
    content: [
      {
        type: "paragraph",
        text: "Kremniy vodiysidagi texnologiya gigantlari sun'iy intellekt sohasida navbatdagi katta sakrashni amalga oshirdi. Yangi modellar nafaqat savollarga javob beradi, balki murakkab muhandislik masalalarini rejalashtirish, kod yozish va xatolarni mustaqil tuzatish qobiliyatiga ega bo‘lmoqda."
      },
      {
        type: "quote",
        text: "Biz axborot asridan fikrlash va agentlik tizimlari davriga qadam qo‘ymoqdamiz. Kelgusi ikki yilda dasturlash va ta'lim tubdan o‘zgaradi.",
        author: "AI tadqiqotchisi doktor Leyla Chen"
      },
      {
        type: "paragraph",
        text: "O‘zbekistonda ham sun'iy intellekt bo‘yicha milliy strategiya qabul qilinib, davlat boshqaruvi, tibbiyot va qishloq xo‘jaligida AI modellarini joriy etishga katta mablag‘lar yo‘naltirilmoqda."
      }
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Sun'iy intellekt va neyron tarmoqlar vizualizatsiyasi",
    author: {
      name: "Dildora Rahimova",
      role: "IT va innovatsiyalar muharriri",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
    readTime: "5 daqiqa",
    views: 22100,
    likes: 1890,
    tags: ["AI", "Sun'iy intellekt", "Machine Learning", "Texnologiya"],
    isBreaking: false,
    isFeatured: false,
    isTrending: false,
    comments: []
  },
  {
    id: "news-6",
    title: "BMT iqlim sammitida toza energiya uchun 100 milliard dollarlik global fond tasdiqlandi",
    slug: "bmt-iqlim-sammiti-toza-energiya-fondi",
    category: "world",
    categoryName: "Jahon",
    summary: "Xalqaro sammitda 120 dan ortiq davlat vakillari atmosferaga zararli gazlarni kamaytirish va qayta tiklanuvchi manbalarga o‘tish bo‘yicha yangi majburiyatlarni imzoladilar.",
    content: [
      {
        type: "paragraph",
        text: "Birlashgan Millatlar Tashkilotining Iqlim bo‘yicha xalqaro konferensiyasida rivojlanayotgan davlatlarga 'yashil iqtisodiyot'ga o‘tishda ko‘maklashish uchun yangi moliyalashtirish mexanizmi yo‘lga qo‘yildi."
      },
      {
        type: "paragraph",
        text: "Ushbu loyiha doirasida quyosh va shamol elektr stansiyalarini qurish, suv resurslarini tejash hamda qurg‘oqchilikka chidamli ekin navlarini ekish loyihalariga grantlar ajratiladi."
      },
      {
        type: "quote",
        text: "Sayyoramiz kelajagi bugungi qat'iy qarorlarimizga bog‘liq. Bizda ikkinchi imkoniyat yo‘q.",
        author: "BMT Bosh kotibi"
      }
    ],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Qayta tiklanuvchi quyosh va shamol energiyasi",
    author: {
      name: "Anvar Jo‘rayev",
      role: "Xalqaro sharhlovchi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 320).toISOString(),
    readTime: "4 daqiqa",
    views: 9800,
    likes: 670,
    tags: ["Iqlim", "BMT", "Yashil energiya", "Ekologiya", "Jahon"],
    isBreaking: false,
    isFeatured: false,
    isTrending: false,
    comments: []
  },
  {
    id: "news-7",
    title: "Navoiy va Buxoroda yirik quyosh va shamol elektr stansiyalari umumiy tarmoqqa ulandi",
    slug: "navoiy-buxoro-yashil-energiya-stansiyalari",
    category: "uzbekistan",
    categoryName: "O‘zbekiston",
    summary: "O‘zbekiston energetika tizimida umumiy quvvati 1000 megavattdan ortiq bo‘lgan muqobil energiya quvvatlari to‘liq ishga tushirildi.",
    content: [
      {
        type: "paragraph",
        text: "Energetika vazirligi ma'lumotlariga ko‘ra, Navoiy va Buxoro viloyatlarida xorijiy investorlar (Masdar va ACWA Power) ishtirokida barpo etilgan yangi quyosh fotoelektr stansiyalari to‘liq quvvat bilan elektr energiyasi yetkazib bera boshladi."
      },
      {
        type: "paragraph",
        text: "Mazkur stansiyalar yiliga 2 milliard kilovatt-soatdan ziyod toza energiya ishlab chiqarib, 600 million kub metr tabiiy gazni iqtisod qilish hamda atmosferaga chiqariladigan zararli gazlarni sezilarli darajada kamaytirish imkonini beradi."
      }
    ],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Buxoro viloyatidagi yangi quyosh panellari massivi",
    author: {
      name: "Sardorbek Ergashev",
      role: "Transport va infratuzilma sharhlovchisi",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 400).toISOString(),
    readTime: "3 daqiqa",
    views: 11300,
    likes: 820,
    tags: ["Navoiy", "Buxoro", "Quyosh energiyasi", "Yashil iqtisodiyot"],
    isBreaking: false,
    isFeatured: false,
    isTrending: false,
    comments: []
  },
  {
    id: "news-8",
    title: "Samarqand xalqaro turizm forumi: 50 dan ortiq davlatdan nufuzli mehmonlar tashrif buyurdi",
    slug: "samarqand-xalqaro-turizm-forumi",
    category: "culture",
    categoryName: "Madaniyat",
    summary: "Boqiy shahar Samarqandda 'Ipak yo‘li turizm chorrahasi' xalqaro forumi ochildi. Yangi madaniy marshrutlar va mehmonxona brendlari loyihalari imzolandi.",
    content: [
      {
        type: "paragraph",
        text: "Samarqanddagi 'Silk Road Samarkand' turizm markazida 'Ipak yo‘lida turizm va madaniy meros' xalqaro konferensiyasi o‘z ishini boshladi. Unda UNWTO (Butunjahon turizm tashkiloti) yetakchilari, xalqaro turoperatorlar va san'atkorlar qatnashmoqda."
      },
      {
        type: "paragraph",
        text: "Forum doirasida O‘zbekiston shaharlarida yangi ekoturizm va gastronomik marshrutlar xaritasi namoyish etildi, shuningdek, dunyoga mashhur mehmonxona tarmoqlari bilan yangi shartnomalar tuzildi."
      }
    ],
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Samarqanddagi Registon maydoni va xalqaro forum",
    author: {
      name: "Nilufar Saidova",
      role: "Madaniyat va turizm sharhlovchisi",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 480).toISOString(),
    readTime: "4 daqiqa",
    views: 8900,
    likes: 740,
    tags: ["Samarqand", "Turizm", "Madaniyat", "Ipak yo‘li"],
    isBreaking: false,
    isFeatured: false,
    isTrending: false,
    comments: []
  },
  {
    id: "news-9",
    title: "Markaziy bank inflyatsiya kutilmalari va asosiy stavka bo‘yicha so‘nggi qarorini e'lon qildi",
    slug: "markaziy-bank-asosiy-stavka-qarori",
    category: "business",
    categoryName: "Iqtisodiyot",
    summary: "Boshqaruv yig‘ilishida narxlar barqarorligini ta'minlash va iqtisodiy o‘sishni qo‘llab-quvvatlash maqsadida pul-kredit siyosati choralari belgilandi.",
    content: [
      {
        type: "paragraph",
        text: "O‘zbekiston Respublikasi Markaziy banki boshqaruvi navbatdagi majlisida asosiy stavkani o‘zgarishsiz qoldirishga qaror qildi. Bu qaror kutilayotgan inflyatsion bosimni jilovlash hamda bank omonatlari daromadliligini saqlab qolishga qaratilgan."
      },
      {
        type: "paragraph",
        text: "Regulyator prognoziga ko‘ra, joriy yilda mamlakat yalpi ichki mahsuloti (YaIM) o‘sishi 5.5 - 6.0 foiz atrofida bo‘lishi kutilmoqda."
      }
    ],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Markaziy bank va moliya bozori",
    author: {
      name: "Sherzod Yoqubov",
      role: "Iqtisodiy tahlilchi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 600).toISOString(),
    readTime: "3 daqiqa",
    views: 12450,
    likes: 610,
    tags: ["Markaziy bank", "Inflyatsiya", "Stavka", "Iqtisodiyot"],
    isBreaking: false,
    isFeatured: false,
    isTrending: false,
    comments: []
  },
  {
    id: "news-10",
    title: "Chempionlar Ligasi: Kechagi tunda sensatsion natijalar qayd etildi",
    slug: "chempionlar-ligasi-kechagi-oyinlarning-tahlili",
    category: "sport",
    categoryName: "Sport",
    summary: "Yevropa klublarining eng nufuzli musobaqasida favoritlar kutilmagan mag‘lubiyatga uchradi, yosh iqtidorlar esa o‘zlarini ko‘rsatdi.",
    content: [
      {
        type: "paragraph",
        text: "UEFA Chempionlar Ligasining umumiy bosqich navbatdagi turida bir qator hayratlanarli hisoblar qayd etildi. Dastlabki daqiqalardanoq hujumkor o‘yin ko‘rsatgan jamoalar muxlislarga chinakam futbol shousini taqdim etishdi."
      },
      {
        type: "quote",
        text: "Bu yangi format har bir o‘yinni hal qiluvchi jangga aylantirdi. Hech kim o‘zini xavfsiz his qila olmaydi.",
        author: "Yevropa futboli eksperti"
      }
    ],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
    imageCaption: "Chempionlar ligasining qizg‘in to‘qnashuvlari",
    author: {
      name: "Bobur Karimov",
      role: "Sport jurnalisti",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80"
    },
    publishedAt: new Date(Date.now() - 1000 * 60 * 720).toISOString(),
    readTime: "3 daqiqa",
    views: 19800,
    likes: 1540,
    tags: ["Futbol", "UCL", "Chempionlar ligasi", "Sport"],
    isBreaking: false,
    isFeatured: false,
    isTrending: true,
    comments: []
  }
];
