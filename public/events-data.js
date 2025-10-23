// Shared events data for the site
window.eventsData = [
    {
        id: 1,
        title: "مهرجان دمشق الثقافي",
        description: "مهرجان ثقافي كبير يضم عروض تراثية وموسيقى شعبية في قلب العاصمة السورية",
        category: "culture",
        city: "damascus",
        cityName: "دمشق",
        date: "2025-10-25",
        time: "18:00",
        image: "https://images.unsplash.com/photo-1676156786479-46a5b1715f41?auto=format&fit=crop&w=1200&q=80",
        attendees: 500,
        status: "available",
        featured: true,
        popularity: 95,
        gallery: [
            "https://images.unsplash.com/photo-1569989015573-c7babd0d4ec5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1667280642703-6b5bb72fc130?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1731264864404-71bfe952ced8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1616322720835-fbc3c0666ae7?auto=format&fit=crop&w=1200&q=80"
        ]
        ,
        organizer: {
            name: "مؤسسة التراث السوري",
            description: "مؤسسة متخصصة في الحفاظ على التراث السوري وتنظيم الفعاليات الثقافية منذ 2010.",
            logo: "https://images.unsplash.com/photo-1707546854112-fb0e61d36273?auto=format&fit=crop&w=200&q=80"
        },
        organizer: {
            name: "مؤسسة التراث السوري",
            description: "مؤسسة متخصصة في الحفاظ على التراث السوري وتنظيم الفعاليات الثقافية منذ 2010.",
            logo: "https://images.unsplash.com/photo-1707546854112-fb0e61d36273?auto=format&fit=crop&w=200&q=80",
            rating: 4.8,
            followers: 50000
        },
        program: [
            { time: '18:00', title: 'افتتاح المهرجان', description: 'كلمة ترحيبية وعرض تراثي افتتاحي' },
            { time: '19:30', title: 'عروض موسيقية تراثية', description: 'أمسية موسيقية مع فرق محلية' },
            { time: '21:30', title: 'عرض ختامي', description: 'ختام المهرجان بعرض جماعي' }
        ],
        stats: {
            views: 2340,
            ratings: 127,
            interested: 890,
            shares: 156
        }
    },
    {
        id: 2,
        title: "أمسية موسيقية في حلب",
        description: "عروض موسيقى كلاسيكية وشرقية في مسرح حلب التاريخي مع فرقة محلية مميزة",
        category: "music",
        city: "aleppo",
        cityName: "حلب",
        date: "2025-10-28",
        time: "20:00",
        image: "https://images.unsplash.com/photo-1627507758200-5b41d2957432?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxlcHBvJTIwbmlnaHQlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
        attendees: 300,
        status: "limited",
        featured: true,
        popularity: 88,
        gallery: [
            "https://images.unsplash.com/photo-1627507758200-5b41d2957432?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxlcHBvJTIwbmlnaHQlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
            "https://images.unsplash.com/photo-1574029352457-ec7762dd08e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWxlcHBvJTIwbmlnaHQlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
            "https://plus.unsplash.com/premium_photo-1760371294508-bbe1c7147887?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWxlcHBvJTIwbmlnaHQlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
        ]
        ,
        organizer: {
            name: "فرقة حلب للموسيقى",
            description: "فرقة محلية متخصصة في الأداء التقليدي والشرقي.",
            logo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            rating: 4.6,
            followers: 8200
        },
        program: [
            { time: '20:00', title: 'فاصل موسيقي أول', description: 'عروض موسيقية متنوعة' },
            { time: '21:30', title: 'أمسية شرقية', description: 'عرض خاص مع أوركسترا محلية' }
        ],
        stats: { views: 1500, ratings: 64, interested: 420, shares: 40 }
    },
    {
        id: 3,
        title: "معرض الحرف التراثية",
        description: "عرض وبيع المنتجات اليدوية السورية التقليدية مع ورش تعليمية",
        category: "culture",
        city: "homs",
        cityName: "حمص",
        date: "2025-10-30",
        time: "10:00",
        image: "https://plus.unsplash.com/premium_photo-1679811674370-7761190a9db0?auto=format&fit=crop&w=1200&q=80",
        attendees: 200,
        status: "available",
        featured: false,
        popularity: 75,
        gallery: [
            "https://images.unsplash.com/photo-1731264864404-71bfe952ced8?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80"
        ]
        ,
        organizer: { name: "جمعية الحرف", description: "جمعية تهتم بالحرف اليدوية ودعم الحرفيين المحليين.", logo: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=200&q=80", rating: 4.5, followers: 2300 },
        program: [
            { time: '10:00', title: 'ورشة سجاد تقليدي', description: 'تعليم أساسيات الحياكة' },
            { time: '12:00', title: 'عرض منتجات', description: 'معرض وبيع للحرف اليدوية' }
        ],
        stats: { views: 820, ratings: 34, interested: 210, shares: 16 }
    },
    {
        id: 4,
        title: "ورشة الخط العربي",
        description: "تعلم فن الخط العربي التقليدي مع خبراء محليين في جلسة تفاعلية مميزة",
        category: "culture",
        city: "damascus",
        cityName: "دمشق",
        date: "2025-10-22",
        time: "14:00",
        image: "https://images.unsplash.com/photo-1693504537223-8a7304d654ea?auto=format&fit=crop&w=1200&q=80",
        attendees: 45,
        status: "available",
        featured: false,
        popularity: 82,
        gallery: [
            "https://images.unsplash.com/photo-1603224288850-cf0a7939278c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJhYmljJTIwZm9udHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
            "https://images.unsplash.com/photo-1693504537223-8a7304d654ea?auto=format&fit=crop&w=1200&q=80"
        ]
        ,
        organizer: { name: "مركز الخط العربي", description: "مركز تربوي متخصص في فنون الخط العربي والزخرفة.", logo: "https://images.unsplash.com/photo-1693504537223-8a7304d654ea?auto=format&fit=crop&w=200&q=80", rating: 4.7, followers: 1800 },
        program: [ { time: '14:00', title: 'جلسة تعليمية', description: 'أساسيات الخط العربي' } ],
        stats: { views: 540, ratings: 18, interested: 95, shares: 8 }
    },
    {
        id: 5,
        title: "مهرجان الطعام السوري",
        description: "تذوق أشهى الأطباق السورية التقليدية والحديثة في مهرجان عائلي مميز",
        category: "family",
        city: "homs",
        cityName: "حمص",
        date: "2025-10-26",
        time: "12:00",
        image: "https://images.unsplash.com/photo-1746274394124-141a1d1c5af3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3lyaWFuJTIwZm9vZCUyMGZlc3RpdmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
        attendees: 250,
        status: "available",
        featured: false,
        popularity: 90,
        gallery: [
            "https://images.unsplash.com/photo-1746274394124-141a1d1c5af3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3lyaWFuJTIwZm9vZCUyMGZlc3RpdmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
            "https://images.unsplash.com/photo-1646578515903-67873a5398f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3lyaWFuJTIwZm9vZCUyMGZlc3RpdmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
        ]
        ,
        organizer: { name: "مهرجان الطعام العائلي", description: "منظمون محليون للأحداث الغذائية والترفيهية.", logo: "https://images.unsplash.com/photo-1726250873194-e9aefd3667ba?auto=format&fit=crop&w=200&q=80", rating: 4.4, followers: 9200 },
        program: [ { time: '12:00', title: 'بازار الطهاة', description: 'أسرّة طعام ومحطات تذوق' } ],
        stats: { views: 1280, ratings: 50, interested: 430, shares: 62 }
    },
    {
        id: 6,
        title: "بطولة كرة القدم المحلية",
        description: "بطولة كرة قدم بين الأحياء السكنية في اللاذقية مع جوائز قيمة",
        category: "sports",
        city: "lattakia",
        cityName: "اللاذقية",
        date: "2025-11-02",
        time: "16:00",
        image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200",
        attendees: 150,
        status: "available",
        featured: false,
        popularity: 70,
        gallery: [
            "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://plus.unsplash.com/premium_photo-1685056533706-5af828d13dc3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3lyaWFuJTIwZm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
        ]
        ,
        organizer: { name: "نادي اللاذقية الرياضي", description: "نادي محلي لرياضة كرة القدم والأنشطة الشبابية.", logo: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 4.2, followers: 4500 },
        stats: { views: 760, ratings: 22, interested: 150, shares: 20 }
    },
    {
        id: 7,
        title: "مؤتمر ريادة الأعمال",
        description: "مؤتمر متخصص في ريادة الأعمال والتكنولوجيا مع خبراء محليين ودوليين",
        category: "business",
        city: "damascus",
        cityName: "دمشق",
        date: "2025-11-05",
        time: "09:00",
        image: "https://images.unsplash.com/photo-1726250873194-e9aefd3667ba?auto=format&fit=crop&w=1200&q=80",
        attendees: 120,
        status: "available",
        featured: false,
        popularity: 65,
        gallery: [
            "https://images.unsplash.com/photo-1726250873194-e9aefd3667ba?auto=format&fit=crop&w=1200&q=80" ,
            "https://plus.unsplash.com/premium_photo-1705407454980-4b8b64d068b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3lyaWFuJTIwRW50cmVwcmVuZXVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
        ]
        ,
        organizer: { name: "مؤسسة ريادة", description: "تعمل على دعم رواد الأعمال والمشاريع الناشئة.", logo: "https://images.unsplash.com/photo-1726250873194-e9aefd3667ba?auto=format&fit=crop&w=200&q=80", rating: 4.3, followers: 2100 },
        stats: { views: 430, ratings: 12, interested: 88, shares: 12 }
    },
    {
        id: 8,
        title: "حفل موسيقى تراثية",
        description: "أمسية موسيقية تراثية سورية مع فرقة محلية مميزة في أجواء ساحرة",
        category: "music",
        city: "aleppo",
        cityName: "حلب",
        date: "2025-10-24",
        time: "19:30",
        image: "https://images.unsplash.com/photo-1598520335042-3209955e7791?auto=format&fit=crop&w=1200&q=80",
        attendees: 180,
        status: "limited",
        featured: true,
        popularity: 85,
        gallery: [
            "https://images.unsplash.com/photo-1657523389861-b6aa980018f0?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1598520335042-3209955e7791?auto=format&fit=crop&w=1200&q=80"
        ]
        ,
        organizer: { name: "فرقة التراث", description: "فرقة فنية متخصصة في تقديم الموسيقى التراثية السورية.", logo: "https://images.unsplash.com/photo-1657523389861-b6aa980018f0?auto=format&fit=crop&w=200&q=80", rating: 4.5, followers: 6100 },
        stats: { views: 980, ratings: 40, interested: 260, shares: 34 }
    },
    {
        id: 9,
        title: "معرض الفنون التشكيلية",
        description: "معرض للوحات والمنحوتات لفنانين سوريين معاصرين في صالة حماة الثقافية",
        category: "culture",
        city: "hama",
        cityName: "حماة",
        date: "2025-11-08",
        time: "17:00",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80",
        attendees: 80,
        status: "available",
        featured: false,
        popularity: 72,
        gallery: [
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1601915632187-6f9c9c27dcc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3lyaWFuJTIwRmluZSUyMGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
        ]
        ,
        organizer: { name: "صالة حماة الثقافية", description: "قاعة عرض فنية تستضيف معارض الفنانين المحليين.", logo: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=200&q=80", rating: 4.1, followers: 900 },
        stats: { views: 420, ratings: 9, interested: 76, shares: 6 }
    },
    {
        id: 10,
        title: "مهرجان البحر الأبيض المتوسط",
        description: "احتفالية ساحلية في طرطوس مع عروض بحرية وأنشطة عائلية متنوعة",
        category: "family",
        city: "tartous",
        cityName: "طرطوس",
        date: "2025-11-12",
        time: "15:00",
        image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
        attendees: 400,
        status: "available",
        featured: false,
        popularity: 78,
        gallery: [
            "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
        ]
        ,
        organizer: { name: "بلدية طرطوس", description: "الجهة المنظمة للمهرجان البحري والفعاليات الساحلية.", logo: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=200", rating: 4.6, followers: 15000 },
        program: [ { time: '15:00', title: 'افتتاح المهرجان البحري', description: 'عروض بحرية وفعاليات للأطفال' } ],
        stats: { views: 1600, ratings: 70, interested: 520, shares: 78 }
    },
    {
        id: 11,
        title: "ورشة الطبخ التراثي",
        description: "تعلم طبخ الأطباق السورية التقليدية مع الشيف أم محمد في دمشق",
        category: "food",
        city: "damascus",
        cityName: "دمشق",
        date: "2025-11-15",
        time: "11:00",
        image: "https://plus.unsplash.com/premium_photo-1747833522709-5800a8d90af8?auto=format&fit=crop&w=1200&q=80",
        attendees: 25,
        status: "available",
        featured: false,
        popularity: 80,
        gallery: [
            "https://plus.unsplash.com/premium_photo-1663853051820-128971c46c4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3lyaWFuJTIwVHJhZGl0aW9uYWwlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
            "https://plus.unsplash.com/premium_photo-1677956021530-279848c32fb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN5cmlhbiUyMFRyYWRpdGlvbmFsJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
        ]
        ,
        organizer: { name: "الشيف أم محمد", description: "شيف محلية متخصصة بالأطباق التراثية السورية.", logo: "https://images.unsplash.com/photo-1747833522709-5800a8d90af8?auto=format&fit=crop&w=200&q=80", rating: 4.9, followers: 320 },
        program: [ { time: '11:00', title: 'ورشة طبخ', description: 'تعليم وصفة تقليدية' } ],
        stats: { views: 210, ratings: 6, interested: 48, shares: 4 }
    },
    {
        id: 12,
        title: "مسابقة الشعر العربي",
        description: "مسابقة شعرية للشعراء الشباب في حلب مع لجنة تحكيم من كبار الأدباء",
        category: "culture",
        city: "aleppo",
        cityName: "حلب",
        date: "2025-11-18",
        time: "18:30",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
        attendees: 100,
        status: "available",
        featured: false,
        popularity: 68,
        gallery: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1611330336219-e61163a5c0d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFN5cmlhbiUyMCUyMHBvZXRyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
        ]
        ,
        organizer: { name: "نقابة الأدباء", description: "نقابة ثقافية تدعم الفعاليات الأدبية والمهرجانات الشعرية.", logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=200&q=80", rating: 4.4, followers: 1200 },
        program: [ { time: '18:30', title: 'جلسة قراءة شعرية', description: 'قراءة مختارة من أعمال الشعراء الشباب' } ],
        stats: { views: 310, ratings: 14, interested: 110, shares: 9 }
    }
];
