export type Language = 'es' | 'en' | 'fr' | 'zh' | 'hi';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
];

export const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.game': 'EL JUEGO',
    'nav.features': 'CARACTERÍSTICAS',
    'nav.about': 'SOBRE NOSOTROS',
    
    // Hero
    'hero.title': 'DOMENATION',
    'hero.subtitle': 'DEATHCLOCK',
    'hero.tagline': 'LUCHA, SAQUEA Y SOBREVIVE AL PULSO',
    'hero.description': '¡Cuidado! ¡El Pulso viene! Coge todo el botín que puedas y corre a refugiarte en la cúpula más cercana antes de que golpee, luchando contra quien se interponga en tu camino.',
    'hero.cta': 'REGÍSTRATE AHORA',
    'hero.comingSoon': 'PRÓXIMAMENTE',
    
    // Features
    'features.title': 'CARACTERÍSTICAS CLAVE',
    'features.subtitle': '¿Estás listo para dominar este nuevo concepto de shooter?',
    'features.description': 'Lucha solo o únete a un equipo en el campo de batalla, tus habilidades y estrategia serán decisivas para alcanzar la gloria en Domenation.',
    
    'features.domes.title': 'CÚPULAS',
    'features.domes.description': 'Encuentra una Cúpula y refúgiate del pulso dentro de ella',
    
    'features.loot.title': 'CAMPAMENTOS DE BOTÍN',
    'features.loot.description': 'Elimina criaturas hostiles que custodian cofres para desbloquear botín valioso',
    
    'features.competition.title': 'COMPETICIÓN',
    'features.competition.description': 'Compite contra otros jugadores para alcanzar la gloria y ganar recompensas exclusivas',
    
    // About
    'about.title': 'SOBRE EL JUEGO',
    'about.description': '¡Cuidado! ¡El Pulso viene! Coge todo el botín que puedas y corre a refugiarte en la cúpula más cercana antes de que el pulso golpee, luchando contra quien se interponga en tu camino. Cuidado, guerreros de todo el mundo han venido a reclamar la victoria y obtener las recompensas de los Juegos de la Cúpula.',
    
    // Footer
    'footer.developer': 'Desarrollado por',
    'footer.rights': '© 2024 Blackmouth Games. Todos los derechos reservados.',
    'footer.followUs': 'Síguenos',
  },
  en: {
    // Navigation
    'nav.game': 'THE GAME',
    'nav.features': 'FEATURES',
    'nav.about': 'ABOUT US',
    
    // Hero
    'hero.title': 'DOMENATION',
    'hero.subtitle': 'DEATHCLOCK',
    'hero.tagline': 'FIGHT, LOOT AND SURVIVE THE PULSE',
    'hero.description': 'Watch out! The Pulse is coming! Grab all the loot you can and run for shelter in the nearest dome before the pulse hits, fighting anyone who gets in your way.',
    'hero.cta': 'REGISTER NOW',
    'hero.comingSoon': 'COMING SOON',
    
    // Features
    'features.title': 'KEY FEATURES',
    'features.subtitle': 'Are you ready to dominate this new shooter concept?',
    'features.description': 'Fight alone or join a team in the battlefield, your skills and strategy will be decisive to achieve glory in Domenation.',
    
    'features.domes.title': 'DOMES',
    'features.domes.description': 'Find a Dome and take refuge from the pulse inside of it',
    
    'features.loot.title': 'LOOT CAMPS',
    'features.loot.description': 'Eliminate hostile creatures guarding chests to unlock valuable loot',
    
    'features.competition.title': 'COMPETITION',
    'features.competition.description': 'Compete against other players to achieve glory and earn exclusive rewards',
    
    // About
    'about.title': 'ABOUT THE GAME',
    'about.description': 'Watch out! The Pulse is coming! Grab all the loot you can and run for shelter in the nearest dome before the pulse hits, fighting anyone who gets in your way. Beware, warriors from all over the world have come to claim the victory and obtain the rewards of the Dome Games.',
    
    // Footer
    'footer.developer': 'Developed by',
    'footer.rights': '© 2024 Blackmouth Games. All rights reserved.',
    'footer.followUs': 'Follow us',
  },
  fr: {
    // Navigation
    'nav.game': 'LE JEU',
    'nav.features': 'CARACTÉRISTIQUES',
    'nav.about': 'À PROPOS',
    
    // Hero
    'hero.title': 'DOMENATION',
    'hero.subtitle': 'DEATHCLOCK',
    'hero.tagline': 'COMBATTEZ, PILLEZ ET SURVIVEZ AU PULSE',
    'hero.description': 'Attention ! Le Pulse arrive ! Ramassez tout le butin que vous pouvez et courez vous réfugier dans le dôme le plus proche avant que le pulse ne frappe, en combattant tous ceux qui se mettent en travers de votre chemin.',
    'hero.cta': "S'INSCRIRE MAINTENANT",
    'hero.comingSoon': 'BIENTÔT DISPONIBLE',
    
    // Features
    'features.title': 'CARACTÉRISTIQUES CLÉS',
    'features.subtitle': 'Êtes-vous prêt à dominer ce nouveau concept de shooter ?',
    'features.description': 'Combattez seul ou rejoignez une équipe sur le champ de bataille, vos compétences et votre stratégie seront décisives pour atteindre la gloire dans Domenation.',
    
    'features.domes.title': 'DÔMES',
    'features.domes.description': 'Trouvez un Dôme et réfugiez-vous du pulse à l\'intérieur',
    
    'features.loot.title': 'CAMPS DE BUTIN',
    'features.loot.description': 'Éliminez les créatures hostiles gardant les coffres pour débloquer un butin précieux',
    
    'features.competition.title': 'COMPÉTITION',
    'features.competition.description': 'Affrontez d\'autres joueurs pour atteindre la gloire et gagner des récompenses exclusives',
    
    // About
    'about.title': 'À PROPOS DU JEU',
    'about.description': 'Attention ! Le Pulse arrive ! Ramassez tout le butin que vous pouvez et courez vous réfugier dans le dôme le plus proche avant que le pulse ne frappe. Méfiez-vous, des guerriers du monde entier sont venus réclamer la victoire et obtenir les récompenses des Jeux du Dôme.',
    
    // Footer
    'footer.developer': 'Développé par',
    'footer.rights': '© 2024 Blackmouth Games. Tous droits réservés.',
    'footer.followUs': 'Suivez-nous',
  },
  zh: {
    // Navigation
    'nav.game': '游戏',
    'nav.features': '特色',
    'nav.about': '关于我们',
    
    // Hero
    'hero.title': 'DOMENATION',
    'hero.subtitle': 'DEATHCLOCK',
    'hero.tagline': '战斗、掠夺、在脉冲中生存',
    'hero.description': '小心！脉冲来了！抓住你能找到的所有战利品，在脉冲来袭之前跑到最近的圆顶避难，与任何阻挡你的人战斗。',
    'hero.cta': '立即注册',
    'hero.comingSoon': '即将推出',
    
    // Features
    'features.title': '主要特色',
    'features.subtitle': '你准备好主宰这个新的射击游戏概念了吗？',
    'features.description': '单独战斗或加入战场上的团队，你的技能和策略将决定你在Domenation中能否获得荣耀。',
    
    'features.domes.title': '圆顶',
    'features.domes.description': '找到一个圆顶，在里面躲避脉冲',
    
    'features.loot.title': '战利品营地',
    'features.loot.description': '消灭守卫宝箱的敌对生物，解锁宝贵的战利品',
    
    'features.competition.title': '竞技',
    'features.competition.description': '与其他玩家竞争，获得荣耀并赢得独家奖励',
    
    // About
    'about.title': '关于游戏',
    'about.description': '小心！脉冲来了！抓住你能找到的所有战利品，在脉冲来袭之前跑到最近的圆顶避难。要小心，来自世界各地的战士都来争夺胜利并获得圆顶游戏的奖励。',
    
    // Footer
    'footer.developer': '开发商',
    'footer.rights': '© 2024 Blackmouth Games. 保留所有权利。',
    'footer.followUs': '关注我们',
  },
  hi: {
    // Navigation
    'nav.game': 'खेल',
    'nav.features': 'विशेषताएं',
    'nav.about': 'हमारे बारे में',
    
    // Hero
    'hero.title': 'DOMENATION',
    'hero.subtitle': 'DEATHCLOCK',
    'hero.tagline': 'लड़ो, लूटो और पल्स से बचो',
    'hero.description': 'सावधान! पल्स आ रहा है! जितना हो सके उतना लूट लो और पल्स आने से पहले निकटतम डोम में शरण लो, अपने रास्ते में आने वाले किसी भी व्यक्ति से लड़ते हुए।',
    'hero.cta': 'अभी रजिस्टर करें',
    'hero.comingSoon': 'जल्द आ रहा है',
    
    // Features
    'features.title': 'मुख्य विशेषताएं',
    'features.subtitle': 'क्या आप इस नई शूटर अवधारणा पर हावी होने के लिए तैयार हैं?',
    'features.description': 'अकेले लड़ो या युद्ध के मैदान में एक टीम में शामिल हो, आपके कौशल और रणनीति Domenation में महिमा प्राप्त करने के लिए निर्णायक होंगे।',
    
    'features.domes.title': 'डोम',
    'features.domes.description': 'एक डोम खोजें और उसके अंदर पल्स से शरण लें',
    
    'features.loot.title': 'लूट कैंप',
    'features.loot.description': 'मूल्यवान लूट अनलॉक करने के लिए छाती की रखवाली करने वाले शत्रु प्राणियों को खत्म करें',
    
    'features.competition.title': 'प्रतियोगिता',
    'features.competition.description': 'महिमा प्राप्त करने और विशेष पुरस्कार जीतने के लिए अन्य खिलाड़ियों के खिलाफ प्रतिस्पर्धा करें',
    
    // About
    'about.title': 'खेल के बारे में',
    'about.description': 'सावधान! पल्स आ रहा है! जितना हो सके उतना लूट लो और पल्स आने से पहले निकटतम डोम में शरण लो। सावधान रहें, दुनिया भर के योद्धा जीत का दावा करने और डोम गेम्स के पुरस्कार प्राप्त करने आए हैं।',
    
    // Footer
    'footer.developer': 'द्वारा विकसित',
    'footer.rights': '© 2024 Blackmouth Games. सर्वाधिकार सुरक्षित।',
    'footer.followUs': 'हमें फॉलो करें',
  },
};
