import { ref, reactive } from 'vue';

// 默认语言
const defaultLanguage = 'zh';

// 当前语言
const currentLanguage = ref(localStorage.getItem('language') || defaultLanguage);

// 语言包
const translations = reactive({
  en: {
    // 通用
    common: {
      loading: 'Loading...',
      readMore: 'Read More',
      contactUs: 'Contact Us',
      exploreProducts: 'Explore Products',
      subscribe: 'Subscribe',
      email: 'Your Email',
      subscribeSuccess: 'Thank you for subscribing!',
      backToTop: 'Back to Top',
    },
    
    // 导航
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      research: 'Research',
      process: 'Tea Process',
      contact: 'Contact',
    },
    
    // 首页
    home: {
      hero: {
        title: 'Selenium-Rich Tea',
        subtitle: 'Premium Tea from Enshi, China',
        description: '— High Mountain Cloud Mist · Organic Handmade Tea —',
      },
      announcements: {
        title: 'Tea <span>News</span>',
        new: 'New Arrival',
        newTeaTitle: '2025 Spring Tea Pre-order',
        newTeaDesc: 'Limited edition Enshi high mountain selenium-rich green tea',
        event: 'Event',
        eventTitle: '30% Off Tasting',
        eventDesc: 'Free tasting of 2025 spring tea',
      },
      quote: {
        text: '"Good tea, like a good friend, is mild but not bland, strong but not bitter, with a lingering aftertaste"',
        author: '- Enshi Tea Master',
      },
      newsletter: {
        title: 'Subscribe to <span>Tea News</span>',
        description: 'Subscribe to our newsletter to receive updates on new tea arrivals, tea ceremonies, and special offers.',
      },
    },
    
    // 关于我们
    about: {
      title: 'About Selenium-Rich Tea',
      subtitle: 'From the World\'s Selenium Capital',
      history: {
        title: 'Our History',
        content: 'Located in Enshi, Hubei Province - known as the "World\'s Selenium Capital", our tea gardens benefit from the naturally selenium-rich soil. For generations, we have been cultivating premium tea using traditional methods that preserve the natural selenium content and unique flavor profile of our teas.',
      },
      seleniumValue: {
        title: 'The Value of Selenium',
        content: 'Selenium is an essential trace element recognized for its antioxidant properties. Scientific research has shown that appropriate selenium intake can support immune function and overall health. Our teas naturally contain selenium absorbed from the soil, providing a delicious way to incorporate this beneficial element into your daily routine.',
      },
      environment: {
        title: 'Our Environment',
        content: 'Our tea gardens are situated at elevations between 800-1200 meters, surrounded by pristine forests and natural springs. This unique microclimate, characterized by frequent cloud and mist, creates ideal growing conditions for premium tea. We maintain organic farming practices to protect this precious ecosystem.',
      },
      commitment: {
        title: 'Our Commitment',
        content: 'We are committed to sustainable farming practices, fair trade principles, and preserving traditional tea crafting techniques. Each batch of our tea is carefully processed to maintain its natural qualities and health benefits.',
      },
    },
    
    // 产品
    products: {
      title: 'Our Tea Collection',
      subtitle: 'Premium Selenium-Rich Teas',
      greenTea: {
        title: 'Selenium-Rich Green Tea',
        description: 'Our signature green tea, naturally rich in selenium, offers a fresh, smooth taste with subtle sweet notes. Harvested from high mountain gardens and carefully processed to preserve its natural benefits.',
      },
      blackTea: {
        title: 'Selenium-Rich Black Tea',
        description: 'Full-bodied black tea with rich flavor and natural selenium content. The traditional fermentation process enhances its distinctive taste while preserving the beneficial properties.',
      },
      giftSets: {
        title: 'Premium Gift Sets',
        description: 'Elegantly packaged gift sets featuring our finest selenium-rich green and black teas. Perfect for tea enthusiasts or as a special gift for health-conscious friends and family.',
      },
    },
    
    // 研究页面
    research: {
      title: 'Selenium-Rich Tea Research',
      subtitle: 'Analysis of Selenium Content and Health Benefits',
      background: {
        title: 'Research Background',
        content: 'Enshi Tujia and Miao Autonomous Prefecture (Hubei) is known as the "World\'s Selenium Capital" with selenium-rich soil resources. Research shows that tea from certain areas of Enshi contains selenium levels far exceeding the national standard (≥0.25mg/kg), offering significant nutritional and health benefits.',
      },
      comparison: {
        title: 'Selenium Content Comparison',
        description: 'According to joint research by Hubei Provincial Academy of Agricultural Sciences and Enshi Prefecture Academy of Agricultural Sciences, selenium content in Enshi tea is significantly higher than regular tea.',
      },
      benefits: {
        title: 'Health Benefits of Selenium',
        content: 'Selenium, recognized by the World Health Organization as the "King of Anti-cancer" and "Star of Longevity," plays a crucial role in human health. Professor Clark\'s large-scale clinical trials showed that selenium supplementation can help prevent tumors, with daily intake of 200 micrograms reducing cancer incidence by 50% and total cancer mortality by 37%.',
      },
      distribution: {
        title: 'Selenium Distribution in Enshi Tea',
        conclusion: 'Conclusion:',
        point1: 'Tea from Hefeng County has the highest selenium content (some samples exceeding 6mg/kg), directly related to the distribution of selenium ore deposits in the soil.',
        point2: 'Enshi Yulu (Baojiao Township) retains more organic selenium due to the steaming process, offering greater stability.',
      },
      factors: {
        title: 'Key Factors Affecting Selenium Content',
        soil: 'Soil Selenium Background Value',
        soilDesc: 'The Enshi selenium belt is mainly concentrated along the Hefeng-Xuan\'en-Enshi line, with soil selenium content reaching 10-50mg/kg (national average is only 0.29mg/kg).',
        variety: 'Tea Plant Variety and Absorption Efficiency',
        varietyDesc: 'The local variety "Enshi Moss Tea" has a strong ability to accumulate selenium. Older tea trees accumulate selenium more easily than newly planted ones.',
        processing: 'Processing Technology',
        processingDesc: 'Green tea (like Enshi Yulu): The steaming process reduces selenium loss, with selenium retention rate 15%-20% higher than pan-fried tea. Black tea (like Lichuan Hong): The fermentation process may convert inorganic selenium into more easily absorbed organic forms.',
      },
      international: {
        title: 'International Scientific Recognition',
        healthEffects: 'Health Effects of Selenium Widely Confirmed',
        recommendedIntake: 'The World Health Organization (WHO) and European Food Safety Authority (EFSA) both recognize selenium (Se) as an essential trace element for the human body, with recommended daily intake:',
        adults: 'Adults:',
        pregnant: 'Pregnant/Nursing Women:',
        antioxidant: 'Antioxidant and Anti-cancer Effects:',
        research1: 'Multiple studies (e.g., Journal of Nutrition, 2016) show that selenium can enhance glutathione peroxidase (GPx) activity, reduce oxidative stress, and reduce cancer risk.',
        research2: 'Meta-analysis (Antioxidants, 2020) shows that adequate selenium supplementation can reduce the incidence of prostate cancer, lung cancer, etc.',
        teaValue: 'Special Value of Selenium-Rich Tea',
        absorption: 'Organic selenium is more easily absorbed: Selenium in tea leaves mainly exists in the form of selenomethionine (SeMet), which has higher bioavailability than inorganic selenium (such as sodium selenite).',
        synergy: 'Synergistic effect: The combination of tea polyphenols + selenium can enhance antioxidant effects (Food Chemistry, 2019).',
      },
      market: {
        title: 'International Market Status',
        regions: 'Major Consumer Markets',
        certification: 'International Certification and Standards',
      },
    },
    
    // 制作工艺
    process: {
      title: 'Tea Processing',
      subtitle: 'Traditional Craftsmanship',
      intro: 'Our tea processing follows time-honored techniques passed down through generations, ensuring the preservation of both flavor and nutritional benefits.',
      steps: {
        picking: {
          title: 'Picking',
          description: 'Tea leaves are carefully hand-picked, selecting only the tender buds and leaves during optimal seasons.',
        },
        withering: {
          title: 'Withering',
          description: 'Freshly picked leaves are spread out to wither, reducing moisture content and preparing them for processing.',
        },
        fixation: {
          title: 'Fixation',
          description: 'For green tea, leaves are heated to inactivate enzymes and preserve the natural green color and fresh flavor.',
        },
        rolling: {
          title: 'Rolling',
          description: 'Leaves are rolled to break down cell walls, releasing essential oils and enhancing flavor development.',
        },
        oxidation: {
          title: 'Oxidation',
          description: 'For black tea, leaves undergo controlled oxidation, developing rich color and robust flavor.',
        },
        drying: {
          title: 'Drying',
          description: 'Final drying reduces moisture content to 2-3%, ensuring proper preservation and storage stability.',
        },
        sorting: {
          title: 'Sorting',
          description: 'Finished tea is carefully sorted by size and quality before packaging.',
        },
      },
      seleniumPreservation: 'Our unique processing methods are designed to preserve the natural selenium content, ensuring you receive the full health benefits of our tea.',
    },
    
    // 联系我们
    contact: {
      title: 'Contact Us',
      subtitle: 'You can contact us in the following ways, we will reply to your inquiry as soon as possible',
      info: {
        title: '联系方式',
        address: '地址',
        addressValue: '湖北省恩施土家族苗族自治州',
        email: '电子邮箱',
        facebookName: '恩施富硒茶',
      },
      faqTitle: '常见<span>问题</span>',
      faq: {
        q1: '恩施富硒茶有哪些特点？',
        a1: '恩施富硒茶产自世界硒都恩施，土壤中富含硒元素，茶叶自然富集硒。富硒茶具有独特的香气和口感，同时富含茶多酚、氨基酸等营养成分，兼具茶叶的保健功效和硒元素的健康价值，对增强免疫力、抗氧化等方面有显著功效。',
        q2: '如何正确冲泡恩施富硒茶？',
        a2: '恩施富硒绿茶建议用80-85℃的水温，投茶量约为5克/150ml，第一泡30秒，之后每泡递增10-15秒。富硒红茶则可用95-100℃的沸水，投茶量约为5克/150ml，第一泡20-30秒，后续可适当延长。冲泡时注意水温和时间控制，以保留茶叶的香气和营养成分。',
        q3: '富硒茶的保存方法是什么？',
        a3: '富硒茶应存放在阴凉、干燥、无异味的环境中，避免阳光直射和高温潮湿。建议使用密封性好的茶叶罐或锡罐储存，并远离厨房等有油烟的地方。绿茶保质期一般为12-18个月，红茶可保存18-24个月，但建议在半年内饮用完，以保证最佳品质。',
        q4: '你们提供茶叶样品试喝吗？',
        a4: '是的，我们提供小包装的茶叶样品供客户试喝。您可以通过官网联系我们。对于批发客户，我们提供更多样品选择和专业的茶艺师指导。',
        q5: '你们的茶叶是否通过有机认证？',
        a5: '我们部分茶园已通过有机认证，特别是高山茶园系列产品。这些茶园严格按照有机种植标准管理，不使用化学肥料和农药，采用传统手工采摘和加工工艺。我们的有机认证信息可在产品包装上查看，也可以通过官方渠道验证认证真实性。',
      },
    },
    
    // 页脚
    footer: {
      about: 'About Us',
      products: 'Products',
      contact: 'Contact',
      follow: 'Follow Us',
      subscribe: 'Subscribe to Our Newsletter',
      subscribeDesc: 'Get the latest updates on our products and promotions.',
      copyright: '© 2023 Selenium-Rich Tea. All Rights Reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
    
    // About page
    about: {
      pageTitle: 'About <span>Products</span>',
      title: 'Enshi <span>Selenium-Rich Tea</span>',
      description: 'Enshi selenium-rich tea is most famous for Enshi Yulu. Produced in the famous Wuling Mountain tea region in southwestern Hubei, Lülin Cuifeng, Wujiatai Lüzhen, Enshi Yulu, Wudong Gongyu, and Jiyeh Gaoshan Yecha are outstanding representatives of Enshi selenium-rich tea. Enshi, Hubei is known as the "World Selenium Capital," with selenium-rich soil. Enshi tea is a gift of selenium-rich tea from heaven, deeply loved by tea enthusiasts, especially by the Japanese. Enshi selenium-rich tea is rich in tea polyphenols, catechins, theaflavins, alkaloids, and various vitamins and amino acids, as well as essential trace elements such as selenium and zinc for the human body. It has multiple health benefits including clearing the mind and improving eyesight, moistening the stomach, aiding digestion, promoting tranquility and beauty, and reducing inflammation.',
      categoriesTitle: 'Main Categories of Enshi Selenium-Rich Tea',
    },
    
    // Research page
    research: {
      pageTitle: 'Research on Selenium-Rich Tea',
      pageSubtitle: 'Analysis of Selenium Content Distribution and Influencing Factors in the World Selenium Capital',
      backgroundTitle: 'Research Background',
      backgroundDesc1: 'Enshi Tujia and Miao Autonomous Prefecture (Hubei) is known as the "World Selenium Capital," with abundant selenium resources in its soil and naturally selenium-rich tea. Research shows that the selenium content in tea from some areas of Enshi far exceeds the national standard (≥0.25mg/kg), having significant nutritional and health value.',
      backgroundDesc2: 'This report organizes existing research data to analyze the selenium content differences in tea from different production areas of Enshi and discusses the influencing factors.',
      comparisonTitle: 'Selenium Content Comparison of Teas from Different Regions',
      comparisonDesc: 'According to joint research by the Tea Research Institute of Hubei Academy of Agricultural Sciences and Enshi Prefecture Academy of Agricultural Sciences, the selenium content in Enshi selenium-rich tea is much higher than that of ordinary tea. The following is a comparison of selenium content between Enshi selenium-rich tea and tea from other major tea-producing regions:',
      chartNote: 'Note: Data sourced from the 2022 research report of the Tea Research Institute of Hubei Academy of Agricultural Sciences',
      benefitsTitle: 'Health Benefits of Selenium',
      benefitsDesc1: 'The trace element selenium is recognized by the World Health Organization as the "King of Anti-Cancer" and "Star of Longevity." The results of large-scale human clinical trials conducted by Professor Clark show that selenium supplementation can prevent tumors, which is called the "milestone experiment of selenium cancer prevention."',
      benefitsDesc2: 'The experimental results show that: with 200 micrograms of selenium supplemented daily, cancer incidence decreased by 50% and total cancer mortality decreased by 37%. Among them, the incidence of three types of cancer decreased most significantly: prostate cancer decreased by 63%, colorectal cancer decreased by 58%, and lung cancer decreased by 46%.',
    },
    
    // 产品 (英文)
    products: {
      title: 'Our <span>Tea Collection</span>',
      filter: {
        all: 'All'
      },
      viewProject: 'View Details',
      modal: {
        description: 'Tea Description',
        details: 'Tea Details',
        date: 'Date',
        tags: 'Tags',
        gallery: 'Product Gallery',
        image: 'Image',
        culture: 'Tea Culture'
      },
      categories: {
        green: 'Green Tea Series',
        black: 'Black Tea Series',
        flower: 'Flower Tea Series',
        gift: 'Gift Box Series',
        special: 'Special Tea Products'
      },
      items: {
        yulu: {
          title: 'Enshi Yulu',
          description: 'Enshi Yulu is a famous specialty tea from Enshi Prefecture, Hubei, belonging to the green tea category. Produced in Enshi, known as the "World\'s Selenium Capital," it is rich in selenium elements and has unique health benefits. It has a straight and slightly flat shape, emerald green color, lasting high aroma, fresh and sweet taste, and bright tender green liquor. It is refined using traditional craftsmanship, preserving the natural nutrients of tea leaves.',
          date: '2025 Spring Tea',
          services: 'High Mountain Cloud Mist Tea, Selenium-rich Green Tea, First-grade Tea',
          culture: 'Enshi Yulu is the only green tea in Chinese traditional tea-making techniques that uses steam fixation. The earliest written record dates back to the Tang Dynasty\'s "Tea Classic" in 780 AD, which is the first comprehensive monograph on tea in China and even the world, known as the encyclopedia of tea. After the Tang Dynasty, Japan imported tea trees from China and learned tea-making techniques. Steam fixation became Japan\'s main green tea processing technique, and their main green tea is also called Gyokuro.',
          xiStory: 'In the summer of 2018, President Xi invited Indian Prime Minister Modi to taste Enshi Yulu tea. China President Xi entertained India\'s PM Modi with Enshi Yulu tea in 2018'
        },
        lvlin: {
          title: 'Green Forest Peak',
          description: 'Selenium-rich green tea is harvested from high mountain tea gardens above 1,200 meters in Enshi. The soil is rich in selenium elements, and the tea leaves naturally absorb selenium. It is refined through traditional processes of fixation, rolling, and drying. The tea leaves are tightly curled, bright green in color, with a high and refreshing aroma, fresh and mellow taste, featuring the fresh fragrance of green tea and the unique taste of selenium-rich tea.',
          date: '2025 Spring Tea',
          services: 'High Mountain Green Tea, Selenium-rich Tea, Organic Tea'
        },
        lichuan: {
          title: 'Lichuan Red',
          description: 'Lichuan Red is the abbreviation for Lichuan Kungfu Black Tea. Its tea leaves are selected from Zhongcha 108, Echa No.1, Echa No.10, Quercus serrata, and local group varieties. Lichuan has a long history of tea production. In the mid-19th century, Lichuan tea farmers began processing black tea for export for British merchants. In 1876, as Yichang was listed as a foreign trade port, Lichuan Maoba became one of the core production areas for exporting Yihong Kungfu black tea. In 1951, Lichuan was listed by the state as a major production area for Yihong Kungfu black tea. Lichuan black tea has over 170 years of production and processing history.',
          date: '2025 Spring Tea',
          services: 'Black Tea, Kungfu Tea, Lichuan Red'
        },
        tengcha: {
          title: 'Vine Tea',
          description: 'Vine Tea, scientifically known as Ampelopsis grossedentata, is the tender stem and leaves of the Ampelopsis grossedentata of the Vitaceae family. It is called Vine Tea because its stems are like vines. Vine Tea is cold in nature, with a sweet and mild taste. It has effects of clearing heat and detoxifying, reducing inflammation and soothing the throat, lowering blood lipids and blood pressure, enhancing immunity, and anti-aging.',
          date: '2025 Premium Tea',
          services: 'Vine Tea, Dragon Whisker Tea, Lipid and Blood Pressure Reduction'
        }
      }
    },
    
    // 制作工艺 (英文)
    timeline: {
      title: 'Tea <span>Processing</span>',
      greenTitle: 'Green Tea <span>Processing</span>',
      blackTitle: 'Black Tea <span>Processing</span>',
      achievementsTitle: 'Key Process Points',
      futureTitle: 'Tea Culture <span>Heritage</span>',
      futureP1: 'The processing techniques of selenium-rich tea represent centuries of wisdom. We are committed to combining these traditional crafts with modern technology to create healthier and higher quality tea products.',
      futureP2: 'We look forward to sharing with you the natural gift of healthy tea and preserving Chinese tea culture together.',
      futureImageAlt: 'Tea Culture Heritage',
      green: {
        step1: {
          year: 'Step 1',
          title: 'Fresh Leaf Picking',
          description: 'The production of selenium-rich green tea begins with careful picking. Tea pickers harvest tender buds with one or two leaves in the early morning before the dew dries, ensuring the foundation for tea quality. Tea trees grown in selenium-rich soil produce leaves with abundant selenium content, which is highly beneficial to human health.',
          achievements: {
            0: 'Select tea gardens in selenium-rich soil areas',
            1: 'Strictly control picking standards',
            2: 'Maintain fresh leaf integrity'
          }
        },
        step2: {
          year: 'Step 2',
          title: 'Fixation Process',
          description: 'The key step in green tea production is fixation, which rapidly destroys enzyme activity in the leaves through high temperature, prevents oxidation, and preserves the green color and freshness. Fixation typically uses pan-frying or steam methods, with temperature controlled at 120-130°C for about 3-5 minutes.',
          achievements: {
            0: 'Precise control of fixation temperature',
            1: 'Master the state of leaf changes',
            2: 'Preserve effective components in tea leaves'
          }
        },
        step3: {
          year: 'Step 3',
          title: 'Rolling and Shaping',
          description: 'After fixation, the tea leaves need to be rolled to shape them. The rolling process curls the leaves into strips or pearl shapes while promoting tea juice exudation and enhancing flavor. Green tea is rolled with less pressure to maintain the natural shape of the leaves.',
          achievements: {
            0: 'Control rolling intensity and time',
            1: 'Form characteristic tea shapes',
            2: 'Maintain leaf integrity'
          }
        },
        step4: {
          year: 'Step 4',
          title: 'Drying and Refining',
          description: 'The final step is drying, which reduces the moisture content in the leaves to below 5%, ensuring long-term preservation. Green tea drying temperature is generally controlled at 80-100°C, and the drying process can further develop the tea\'s aroma. After drying, the tea leaves are screened, graded, and packaged to become the final selenium-rich green tea product.',
          achievements: {
            0: 'Control drying temperature curve',
            1: 'Ensure uniform drying of tea leaves',
            2: 'Fine grading and packaging'
          }
        }
      },
      black: {
        step1: {
          year: 'Step 1',
          title: 'Fresh Leaf Picking',
          description: 'The production of selenium-rich black tea also begins with careful picking. Black tea generally uses one bud with two or three leaves, and can use slightly more mature leaves compared to green tea. Tea leaves from trees grown in selenium-rich soil contain high levels of selenium, providing greater nutritional value.',
          achievements: {
            0: 'Select tea gardens with selenium-rich soil',
            1: 'Pick leaves suitable for black tea production',
            2: 'Ensure fresh leaf quality'
          }
        },
        step2: {
          year: 'Step 2',
          title: 'Withering Process',
          description: 'Withering is a very important step in black tea production. The freshly picked leaves need to be spread in withering troughs and withered for 12-18 hours under appropriate temperature and humidity. During this process, the leaves lose some moisture, become soft, and prepare for subsequent fermentation.',
          achievements: {
            0: 'Control withering environment temperature and humidity',
            1: 'Regularly turn leaves to ensure even withering',
            2: 'Judge the appropriateness of withering degree'
          }
        },
        step3: {
          year: 'Step 3',
          title: 'Rolling Process',
          description: 'After withering, the leaves need to be rolled, which breaks down the cellular structure of the leaves, allowing tea polyphenols to fully contact with oxygen, creating conditions for subsequent fermentation. Black tea rolling is more intense and longer to thoroughly break down the leaf tissue.',
          achievements: {
            0: 'Control rolling intensity and time',
            1: 'Ensure thorough breakdown of leaf cells',
            2: 'Promote tea juice exudation'
          }
        },
        step4: {
          year: 'Step 4',
          title: 'Fermentation Process',
          description: 'The distinctive feature of black tea production is the fermentation process. After rolling, the leaves undergo oxidative fermentation in a suitable temperature and humidity environment. Tea polyphenols oxidize into theaflavins, thearubigins, and other substances under enzymatic action, forming the characteristic color, aroma, and taste of black tea.',
          achievements: {
            0: 'Control fermentation environment',
            1: 'Monitor fermentation degree',
            2: 'Determine optimal fermentation timing'
          }
        },
        step5: {
          year: 'Step 5',
          title: 'Drying and Refining',
          description: 'After fermentation is complete, drying is necessary to stop the fermentation process and reduce the moisture content of the tea leaves. Black tea drying temperature is generally 80-90°C, and the drying process can further develop the characteristic aroma of black tea. After drying, the tea leaves are screened, graded, and packaged to become the final selenium-rich black tea product.',
          achievements: {
            0: 'Control drying temperature and time',
            1: 'Ensure uniform drying of tea leaves',
            2: 'Fine grading and packaging'
          }
        }
      }
    },
    
    // 关于我们 (英文)
    about: {
      title: 'About Our <span>Tea</span>',
      subtitle: 'Enshi <span>Selenium-Rich Tea</span>',
      description: 'Enshi selenium-rich tea is most famous for Enshi Yulu. Produced in the renowned Wuling Mountain tea area in southwestern Hubei, Green Forest Peak, Wujiatai Green Needle, Enshi Yulu, Wudong Tribute, and Wild High Mountain Tea are the outstanding representatives of Enshi selenium-rich tea. Hubei Enshi is known as the "World\'s Selenium Capital," with soil rich in selenium elements. Enshi tea is a naturally selenium-rich tea, deeply loved by tea enthusiasts, especially by Japanese people. Enshi selenium-rich tea is rich in tea polyphenols, catechins, theaflavins, alkaloids, and various vitamins and amino acids. It also contains essential trace elements such as selenium and zinc, offering multiple health benefits including clearing the mind, brightening eyes, moistening and warming the stomach, aiding digestion, calming nerves, nourishing the skin, and reducing inflammation.',
      imageAlt: 'Enshi Selenium-Rich Tea',
      categories: {
        title: 'Main Categories of Enshi Selenium-Rich Tea',
        items: [
          { 
            name: 'Green Forest Peak', 
            desc: 'Produced from Hefeng high mountain Green Forest tea garden, with plump buds and leaves, refreshing aroma, and lasting fresh taste' 
          },
          { 
            name: 'Wujiatai Green Needle', 
            desc: 'Produced in Enshi\'s core selenium-rich area, with straight needle shape, clear liquor, strong aroma and taste, rich in organic selenium' 
          },
          { 
            name: 'Enshi Yulu', 
            desc: 'The only green tea in Chinese traditional tea-making techniques that uses steam fixation' 
          },
          { 
            name: 'Wudong Green Peak', 
            desc: 'Produced in Lichuan\'s deep mountain mist cave, nourished by year-round clouds and mist, with curled strips, rich chestnut aroma, and tender green liquor' 
          },
          { 
            name: 'Wild High Mountain Tea', 
            desc: 'Harvested from wild tea trees in Enshi\'s deep mountains, uncultivated, with intense and bold flavor, full of wild charm' 
          }
        ]
      },
      benefits: {
        title: 'Tea <span>Benefits</span>',
        antioxidant: {
          title: 'Antioxidant',
          description: 'Selenium-rich tea has strong antioxidant capacity, can remove pollutants from water, enhance immunity, detoxify, protect the liver, prevent diabetes, cataracts, etc. Even overnight tea can be consumed.'
        },
        flavor: {
          title: 'Flavor',
          description: 'Selenium-rich tea can be enjoyed warm, cool, or cold. This tea is rich and bitter but not astringent, with a sweet aftertaste; when light, it has a fresh and refreshing taste.'
        },
        sleep: {
          title: 'Calming and Sleep Aid',
          description: 'Selenium-rich tea has a calming effect, so drinking this tea will not cause insomnia.'
        }
      },
      cta: {
        title: 'Taste <span>Fine Tea</span>, Starting Here',
        description: 'We look forward to sharing with you the unique flavor and health value of Enshi selenium-rich tea.'
      },
      popup: {
        title: 'Health Benefits of Enshi Selenium-Rich Tea',
        message: '<div style="line-height:1.6;"><p>Enshi selenium-rich tea contains high levels of selenium, with selenium content between 3-6mg per 100g of dry tea, much higher than ordinary tea.</p><p>Scientific research shows that appropriate selenium intake can:</p><ul style="padding-left:20px;margin:10px 0;"><li>Enhance antioxidant capacity, delay aging</li><li>Improve immune system function, resist disease</li><li>Promote heavy metal excretion, reduce toxins in the body</li><li>Maintain cardiovascular and cerebrovascular health, reduce related disease risks</li><li>Improve skin condition, promote metabolism</li></ul><p>It is recommended to drink 2-3 cups of Enshi selenium-rich tea daily to maintain a healthy life.</p></div>',
        button: 'I Understand'
      }
    },
    
    // Research page
    research: {
      pageTitle: 'Research on Selenium-Rich Tea',
      pageSubtitle: 'Analysis of Selenium Content Distribution and Influencing Factors in the World Selenium Capital',
      backgroundTitle: 'Research Background',
      backgroundDesc1: 'Enshi Tujia and Miao Autonomous Prefecture (Hubei) is known as the "World Selenium Capital," with abundant selenium resources in its soil and naturally selenium-rich tea. Research shows that the selenium content in tea from some areas of Enshi far exceeds the national standard (≥0.25mg/kg), having significant nutritional and health value.',
      backgroundDesc2: 'This report organizes existing research data to analyze the selenium content differences in tea from different production areas of Enshi and discusses the influencing factors.',
      comparisonTitle: 'Selenium Content Comparison of Teas from Different Regions',
      comparisonDesc: 'According to joint research by the Tea Research Institute of Hubei Academy of Agricultural Sciences and Enshi Prefecture Academy of Agricultural Sciences, the selenium content in Enshi selenium-rich tea is much higher than that of ordinary tea. The following is a comparison of selenium content between Enshi selenium-rich tea and tea from other major tea-producing regions:',
      chartNote: 'Note: Data sourced from the 2022 research report of the Tea Research Institute of Hubei Academy of Agricultural Sciences',
      benefitsTitle: 'Health Benefits of Selenium',
      benefitsDesc1: 'The trace element selenium is recognized by the World Health Organization as the "King of Anti-Cancer" and "Star of Longevity." The results of large-scale human clinical trials conducted by Professor Clark show that selenium supplementation can prevent tumors, which is called the "milestone experiment of selenium cancer prevention."',
      benefitsDesc2: 'The experimental results show that: with 200 micrograms of selenium supplemented daily, cancer incidence decreased by 50% and total cancer mortality decreased by 37%. Among them, the incidence of three types of cancer decreased most significantly: prostate cancer decreased by 63%, colorectal cancer decreased by 58%, and lung cancer decreased by 46%.',
    },
    
    // 产品 (英文)
    products: {
      title: 'Our <span>Tea Collection</span>',
      filter: {
        all: 'All'
      },
      viewProject: 'View Details',
      modal: {
        description: 'Tea Description',
        details: 'Tea Details',
        date: 'Date',
        tags: 'Tags',
        gallery: 'Product Gallery',
        image: 'Image',
        culture: 'Tea Culture'
      },
      categories: {
        green: 'Green Tea Series',
        black: 'Black Tea Series',
        flower: 'Flower Tea Series',
        gift: 'Gift Box Series',
        special: 'Special Tea Products'
      },
      items: {
        yulu: {
          title: 'Enshi Yulu',
          description: 'Enshi Yulu is a famous specialty tea from Enshi Prefecture, Hubei, belonging to the green tea category. Produced in Enshi, known as the "World\'s Selenium Capital," it is rich in selenium elements and has unique health benefits. It has a straight and slightly flat shape, emerald green color, lasting high aroma, fresh and sweet taste, and bright tender green liquor. It is refined using traditional craftsmanship, preserving the natural nutrients of tea leaves.',
          date: '2025 Spring Tea',
          services: 'High Mountain Cloud Mist Tea, Selenium-rich Green Tea, First-grade Tea',
          culture: 'Enshi Yulu is the only green tea in Chinese traditional tea-making techniques that uses steam fixation. The earliest written record dates back to the Tang Dynasty\'s "Tea Classic" in 780 AD, which is the first comprehensive monograph on tea in China and even the world, known as the encyclopedia of tea. After the Tang Dynasty, Japan imported tea trees from China and learned tea-making techniques. Steam fixation became Japan\'s main green tea processing technique, and their main green tea is also called Gyokuro.',
          xiStory: 'In the summer of 2018, President Xi invited Indian Prime Minister Modi to taste Enshi Yulu tea. China President Xi entertained India\'s PM Modi with Enshi Yulu tea in 2018'
        },
        lvlin: {
          title: 'Green Forest Peak',
          description: 'Selenium-rich green tea is harvested from high mountain tea gardens above 1,200 meters in Enshi. The soil is rich in selenium elements, and the tea leaves naturally absorb selenium. It is refined through traditional processes of fixation, rolling, and drying. The tea leaves are tightly curled, bright green in color, with a high and refreshing aroma, fresh and mellow taste, featuring the fresh fragrance of green tea and the unique taste of selenium-rich tea.',
          date: '2025 Spring Tea',
          services: 'High Mountain Green Tea, Selenium-rich Tea, Organic Tea'
        },
        lichuan: {
          title: 'Lichuan Red',
          description: 'Lichuan Red is the abbreviation for Lichuan Kungfu Black Tea. Its tea leaves are selected from Zhongcha 108, Echa No.1, Echa No.10, Quercus serrata, and local group varieties. Lichuan has a long history of tea production. In the mid-19th century, Lichuan tea farmers began processing black tea for export for British merchants. In 1876, as Yichang was listed as a foreign trade port, Lichuan Maoba became one of the core production areas for exporting Yihong Kungfu black tea. In 1951, Lichuan was listed by the state as a major production area for Yihong Kungfu black tea. Lichuan black tea has over 170 years of production and processing history.',
          date: '2025 Spring Tea',
          services: 'Black Tea, Kungfu Tea, Lichuan Red'
        },
        tengcha: {
          title: 'Vine Tea',
          description: 'Vine Tea, scientifically known as Ampelopsis grossedentata, is the tender stem and leaves of the Ampelopsis grossedentata of the Vitaceae family. It is called Vine Tea because its stems are like vines. Vine Tea is cold in nature, with a sweet and mild taste. It has effects of clearing heat and detoxifying, reducing inflammation and soothing the throat, lowering blood lipids and blood pressure, enhancing immunity, and anti-aging.',
          date: '2025 Premium Tea',
          services: 'Vine Tea, Dragon Whisker Tea, Lipid and Blood Pressure Reduction'
        }
      }
    },
    
    // 制作工艺 (英文)
    timeline: {
      title: 'Tea <span>Processing</span>',
      greenTitle: 'Green Tea <span>Processing</span>',
      blackTitle: 'Black Tea <span>Processing</span>',
      achievementsTitle: 'Key Process Points',
      futureTitle: 'Tea Culture <span>Heritage</span>',
      futureP1: 'The processing techniques of selenium-rich tea represent centuries of wisdom. We are committed to combining these traditional crafts with modern technology to create healthier and higher quality tea products.',
      futureP2: 'We look forward to sharing with you the natural gift of healthy tea and preserving Chinese tea culture together.',
      futureImageAlt: 'Tea Culture Heritage',
      green: {
        step1: {
          year: 'Step 1',
          title: 'Fresh Leaf Picking',
          description: 'The production of selenium-rich green tea begins with careful picking. Tea pickers harvest tender buds with one or two leaves in the early morning before the dew dries, ensuring the foundation for tea quality. Tea trees grown in selenium-rich soil produce leaves with abundant selenium content, which is highly beneficial to human health.',
          achievements: {
            0: 'Select tea gardens in selenium-rich soil areas',
            1: 'Strictly control picking standards',
            2: 'Maintain fresh leaf integrity'
          }
        },
        step2: {
          year: 'Step 2',
          title: 'Fixation Process',
          description: 'The key step in green tea production is fixation, which rapidly destroys enzyme activity in the leaves through high temperature, prevents oxidation, and preserves the green color and freshness. Fixation typically uses pan-frying or steam methods, with temperature controlled at 120-130°C for about 3-5 minutes.',
          achievements: {
            0: 'Precise control of fixation temperature',
            1: 'Master the state of leaf changes',
            2: 'Preserve effective components in tea leaves'
          }
        },
        step3: {
          year: 'Step 3',
          title: 'Rolling and Shaping',
          description: 'After fixation, the tea leaves need to be rolled to shape them. The rolling process curls the leaves into strips or pearl shapes while promoting tea juice exudation and enhancing flavor. Green tea is rolled with less pressure to maintain the natural shape of the leaves.',
          achievements: {
            0: 'Control rolling intensity and time',
            1: 'Form characteristic tea shapes',
            2: 'Maintain leaf integrity'
          }
        },
        step4: {
          year: 'Step 4',
          title: 'Drying and Refining',
          description: 'The final step is drying, which reduces the moisture content in the leaves to below 5%, ensuring long-term preservation. Green tea drying temperature is generally controlled at 80-100°C, and the drying process can further develop the tea\'s aroma. After drying, the tea leaves are screened, graded, and packaged to become the final selenium-rich green tea product.',
          achievements: {
            0: 'Control drying temperature curve',
            1: 'Ensure uniform drying of tea leaves',
            2: 'Fine grading and packaging'
          }
        }
      },
      black: {
        step1: {
          year: '第一步',
          title: '鲜叶采摘',
          description: '富硒红茶的制作同样始于精心采摘。红茶一般采摘一芽二叶或一芽三叶，相比绿茶可以采用稍成熟的叶片。富硒土壤培育的茶树所产茶叶，富含硒元素，具有更高的营养价值。',
          achievements: {
            0: '选择富硒土壤茶园',
            1: '采摘适合制作红茶的茶叶',
            2: '确保鲜叶质量'
          }
        },
        step2: {
          year: '第二步',
          title: '萎凋工艺',
          description: '红茶制作中萎凋是非常重要的步骤。采摘的鲜叶需要铺放在萎凋槽中，在适宜的温度和湿度下进行12-18小时的萎凋。这一过程中，茶叶失去部分水分，叶片变软，为后续发酵做准备。',
          achievements: {
            0: '控制萎凋环境温湿度',
            1: '定期翻动茶叶确保均匀萎凋',
            2: '判断萎凋程度的适宜性'
          }
        },
        step3: {
          year: '第三步',
          title: '揉捻工艺',
          description: '萎凋后的茶叶需要进行揉捻，这一步骤会破坏茶叶细胞组织，使茶多酚与氧气充分接触，为后续发酵创造条件。红茶的揉捻力度较大，时间也较长，以充分破坏叶片组织。',
          achievements: {
            0: '控制揉捻力度和时间',
            1: '确保茶叶细胞充分破碎',
            2: '促进茶汁外溢'
          }
        },
        step4: {
          year: '第四步',
          title: '发酵工艺',
          description: '红茶制作的特色在于发酵过程。揉捻后的茶叶在适宜的温湿度环境下进行氧化发酵，茶多酚在酶的作用下氧化为茶黄素、茶红素等物质，形成红茶特有的色泽、香气和滋味。',
          achievements: {
            0: '控制发酵环境',
            1: '监测发酵程度',
            2: '把握最佳发酵时间点'
          }
        },
        step5: {
          year: '第五步',
          title: '烘干精制',
          description: '发酵完成后，需要通过烘干停止发酵过程并降低茶叶水分含量。红茶烘干温度一般为80-90℃，烘干过程还能进一步形成红茶特有的香气。烘干后的茶叶经过筛选、分级、包装，成为最终的富硒红茶产品。',
          achievements: {
            0: '控制烘干温度和时间',
            1: '确保茶叶均匀干燥',
            2: '精细分级包装'
          }
        }
      }
    }
  },
  
  zh: {
    // 通用
    common: {
      loading: '加载中...',
      readMore: '了解更多',
      contactUs: '联系我们',
      exploreProducts: '探索产品',
      subscribe: '订阅',
      email: '您的电子邮箱',
      subscribeSuccess: '感谢您的订阅！',
      backToTop: '返回顶部',
    },
    
    // 导航
    nav: {
      home: '首页',
      about: '关于我们',
      products: '茶品展示',
      research: '研究数据',
      process: '制作工艺',
      contact: '联系我们',
    },
    
    // 首页
    home: {
      hero: {
        title: '恩施<span class="color-red">富硒茶</span>',
        subtitle: '天赐恩山好水，天然富硒滋养',
        description: '—— 高山云雾 · 原生态手工茶 ——',
      },
      announcements: {
        title: '茶叶<span>资讯</span>',
        new: '新茶',
        newTeaTitle: '2025春茶预售开始',
        newTeaDesc: '恩施高山云雾富硒绿茶，限量发售',
        event: '活动',
        eventTitle: '7折品尝',
        eventDesc: '免费品尝2025年春茶',
      },
      quote: {
        text: '"好茶，如好友，淡而不薄，浓而不苦，回味悠长"',
        author: '- 恩施茶艺师',
      },
      newsletter: {
        title: '订阅<span>茶讯</span>',
        description: '订阅我们的电子通讯，获取新茶上市、茶艺活动和限时优惠信息。',
      },
    },
    
    // 关于我们
    about: {
      title: '关于<span>产品</span>',
      subtitle: '恩施<span>富硒茶</span>',
      description: '恩施富硒茶以恩施玉露最为著名。产于著名的鄂西南武陵山茶区，绿林翠峰、伍家台绿针、恩施玉露、雾洞贡羽、极叶高山野茶是恩施富硒茶的佼佼者。湖北恩施是世界硒都，土壤中富含硒元素，恩施茶为天赐的富硒茶，深受茶人喜爱，日本人尤其钟爱。恩施富硒茶富含茶多酚、儿茶素、茶红素、生物碱以及多种维生素与氨基酸等营养成份，更含有人体必需的硒、锌等微量元素，具有清心明目、滋润暖胃、助消化、安神养颜及消炎等多重保健功效。',
      imageAlt: '恩施富硒茶',
      categories: {
        title: '恩施富硒茶主要品类',
        items: [
          { 
            name: '绿林翠峰', 
            desc: '产自鹤峰高山绿林茶场，芽叶肥嫩，香气清扬，滋味鲜爽持久' 
          },
          { 
            name: '伍家台绿针', 
            desc: '产自恩施富硒核心产区，针形紧直，汤色清亮，香高味浓，富含有机硒' 
          },
          { 
            name: '恩施玉露', 
            desc: '中国绿茶制作传统技艺中，唯一采用蒸汽杀青的绿茶制作技艺' 
          },
          { 
            name: '雾洞绿峰', 
            desc: '产自利川深山雾洞，常年云雾滋养，条索卷曲，栗香浓郁，汤色嫩绿' 
          },
          { 
            name: '极叶高山野茶', 
            desc: '采自恩施深山野生茶树，未经驯化，滋味浓烈霸道，野韵十足' 
          }
        ]
      },
      benefits: {
        title: '茶<span>功效</span>',
        antioxidant: {
          title: '抗氧化',
          description: '富硒茶抗氧化能力强，能清除水中污染毒素，增强免疫力，解毒、排毒，保护肝脏，防止糖尿病、白内障等，隔夜茶能够饮用。'
        },
        flavor: {
          title: '风味',
          description: '富硒茶温、凉、冰均可饮用，此茶浓、苦而不涩，后口甘甜；淡，清香爽口。'
        },
        sleep: {
          title: '安神助眠',
          description: '富硒茶具有安神作用，因此饮用此茶不会导致失眠。'
        }
      },
      cta: {
        title: '品味<span>好茶</span>，从这里开始',
        description: '我们期待与您分享恩施富硒茶的独特风味与健康价值。'
      },
      popup: {
        title: '恩施富硒茶的保健功效',
        message: '<div style="line-height:1.6;"><p>恩施富硒茶富含硒元素，每100克干茶中含硒量在3-6mg之间，远高于普通茶叶。</p><p>科学研究表明，适量摄入硒元素可以：</p><ul style="padding-left:20px;margin:10px 0;"><li>增强抗氧化能力，延缓衰老</li><li>提高免疫系统功能，抵抗疾病</li><li>促进重金属排出，减轻体内毒素</li><li>维护心脑血管健康，降低相关疾病风险</li><li>改善皮肤状态，促进新陈代谢</li></ul><p>推荐每日饮用2-3杯恩施富硒茶，保持健康生活。</p></div>',
        button: '我知道了'
      }
    },
    
    // 研究页面
    research: {
      title: '恩施富硒茶研究',
      subtitle: '世界硒都茶叶硒含量分布及影响因素分析',
      background: {
        title: '研究背景',
        content: '恩施土家族苗族自治州（湖北）被誉为"世界硒都"，其土壤硒资源丰富，茶叶天然富硒。研究表明，恩施部分地区的茶叶硒含量远超国家标准（≥0.25mg/kg），具有显著的营养与健康价值。',
      },
      comparison: {
        title: '各地茶叶含硒量对比',
        description: '根据湖北省农业科学院茶叶研究所与恩施州农业科学院联合进行的研究表明，恩施富硒茶的含硒量远高于普通茶叶。',
      },
      benefits: {
        title: '硒元素的健康价值',
        content: '微量元素硒，被世界卫生组织公认为"抗癌之王"、"长寿之星"。美国克拉克教授的大型人体临床试验结果显示：补充硒可以预防肿瘤，这项试验被人们称为"硒防癌里程碑的试验"。试验结果表明：每日补充200微克硒，癌症发生率下降50%、癌症总死亡率下降37%。',
      },
      distribution: {
        title: '恩施茶叶硒含量分布（核心产区对比）',
        conclusion: '结论：',
        point1: '鹤峰县茶叶硒含量最高（部分样本超6mg/kg），与其土壤硒矿床分布直接相关。',
        point2: '恩施玉露（芭蕉乡）因蒸青工艺保留更多有机硒，稳定性较强。',
      },
      factors: {
        title: '影响茶叶硒含量的关键因素',
        soil: '土壤硒背景值',
        soilDesc: '恩施硒矿带主要集中在鹤峰—宣恩—恩施一线，土壤硒含量可达10-50mg/kg（全国平均仅0.29mg/kg）。',
        variety: '茶树品种与吸收效率',
        varietyDesc: '本地品种"恩施苔子茶"对硒的富集能力较强。老枞茶树比新栽种茶树更易积累硒。',
        processing: '加工工艺',
        processingDesc: '绿茶（如恩施玉露）：蒸青工艺减少硒流失，硒保留率比炒青高15%-20%。红茶（如利川红）：发酵过程可能将无机硒转化为更易吸收的有机形态。',
      },
      international: {
        title: '国际科学研究认可',
        healthEffects: '硒的健康功效被广泛证实',
        recommendedIntake: '世界卫生组织（WHO）和欧盟食品安全局（EFSA）均认定硒（Se）为人体必需微量元素，推荐每日摄入量：',
        adults: '成人：',
        pregnant: '孕妇/哺乳期女性：',
        antioxidant: '抗氧化与抗癌作用：',
        research1: '多项研究（如《Journal of Nutrition》, 2016）表明，硒能增强谷胱甘肽过氧化物酶（GPx）活性，降低氧化应激，减少癌症风险。',
        research2: 'Meta分析（《Antioxidants》, 2020）显示，适量补硒可降低前列腺癌、肺癌等发病率。',
        teaValue: '富硒茶的特殊价值',
        absorption: '有机硒更易吸收：茶叶中的硒主要以硒代蛋氨酸（SeMet）形式存在，生物利用率高于无机硒（如亚硒酸钠）。',
        synergy: '协同增效作用：茶多酚+硒的组合可增强抗氧化效果（《Food Chemistry》, 2019）。',
      },
      market: {
        title: '国际市场现状',
        regions: '主要消费市场',
        certification: '国际认证与标准',
      },
    },
    
    // 制作工艺
    process: {
      title: '茶叶制作工艺',
      subtitle: '传统手工技艺',
      intro: '我们的茶叶加工遵循代代相传的传统工艺，确保同时保留茶叶的风味和营养价值。',
      steps: {
        picking: {
          title: '采摘',
          description: '茶叶经过精心手工采摘，在最佳季节仅选取嫩芽和嫩叶。',
        },
        withering: {
          title: '萎凋',
          description: '新鲜采摘的茶叶铺开萎凋，减少水分含量，为后续加工做准备。',
        },
        fixation: {
          title: '杀青',
          description: '对于绿茶，茶叶经过加热处理以灭活酶，保留自然的绿色和新鲜风味。',
        },
        rolling: {
          title: '揉捻',
          description: '茶叶经过揉捻破坏细胞壁，释放精油并增强风味形成。',
        },
        oxidation: {
          title: '发酵',
          description: '对于红茶，茶叶经过控制性发酵，形成丰富的色泽和浓郁的风味。',
        },
        drying: {
          title: '干燥',
          description: '最终干燥将水分含量降低至2-3%，确保适当的保存和储存稳定性。',
        },
        sorting: {
          title: '分选',
          description: '成品茶在包装前按大小和品质进行精心分选。',
        },
      },
      seleniumPreservation: '我们独特的加工方法旨在保留天然硒含量，确保您获得茶叶的全部健康益处。',
    },
    
    // 联系我们
    contact: {
      title: '联系我们',
      subtitle: '您可以通过以下方式与我们联系，我们将尽快回复您的咨询',
      info: {
        title: '联系方式',
        address: '地址',
        addressValue: '中国湖北省恩施市茶叶大道123号',
        email: '电子邮箱',
        facebookName: '恩施富硒茶',
      },
      faqTitle: '常见<span>问题</span>',
      faq: {
        q1: '恩施富硒茶有哪些特点？',
        a1: '恩施富硒茶产自世界硒都恩施，土壤中富含硒元素，茶叶自然富集硒。富硒茶具有独特的香气和口感，同时富含茶多酚、氨基酸等营养成分，兼具茶叶的保健功效和硒元素的健康价值，对增强免疫力、抗氧化等方面有显著功效。',
        q2: '如何正确冲泡恩施富硒茶？',
        a2: '恩施富硒绿茶建议用80-85℃的水温，投茶量约为5克/150ml，第一泡30秒，之后每泡递增10-15秒。富硒红茶则可用95-100℃的沸水，投茶量约为5克/150ml，第一泡20-30秒，后续可适当延长。冲泡时注意水温和时间控制，以保留茶叶的香气和营养成分。',
        q3: '富硒茶的保存方法是什么？',
        a3: '富硒茶应存放在阴凉、干燥、无异味的环境中，避免阳光直射和高温潮湿。建议使用密封性好的茶叶罐或锡罐储存，并远离厨房等有油烟的地方。绿茶保质期一般为12-18个月，红茶可保存18-24个月，但建议在半年内饮用完，以保证最佳品质。',
        q4: '你们提供茶叶样品试喝吗？',
        a4: '是的，我们提供小包装的茶叶样品供客户试喝。您可以通过官网联系我们。对于批发客户，我们提供更多样品选择和专业的茶艺师指导。',
        q5: '你们的茶叶是否通过有机认证？',
        a5: '我们部分茶园已通过有机认证，特别是高山茶园系列产品。这些茶园严格按照有机种植标准管理，不使用化学肥料和农药，采用传统手工采摘和加工工艺。我们的有机认证信息可在产品包装上查看，也可以通过官方渠道验证认证真实性。',
      },
    },
    
    // 页脚
    footer: {
      about: '关于我们',
      products: '产品展示',
      contact: '联系我们',
      follow: '关注我们',
      subscribe: '订阅我们的通讯',
      subscribeDesc: '获取我们产品和促销活动的最新信息。',
      copyright: '© 2023 恩施富硒茶。保留所有权利。',
      privacyPolicy: '隐私政策',
      termsOfService: '服务条款',
    },
    
    // 关于我们页面
    about: {
      pageTitle: '关于<span>产品</span>',
      title: '恩施<span>富硒茶</span>',
      description: '恩施富硒茶以恩施玉露最为著名。产于著名的鄂西南武陵山茶区，绿林翠峰、伍家台绿针、恩施玉露、雾洞贡羽、极叶高山野茶是恩施富硒茶的佼佼者。湖北恩施是世界硒都，土壤中富含硒元素，恩施茶为天赐的富硒茶，深受茶人喜爱，日本人尤其钟爱。恩施富硒茶富含茶多酚、儿茶素、茶红素、生物碱以及多种维生素与氨基酸等营养成份，更含有人体必需的硒、锌等微量元素，具有清心明目、滋润暖胃、助消化、安神养颜及消炎等多重保健功效。',
      categoriesTitle: '恩施富硒茶主要品类',
    },
    
    // 研究页面
    research: {
      pageTitle: '恩施富硒茶研究',
      pageSubtitle: '世界硒都茶叶硒含量分布及影响因素分析',
      backgroundTitle: '研究背景',
      backgroundDesc1: '恩施土家族苗族自治州（湖北）被誉为"世界硒都"，其土壤硒资源丰富，茶叶天然富硒。研究表明，恩施部分地区的茶叶硒含量远超国家标准（≥0.25mg/kg），具有显著的营养与健康价值。',
      backgroundDesc2: '本报告整理已有研究数据，分析恩施不同产区茶叶的硒含量差异，并探讨其影响因素。',
      comparisonTitle: '各地茶叶含硒量对比',
      comparisonDesc: '根据湖北省农业科学院茶叶研究所与恩施州农业科学院联合进行的研究表明，恩施富硒茶的含硒量远高于普通茶叶。以下是恩施富硒茶与其他主要产茶区茶叶的含硒量对比：',
      chartNote: '注：数据来源于湖北省农业科学院茶叶研究所2022年研究报告',
      benefitsTitle: '硒元素的健康价值',
      benefitsDesc1: '微量元素硒，被世界卫生组织公认可为"抗癌之王"、"长寿之星"。美国克拉克教授的大型人体临床试验结果显示：补充硒可以预防肿瘤，这项试验被人们称为"硒防癌里程碑的试验"。',
      benefitsDesc2: '试验结果表明：每日补充200微克硒，癌症发生率下降50%、癌症总死亡率下降37%。其中有3种癌症的发病率下降最为明显：前列腺癌下降63%、结直肠癌下降58%、肺癌下降46%。',
    },
    
    // 制作工艺 (英文)
    timeline: {
      title: '茶叶<span>制作过程</span>',
      greenTitle: '绿茶<span>制作工艺</span>',
      blackTitle: '红茶<span>制作工艺</span>',
      achievementsTitle: '主要工艺要点',
      futureTitle: '茶文化<span>传承</span>',
      futureP1: '富硒茶的制作工艺凝聚了数百年的智慧结晶，我们致力于将这一传统工艺与现代科技相结合，创造更健康、更优质的茶叶产品。',
      futureP2: '我们期待与您一起，品味自然馈赠的健康茶饮，共同传承中华茶文化。',
      futureImageAlt: '茶文化传承',
      green: {
        step1: {
          year: '第一步',
          title: '鲜叶采摘',
          description: '富硒绿茶的制作始于精心采摘。采茶工人在清晨露水未干时采摘一芽一叶或一芽二叶的嫩芽，确保茶叶品质的基础。富硒土壤培育的茶树，其叶片含有丰富的硒元素，对人体健康极为有益。',
          achievements: {
            0: '选择富硒土壤区域的茶园',
            1: '严格把控采摘标准',
            2: '保持鲜叶完整度'
          }
        },
        step2: {
          year: '第二步',
          title: '杀青工艺',
          description: '绿茶制作的关键步骤是杀青，通过高温迅速破坏茶叶中的酶活性，阻止氧化，保留茶叶的绿色和鲜爽。杀青通常采用锅炒或蒸汽方式，温度控制在120-130℃，时间约为3-5分钟。',
          achievements: {
            0: '精准控制杀青温度',
            1: '掌握茶叶变化状态',
            2: '保留茶叶中的有效成分'
          }
        },
        step3: {
          year: '第三步',
          title: '揉捻成型',
          description: '杀青后的茶叶需要通过揉捻使其成型。揉捻过程使茶叶卷曲成条形或珠形，同时促进茶汁外溢，增强茶叶风味。绿茶的揉捻力度较轻，以保持茶叶的自然形态。',
          achievements: {
            0: '控制揉捻力度和时间',
            1: '形成特色茶形',
            2: '保持茶叶完整性'
          }
        },
        step4: {
          year: '第四步',
          title: '烘干精制',
          description: '最后一步是烘干，将茶叶中的水分降至5%以下，确保茶叶可以长期保存。绿茶烘干温度一般控制在80-100℃，烘干过程还能进一步形成茶叶的香气。烘干后的茶叶经过筛选、分级、包装，成为最终的富硒绿茶产品。',
          achievements: {
            0: '控制烘干温度曲线',
            1: '确保茶叶均匀干燥',
            2: '精细分级包装'
          }
        }
      },
      black: {
        step1: {
          year: '第一步',
          title: '鲜叶采摘',
          description: '富硒红茶的制作同样始于精心采摘。红茶一般采摘一芽二叶或一芽三叶，相比绿茶可以采用稍成熟的叶片。富硒土壤培育的茶树所产茶叶，富含硒元素，具有更高的营养价值。',
          achievements: {
            0: '选择富硒土壤茶园',
            1: '采摘适合制作红茶的茶叶',
            2: '确保鲜叶质量'
          }
        },
        step2: {
          year: '第二步',
          title: '萎凋工艺',
          description: '红茶制作中萎凋是非常重要的步骤。采摘的鲜叶需要铺放在萎凋槽中，在适宜的温度和湿度下进行12-18小时的萎凋。这一过程中，茶叶失去部分水分，叶片变软，为后续发酵做准备。',
          achievements: {
            0: '控制萎凋环境温湿度',
            1: '定期翻动茶叶确保均匀萎凋',
            2: '判断萎凋程度的适宜性'
          }
        },
        step3: {
          year: '第三步',
          title: '揉捻工艺',
          description: '萎凋后的茶叶需要进行揉捻，这一步骤会破坏茶叶细胞组织，使茶多酚与氧气充分接触，为后续发酵创造条件。红茶的揉捻力度较大，时间也较长，以充分破坏叶片组织。',
          achievements: {
            0: '控制揉捻力度和时间',
            1: '确保茶叶细胞充分破碎',
            2: '促进茶汁外溢'
          }
        },
        step4: {
          year: '第四步',
          title: '发酵工艺',
          description: '红茶制作的特色在于发酵过程。揉捻后的茶叶在适宜的温湿度环境下进行氧化发酵，茶多酚在酶的作用下氧化为茶黄素、茶红素等物质，形成红茶特有的色泽、香气和滋味。',
          achievements: {
            0: '控制发酵环境',
            1: '监测发酵程度',
            2: '把握最佳发酵时间点'
          }
        },
        step5: {
          year: '第五步',
          title: '烘干精制',
          description: '发酵完成后，需要通过烘干停止发酵过程并降低茶叶水分含量。红茶烘干温度一般为80-90℃，烘干过程还能进一步形成红茶特有的香气。烘干后的茶叶经过筛选、分级、包装，成为最终的富硒红茶产品。',
          achievements: {
            0: '控制烘干温度和时间',
            1: '确保茶叶均匀干燥',
            2: '精细分级包装'
          }
        }
      }
    }
  }
});

// 翻译函数
const t = (key) => {
  const keys = key.split('.');
  let result = translations[currentLanguage.value];
  
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      // 如果找不到翻译，返回键名
      return key;
    }
  }
  
  return result;
};

// 切换语言
const setLanguage = (lang) => {
  if (lang === 'en' || lang === 'zh') {
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'en' ? 'en-US' : 'zh-CN';
  }
};

// 监听语言变化事件
if (typeof window !== 'undefined') {
  window.addEventListener('languageChange', (event) => {
    setLanguage(event.detail.language);
  });
}

export { currentLanguage, t, setLanguage }; 