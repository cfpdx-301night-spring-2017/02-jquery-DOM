'use strict';
var rawData = [
  {
    title:       'Bacon Ipsum',
    category:    'food',
    author:      'Kevin Bacon',
    authorUrl:   'http://www.imdb.com/name/nm0000102/',
    publishedOn: '2015-11-05',
    body:        '<p>Bacon ipsum dolor amet do ex andouille minim, .</p>'
  },
  {
    title:       'Baseball Ipsum',
    category:    'sports',
    author:      'Felix Hernandez',
    authorUrl:   'http://www.baseball-reference.com/players/h/hernafe02.shtml',
    publishedOn: '2015-11-04',
    body:        '<p>Baseball ipsum dolor sit amet base on balls full count leadoff. National pastime stance pine tar dribbler rookie dodgers hardball plate. '
   }
];

var rawData2 = [
  {
    title:       'Bacon Ipsum',
    category:    'food',
    author:      'Kevin Bacon',
    authorUrl:   'http://www.imdb.com/name/nm0000102/',
    publishedOn: '2015-11-05',
    body:        '<p>Bacon ipsum dolor amet do ex andouille minim, kielbasa consectetur t-bone. Ullamco alcatra deserunt, occaecat sed drumstick prosciutto. Cupim sed ullamco cow ham hock turkey pariatur. Officia landjaeger minim, tenderloin salami ribeye cupidatat. Consequat reprehenderit shank nostrud proident shoulder mollit flank. Excepteur quis occaecat kevin officia, ribeye sausage chuck et pig.</p><p><img src="http://baconmockup.com/600/300/" class="pull-right" > Cupidatat pancetta chuck fugiat shankle dolor drumstick excepteur spare ribs duis. Meatloaf beef ribs et picanha eu in qui dolore tongue enim spare ribs capicola est pork chop swine. Ipsum strip steak nostrud ham hock qui irure. <img src="http://baconmockup.com/300/400/" class="pull-right">Picanha occaecat prosciutto, rump tempor jerky proident voluptate short loin jowl.</p><p> Leberkas pariatur commodo ex adipisicing kevin magna meatball turducken id shoulder consectetur officia ham. Ribeye ullamco porchetta, velit fatback beef dolor pastrami swine salami tail. Turducken shoulder aliquip, biltong nostrud enim dolore chuck.</p><p> Jerky lorem consectetur tempor consequat pig magna incididunt filet mignon ullamco elit ea ut frankfurter. Andouille salami pig capicola. Short ribs cupim sirloin, in shank non landjaeger tri-tip. Hamburger cillum ground round, ham minim ex short ribs ribeye.</p><p> Prosciutto incididunt cow ball tip jowl ex. Nostrud reprehenderit tempor consequat sunt mollit ball tip salami kielbasa excepteur in est eiusmod. Corned beef ham hock cupidatat qui boudin filet mignon tempor, ut pork loin adipisicing doner t-bone short ribs pancetta. Swine veniam short ribs labore bresaola picanha ground round nostrud. Est turkey voluptate beef, fatback frankfurter pig in. Biltong bresaola salami short loin enim ut filet mignon.</p><p>Salami elit dolore sunt, in fatback porchetta est shankle ad boudin ea short loin. Velit cow prosciutto venison tri-tip laboris, magna sirloin. In corned beef eu magna dolore porchetta andouille. Chicken sunt occaecat pig.</p>'
  },
  {
    title:       'Baseball Ipsum',
    category:    'sports',
    author:      'Felix Hernandez',
    authorUrl:   'http://www.baseball-reference.com/players/h/hernafe02.shtml',
    publishedOn: '2015-11-04',
    body:        '<p>Baseball ipsum dolor sit amet base on balls full count leadoff. National pastime stance pine tar dribbler rookie dodgers hardball plate. <img src="http://lorempixel.com/400/200/" class="pull-left" >Club sidearm shift red sox ground rule double, left fielder pennant good eye rubber game. Steal petey center field blue wins arm visitors. Out rope base cookie grass bandbox error. Tag pennant designated hitter relief pitcher triple-A alley on deck baseball.</p><p>Dribbler left on base arm curve bag, slider around the horn disabled list. Pennant catcher gapper rope screwball home cork foul. Nubber slide rake relief pitcher wrigley choke up cup of coffee cycle bench. Loss strikeout bandbox cardinals second base practice gap center fielder. Screwball fielder\'s choice play baseline rubber game warning track bleeder. Mustard inning in the hole astroturf alley fielder\'s choice left fielder.</p><p>Home grand slam suicide squeeze breaking ball batter\'s box flyout starting pitcher. Baseball card basehit double switch save batting average losses tossed umpire batter\'s box. Shift league 4-6-3 no-hitter yankees, bleeder mound defensive indifference shutout. Squeeze mound butcher boy loss rip chin music cracker jack. Scorecard all-star helmet practice defensive indifference pull mound around the horn. Earned run relay curve full count fall classic pinch hitter helmet cheese outfielder.</p><p>Foul pitchout moneyball all-star runs left on base fielder\'s choice. Sport pine tar fair dead ball era season rip no-hitter friendly confines. Baseball card no-hitter fenway line drive left field earned run sport bush league. Tossed walk off dodgers error streak, center fielder tossed chin music. Grounder friendly confines mustard center field bandbox pinch runner cookie. Alley left on base bat second baseman passed ball foul error cy young.</p><p>No-hitter breaking ball stadium doubleheader rubber fair team rake. Error leather left fielder outs at-bat leadoff cork hit by pitch rally. Relief pitcher bleeder sidearm grounder center fielder gold glove ejection hitter foul line. Error 4-6-3 gold glove knuckleball dead ball era, save pine tar. Robbed reliever cellar alley stretch club starter leather. Red sox dead red pull no-hitter assist can of corn manager error play.</p>'
  },
  {
    title:       'Cat Ipsum',
    category:    'pets',
    author:      'Meow Meow',
    authorUrl:   'https://http.cat/',
    publishedOn: '2015-11-03',
    body:        '<p>Find empty spot in cupboard and sleep all day refuse to leave cardboard box for make meme, make cute face for lick the plastic bag yet stare at wall turn and meow stare at wall some more meow again continue staring.<img src="http://placekitten.com/203/310" class="pull-right"> Damn that dog meow, for shake treat bag rub face on owner sleep in the bathroom sink poop in litter box, scratch the walls destroy couch as revenge. <img src="http://placekitten.com/210/300" class="pull-left">Kick up litter. Hide when guests come over sweet beast, and plan steps for world domination but jump off balcony, onto stranger\'s head meowing non stop for food flop over, for scratch leg; meow for can opener to feed me. Missing until dinner time stick butt in face cat is love, cat is life missing until dinner time pee in the shoe spread kitty litter all over house. Meow all night having their mate disturbing sleeping humans plan steps for world domination or why must they do that vommit food and eat it again lick arm hair yet white cat sleeps on a black shirt. Kitty power! pelt around the house and up and down stairs chasing phantoms for hopped up on catnip, and put toy mouse in food bowl run out of litter box at full speed . Loves cheeseburgers put toy mouse in food bowl run out of litter box at full speed the dog smells bad ignore the squirrels, you\'ll never catch them anyway so intrigued by the shower, but inspect anything brought into the house. Cat is love, cat is life find empty spot in cupboard and sleep all day yet destroy couch as revenge plan steps for world domination chase the pig around the house or scamper.</p><p>Hate dog fall over dead (not really but gets sypathy) ears back wide eyed refuse to drink water except out of someone\'s glass, yet climb leg, and white cat sleeps on a black shirt yet human give me attention meow. Throwup on your pillow see owner, run in terror intently sniff hand, for leave fur on owners clothes use lap as chair. Meowzer! white cat sleeps on a black shirt but i like big cats and i can not lie so sun bathe make muffins. Why must they do that attack feet lounge in doorway intrigued by the shower peer out window, chatter at birds, lure them to mouth yet peer out window, chatter at birds, lure them to mouth behind the couch. Run in circles kitty power! scratch leg; meow for can opener to feed me so attack feet.</p><p>Loves cheeseburgers stare at ceiling, for give attitude, hunt by meowing loudly at 5am next to human slave food dispenser. Scratch the furniture refuse to drink water except out of someone\'s glass and plan steps for world domination yet love to play with owner\'s hair tie. Stare out the window stare at ceiling chase imaginary bugs, or hunt anything that moves, for i am the best or jump around on couch, meow constantly until given food, , swat at dog. Spit up on light gray carpet instead of adjacent linoleum. Cough furball sit in box pooping rainbow while flying in a toasted bread costume in space and destroy couch as revenge. Hunt by meowing loudly at 5am next to human slave food dispenser nap all. <img src="http://placekitten.com/250/300" class="pull-right"></p>'
  },
  {
    title:       'Cheese Ipsum',
    category:    'food',
    author:      'El Rey de Queso',
    authorUrl:   'https://www.youtube.com/watch?v=oHg5SJYRHA0',
    publishedOn: '2015-11-02',
    body:        '<p>I love cheese, especially edam squirty cheese. Cheesecake cheese triangles boursin cheese slices airedale the big cheese st. agur blue cheese st. agur blue cheese. Fromage frais fromage frais lancashire parmesan cow chalk and cheese cow cheese on toast. Cow cheesy grin.</p><p>Melted cheese bavarian bergkase fromage frais. Blue castello cheese triangles cheese and biscuits stinking bishop paneer camembert de normandie goat cream cheese. <img src="http://lorempixel.com/400/200/" class="pull-left">Smelly cheese cheese slices stinking bishop pecorino taleggio red leicester hard cheese queso. Cow fromage chalk and cheese.</p><p>Gouda goat mozzarella. Lancashire macaroni cheese cheesecake cheese and biscuits pepper jack cow cheddar cheesy feet. Stilton cheesy grin ricotta everyone loves the big cheese squirty cheese pepper jack edam. Cheese on toast cheese and wine.</p><p>Queso camembert de normandie paneer. Parmesan bavarian bergkase feta cauliflower cheese lancashire airedale melted cheese halloumi. Who moved my cheese airedale cheese on toast cheesy feet who moved my cheese dolcelatte monterey jack fromage frais. Emmental cow.</p><p>Blue castello roquefort swiss. Cheese slices cottage cheese brie cream cheese pepper jack red leicester say cheese fromage frais. Cheesy grin cow smelly cheese camembert de normandie mozzarella cream cheese goat rubber cheese. Emmental port-salut croque monsieur boursin gouda.</p>'
  },
  {
    title:       'Startup Ipsum',
    category:    'business',
    author:      'Andy Sack',
    authorUrl:   'http://asackofseattle.com/',
    publishedOn: '2015-11-01',
    body:        '<p>Branding business-to-consumer churn rate success lean startup value proposition partnership founders user experience beta. Burn rate scrum project infographic bandwidth startup social media market. <img src="http://www.fillmurray.com/410/650" class="pull-right">Stealth accelerator venture social media product management. Focus paradigm shift MVP twitter pivot analytics. Learning curve return on investment validation series A financing channels equity success. Return on investment facebook pivot hypotheses rockstar. Customer backing success handshake network effects bandwidth monetization market facebook venture seed money equity iPhone accelerator. Churn rate burn rate customer termsheet user experience startup stock series A financing partnership success leverage value proposition founders pivot. Investor paradigm shift gen-z value proposition bandwidth network effects. Early adopters business-to-business social media ecosystem seed round paradigm shift MVP.</p><p>Branding client www.discoverartisans.com learning curve validation advisor incubator partner network user experience ecosystem launch party influencer bootstrapping hackathon. Pivot equity long tail user experience infographic backing business-to-business. Marketing MVP responsive web design android technology buzz metrics market disruptive series A financing infographic gamification client return on investment. Influencer channels marketing graphical user interface supply chain accelerator ramen value proposition leverage www.discoverartisans.com pitch success. Www.discoverartisans.com lean startup learning curve incubator crowdsource technology. Traction marketing channels scrum project first mover advantage entrepreneur. Responsive web design investor channels branding validation social media niche market crowdfunding www.discoverartisans.com first mover advantage learning curve. Alpha investor android direct mailing MVP burn rate value proposition accelerator deployment. Beta focus business-to-business bandwidth market value proposition influencer backing release first mover advantage. Crowdsource venture handshake beta buzz low hanging fruit stock investor stealth research & development growth hacking.</p><p>Ecosystem ramen scrum project. Partner network network effects founders first mover advantage deployment social media release lean startup hackathon focus. Marketing mass market validation strategy buzz backing termsheet market www.discoverartisans.com. Crowdfunding freemium marketing advisor user experience. Ramen analytics virality venture alpha incubator backing pivot advisor bandwidth freemium accelerator www.discoverartisans.com user experience. Startup responsive web design scrum project. Graphical user interface release strategy hackathon crowdsource early adopters freemium social media direct mailing. Buyer deployment beta interaction design partner network entrepreneur facebook bandwidth analytics sales business-to-consumer innovator mass market infographic. Learning curve scrum project advisor iPad android agile development facebook www.discoverartisans.com social proof technology prototype freemium hackathon niche market. Influencer MVP supply chain bandwidth graphical user interface first mover advantage leverage sales validation return on investment churn rate.</p><p>Focus equity seed money graphical user interface alpha iteration crowdsource. Partner network business model canvas rockstar technology responsive web design stealth strategy learning curve gamification monetization virality network effects handshake. Ownership hypotheses strategy network effects hackathon buzz disruptive launch party agile development ecosystem iPad equity scrum project. Hackathon infrastructure entrepreneur infographic bootstrapping market validation stock traction startup research & development pivot assets. Customer deployment startup. Market business plan hypotheses launch party www.discoverartisans.com advisor assets equity twitter bandwidth bootstrapping. Customer supply chain A/B testing conversion accelerator advisor creative angel investor alpha seed round handshake. Seed round interaction design backing burn rate influencer crowdsource focus ownership analytics iPhone ramen social media. Gamification hypotheses launch party partner network supply chain lean startup product management pivot backing direct mailing graphical user interface client sales. Business-to-business crowdsource sales non-disclosure agreement.</p><p>Prototype entrepreneur leverage freemium. Termsheet handshake sales assets release buyer. Ramen backing business model canvas return on investment accelerator pivot twitter mass market seed round. Android stealth iPhone buyer return on investment www.discoverartisans.com. First mover advantage responsive web design termsheet long tail vesting period twitter. Marketing scrum project user experience virality. Channels success crowdsource leverage facebook gen-z client www.discoverartisans.com handshake founders vesting period iPad learning curve. Beta interaction design seed round pitch sales ramen series A financing partnership ownership long tail. Monetization validation business model canvas buzz direct mailing bootstrapping marketing hypotheses lean startup startup prototype business-to-business. Early adopters lean startup technology series A financing rockstar handshake direct mailing iPad investor.</p>'
  }
];
