'use strict';

var conn = new Mongo();

var dbs = ['mean-dev', 'mean-prod', 'mean-test'];

for (var i = 0; i < dbs.length; i++)
{
    var db = conn.getDB(dbs[i]);

    db.phones.remove({});
    db.phoneDetails.remove({});

    db.phones.insert(
    [
        {
            age: 0,
            phoneId: 'motorola-xoom-with-wi-fi',
            imageUrl: 'img/phones/motorola-xoom-with-wi-fi.0.jpg',
            name: 'Motorola XOOM\u2122 with Wi-Fi',
            snippet: 'The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world\u2019s first tablet powered by Android 3.0 (Honeycomb).'
        },
        {
            age: 1,
            phoneId: 'motorola-xoom',
            imageUrl: 'img/phones/motorola-xoom.0.jpg',
            name: 'MOTOROLA XOOM\u2122',
            snippet: 'The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world\u2019s first tablet powered by Android 3.0 (Honeycomb).'
        },
        {
            age: 2,
            carrier: 'AT&amp;T',
            phoneId: 'motorola-atrix-4g',
            imageUrl: 'img/phones/motorola-atrix-4g.0.jpg',
            name: 'MOTOROLA ATRIX\u2122 4G',
            snippet: 'MOTOROLA ATRIX 4G the world\u2019s most powerful smartphone.'
        },
        {
            age: 3,
            phoneId: 'dell-streak-7',
            imageUrl: 'img/phones/dell-streak-7.0.jpg',
            name: 'Dell Streak 7',
            snippet: 'Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around.'
        },
        {
            age: 4,
            carrier: 'Cellular South',
            phoneId: 'samsung-gem',
            imageUrl: 'img/phones/samsung-gem.0.jpg',
            name: 'Samsung Gem\u2122',
            snippet: 'The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price.'
        },
        {
            age: 5,
            carrier: 'Dell',
            phoneId: 'dell-venue',
            imageUrl: 'img/phones/dell-venue.0.jpg',
            name: 'Dell Venue',
            snippet: 'The Dell Venue; Your Personal Express Lane to Everything'
        },
        {
            age: 6,
            carrier: 'Best Buy',
            phoneId: 'nexus-s',
            imageUrl: 'img/phones/nexus-s.0.jpg',
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet.'
        },
        {
            age: 7,
            carrier: 'Cellular South',
            phoneId: 'lg-axis',
            imageUrl: 'img/phones/lg-axis.0.jpg',
            name: 'LG Axis',
            snippet: 'Android Powered, Google Maps Navigation, 5 Customizable Home Screens'
        },
        {
            age: 8,
            phoneId: 'samsung-galaxy-tab',
            imageUrl: 'img/phones/samsung-galaxy-tab.0.jpg',
            name: 'Samsung Galaxy Tab\u2122',
            snippet: 'Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122 brings you an ultra-mobile entertainment experience through its 7\u201d display, high-power processor and Adobe\u00ae Flash\u00ae Player compatibility.'
        },
        {
            age: 9,
            carrier: 'Cellular South',
            phoneId: 'samsung-showcase-a-galaxy-s-phone',
            imageUrl: 'img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg',
            name: 'Samsung Showcase\u2122 a Galaxy S\u2122 phone',
            snippet: 'The Samsung Showcase\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance, even outdoors'
        },
        {
            age: 10,
            carrier: 'Verizon',
            phoneId: 'droid-2-global-by-motorola',
            imageUrl: 'img/phones/droid-2-global-by-motorola.0.jpg',
            name: 'DROID\u2122 2 Global by Motorola',
            snippet: 'The first smartphone with a 1.2 GHz processor and global capabilities.'
        },
        {
            age: 11,
            carrier: 'Verizon',
            phoneId: 'droid-pro-by-motorola',
            imageUrl: 'img/phones/droid-pro-by-motorola.0.jpg',
            name: 'DROID\u2122 Pro by Motorola',
            snippet: 'The next generation of DOES.'
        },
        {
            age: 12,
            carrier: 'AT&amp;T',
            phoneId: 'motorola-bravo-with-motoblur',
            imageUrl: 'img/phones/motorola-bravo-with-motoblur.0.jpg',
            name: 'MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122',
            snippet: 'An experience to cheer about.'
        },
        {
            age: 13,
            carrier: 'T-Mobile',
            phoneId: 'motorola-defy-with-motoblur',
            imageUrl: 'img/phones/motorola-defy-with-motoblur.0.jpg',
            name: 'Motorola DEFY\u2122 with MOTOBLUR\u2122',
            snippet: 'Are you ready for everything life throws your way?'
        },
        {
            age: 14,
            carrier: 'T-Mobile',
            phoneId: 't-mobile-mytouch-4g',
            imageUrl: 'img/phones/t-mobile-mytouch-4g.0.jpg',
            name: 'T-Mobile myTouch 4G',
            snippet: 'The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi.'
        },
        {
            age: 15,
            carrier: 'US Cellular',
            phoneId: 'samsung-mesmerize-a-galaxy-s-phone',
            imageUrl: 'img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg',
            name: 'Samsung Mesmerize\u2122 a Galaxy S\u2122 phone',
            snippet: 'The Samsung Mesmerize\u2122 delivers a cinema quality experience like you\u2019ve never seen before. Its innovative 4\u201d touch display technology provides rich picture brilliance,even outdoors'
        },
        {
            age: 16,
            carrier: 'Sprint',
            phoneId: 'sanyo-zio',
            imageUrl: 'img/phones/sanyo-zio.0.jpg',
            name: 'SANYO ZIO',
            snippet: 'The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value.'
        },
        {
            age: 17,
            phoneId: 'samsung-transform',
            imageUrl: 'img/phones/samsung-transform.0.jpg',
            name: 'Samsung Transform\u2122',
            snippet: 'The Samsung Transform\u2122 brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed \u201cSprint ID Service Pack\u201d.'
        },
        {
            age: 18,
            phoneId: 't-mobile-g2',
            imageUrl: 'img/phones/t-mobile-g2.0.jpg',
            name: 'T-Mobile G2',
            snippet: 'The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile\u2019s new network. Get the information you need, faster than you ever thought possible.'
        },
        {
            age: 19,
            phoneId: 'motorola-charm-with-motoblur',
            imageUrl: 'img/phones/motorola-charm-with-motoblur.0.jpg',
            name: 'Motorola CHARM\u2122 with MOTOBLUR\u2122',
            snippet: 'Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service.'
        }
     ]);

     db.phoneDetails.insert(
     [        
        {
            phoneId: 'dell-streak-7', 
            name: 'Dell Streak 7', 
            description: 'Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around. Android\u2122 2.2-based tablet with over-the-air upgrade capability for future OS releases.  A vibrant 7-inch, multitouch display with full Adobe\u00ae Flash 10.1 pre-installed.  Includes a 1.3 MP front-facing camera for face-to-face chats on popular services such as Qik or Skype.  16 GB of internal storage, plus Wi-Fi, Bluetooth and built-in GPS keeps you in touch with the world around you.  Connect on your terms. Save with 2-year contract or flexibility with prepaid pay-as-you-go plans', 
            additionalFeatures: 'Front Facing 1.3MP Camera', 
            bluetooth: 'Bluetooth 2.1', 
            cell: 'T-mobile HSPA+ @ 2100/1900/AWS/850 MHz', 
            gps: true, 
            infrared: false, 
            wifi: '802.11 b/g',
            screenResolution: 'WVGA (800 x 480)', 
            screenSize: '7.0 inches', 
            touchScreen: true,
            images: [
                'img/phones/dell-streak-7.0.jpg', 
                'img/phones/dell-streak-7.1.jpg', 
                'img/phones/dell-streak-7.2.jpg', 
                'img/phones/dell-streak-7.3.jpg', 
                'img/phones/dell-streak-7.4.jpg'
            ]
         },
         {
            phoneId: "dell-venue", 
            name: "Dell Venue", 
            description: 'The Venue is the perfect one-touch, Smart Phone providing instant access to everything you love. All of Venue\u2019s features make it perfect for on-the-go students, mobile professionals, and active social communicators who love style and performance.\n\nElegantly designed, the Venue offers a vibrant, curved glass display that\u2019s perfect for viewing all types of content. The Venue\u2019s slender form factor feels great in your hand and also slips easily into your pocket.  A mobile entertainment powerhouse that lets you download the latest tunes from Amazon MP3 or books from Kindle, watch video, or stream your favorite radio stations.  All on the go, anytime, anywhere.', 
            additionalFeatures: 'Gorilla Glass display, Dedicated Camera Key, Ring Silence Switch, Swype keyboard.', 
            bluetooth: 'Bluetooth 2.1', 
            cell: '850/1900/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE\n900/1700/2100 3G; 850/900/1800/1900 GSM/GPRS/EDGE', 
            gps: true, 
            infrared: false, 
            wifi: '802.11 b/g/n',
            screenResolution: 'WVGA (800 x 480)', 
            screenSize: '4.1 inches', 
            touchScreen: true,
            images: [
                "img/phones/dell-venue.0.jpg", 
                "img/phones/dell-venue.1.jpg", 
                "img/phones/dell-venue.2.jpg", 
                "img/phones/dell-venue.3.jpg", 
                "img/phones/dell-venue.4.jpg", 
                "img/phones/dell-venue.5.jpg"
            ]            
        },
        {
	        phoneId: 'droid-2-global-by-motorola', 
	        name: 'DROID\u2122 2 Global by Motorola', 
	        description: 'With Quad Band GSM, the DROID 2 Global can send email and make and receive calls from more than 200 countries. It features an improved QWERTY keyboard, super-fast 1.2 GHz processor and enhanced security for all your business needs.', 
	        additionalFeatures: 'Adobe Flash Player 10, Quadband GSM Worldphone, Advance Business Security, Complex Password Secure, Review & Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced Social Networking brings all social content into a single homescreen widget', 
            bluetooth: 'Bluetooth 2.1', 
            cell: 'WCDMA 850/1900/2100, CDMA 800/1900, GSM 850/900/1800/1900, HSDPA 10.2 Mbps (Category 9/10), CDMA EV-DO Release A, EDGE Class 12, GPRS Class 12, HSUPA 1.8 Mbps', 
            gps: true, 
            infrared: false, 
            wifi: '802.11 b/g/n',
	        screenResolution: 'FWVGA (854 x 480)', 
	        screenSize: '3.7 inches', 
	        touchScreen: true,
            images: [
                'img/phones/droid-2-global-by-motorola.0.jpg', 
                'img/phones/droid-2-global-by-motorola.1.jpg', 
                'img/phones/droid-2-global-by-motorola.2.jpg'
            ]
         },
         {
	        phoneId: 'droid-pro-by-motorola', 
			name: 'DROID\u2122 Pro by Motorola',
	        description: 'Access your work directory, email or calendar with DROID Pro by Motorola., an Android-for-business smartphone with corporate-level security. It features both a QWERTY keyboard and touchscreen, a speedy 1 GHz processor and Adobe\u00ae Flash\u00ae Player 10.', 
	        additionalFeatures: 'Adobe Flash Player 10, Quadband GSM Worldphone, Advance Business Security, Complex Password Secure, Review & Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced Social Networking brings all social content into a single homescreen widget', 
			bluetooth: 'Bluetooth 2.1', 
			cell: '800/1900 CDMA EVDO Rev. A with dual diversity antenna, 850/900/1800/1900MHz GSM, GPRS Class 12, EDGE Class 12, 850/1900/2100 WCDMA (category 9/10), HSDPA 10.2mbps, HSUPA 1.8 mbps',
			gps: true, 
			infrared: false, 
			wifi: '02.11 b/g/n',
			screenResolution: 'HVGA (480 x 320)', 
			screenSize: '3.1 inches', 
			touchScreen: true,
			images: [
				'img/phones/droid-pro-by-motorola.0.jpg', 
				'img/phones/droid-pro-by-motorola.1.jpg'
			]
         },
         {
			phoneId: 'lg-axis', 
			name: 'LG Axis', 
            description: 'Android plus QWERTY is a powerful duo. LG Axis melds a speedy UI with the limitless micro-entertainment of 80,000+ apps including voice-activated Google. Feel the tactile vibration on its tempered glass touchscreen. Take the fuzziness out of your fun with a 3.2MP camera that does 360\u00b0 panoramics. And customize your home screens with shortcuts to your apps, favorites, and widgets. It\u2019s the centerpiece of your life.',
	        additionalFeatures: 'Accessibility features: Tactile QWERTY keyboard, four-direction keypad, start and end call buttons, dedicated number keys, camera button, TalkBack screen reader', 
			bluetooth: 'Bluetooth 2.1', 
			cell: '1.9 GHz CDMA PCS, 800 MHz CDMA, EVDO Rev. A, 1xRTT', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '3.2 inches', 
			touchScreen: true,
			images: [
				'img/phones/lg-axis.0.jpg', 
				'img/phones/lg-axis.1.jpg', 
				'img/phones/lg-axis.2.jpg'
			]
         },
         {
			phoneId: 'motorola-atrix-4g', 
			name: 'MOTOROLA ATRIX\u2122 4G', 
            description: 'MOTOROLA ATRIX 4G gives you dual-core processing power and the revolutionary webtop application. With webtop and a compatible Motorola docking station, sold separately, you can surf the Internet with a full Firefox browser, create and edit docs, or access multimedia on a large screen almost anywhere.',
	        additionalFeatures: '', 
			bluetooth: 'Bluetooth 2.1', 
			cell: 'WCDMA 850/1900/2100, GSM 850/900/1800/1900, HSDPA 14Mbps (Category 10) Edge Class 12, GPRS Class 12, eCompass, AGPS', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 a/b/g/n',
			screenResolution: 'QHD (960 x 540)', 
			screenSize: '4.0 inches', 
			touchScreen: true,
			images: [
				'img/phones/motorola-atrix-4g.0.jpg', 
				'img/phones/motorola-atrix-4g.1.jpg', 
				'img/phones/motorola-atrix-4g.2.jpg', 
				'img/phones/motorola-atrix-4g.3.jpg'
			]
         },
         {
			phoneId: 'motorola-bravo-with-motoblur', 
			name: 'MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122', 
			description: 'MOTOROLA BRAVO\u2122 with MOTOBLUR\u2122 with its large 3.7-inch touchscreen and web-browsing capabilities is sure to make an impression.  And it keeps your life updated and secure through MOTOBLUR.', 
	        additionalFeatures: 'Adobe\u00ae Flash\u00ae Lite\u00ae 3, DNLA, CrystalTalk\u2122 PLUS technology', 
			bluetooth: 'Bluetooth 2.1', 
			cell: 'WCDMA 850/1900, GSM 850/900/1800/1900, HSDPA 7.2 Mbps (Category 7/8), EDGE Class 12, GPRS Class 12, HSUPA 2.0 Mbps', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '3.7 inches', 
			touchScreen: true,
			images: [
				'img/phones/motorola-bravo-with-motoblur.0.jpg', 
				'img/phones/motorola-bravo-with-motoblur.1.jpg', 
				'img/phones/motorola-bravo-with-motoblur.2.jpg'
			]
         },
         {
			phoneId: 'motorola-charm-with-motoblur', 
			name: 'Motorola CHARM\u2122 with MOTOBLUR\u2122', 
			description: 'Motorola CHARM fits easily in your pocket or palm. Includes MOTOBLUR so you can sync and merge your contacts, emails, messages and posts with continuous updates and back-ups.', 
	        additionalFeatures: 'MOTOBLUR-enabled; battery manager; seven home screens; customize by moving or resizing widgets; Android HTML WebKit w/Flash Lite; BACKTRACK\u2122 navigation pad behind screen', 
			bluetooth: 'Bluetooth 2.0', 
			cell: 'WCDMA 1700/2100, GSM 850/900/1800/1900, HSDPA 3.6 Mbps (Category 5/6), EDGE Class 12, GPRS Class 12', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g',
			screenResolution: 'QVGA (320 x 240)', 
			screenSize: '2.8 inches', 
			touchScreen: true,
			images: [
				'img/phones/motorola-charm-with-motoblur.0.jpg', 
				'img/phones/motorola-charm-with-motoblur.1.jpg', 
				'img/phones/motorola-charm-with-motoblur.2.jpg'
			]
         },
         {
			phoneId: 'motorola-defy-with-motoblur', 
			name: 'Motorola DEFY\u2122 with MOTOBLUR\u2122', 
			description: 'DEFY with MOTOBLUR is ready for everything life throws your way. It\u2019s water-resistant and dustproof, with plenty of entertainment options; and, with MOTOBLUR, it automatically delivers messages and status updates right to your home screen.', 
	        additionalFeatures: 'Blockbuster On Demand\u00ae movies and music downloads with connected music player\nWater-resistant and dustproof', 
			bluetooth: 'Bluetooth 2.1', 
			cell: 'WCDMA 850/1700/2100, GSM 850/900/1800/1900, HSDPA 7.2 Mbps (Category 7/8), EDGE Class 12, GPRS Class 12, HSUPA 2.0 Mbps', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'FWVGA (854 x 480)', 
			screenSize: '3.7 inches', 
			touchScreen: true,
			images: [
				'img/phones/motorola-defy-with-motoblur.0.jpg', 
				'img/phones/motorola-defy-with-motoblur.1.jpg', 
				'img/phones/motorola-defy-with-motoblur.2.jpg'
			]
         },
         {
			phoneId: 'motorola-xoom', 
			name: 'MOTOROLA XOOM\u2122', 
			description: 'MOTOROLA XOOM has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.', 
	        additionalFeatures: 'Front-facing camera. Sensors: proximity, ambient light, barometer, gyroscope.', 
			bluetooth: 'Bluetooth 2.1', 
			cell: 'CDMA 800 /1900 LTE 700, Rx diversity in all bands', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 a/b/g/n',
			screenResolution: 'WXGA (1200 x 800)', 
			screenSize: '10.1 inches', 
			touchScreen: true,
			images: [
				'img/phones/motorola-xoom.0.jpg', 
				'img/phones/motorola-xoom.1.jpg', 
				'img/phones/motorola-xoom.2.jpg'
			]
         },
         {
			phoneId: 'motorola-xoom-with-wi-fi', 
			name: 'Motorola XOOM\u2122 with Wi-Fi', 
			description: 'Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android\u2122 3.0 (Honeycomb) \u2014 the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you\u2019ll enjoy HD video in a thin, light, powerful and upgradeable tablet.', 
	        additionalFeatures: 'Sensors: proximity, ambient light, barometer, gyroscope', 
			bluetooth: 'Bluetooth 2.1', 
			cell: '', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WXGA (1200 x 800)', 
			screenSize: '10.1 inches', 
			touchScreen: true,
			images: [
				'img/phones/motorola-xoom-with-wi-fi.0.jpg', 
				'img/phones/motorola-xoom-with-wi-fi.1.jpg', 
				'img/phones/motorola-xoom-with-wi-fi.2.jpg', 
				'img/phones/motorola-xoom-with-wi-fi.3.jpg', 
				'img/phones/motorola-xoom-with-wi-fi.4.jpg', 
				'img/phones/motorola-xoom-with-wi-fi.5.jpg'
			]
         },
         {
			phoneId: 'nexus-s', 
			name: 'Nexus S', 
			description: 'Nexus S is the next generation of Nexus devices, co-developed by Google and Samsung. The latest Android platform (Gingerbread), paired with a 1 GHz Hummingbird processor and 16GB of memory, makes Nexus S one of the fastest phones on the market. It comes pre-installed with the best of Google apps and enabled with new and popular features like true multi-tasking, Wi-Fi hotspot, Internet Calling, NFC support, and full web browsing. With this device, users will also be the first to receive software upgrades and new Google mobile apps as soon as they become available. For more details, visit http://www.google.com/nexus.', 
	        additionalFeatures: 'Contour Display, Near Field Communications (NFC), Three-axis gyroscope, Anti-fingerprint display coating, Internet Calling support (VoIP/SIP)', 
			bluetooth: 'Bluetooth 2.1', 
			cell: 'Quad-band GSM: 850, 900, 1800, 1900\r\nTri-band HSPA: 900, 2100, 1700\r\nHSPA type: HSDPA (7.2Mbps) HSUPA (5.76Mbps)', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '4.0 inches', 
			touchScreen: true,
			images: [
				'img/phones/nexus-s.0.jpg', 
				'img/phones/nexus-s.1.jpg', 
				'img/phones/nexus-s.2.jpg', 
				'img/phones/nexus-s.3.jpg'
			]
         },
         {
			phoneId: 'samsung-galaxy-tab', 
			name: 'Samsung Galaxy Tab\u2122', 
			description: 'Feel Free to Tab\u2122. The Samsung Galaxy Tab\u2122, the tablet device that delivers enhanced capabilities with advanced mobility, has a large, perfectly sized, 7.0\' screen that offers plenty of room for the thousands of interactive games and apps available for the Android\u2122 platform, and its slim design makes it perfect for travel and one-handed grip. Use the Galaxy Tab to relax and enjoy an e-book, watch rich video or full web content with its Adobe\u00ae Flash\u00ae Player compatibility, video chat using the front-facing camera, or send user-generated content wirelessly to other devices like your TV via AllShare\u2122.  With so many options for customization and interactivity, the Galaxy Tab gives you everything you want, anywhere you go\u2026Feel Free to Tab\u2122.', 
	        additionalFeatures: 'Adobe\u00ae Flash\u00ae Player compatible; 1.3MP front-facing camera for video chat; eReader pre-loaded; Swype text input technology\r\n', 
			bluetooth: 'Bluetooth 3.0', 
			cell: 'AT&amp;T: GSM/EDGE : 850/900/1800/1900; 3G : 850/1900/2100&lt;p&gt;\r\n\r\nSprint: CDMA : 850/1900MHz&lt;p&gt;\r\n\r\nT-Mobile: GSM/EDGE : 850/900/1800/1900; 3G : 1700/1900&lt;p&gt;\r\n\r\nVerizon: CDMA : 800MHz/1900MHz', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WSVGA (1024 x 600)', 
			screenSize: '7.0 inches', 
			touchScreen: true,
			images: [
				'img/phones/samsung-galaxy-tab.0.jpg', 
				'img/phones/samsung-galaxy-tab.1.jpg', 
				'img/phones/samsung-galaxy-tab.2.jpg', 
				'img/phones/samsung-galaxy-tab.3.jpg', 
				'img/phones/samsung-galaxy-tab.4.jpg', 
				'img/phones/samsung-galaxy-tab.5.jpg', 
				'img/phones/samsung-galaxy-tab.6.jpg'
			]
         },
         {
			phoneId: 'samsung-gem', 
			name: 'Samsung Gem\u2122', 
			description: 'The Samsung Gem\u2122 maps a route to a smarter mobile experience. By pairing one of the fastest processors in the category with the Android\u2122 platform, the Gem delivers maximum multitasking speed and social networking capabilities to let you explore new territory online. A smart phone at an even smarter price is a real find, so uncover the Gem and discover what\u2019s next.', 
	        additionalFeatures: '3.2\u201d Full touch screen with Advanced anti smudge, anti reflective and anti scratch glass; Swype text input for easy and fast message creation; multiple messaging options, including text with threaded messaging for organized, easy-to-follow text; Social Community support, including Facebook and MySpace; Next generation Address book; Visual Voice Mail\n', 
			bluetooth: 'Bluetooth 3.0', 
			cell: '3G/CDMA : 850MHz/1900MHz\n', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g',
			screenResolution: 'WQVGA (400 x 240)', 
			screenSize: '3.2 inches', 
			touchScreen: true,
			images: [
				'img/phones/samsung-gem.0.jpg', 
				'img/phones/samsung-gem.1.jpg', 
				'img/phones/samsung-gem.2.jpg'
			]
         },
         {
			phoneId: 'samsung-mesmerize-a-galaxy-s-phone', 
			name: 'Samsung Mesmerize\u2122 a Galaxy S\u2122 phone', 
			description: 'Experience entertainment in a whole new light. The stylish and slim Samsung Mesmerize\u2122, with its vivid 4-inch Super AMOLED\u2122 display, makes everything from Hollywood blockbusters to music videos to Amazon\u2019s bestsellers look absolutely brilliant \u2013 even outside in the sun. Android\u2122 Market rockets you into a universe filled with equally brilliant apps; download them at blistering speeds thanks to the powerful 1GHz Hummingbird processor. Keep your social life organized and continuously updated with the pre-loaded social networking apps, while uploading all the 5.0MP pics you\u2019ve snapped and 720p HD videos you\u2019ve recorded.', 
	        additionalFeatures: 'Swype', 
			bluetooth: 'Bluetooth 3.0', 
			cell: '3G :800MHz/1900MHz\nCDMA :800MHz/1900MHz', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '4.0 inches', 
			touchScreen: true,
			images: [
				'img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg', 
				'img/phones/samsung-mesmerize-a-galaxy-s-phone.1.jpg', 
				'img/phones/samsung-mesmerize-a-galaxy-s-phone.2.jpg', 
				'img/phones/samsung-mesmerize-a-galaxy-s-phone.3.jpg'
			]
         },
         {
			phoneId: 'samsung-showcase-a-galaxy-s-phone', 
			name: 'Samsung Showcase\u2122 a Galaxy S\u2122 phone', 
			description: 'Experience entertainment in a whole new light. The stylish and slim Samsung Showcase\u2122, with its vivid 4-inch Super AMOLED\u2122 display, makes everything from Hollywood blockbusters to music videos to Amazon\u2019s bestsellers look absolutely brilliant \u2013 even outside in the sun. Android\u2122 Market rockets you into a universe filled with equally brilliant apps; download them at blistering speeds thanks to the powerful 1GHz Hummingbird processor. Keep your social life organized and continuously updated with the pre-loaded social networking apps, while uploading all the 5.0MP pics you\u2019ve snapped and 720p HD videos you\u2019ve recorded', 
	        additionalFeatures: 'Swype', 
			bluetooth: 'Bluetooth 3.0', 
			cell: '3G : 900MHz/1900MHz\nCDMA : 800MHz/1900MHz', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '4.0 inches', 
			touchScreen: true,
			images: [
				'img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg', 
				'img/phones/samsung-showcase-a-galaxy-s-phone.1.jpg', 
				'img/phones/samsung-showcase-a-galaxy-s-phone.2.jpg'
			]
         },
         {
			phoneId: 'samsung-transform', 
			name: 'Samsung Transform\u2122', 
			description: 'Change your perspective.  The Samsung Transform\u2122 is an Android powered device that delivers the truly customizable experience you want your phone to provide.  Enjoy a new and easy way to personalize your device for business or for entertainment, showcasing your own favorite theme and more through the new open software platform and the ability to download individual \u2018Sprint ID Service Packs\u2019 that combine and deliver multiple content items and applications specifically for the features you want.  Combine this with the 3.5\u201d touch display, QWERTY keyboard, high-speed processor, and both a front and rear facing camera to bring your unique mobile experience to life.', 
	        additionalFeatures: 'Access to Sprint ID Service Packs, front and rear facing cameras\n', 
			bluetooth: 'Bluetooth 2.1', 
			cell: '800Mhz, 1900MHz', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'HVGA (480 x 320)', 
			screenSize: '3.5 inches', 
			touchScreen: true,
			images: [
				'img/phones/samsung-transform.0.jpg', 
				'img/phones/samsung-transform.1.jpg', 
				'img/phones/samsung-transform.2.jpg', 
				'img/phones/samsung-transform.3.jpg', 
				'img/phones/samsung-transform.4.jpg'
			]
         },
         {
			phoneId: 'sanyo-zio', 
			name: 'SANYO ZIO', 
			description: 'Zio uses CDMA2000 1xEV-DO rev. A and Wi-Fi technologies and features a 3.5-inch WVGA touch-screen display as a backdrop for a fully customizable mobile multimedia experience.  Along with the touch-screen, a trackball helps users navigate features such as the 3.2 MP camera with video record/playback, media player and full HTML Web browser.  Zio supports up to 32GB through its external microSD memory slot.', 
	        additionalFeatures: 'Trackball Navigation Control', 
			bluetooth: 'Bluetooth 2.1', 
			cell: 'CDMA2000 1xEV-DO Rev.A', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '3.5 inches', 
			touchScreen: true,
			images: [
				'img/phones/sanyo-zio.0.jpg', 
				'img/phones/sanyo-zio.1.jpg', 
				'img/phones/sanyo-zio.2.jpg'
			]
         },
         {
			phoneId: 't-mobile-g2', 
			name: 'T-Mobile G2', 
			description: 'The T-Mobile G1 was the world\u2019s first Android-powered phone. Launched nearly two years ago, it created an entirely new class of mobile phones and apps. Its successor, the T-Mobile G2 with Google, will continue the revolution.\n\nThe T-Mobile G2 will deliver tight integration with Google services and break new ground as the first smartphone designed to run at 4G speeds on our new HSPA+ network.', 
	        additionalFeatures: 'Accessibility features: tactile QWERTY keyboard, trackpad, three programmable keys, camera button', 
			bluetooth: 'Bluetooth 2.1', 
			cell: 'GSM: 850, 900, 1800, 1900  UMTS: Yes', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '3.7 inches', 
			touchScreen: true,
			images: [
				'img/phones/t-mobile-g2.0.jpg', 
				'img/phones/t-mobile-g2.1.jpg', 
				'img/phones/t-mobile-g2.2.jpg'
			]
         },
         {
			phoneId: 't-mobile-mytouch-4g', 
			name: 'T-Mobile myTouch 4G', 
			description: 'The myTouch 4G lets you connect fast, communicate easily, and share\u2014all on America\u2019s largest 4G network.\n\nBuilt with families in mind, the newest T-Mobile myTouch 4G helps solve the challenges of staying physically and emotionally connected by sharing photos and video with the HD Camcorder, spontaneous face-to-face conversations through Video Chat, and the ability to reach 4G speeds on T-Mobile\u2019s HSPA+ network.', 
	        additionalFeatures: 'Mobile Video Chat, HD Camcorder, Screen Share (DLNA), Genius Button, Wi-Fi Calling, Wi-Fi HotSpot, T-Mobile TV, Slacker Radio, Rock Band, Monopoly, Asphalt 5, myModes, Faves Gallery', 
			bluetooth: 'Bluetooth 2.0', 
			cell: 'GSM: 850, 900, 1800, 1900; UMTS: Band I/IV', 
			gps: true, 
			infrared: false, 
			wifi: '802.11 b/g/n',
			screenResolution: 'WVGA (800 x 480)', 
			screenSize: '3.8 inches', 
			touchScreen: true,
			images: [
				'img/phones/t-mobile-mytouch-4g.0.jpg', 
				'img/phones/t-mobile-mytouch-4g.1.jpg', 
				'img/phones/t-mobile-mytouch-4g.2.jpg', 
				'img/phones/t-mobile-mytouch-4g.3.jpg', 
				'img/phones/t-mobile-mytouch-4g.4.jpg', 
				'img/phones/t-mobile-mytouch-4g.5.jpg'
			]
         }
     ]);
}