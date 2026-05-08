import type { MockProduct, MockRecipe } from './types';

const CDN = 'https://theteaplanet.com/cdn/shop/files';
const BOBA_IMG = `${CDN}/Boba_packs.jpg`;
const CAFE_IMG  = `${CDN}/TP_cafe.jpg`;

// ─── MILK TEA PREMIXES ────────────────────────────────────────────────────────
const MILK_PREMIXES: MockProduct[] = [
  { id:'mp01', handle:'taro-bubble-tea-premix', title:'Taro Bubble Tea Premix', subtitle:'Creamy, earthy taro — a premium menu staple', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g','1 kg'], price:1399, unit:'per pack', sku:'MTP-TARO-1K', image:BOBA_IMG, tags:['premix','milk-tea','bestseller'], badge:'Best Seller', isBestSeller:true, description:'Taiwanese taro base blended with authentic Indian flavours. Vegetarian, Vegan, Non-GMO, Halal. Mix with water or milk and serve immediately.', benefits:['Halal & Vegan certified','No artificial colour or preservatives','Consistent cup quality every time','Cost per cup from ₹19'], usageDosage:{hot:'25g per 100ml hot milk',cold:'40g per 350ml cold milk + ice'}, applications:['Café & Tea Bar','QSR','Cloud Kitchen','Hotel'], faq:[{q:'Shelf life?',a:'18 months sealed. Refrigerate after opening.'},{q:'Can I use water instead of milk?',a:'Yes — works with water or milk.'}], relatedRecipes:['taro-matcha','iced-taro-boba'], crossSell:['tapioca-pearls-classic-black','popping-boba-strawberry','brown-sugar-syrup'] },
  { id:'mp02', handle:'chocolate-bubble-tea-premix', title:'Chocolate Bubble Tea Premix', subtitle:'Rich cocoa boba drink with deep chocolate notes', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g','1 kg'], price:1399, unit:'per pack', sku:'MTP-CHOC-1K', image:BOBA_IMG, tags:['premix','milk-tea','chocolate'], description:'Rich, velvety chocolate bubble tea premix. No artificial colour. Pairs perfectly with tapioca pearls and popping boba.', benefits:['Deep chocolate flavour','No artificial colour or preservatives','Halal certified'], usageDosage:{cold:'40g per 350ml cold milk + ice'}, applications:['Café','QSR','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['tapioca-pearls-classic-black','strawberry-popping-boba'] },
  { id:'mp03', handle:'blueberry-bubble-tea-premix', title:'Blueberry Bubble Tea Premix', subtitle:'Bold blueberry with a smooth creamy finish', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g','1 kg'], price:1499, unit:'per pack', sku:'MTP-BLUE-1K', image:BOBA_IMG, tags:['premix','milk-tea','fruit'], isNew:true, description:'Bright blueberry flavour blended into a smooth, velvety milk tea base. Highly Instagram-able purple colour.', benefits:['Natural blueberry flavour','Vibrant purple colour','No artificial preservatives'], usageDosage:{cold:'40g per 350ml cold milk + ice'}, applications:['Café','QSR','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['tapioca-pearls-classic-black','lychee-popping-boba'] },
  { id:'mp04', handle:'cappuccino-bubble-tea-premix', title:'Cappuccino Bubble Tea Premix', subtitle:'Espresso-forward boba for coffee lovers', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g'], price:1499, unit:'per pack', sku:'MTP-CAPP-800', image:BOBA_IMG, tags:['premix','milk-tea','coffee'], description:'Rich cappuccino flavour meets boba culture. The perfect crossover product for cafés with existing coffee customers.', benefits:['Espresso-forward flavour','Strong coffee category crossover','No artificial colour'], usageDosage:{cold:'40g per 350ml cold milk + ice'}, applications:['Café','Fine Dining'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['tapioca-pearls-classic-black','brown-sugar-syrup'] },
  { id:'mp05', handle:'thai-tea-bubble-tea-premix', title:'Thai Tea Bubble Tea Premix', subtitle:'Aromatic Thai tea — a café classic', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g'], price:1399, unit:'per pack', sku:'MTP-THAI-800', image:BOBA_IMG, tags:['premix','milk-tea','thai'], isBestSeller:true, badge:'Best Seller', description:'Authentic Thai tea flavour with rich orange colour. A proven bestseller in café and QSR formats across India.', benefits:['Authentic Thai flavour profile','Strong repeat purchase behaviour','Beautiful orange colour'], usageDosage:{cold:'40g per 350ml cold milk + ice'}, applications:['Café','QSR','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['thai-milk-tea'], crossSell:['tapioca-pearls-classic-black','coconut-tapioca-pearls'] },
  { id:'mp06', handle:'classic-milk-tea-premix-3in1', title:'Classic Milk Tea Premix (3-in-1)', subtitle:'All-in-one base — tea, milk & sweetener combined', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['1 kg'], price:1299, unit:'per pack', sku:'MTP-CLAS-1K', image:BOBA_IMG, tags:['premix','milk-tea','classic'], description:'The 3-in-1 format combines tea, milk powder and sweetener in one sachet. Eliminates barista skill dependency. Ideal for QSR and high-volume formats.', benefits:['3-in-1: tea + milk + sugar in one','Eliminates barista skill dependency','Consistent cup every time'], usageDosage:{hot:'25g per 200ml hot water',cold:'30g per 250ml cold water'}, applications:['QSR','Institutional','Cloud Kitchen'], faq:[{q:'Does it need milk?',a:'No — milk powder is included in the 3-in-1 blend.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['tapioca-pearls-classic-black'] },
  { id:'mp07', handle:'tiramisu-bubble-tea-premix', title:'Tiramisu Bubble Tea Premix', subtitle:'Elegant coffee-liqueur boba — premium menu item', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['1 kg'], price:1499, unit:'per pack', sku:'MTP-TIRA-1K', image:BOBA_IMG, tags:['premix','milk-tea','premium'], badge:'Premium', description:'Elegant tiramisu flavour with fragrant coffee liqueur aroma. No artificial colour, aroma or preservatives. A premium menu differentiator.', benefits:['Premium coffee-liqueur flavour','No artificial colour or aroma','Excellent margin potential'], usageDosage:{cold:'40g per 350ml cold milk + ice'}, applications:['Fine Dining','Café','Hotel'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['tapioca-pearls-classic-black','brown-sugar-syrup'] },
  { id:'mp08', handle:'grapefruit-bubble-tea-premix', title:'Grapefruit Bubble Tea Premix', subtitle:'Bright, refreshing citrus boba', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g'], price:1499, unit:'per pack', sku:'MTP-GRAP-800', image:BOBA_IMG, tags:['premix','milk-tea','fruit','citrus'], description:'Bright grapefruit citrus blend. Thirst-quenching and refreshing. Strong seasonal appeal. Pairs well with popping boba for premium upsell.', benefits:['Bright citrus flavour','Strong seasonal appeal','Premium upsell with popping boba'], usageDosage:{cold:'40g per 350ml cold water + ice'}, applications:['Café','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['sparkling-kaffir-lime'], crossSell:['passion-fruit-popping-boba','lychee-popping-boba'] },
  { id:'mp09', handle:'coconut-bubble-tea-premix', title:'Coconut Bubble Tea Premix', subtitle:'Tropical coconut boba — creamy & exotic', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g','1 kg'], price:1399, unit:'per pack', sku:'MTP-COCO-1K', image:BOBA_IMG, tags:['premix','milk-tea','tropical'], description:'Smooth tropical coconut flavour. A consistent top-seller in coastal and resort markets. Pairs beautifully with nata de coco toppings.', benefits:['Tropical coconut flavour','Pairs perfectly with nata de coco','Strong resort & coastal market performance'], usageDosage:{cold:'40g per 350ml cold milk + ice'}, applications:['Hotel & Resort','Café','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['nata-de-coco','tapioca-pearls-classic-black'] },
  { id:'mp10', handle:'sea-salt-caramel-bubble-tea-premix', title:'Sea Salt Caramel Bubble Tea Premix', subtitle:'Salted caramel boba — indulgent & crave-worthy', category:'Milk Tea Premixes', categoryHandle:'milk-tea-premixes', packSizes:['800g','1 kg'], price:1399, unit:'per pack', sku:'MTP-SCAR-1K', image:BOBA_IMG, tags:['premix','milk-tea','caramel'], description:'Rich caramel with a subtle salt balance. One of the most crave-worthy boba flavours. Exceptional repeat purchase rate.', benefits:['Highly crave-worthy flavour','Exceptional repeat purchase rate','Pairs with brown sugar drizzle'], usageDosage:{cold:'40g per 350ml cold milk + ice'}, applications:['Café','QSR','Fine Dining'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['brown-sugar-boba'], crossSell:['brown-sugar-syrup','tapioca-pearls-classic-black'] },
];

// ─── TAPIOCA PEARLS ───────────────────────────────────────────────────────────
const TAPIOCA: MockProduct[] = [
  { id:'tp01', handle:'tapioca-pearls-classic-black', title:'Classic Black Tapioca Pearls', subtitle:'The original boba pearl — chewy & consistent', category:'Tapioca Pearls', categoryHandle:'tapioca-pearls', packSizes:['500g','1 kg','5 kg'], price:249, unit:'per 500g', sku:'17025', image:BOBA_IMG, tags:['tapioca','topping','bestseller'], badge:'Best Seller', isBestSeller:true, description:'The original quick-cook black tapioca pearl. Cooks in 5 minutes, consistent chew texture, stays fresh in syrup for 4 hours.', benefits:['5-minute cook time','Consistent chew every batch','Stays fresh in syrup for 4 hours','Reduces prep time by 80%'], usageDosage:{notes:'Boil 5 min, drain, coat in brown sugar syrup. Serve within 4 hours.'}, applications:['Café & Tea Bar','QSR','Cloud Kitchen','Fine Dining'], faq:[{q:'How long do cooked pearls last?',a:'Up to 4 hours in brown sugar syrup.'},{q:'Standard vs instant?',a:'Standard: 5 min, better texture. Instant: 30 sec, ideal for high-volume QSR.'}], relatedRecipes:['classic-boba-milk-tea','brown-sugar-boba','thai-milk-tea'], crossSell:['brown-sugar-syrup','silky-mix-original-base'] },
  { id:'tp02', handle:'coconut-tapioca-pearls', title:'Coconut Tapioca Pearls', subtitle:'Coconut-flavoured pearls for tropical menus', category:'Tapioca Pearls', categoryHandle:'tapioca-pearls', packSizes:['500g'], price:499, unit:'per 500g', sku:'TAP-COCO-500', image:BOBA_IMG, tags:['tapioca','topping','flavoured'], description:'White coconut-flavoured tapioca pearls. A premium topping that upsells +₹20–30 per cup.', benefits:['Premium flavoured variant','Upsell opportunity','Tropical flavour profile'], usageDosage:{notes:'Cook 8–10 min. Coat in coconut syrup. Serve within 3 hours.'}, applications:['Café','Hotel & Resort'], faq:[{q:'Shelf life?',a:'12 months sealed.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['coconut-bubble-tea-premix','nata-de-coco'] },
  { id:'tp03', handle:'mango-tapioca-pearls', title:'Mango Tapioca Pearls', subtitle:'Sunshine-yellow mango pearls', category:'Tapioca Pearls', categoryHandle:'tapioca-pearls', packSizes:['500g'], price:499, unit:'per 500g', sku:'TAP-MANG-500', image:BOBA_IMG, tags:['tapioca','topping','mango'], description:'Golden mango-flavoured tapioca pearls. Vibrant colour and fruity sweetness. A summer bestseller.', benefits:['Vibrant yellow colour','Fruity mango flavour','Summer seasonal bestseller'], usageDosage:{notes:'Cook 8–10 min. Coat in mango syrup.'}, applications:['Café','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'12 months sealed.'}], relatedRecipes:['sparkling-kaffir-lime'], crossSell:['mango-popping-boba'] },
  { id:'tp04', handle:'strawberry-tapioca-pearls', title:'Strawberry Tapioca Pearls', subtitle:'Pink strawberry pearls for vibrant cups', category:'Tapioca Pearls', categoryHandle:'tapioca-pearls', packSizes:['500g'], price:499, unit:'per 500g', sku:'TAP-STRW-500', image:BOBA_IMG, tags:['tapioca','topping','strawberry'], description:'Pink strawberry-flavoured tapioca pearls. Highly photogenic and pairs perfectly with milk tea or fruit teas.', benefits:['Vibrant pink colour','Photogenic — drives social media sharing','Pairs with fruit or milk teas'], usageDosage:{notes:'Cook 8–10 min. Coat in strawberry syrup.'}, applications:['Café','QSR'], faq:[{q:'Shelf life?',a:'12 months sealed.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['strawberry-popping-boba','strawberry-fruit-syrup'] },
  { id:'tp05', handle:'instant-tapioca-pearls', title:'Instant Tapioca Pearls', subtitle:'Ready in 30 seconds — built for high-volume QSR', category:'Tapioca Pearls', categoryHandle:'tapioca-pearls', packSizes:['500g','1 kg'], price:500, unit:'per 500g', sku:'TAP-INST-500', image:BOBA_IMG, tags:['tapioca','topping','instant','qsr'], description:'Ready in just 30 seconds. Designed for high-volume QSR and cloud kitchen formats where speed is critical.', benefits:['30-second cook time','Designed for high-volume service','No specialist equipment needed'], usageDosage:{notes:'Pour into boiling water 30 sec, drain, serve immediately.'}, applications:['QSR','Cloud Kitchen','Institutional'], faq:[{q:'Texture vs standard?',a:'Slightly softer than standard pearls. Ideal for speed-of-service formats.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['classic-milk-tea-premix-3in1'] },
];

// ─── POPPING BOBA ─────────────────────────────────────────────────────────────
const POPPING_BOBA: MockProduct[] = [
  { id:'pb01', handle:'strawberry-popping-boba', title:'Strawberry Popping Boba', subtitle:'Juice-filled bursting pearls. No cooking required.', category:'Popping Boba', categoryHandle:'popping-boba', packSizes:['400g','1 kg','2 kg'], price:649, unit:'per 1kg', sku:'PB-STRW-1K', image:BOBA_IMG, tags:['popping-boba','topping','bestseller'], badge:'Best Seller', isBestSeller:true, description:'Real strawberry juice-filled popping boba. No cooking. Open and serve. Adds ₹30–50 to your cup selling price.', benefits:['No cooking — open and serve','Real fruit juice filling','Premium upsell: +₹30–50 per cup','18-month shelf life'], usageDosage:{notes:'Drain from storage liquid, rinse. Add 2–3 tbsp per cup. No heating.'}, applications:['Café & Tea Bar','QSR','Fine Dining'], faq:[{q:'Need cooking?',a:'No — ready to use. Just drain and rinse.'},{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['classic-boba-milk-tea','sparkling-kaffir-lime'], crossSell:['silky-mix-original-base','tapioca-pearls-classic-black','strawberry-fruit-syrup'] },
  { id:'pb02', handle:'mango-popping-boba', title:'Mango Popping Boba', subtitle:'Tropical mango burst in every sip', category:'Popping Boba', categoryHandle:'popping-boba', packSizes:['1 kg','2 kg'], price:649, unit:'per 1kg', sku:'PB-MANG-1K', image:BOBA_IMG, tags:['popping-boba','topping','mango'], description:'Real mango juice-filled popping boba. A tropical bestseller that pairs perfectly with milk and fruit teas.', benefits:['Real mango juice filling','No cooking required','Premium upsell ingredient'], usageDosage:{notes:'Drain, rinse, and serve. 2–3 tbsp per cup.'}, applications:['Café','QSR','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['sparkling-kaffir-lime'], crossSell:['taro-bubble-tea-premix','mango-tapioca-pearls'] },
  { id:'pb03', handle:'lychee-popping-boba', title:'Lychee Popping Boba', subtitle:'Delicate lychee burst — floral and sweet', category:'Popping Boba', categoryHandle:'popping-boba', packSizes:['400g','1 kg','2 kg'], price:649, unit:'per 1kg', sku:'PB-LYCHE-1K', image:BOBA_IMG, tags:['popping-boba','topping','lychee'], description:'Delicate floral lychee juice-filled popping boba. A premium variety that pairs exceptionally with green tea and jasmine bases.', benefits:['Delicate floral flavour','Premium menu positioning','Pairs with green tea & jasmine'], usageDosage:{notes:'Drain, rinse, and serve. 2–3 tbsp per cup.'}, applications:['Fine Dining','Café'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['yuzu-green-tea','matcha-boba-sponge-cake'], crossSell:['grapefruit-bubble-tea-premix','cold-brew-green-tea-concentrate'] },
  { id:'pb04', handle:'passion-fruit-popping-boba', title:'Passion Fruit Popping Boba', subtitle:'Tropical-tart passion fruit burst', category:'Popping Boba', categoryHandle:'popping-boba', packSizes:['400g','2 kg'], price:649, unit:'per 400g', sku:'PB-PASS-400', image:BOBA_IMG, tags:['popping-boba','topping','passion-fruit'], description:'Tropical passion fruit juice popping boba. Tart, exotic and highly premium. A strong upsell in fine dining and resort formats.', benefits:['Exotic tropical flavour','Premium positioning','Strong upsell in fine dining'], usageDosage:{notes:'Drain, rinse, and serve. 2–3 tbsp per cup.'}, applications:['Fine Dining','Hotel & Resort','Café'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['sparkling-kaffir-lime'], crossSell:['grapefruit-bubble-tea-premix','lychee-popping-boba'] },
];

// ─── NATA DE COCO ─────────────────────────────────────────────────────────────
const NATA: MockProduct[] = [
  { id:'nd01', handle:'nata-de-coco', title:'Nata de Coco', subtitle:'8–10mm coconut cubes — premium chewy topping', category:'Nata de Coco', categoryHandle:'nata-de-coco', packSizes:['1 kg','3 kg'], price:649, unit:'per kg', sku:'NDC-001', image:BOBA_IMG, tags:['topping','nata-de-coco'], description:'Premium 8–10mm nata de coco cubes. Firm, translucent and slightly sweet. A premium topping that drives per-cup revenue.', benefits:['Premium chewy texture','Upsell: +₹25–40 per cup','Ready to use — no cooking','Long shelf life: 12 months'], usageDosage:{notes:'Drain from liquid, rinse. Add 2–3 tbsp per cup. No cooking required.'}, applications:['Café & Tea Bar','Fine Dining','QSR'], faq:[{q:'Need cooking?',a:'No — drain, rinse and serve.'},{q:'Shelf life?',a:'12 months sealed.'}], relatedRecipes:['matcha-boba-sponge-cake','classic-boba-milk-tea'], crossSell:['coconut-bubble-tea-premix','silky-mix-original-base'] },
];

// ─── KONJAC PEARLS ────────────────────────────────────────────────────────────
const KONJAC: MockProduct[] = [
  { id:'kj01', handle:'konjac-crystal-pearls', title:'Konjac Crystal Pearls', subtitle:'Clear premium gel pearls — light, low-calorie texture', category:'Konjac Pearls', categoryHandle:'konjac-pearls', packSizes:['500g','1 kg'], price:850, unit:'per 500g', sku:'KJC-CRYS-500', image:BOBA_IMG, tags:['konjac','topping','premium'], badge:'Premium', description:'Crystal-clear konjac jelly pearls. Light, bouncy texture. Zero-fat, low-calorie premium topping that commands higher sell prices. No cooking required.', benefits:['Zero fat, low calorie','Premium jelly texture & appearance','No cooking — ready to serve','High-margin upsell: +₹35–50 per cup'], usageDosage:{notes:'Drain, rinse, add 2–3 tbsp per cup. No heating required.'}, applications:['Fine Dining','Café','Hotel & Resort'], faq:[{q:'Need cooking?',a:'No — drain, rinse and serve.'},{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['oolong-tapioca','ginger-jasmine'], crossSell:['silky-mix-original-base','lychee-popping-boba'] },
  { id:'kj02', handle:'konjac-brown-sugar-pearls', title:'Konjac Brown Sugar Pearls', subtitle:'Caramel-infused konjac with rich brown sugar flavour', category:'Konjac Pearls', categoryHandle:'konjac-pearls', packSizes:['500g'], price:900, unit:'per 500g', sku:'KJC-BRNS-500', image:BOBA_IMG, tags:['konjac','topping','brown-sugar'], description:'Brown sugar infused konjac pearls with a rich caramel flavour and dark colour. Instagram-worthy, crave-worthy, and a strong upsell item.', benefits:['Rich caramel flavour','Deep brown colour','Premium menu positioning','No cooking required'], usageDosage:{notes:'Drain, rinse, add to cup. No heating.'}, applications:['Café','QSR'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['brown-sugar-boba'], crossSell:['brown-sugar-syrup','tapioca-pearls-classic-black'] },
  { id:'kj03', handle:'konjac-lychee-pearls', title:'Konjac Lychee Pearls', subtitle:'Floral lychee-infused konjac — delicate and premium', category:'Konjac Pearls', categoryHandle:'konjac-pearls', packSizes:['500g'], price:900, unit:'per 500g', sku:'KJC-LYCHE-500', image:BOBA_IMG, tags:['konjac','topping','lychee'], isNew:true, badge:'New', description:'Lychee-flavoured konjac pearls with delicate floral sweetness. Pairs beautifully with jasmine, green tea and fruit tea bases.', benefits:['Delicate floral lychee flavour','Pairs with premium tea bases','New variety — menu differentiation'], usageDosage:{notes:'Drain, rinse, serve cold.'}, applications:['Fine Dining','Café'], faq:[{q:'Shelf life?',a:'18 months sealed.'}], relatedRecipes:['ginger-jasmine','yuzu-green-tea'], crossSell:['lychee-popping-boba','cold-brew-green-tea-concentrate'] },
];

// ─── SYRUPS ───────────────────────────────────────────────────────────────────
const SYRUPS: MockProduct[] = [
  { id:'sy01', handle:'brown-sugar-syrup', title:'Brown Sugar Syrup', subtitle:'Thick Taiwanese-style caramel — tiger stripes & drizzle', category:'Syrups & Concentrates', categoryHandle:'syrups-concentrates', packSizes:['700ml','1L','5L'], price:750, unit:'per 700ml', sku:'91171', image:CAFE_IMG, tags:['syrup','bestseller'], isBestSeller:true, description:'Authentic Taiwanese-style brown sugar syrup. Thick consistency perfect for tiger stripes, drizzle and mixing. Heat stable to 100°C.', benefits:['Thick — ideal for tiger stripes','Caramel depth with molasses notes','Heat stable to 100°C','Cost per cup: ₹5–8'], usageDosage:{hot:'15–20ml per 100ml',cold:'20–30ml per 350ml'}, applications:['Café & Tea Bar','QSR','Cloud Kitchen','Bakery'], faq:[{q:'Good for cake drizzle?',a:'Yes — thick consistency is ideal.'}], relatedRecipes:['brown-sugar-boba','classic-boba-milk-tea'], crossSell:['tapioca-pearls-classic-black','silky-mix-original-base'] },
  { id:'sy02', handle:'nutty-taro-fruit-syrup', title:'Nutty Taro Fruit Syrup', subtitle:'Sweet, earthy taro syrup for drinks & drizzle', category:'Syrups & Concentrates', categoryHandle:'syrups-concentrates', packSizes:['700ml'], price:750, unit:'per 700ml', sku:'SYR-TARO-700', image:CAFE_IMG, tags:['syrup','taro'], description:'Rich nutty taro fruit syrup. Perfect for drizzle, mixing and flavour enhancement in taro-based drinks.', benefits:['Rich taro flavour','Versatile — drizzle or mix','Pairs with taro premix'], usageDosage:{cold:'20–25ml per 350ml serving'}, applications:['Café','Bakery'], faq:[{q:'Shelf life?',a:'12 months sealed.'}], relatedRecipes:['iced-taro-boba','taro-matcha'], crossSell:['taro-bubble-tea-premix','tapioca-pearls-classic-black'] },
  { id:'sy03', handle:'strawberry-fruit-syrup', title:'Strawberry Fruit Syrup', subtitle:'Bright strawberry syrup for teas, mocktails & desserts', category:'Syrups & Concentrates', categoryHandle:'syrups-concentrates', packSizes:['700ml'], price:750, unit:'per 700ml', sku:'SYR-STRW-700', image:CAFE_IMG, tags:['syrup','strawberry'], description:'Vibrant strawberry fruit syrup. Bright colour, balanced sweetness. Versatile for beverages, desserts and baking.', benefits:['Vibrant colour','Balanced sweetness','Use in drinks, desserts & baking'], usageDosage:{cold:'20–25ml per 350ml serving'}, applications:['Café','Bakery','Cloud Kitchen'], faq:[{q:'Shelf life?',a:'12 months sealed.'}], relatedRecipes:['sparkling-kaffir-lime'], crossSell:['strawberry-popping-boba','strawberry-tapioca-pearls'] },
];

// ─── TEA CONCENTRATES ─────────────────────────────────────────────────────────
const TEA_CONCENTRATES: MockProduct[] = [
  { id:'tc01', handle:'masala-chai-concentrate', title:'Masala Chai Concentrate', subtitle:'Rich spiced chai — just add milk and water', category:'Tea Concentrates', categoryHandle:'tea-concentrates', packSizes:['500ml','1L','5L'], price:850, unit:'per 500ml', sku:'TC-CHAI-500', image:CAFE_IMG, tags:['tea-concentrate','chai','bestseller'], isBestSeller:true, badge:'Best Seller', description:'Rich, aromatic masala chai concentrate. Simply dilute with milk and water. Consistent authentic chai taste with no grinding or brewing. Perfect for QSR and high-volume cafes.', benefits:['No grinding or brewing needed','Consistent authentic chai taste','FSSC 22000 certified','Cost per cup: ₹8–12'], usageDosage:{hot:'30ml concentrate + 150ml hot milk + 50ml hot water',cold:'40ml concentrate + 200ml cold milk + ice'}, applications:['QSR','Café','Institutional','Hotel'], faq:[{q:'Shelf life?',a:'12 months sealed. Refrigerate after opening.'},{q:'Dairy-free?',a:'Yes — mix with plant-based milk.'}], relatedRecipes:['classic-boba-milk-tea'], crossSell:['tapioca-pearls-classic-black','silky-mix-original-base'] },
  { id:'tc02', handle:'cold-brew-green-tea-concentrate', title:'Cold Brew Green Tea Concentrate', subtitle:'Smooth cold-brew green tea — ready in seconds', category:'Tea Concentrates', categoryHandle:'tea-concentrates', packSizes:['500ml','1L'], price:950, unit:'per 500ml', sku:'TC-GRNT-500', image:CAFE_IMG, tags:['tea-concentrate','green-tea','cold-brew'], description:'Premium cold brew green tea concentrate. Smooth, less bitter than standard green tea. Just dilute and serve over ice. Ideal for iced teas, sparkling teas and boba bases.', benefits:['Cold-brew process — less bitter','Ready in seconds','Pairs with fruit syrups & boba','Clean label — no artificial colour'], usageDosage:{cold:'40ml concentrate + 250ml cold water or sparkling water + ice'}, applications:['Café','Cloud Kitchen','Fine Dining'], faq:[{q:'Shelf life?',a:'12 months sealed.'},{q:'Add sweetener?',a:'Yes — pairs with honey, brown sugar or fruit syrups.'}], relatedRecipes:['yuzu-green-tea','ginger-jasmine','oolong-tapioca'], crossSell:['lychee-popping-boba','strawberry-fruit-syrup','konjac-crystal-pearls'] },
  { id:'tc03', handle:'ginger-lemon-tea-concentrate', title:'Ginger Lemon Tea Concentrate', subtitle:'Wellness tea concentrate — warming, zesty, energising', category:'Tea Concentrates', categoryHandle:'tea-concentrates', packSizes:['500ml'], price:850, unit:'per 500ml', sku:'TC-GINL-500', image:CAFE_IMG, tags:['tea-concentrate','wellness','ginger'], description:'Warming ginger and bright lemon tea concentrate. Strong performer in the wellness beverage category. Serve hot or iced. Pairs with honey and konjac toppings.', benefits:['Real ginger extract','Wellness positioning — strong category growth','Upsell with honey drizzle','Hot or iced serving'], usageDosage:{hot:'30ml + 200ml hot water',cold:'40ml + 250ml cold water + ice'}, applications:['Café','Hotel','Fine Dining'], faq:[{q:'Spice level?',a:'Mild-medium. Adjust by dilution ratio.'},{q:'Shelf life?',a:'12 months sealed.'}], relatedRecipes:['ginger-jasmine'], crossSell:['cold-brew-green-tea-concentrate','konjac-crystal-pearls'] },
];

// ─── SILKY MIX ────────────────────────────────────────────────────────────────
const SILKY_MIX: MockProduct[] = [
  { id:'sm01', handle:'silky-mix-original-base', title:'Silky Mix — Original Boba Base', subtitle:'Hot & cold all-in-one base. One SKU, unlimited recipes.', category:'Silky Mix Bases', categoryHandle:'silky-mix', packSizes:['500g','1.5 kg','5 kg','10 kg'], price:599, compareAtPrice:699, unit:'per kg', sku:'72002', image:CAFE_IMG, tags:['silky-mix','premix','bestseller','hot','cold'], badge:'Best Seller', isBestSeller:true, description:'The professional-grade boba base trusted by 100+ partners. Works hot or cold — one SKU, unlimited recipes. ₹19–20 per cup vs ₹22–25 imported.', benefits:['Hot & cold — one SKU replaces 3–4 ingredients','Cost per cup ₹19–20 (vs ₹22–25 imported)','3x higher repeat rate','FSSC 22000 certified','1-week dispatch vs 4–8 weeks for imports'], usageDosage:{hot:'10–15g per 100ml hot water or milk',cold:'30g per 350ml cold milk + ice',notes:'Adjust sweetness by varying dosage. Pair with Tapioca Pearls (SKU 17025).'}, applications:['Café & Tea Bar','QSR','Cloud Kitchen','Hotel & Resort','Distributor'], faq:[{q:'Shelf life?',a:'18 months sealed.'},{q:'Refrigeration needed?',a:'Store cool & dry. Refrigerate after opening.'},{q:'Vegan?',a:'Yes — fully plant-based.'},{q:'Minimum order?',a:'Retail: 500g. B2B: 5kg. Custom packs available.'},{q:'Dispatch time?',a:'48hr standard. 1 week for bulk/custom.'}], relatedRecipes:['classic-boba-milk-tea','brown-sugar-boba','thai-milk-tea'], crossSell:['tapioca-pearls-classic-black','strawberry-popping-boba','brown-sugar-syrup'] },
];

// ─── SPONGE CAKE BASE MIXES ───────────────────────────────────────────────────
const CAKE_MIXES: MockProduct[] = [
  { id:'sc01', handle:'sponge-cake-mix-spiced-chai', title:'Sponge Cake Base Mix — Spiced Chai', subtitle:'Professional chiffon sponge with authentic chai flavour', category:'Sponge Cake Base Mixes', categoryHandle:'sponge-cake-mixes', packSizes:['500g'], price:899, unit:'per pack', sku:'SCM-CHAI-001', image:`${CDN}/SpicedChai.jpg`, tags:['cake','dessert'], description:'Chiffon sponge cake base with authentic Indian spiced chai. Pairs with boba toppings for premium dessert menus.', benefits:['Consistent bakery-quality results','Pairs with boba toppings','Extends menu into desserts','No specialist baking skills needed'], usageDosage:{notes:'Mix 500g with eggs, oil, water per pack instructions. Bake at 170°C for 25–30 min.'}, applications:['Bakery & Dessert','Café','Cloud Kitchen','Fine Dining'], faq:[{q:'Best toppings?',a:'Boba pearls, popping boba, nata de coco and konjac jelly.'},{q:'Other flavours?',a:'Matcha, Jasmine Green Tea, Earl Grey, Black Tea.'}], relatedRecipes:['matcha-boba-sponge-cake'], crossSell:['tapioca-pearls-classic-black','strawberry-popping-boba','nata-de-coco'] },
  { id:'sc02', handle:'sponge-cake-mix-matcha', title:'Sponge Cake Base Mix — Matcha Tea', subtitle:'Premium Japanese matcha chiffon sponge', category:'Sponge Cake Base Mixes', categoryHandle:'sponge-cake-mixes', packSizes:['500g'], price:899, unit:'per pack', sku:'SCM-MATCHA-001', image:`${CDN}/MatchaTea.jpg`, tags:['cake','dessert','matcha'], isNew:true, badge:'New', description:'Premium matcha chiffon sponge with authentic Japanese green tea. Deep green colour. Instagram-worthy.', benefits:['Authentic matcha colour','Pairs with taro & red bean','Instagram-worthy deep green'], usageDosage:{notes:'Bake at 170°C for 25–30 min per pack instructions.'}, applications:['Bakery','Café','Fine Dining'], faq:[{q:'Add boba?',a:'Yes — matcha pairs beautifully with popping boba.'}], relatedRecipes:['matcha-boba-sponge-cake'], crossSell:['lychee-popping-boba','nata-de-coco'] },
  { id:'sc03', handle:'sponge-cake-mix-jasmine-green-tea', title:'Sponge Cake Base Mix — Jasmine Green Tea', subtitle:'Delicate jasmine-infused chiffon sponge', category:'Sponge Cake Base Mixes', categoryHandle:'sponge-cake-mixes', packSizes:['500g'], price:899, unit:'per pack', sku:'SCM-JASMN-001', image:`${CDN}/JasmineGreenTea.jpg`, tags:['cake','dessert','jasmine'], description:'Delicate jasmine green tea chiffon sponge. Floral, light and premium. A sophisticated dessert menu item.', benefits:['Delicate floral jasmine flavour','Elegant & premium positioning','Light, airy chiffon texture'], usageDosage:{notes:'Bake at 170°C for 25–30 min.'}, applications:['Fine Dining','Café','Hotel'], faq:[{q:'Best toppings?',a:'Lychee popping boba and nata de coco pair best.'}], relatedRecipes:['matcha-boba-sponge-cake'], crossSell:['lychee-popping-boba','nata-de-coco'] },
  { id:'sc04', handle:'sponge-cake-mix-earl-grey', title:'Sponge Cake Base Mix — Earl Grey', subtitle:'Classic bergamot Earl Grey chiffon sponge', category:'Sponge Cake Base Mixes', categoryHandle:'sponge-cake-mixes', packSizes:['500g'], price:899, unit:'per pack', sku:'SCM-EARL-001', image:`${CDN}/EarlGrey.jpg`, tags:['cake','dessert','earl-grey'], description:'Classic bergamot Earl Grey chiffon sponge. Sophisticated, fragrant and highly appealing to premium café customers.', benefits:['Classic bergamot flavour','Sophisticated premium appeal','Popular with premium café segment'], usageDosage:{notes:'Bake at 170°C for 25–30 min.'}, applications:['Fine Dining','Café','Hotel'], faq:[{q:'Best toppings?',a:'Popping boba and brown sugar drizzle.'}], relatedRecipes:['matcha-boba-sponge-cake'], crossSell:['strawberry-popping-boba','brown-sugar-syrup'] },
  { id:'sc05', handle:'sponge-cake-mix-black-tea', title:'Sponge Cake Base Mix — Black Tea', subtitle:'Bold Assam black tea chiffon sponge', category:'Sponge Cake Base Mixes', categoryHandle:'sponge-cake-mixes', packSizes:['500g'], price:899, unit:'per pack', sku:'SCM-BLKT-001', image:`${CDN}/BlackTea.jpg`, tags:['cake','dessert','black-tea'], description:'Bold Assam black tea chiffon sponge. Currently out of stock — join the waitlist.', benefits:['Bold Assam tea flavour','Strong Indian market appeal'], usageDosage:{notes:'Bake at 170°C for 25–30 min.'}, applications:['Café','Bakery'], faq:[{q:'When back in stock?',a:'WhatsApp us to join the waitlist.'}], relatedRecipes:['matcha-boba-sponge-cake'], crossSell:['tapioca-pearls-classic-black','brown-sugar-syrup'] },
];

// ─── INDUSTRIAL INGREDIENTS ───────────────────────────────────────────────────
const INDUSTRIAL: MockProduct[] = [
  { id:'in01', handle:'silky-mix-industrial-20kg', title:'Silky Mix Base — Industrial Pack (20 kg)', subtitle:'Factory-direct industrial beverage base supply', category:'Industrial Ingredients', categoryHandle:'industrial', packSizes:['20 kg','50 kg'], price:9800, unit:'per 20kg', sku:'72002-IND', image:CAFE_IMG, tags:['industrial','bulk','silky-mix'], badge:'Bulk Supply', description:'The same FSSC 22000 certified Silky Mix Base in industrial 20kg format. Designed for large manufacturers, institutional buyers and multi-outlet chains requiring consistent bulk supply.', benefits:['Factory-direct pricing — no distributor margin','FSSC 22000 certified batch','Custom formulation available on request','Consistent supply commitment'], usageDosage:{notes:'Same dosage as retail: 10–15g per 100ml. Adjust per formulation.'}, applications:['Industrial Manufacturer','Multi-outlet Chain','Institutional Supply'], faq:[{q:'MOQ?',a:'20kg. Custom packs from 50kg+.'},{q:'Private label?',a:'Yes — available at 100kg+ MOQ.'}], relatedRecipes:[], crossSell:['brown-sugar-syrup-industrial-20l'] },
  { id:'in02', handle:'brown-sugar-syrup-industrial-20l', title:'Brown Sugar Syrup — Industrial Drum (20 L)', subtitle:'High-volume brown sugar supply for chains & manufacturers', category:'Industrial Ingredients', categoryHandle:'industrial', packSizes:['20 L','50 L'], price:12000, unit:'per 20L', sku:'91171-IND', image:CAFE_IMG, tags:['industrial','bulk','syrup'], description:'Industrial format brown sugar syrup drum. Heat stable to 100°C. Same authentic Taiwanese-style formula as retail SKU 91171, in bulk packaging for high-volume operations.', benefits:['Bulk pricing vs retail format','Consistent batch quality','Heat stable to 100°C','Same formula as retail product'], usageDosage:{notes:'15–30ml per serving. Heat stable for baking and hot beverage applications.'}, applications:['Industrial','Multi-outlet Chain','Large Bakery'], faq:[{q:'MOQ?',a:'20L drum.'},{q:'Shelf life?',a:'24 months sealed.'}], relatedRecipes:[], crossSell:['silky-mix-industrial-20kg'] },
  { id:'in03', handle:'tapioca-starch-food-grade-25kg', title:'Tapioca Starch — Food Grade (25 kg)', subtitle:'Food-grade tapioca starch for manufacturers & processors', category:'Industrial Ingredients', categoryHandle:'industrial', packSizes:['25 kg'], price:3200, unit:'per 25kg', sku:'TS-FG-25K', image:BOBA_IMG, tags:['industrial','starch','bulk'], description:'Food-grade tapioca starch for manufacturers, processors and institutional buyers. FSSC 22000 certified, consistent quality, factory-direct pricing.', benefits:['FSSC 22000 certified','Consistent gelatinization quality','Competitive factory pricing','Custom granulation on request'], usageDosage:{notes:'Usage varies by application. Contact R&D team for formulation support.'}, applications:['Industrial Manufacturer','Food Processor'], faq:[{q:'MOQ?',a:'25kg.'},{q:'Custom grinding?',a:'Yes — contact our industrial team.'}], relatedRecipes:[], crossSell:['silky-mix-industrial-20kg'] },
];

export const MOCK_PRODUCTS: MockProduct[] = [
  ...SILKY_MIX,
  ...MILK_PREMIXES,
  ...TAPIOCA,
  ...POPPING_BOBA,
  ...NATA,
  ...KONJAC,
  ...SYRUPS,
  ...TEA_CONCENTRATES,
  ...CAKE_MIXES,
  ...INDUSTRIAL,
];

export const BEST_SELLERS = MOCK_PRODUCTS.filter((p) => p.isBestSeller);

export const MOCK_COLLECTIONS = [
  { handle:'silky-mix',           title:'Silky Mix Bases',          description:'All-in-one hot & cold beverage bases. One SKU, unlimited recipes.',                  products: SILKY_MIX },
  { handle:'milk-tea-premixes',   title:'Milk Tea Premixes',        description:'15+ milk tea flavours. Halal, Vegan, Non-GMO. Cost per cup from ₹19.',             products: MILK_PREMIXES },
  { handle:'tapioca-pearls',      title:'Tapioca Pearls',           description:'Standard, instant & flavoured tapioca pearls. Ready in 5 minutes.',               products: TAPIOCA },
  { handle:'popping-boba',        title:'Popping Boba',             description:'Juice-filled bursting pearls. 30+ flavours. No cooking. Premium upsell.',          products: POPPING_BOBA },
  { handle:'nata-de-coco',        title:'Nata de Coco',             description:'8–10mm premium coconut cubes. Ready to serve. No cooking required.',              products: NATA },
  { handle:'konjac-pearls',       title:'Konjac Pearls',            description:'Premium low-calorie gel pearls. No cooking. Floral, caramel & crystal varieties.', products: KONJAC },
  { handle:'syrups-concentrates', title:'Syrups & Concentrates',    description:'Fruit, floral & classic syrups for beverages, desserts and baking.',              products: SYRUPS },
  { handle:'tea-concentrates',    title:'Tea Concentrates',         description:'Masala chai, cold brew green tea & wellness concentrates. Just dilute and serve.',  products: TEA_CONCENTRATES },
  { handle:'sponge-cake-mixes',   title:'Sponge Cake Base Mixes',   description:'5 tea-infused flavours. ₹899 each. Extend your menu into premium desserts.',      products: CAKE_MIXES },
  { handle:'industrial',          title:'Industrial Ingredients',   description:'Bulk 20kg+ supply for manufacturers, chains & institutional buyers.',             products: INDUSTRIAL },
];

export const SIGNATURE_DRINKS = {
  fusion: [
    { title:'Mocha & Boba',            desc:'Rich espresso meets creamy milk tea. Topped with signature popping boba.',      image:CAFE_IMG, recipe:'classic-boba-milk-tea' },
    { title:'Taro & Matcha',           desc:'Earthy matcha blended with creamy taro. A premium fusion favourite.',             image:CAFE_IMG, recipe:'taro-matcha' },
    { title:'Thai Milk Tea',           desc:'Aromatic Thai tea with condensed milk and tapioca. A café classic.',              image:CAFE_IMG, recipe:'thai-milk-tea' },
    { title:'Brown Tiger Sugar Latte', desc:'Silky latte with caramelised brown sugar drizzle. Instagram-worthy every time.', image:CAFE_IMG, recipe:'brown-sugar-boba' },
  ],
  coolers: [
    { title:'Sparkling Kaffir Lime',   desc:'Zesty kaffir lime with a sparkling finish. Tropical and bold.',                  image:CAFE_IMG, recipe:'sparkling-kaffir-lime' },
    { title:'Yuzu Green Tea',          desc:'Bright yuzu citrus with delicate green tea. Light, refreshing, premium.',         image:CAFE_IMG, recipe:'yuzu-green-tea' },
    { title:'Ginger Jasmine',          desc:'Warming ginger spice with floral jasmine. Wellness-focused favourite.',           image:CAFE_IMG, recipe:'ginger-jasmine' },
    { title:'Oolong with Tapioca',     desc:'Smooth oolong base with chewy tapioca pearls. A timeless combination.',           image:CAFE_IMG, recipe:'oolong-tapioca' },
  ],
};

export const MOCK_RECIPES: MockRecipe[] = [
  {
    slug:'classic-boba-milk-tea', title:'Classic Boba Milk Tea', category:'Milk Teas',
    prepTime:'8 min', servingSize:'350ml', difficulty:'Easy', image:CAFE_IMG,
    description:'The original boba milk tea. Consistent, crowd-pleasing, highly profitable. The backbone of any boba menu.',
    ingredients:[
      { name:'Silky Mix — Original Base',     dosage:'30g',  sku:'72002', productHandle:'silky-mix-original-base' },
      { name:'Black Tapioca Pearls (cooked)', dosage:'50g',  sku:'17025', productHandle:'tapioca-pearls-classic-black' },
      { name:'Cold Milk or Water',            dosage:'280ml' },
      { name:'Ice',                           dosage:'100g' },
    ],
    steps:[
      'Cook tapioca pearls: boil 5 minutes, drain, coat in brown sugar syrup.',
      'Add 30g Silky Mix to shaker.',
      'Add 280ml cold milk and 100g ice.',
      'Shake vigorously 15 seconds until frothy.',
      'Add cooked pearls to cup.',
      'Pour shaken mixture over pearls. Serve with wide boba straw.',
    ],
    sellingNotes:'Cost per cup: ₹22–28. Selling price: ₹120–180. Margin: 75–85%. Upsell popping boba for +₹30.',
    applicationTypes:['Café','QSR','Cloud Kitchen'],
    linkedProducts:['silky-mix-original-base','tapioca-pearls-classic-black','brown-sugar-syrup'],
  },
  {
    slug:'brown-sugar-boba', title:'Brown Sugar Tiger Boba', category:'Signature Fusions',
    prepTime:'10 min', servingSize:'350ml', difficulty:'Medium', image:CAFE_IMG,
    description:'The viral tiger-stripe boba that drives social media shares and repeat visits.',
    ingredients:[
      { name:'Silky Mix — Original Base',     dosage:'30g',  sku:'72002', productHandle:'silky-mix-original-base' },
      { name:'Black Tapioca Pearls (cooked)', dosage:'60g',  sku:'17025', productHandle:'tapioca-pearls-classic-black' },
      { name:'Brown Sugar Syrup',             dosage:'25ml', sku:'91171', productHandle:'brown-sugar-syrup' },
      { name:'Fresh Milk',                    dosage:'280ml' },
      { name:'Ice',                           dosage:'100g' },
    ],
    steps:[
      'Cook pearls and coat in brown sugar syrup while hot.',
      'Drizzle brown sugar syrup inside glass in tiger stripe pattern.',
      'Add hot coated pearls immediately.',
      'Fill glass with ice.',
      'Shake Silky Mix with milk, pour slowly over ice.',
      'Serve immediately for maximum visual impact.',
    ],
    sellingNotes:'Cost per cup: ₹28–35. Selling price: ₹150–220. High Instagram-ability.',
    applicationTypes:['Café','Fine Dining','QSR'],
    linkedProducts:['silky-mix-original-base','tapioca-pearls-classic-black','brown-sugar-syrup'],
  },
  {
    slug:'thai-milk-tea', title:'Thai Milk Tea', category:'Milk Teas',
    prepTime:'8 min', servingSize:'350ml', difficulty:'Easy', image:CAFE_IMG,
    description:'Aromatic Thai tea with condensed milk and tapioca. A café classic with strong repeat purchase behaviour.',
    ingredients:[
      { name:'Thai Tea Premix',               dosage:'40g',  sku:'MTP-THAI-800', productHandle:'thai-tea-bubble-tea-premix' },
      { name:'Condensed Milk',                dosage:'30ml' },
      { name:'Black Tapioca Pearls (cooked)', dosage:'50g',  sku:'17025', productHandle:'tapioca-pearls-classic-black' },
      { name:'Ice',                           dosage:'150g' },
    ],
    steps:[
      'Mix Thai Tea Premix with 280ml cold water.',
      'Add condensed milk and stir.',
      'Add cooked tapioca pearls to cup.',
      'Fill with ice and pour tea mixture. Serve with boba straw.',
    ],
    sellingNotes:'Cost per cup: ₹18–24. Selling price: ₹100–160. Upsell popping boba.',
    applicationTypes:['Café','QSR','Cloud Kitchen'],
    linkedProducts:['thai-tea-bubble-tea-premix','tapioca-pearls-classic-black'],
  },
  {
    slug:'sparkling-kaffir-lime', title:'Sparkling Kaffir Lime', category:'Fruit Coolers',
    prepTime:'5 min', servingSize:'350ml', difficulty:'Easy', image:CAFE_IMG,
    description:'Zesty kaffir lime with a sparkling finish. Tropical and bold. High margin, zero cooking.',
    ingredients:[
      { name:'Kaffir Lime Syrup',          dosage:'30ml' },
      { name:'Passion Fruit Popping Boba', dosage:'40g',  sku:'PB-PASS-400', productHandle:'passion-fruit-popping-boba' },
      { name:'Sparkling Water',            dosage:'280ml' },
      { name:'Ice',                        dosage:'100g' },
    ],
    steps:[
      'Add popping boba to serving glass.',
      'Add ice.',
      'Mix kaffir lime syrup with sparkling water and pour over ice.',
      'Garnish with fresh kaffir lime leaf.',
    ],
    sellingNotes:'Cost per cup: ₹15–20. Selling price: ₹140–180. Zero cooking. Premium look.',
    applicationTypes:['Café','Fine Dining','Cloud Kitchen'],
    linkedProducts:['passion-fruit-popping-boba'],
  },
  {
    slug:'taro-matcha', title:'Taro & Matcha Fusion', category:'Signature Fusions',
    prepTime:'8 min', servingSize:'350ml', difficulty:'Medium', image:CAFE_IMG,
    description:'Earthy matcha blended with creamy taro. A premium fusion favourite that commands ₹160–220 on the menu.',
    ingredients:[
      { name:'Taro Bubble Tea Premix',        dosage:'40g', sku:'MTP-TARO-1K', productHandle:'taro-bubble-tea-premix' },
      { name:'Matcha Powder',                 dosage:'5g' },
      { name:'Silky Mix — Original Base',     dosage:'15g', sku:'72002', productHandle:'silky-mix-original-base' },
      { name:'Cold Milk',                     dosage:'250ml' },
      { name:'Ice',                           dosage:'100g' },
    ],
    steps:[
      'Mix taro premix with 250ml cold milk in shaker.',
      'In a separate bowl, whisk 5g matcha with 30ml hot water until smooth paste.',
      'Add ice to serving glass.',
      'Pour taro milk over ice.',
      'Drizzle matcha on top — do not fully mix. Serve with swirl visible.',
    ],
    sellingNotes:'Cost per cup: ₹30–40. Selling price: ₹160–220. Upsell konjac or popping boba.',
    applicationTypes:['Café','Fine Dining'],
    linkedProducts:['taro-bubble-tea-premix','silky-mix-original-base'],
  },
  {
    slug:'iced-taro-boba', title:'Iced Taro Boba', category:'Milk Teas',
    prepTime:'8 min', servingSize:'350ml', difficulty:'Easy', image:CAFE_IMG,
    description:'The classic iced taro milk tea with chewy black tapioca pearls. A café staple with strong repeat purchase rate.',
    ingredients:[
      { name:'Taro Bubble Tea Premix',        dosage:'40g', sku:'MTP-TARO-1K', productHandle:'taro-bubble-tea-premix' },
      { name:'Black Tapioca Pearls (cooked)', dosage:'50g', sku:'17025', productHandle:'tapioca-pearls-classic-black' },
      { name:'Cold Milk',                     dosage:'280ml' },
      { name:'Ice',                           dosage:'100g' },
    ],
    steps:[
      'Cook tapioca pearls 5 minutes, drain, coat in brown sugar syrup.',
      'Add pearls to serving cup.',
      'Shake taro premix with cold milk and ice for 15 seconds.',
      'Pour over pearls. Serve with wide boba straw.',
    ],
    sellingNotes:'Cost per cup: ₹22–28. Selling price: ₹120–170. Top 3 bestseller in most café formats.',
    applicationTypes:['Café','QSR','Cloud Kitchen'],
    linkedProducts:['taro-bubble-tea-premix','tapioca-pearls-classic-black'],
  },
  {
    slug:'yuzu-green-tea', title:'Yuzu Green Tea Cooler', category:'Fruit Coolers',
    prepTime:'5 min', servingSize:'350ml', difficulty:'Easy', image:CAFE_IMG,
    description:'Bright yuzu citrus with delicate cold-brew green tea. Light, refreshing and premium. No cooking required.',
    ingredients:[
      { name:'Cold Brew Green Tea Concentrate', dosage:'40ml', sku:'TC-GRNT-500', productHandle:'cold-brew-green-tea-concentrate' },
      { name:'Yuzu / Lemon Syrup',              dosage:'25ml' },
      { name:'Lychee Popping Boba',             dosage:'40g',  sku:'PB-LYCHE-1K', productHandle:'lychee-popping-boba' },
      { name:'Sparkling Water',                 dosage:'250ml' },
      { name:'Ice',                             dosage:'100g' },
    ],
    steps:[
      'Add lychee popping boba to glass.',
      'Add ice.',
      'Mix green tea concentrate with yuzu/lemon syrup.',
      'Pour sparkling water and tea mixture over ice.',
      'Garnish with lemon slice if available.',
    ],
    sellingNotes:'Cost per cup: ₹18–25. Selling price: ₹150–190. Zero cooking. High premium appeal.',
    applicationTypes:['Café','Fine Dining','Cloud Kitchen'],
    linkedProducts:['cold-brew-green-tea-concentrate','lychee-popping-boba'],
  },
  {
    slug:'ginger-jasmine', title:'Ginger Jasmine Wellness Tea', category:'Hot Beverages',
    prepTime:'5 min', servingSize:'280ml', difficulty:'Easy', image:CAFE_IMG,
    description:'Warming ginger spice with floral jasmine. A wellness-focused favourite with strong repeat purchase behaviour.',
    ingredients:[
      { name:'Ginger Lemon Tea Concentrate', dosage:'35ml', sku:'TC-GINL-500', productHandle:'ginger-lemon-tea-concentrate' },
      { name:'Konjac Lychee Pearls (opt.)',  dosage:'30g',  sku:'KJC-LYCHE-500', productHandle:'konjac-lychee-pearls' },
      { name:'Hot Water',                    dosage:'220ml' },
      { name:'Honey',                        dosage:'10ml' },
    ],
    steps:[
      'Heat water to 85°C.',
      'Mix ginger lemon concentrate with hot water.',
      'Add honey and stir.',
      'Add konjac pearls for iced version (serve cold over ice).',
      'Garnish with lemon wheel.',
    ],
    sellingNotes:'Cost per cup: ₹12–18. Selling price: ₹100–140. Strong wellness positioning. High margin.',
    applicationTypes:['Café','Hotel','Fine Dining'],
    linkedProducts:['ginger-lemon-tea-concentrate','konjac-lychee-pearls'],
  },
  {
    slug:'oolong-tapioca', title:'Oolong with Tapioca Pearls', category:'Milk Teas',
    prepTime:'8 min', servingSize:'350ml', difficulty:'Easy', image:CAFE_IMG,
    description:'Smooth oolong tea base with chewy tapioca pearls and honey. A timeless, sophisticated combination.',
    ingredients:[
      { name:'Cold Brew Green Tea Concentrate', dosage:'35ml', sku:'TC-GRNT-500', productHandle:'cold-brew-green-tea-concentrate' },
      { name:'Black Tapioca Pearls (cooked)',   dosage:'50g',  sku:'17025', productHandle:'tapioca-pearls-classic-black' },
      { name:'Cold Milk',                       dosage:'240ml' },
      { name:'Honey',                           dosage:'15ml' },
      { name:'Ice',                             dosage:'100g' },
    ],
    steps:[
      'Cook tapioca pearls and coat in honey.',
      'Add pearls to serving glass.',
      'Mix green tea concentrate with cold milk and honey.',
      'Pour over ice and pearls.',
      'Serve with wide boba straw.',
    ],
    sellingNotes:'Cost per cup: ₹20–28. Selling price: ₹130–180. Elegant positioning. Strong café repeat.',
    applicationTypes:['Café','Fine Dining','Hotel'],
    linkedProducts:['cold-brew-green-tea-concentrate','tapioca-pearls-classic-black'],
  },
  {
    slug:'matcha-boba-sponge-cake', title:'Matcha Boba Sponge Cake', category:'Desserts & Cakes',
    prepTime:'35 min', servingSize:'8 slices', difficulty:'Medium', image:`${CDN}/MatchaTea.jpg`,
    description:'Premium matcha chiffon sponge topped with lychee popping boba and nata de coco. Extends your menu into high-margin desserts.',
    ingredients:[
      { name:'Sponge Cake Mix — Matcha', dosage:'500g', sku:'SCM-MATCHA-001', productHandle:'sponge-cake-mix-matcha' },
      { name:'Lychee Popping Boba',      dosage:'100g', sku:'PB-LYCHE-1K',    productHandle:'lychee-popping-boba' },
      { name:'Nata de Coco',             dosage:'80g',  sku:'NDC-001',         productHandle:'nata-de-coco' },
      { name:'Eggs',                     dosage:'3 large' },
      { name:'Vegetable Oil',            dosage:'60ml' },
      { name:'Water',                    dosage:'120ml' },
    ],
    steps:[
      'Preheat oven to 170°C.',
      'Mix cake base, eggs, oil and water per pack instructions.',
      'Pour into 8-inch cake tin.',
      'Bake 25–30 minutes until a skewer comes out clean.',
      'Cool completely before topping.',
      'Decorate with lychee popping boba and nata de coco.',
    ],
    sellingNotes:'Cost per cake: ₹380–420. Slice selling price: ₹120–160. High-margin dessert extension.',
    applicationTypes:['Bakery & Dessert','Café','Fine Dining'],
    linkedProducts:['sponge-cake-mix-matcha','lychee-popping-boba','nata-de-coco'],
  },
];
