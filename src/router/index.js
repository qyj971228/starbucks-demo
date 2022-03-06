import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = resolve => require(['../views/Home/Home.vue'], resolve)
const Home = resolve => require(['../views/Home/Home.vue'], resolve)

const Login = resolve => require(['../views/Profile/Login'], resolve)
const Register = resolve => require(['../views/Profile/Register'], resolve)
const AboutClub = resolve => require(['../views/Profile/AboutClub'], resolve)

const AllMenu = resolve => require(['../views/Menu/AllMenu'], resolve)

const Coffee = resolve => require(['../views/Menu/Coffee/Coffee'], resolve)

const StarbucksReserve = resolve => require(['../views/Menu/Coffee/StarbucksReserve/StarbucksReserve'], resolve)
const ChinaQingkaiFarm = resolve => require(['../views/Menu/Coffee/StarbucksReserve/china-qingkai-farm'], resolve)
const ChinaYunnanPuerBaoshan = resolve => require(['../views/Menu/Coffee/StarbucksReserve/china-yunnan-puer-baoshan'], resolve)
const ColombiaMonksOfSanRoque = resolve => require(['../views/Menu/Coffee/StarbucksReserve/colombia-monks-of-san-roque'], resolve)
const EthiopiaBittaFarm = resolve => require(['../views/Menu/Coffee/StarbucksReserve/ethiopia-bitta-farm'], resolve)
const SumatraWahanaEstate = resolve => require(['../views/Menu/Coffee/StarbucksReserve/sumatra-wahana-estate'], resolve)

const WholeBean = resolve => require(['../views/Menu/Coffee/WholeBean/WholeBean'], resolve)

const DarkRoastBean = resolve => require(['../views/Menu/Coffee/WholeBean/DarkRoastBean/DarkRoastBean'], resolve)
const CaffeVeronaCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/DarkRoastBean/caffe-verona-coffee-beans'], resolve)
const EspressoRoastCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/DarkRoastBean/espresso-roast-coffee-beans'], resolve)
const ItalianRoastCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/DarkRoastBean/italian-roast-coffee-beans'], resolve)
const KomodoDragonBlendCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/DarkRoastBean/komodo-dragon-blend-coffee-beans'], resolve)
const SumatraCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/DarkRoastBean/sumatra-coffee-beans'], resolve)

const MediumRoastBean = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/MediumRoastBean'], resolve)
const SouthOfTheClouds = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/south-of-the-clouds'], resolve)
const BreakfastBlendCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/breakfast-blend-coffee-beans'], resolve)
const Colombia = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/colombia'], resolve)
const EthiopiaCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/ethiopia-coffee-beans'], resolve)
const GuatemalaAntiguaCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/guatemala-antigua-coffee-beans'], resolve)
const HouseBlendCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/house-blend-coffee-beans'], resolve)
const KenyaCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/kenya-coffee-beans'], resolve)
const PikePlaceRoastCoffeeBeans = resolve => require(['../views/Menu/Coffee/WholeBean/MediumRoastBean/pike-place-roast-coffee-beans'], resolve)

const StarbucksVia = resolve => require(['../views/Menu/Coffee/StarbucksVia/StarbucksVia'], resolve)

const ViaBlack = resolve => require(['../views/Menu/Coffee/StarbucksVia/ViaBlack/ViaBlack'], resolve)
const ViaColombia = resolve => require(['../views/Menu/Coffee/StarbucksVia/ViaBlack/via-colombia'], resolve)
const ViaItalianRoast = resolve => require(['../views/Menu/Coffee/StarbucksVia/ViaBlack/via-italian-roast'], resolve)

const ViaDairy = resolve => require(['../views/Menu/Coffee/StarbucksVia/ViaDairy/ViaDairy'], resolve)
const ViaCaffeMocha = resolve => require(['../views/Menu/Coffee/StarbucksVia/ViaDairy/via-caffe-mocha'], resolve)
const ViaCaramelLatte = resolve => require(['../views/Menu/Coffee/StarbucksVia/ViaDairy/via-caramel-latte'], resolve)
const ViaVanillaLatte = resolve => require(['../views/Menu/Coffee/StarbucksVia/ViaDairy/via-vanilla-latte'], resolve)

const StarbucksOrigami = resolve => require(['../views/Menu/Coffee/StarbucksOrigami/StarbucksOrigami'], resolve)
const AboutOrigami = resolve => require(['../views/Menu/Coffee/StarbucksOrigami/AboutOrigami'], resolve)
const DarkRoastOrigami = resolve => require(['../views/Menu/Coffee/StarbucksOrigami/DarkRoastOrigami/DarkRoastOrigami'], resolve)
const OrigamiVerona = resolve => require(['../views/Menu/Coffee/StarbucksOrigami/DarkRoastOrigami/origami-verona'], resolve)
const MediumRoastOrigami = resolve => require(['../views/Menu/Coffee/StarbucksOrigami/MediumRoastOrigami/MediumRoastOrigami'], resolve)
const OrigamiPikePlace = resolve => require(['../views/Menu/Coffee/StarbucksOrigami/MediumRoastOrigami/origami-pike-place'], resolve)

const Drink = resolve => require(['../views/Menu/Drink/Drink'], resolve)

const CoffeePlusIceCream = resolve => require(['../views/Menu/Drink/CoffeePlusIceCream/CoffeePlusIceCream'], resolve)

const ColdBrew = resolve => require(['../views/Menu/Drink/ColdBrew/ColdBrew'], resolve)

const Espressos = resolve => require(['../views/Menu/Drink/Espresso/Espressos'], resolve)
const CaffeAmericano = resolve => require(['../views/Menu/Drink/Espresso/caffe-americano'], resolve)
const CaffeLatte = resolve => require(['../views/Menu/Drink/Espresso/caffe-latte'], resolve)
const CaffeMocha = resolve => require(['../views/Menu/Drink/Espresso/caffe-mocha'], resolve)
const Cappuccino = resolve => require(['../views/Menu/Drink/Espresso/cappuccino'], resolve)
const CaramelMacchiato = resolve => require(['../views/Menu/Drink/Espresso/caramel-macchiato'], resolve)
const Espresso = resolve => require(['../views/Menu/Drink/Espresso/espresso'], resolve)
const FlatWhite = resolve => require(['../views/Menu/Drink/Espresso/flat-white'], resolve)
const HazeluntFlavoredLatte = resolve => require(['../views/Menu/Drink/Espresso/hazelnut-flavored-latte'], resolve)
const VanillaFlavoredLatte = resolve => require(['../views/Menu/Drink/Espresso/vanilla-flavored-latte'], resolve)

const FrappuccinoBlendedBeverage = resolve => require(['../views/Menu/Drink/FrappuccinoBlendedBeverage/FrappuccinoBlendedBeverage'], resolve)
const CaramelEspressoFrappuccino = resolve => require(['../views/Menu/Drink/FrappuccinoBlendedBeverage/caramel-espresso-frappuccino'], resolve)
const GreenTeaFrappuccino = resolve => require(['../views/Menu/Drink/FrappuccinoBlendedBeverage/green-tea-frappuccino'], resolve)
const MangoPassionTea = resolve => require(['../views/Menu/Drink/FrappuccinoBlendedBeverage/mango-passion-tea'], resolve)
const MochaFrappuccino = resolve => require(['../views/Menu/Drink/FrappuccinoBlendedBeverage/mocha-frappuccino'], resolve)
const MochaJavaChipFrappuccino = resolve => require(['../views/Menu/Drink/FrappuccinoBlendedBeverage/mocha-java-chip-frappuccino'], resolve)
const VanillaFlavoredCreamFrappuccinoBlendedBeverage = resolve => require(['../views/Menu/Drink/FrappuccinoBlendedBeverage/vanilla-flavored-cream-frappuccino-blended-beverage'], resolve)

const ModernMixology = resolve => require(['../views/Menu/Drink/ModernMixology/ModernMixology'], resolve)
const SparklingEspressoTonic = resolve => require(['../views/Menu/Drink/ModernMixology/sparkling-espresso-tonic'], resolve)
const PeachShrubFizz = resolve => require(['../views/Menu/Drink/ModernMixology/peach-shrub-fizz'], resolve)
const TripleCitrus = resolve => require(['../views/Menu/Drink/ModernMixology/triple-citrus'], resolve)
const ColdBrewLemonSour = resolve => require(['../views/Menu/Drink/ModernMixology/cold-brew-lemon-sour'], resolve)

const NitroColdBrew = resolve => require(['../views/Menu/Drink/NitroColdBrew/NitroColdBrew'], resolve)

const SignatureChocolateBeverage = resolve => require(['../views/Menu/Drink/SignatureChocolateBeverage/SignatureChocolateBeverage'], resolve)
const SignatureChocolateBeverage2 = resolve => require(['../views/Menu/Drink/SignatureChocolateBeverage/signature-chocolate-beverage'], resolve)

const Teavana = resolve => require(['../views/Menu/Drink/Teavana/Teavana'], resolve)
const BlackTeaLatte = resolve => require(['../views/Menu/Drink/Teavana/black-tea-latte'], resolve)
const BlackcurrantRaspberry = resolve => require(['../views/Menu/Drink/Teavana/blackcurrant-raspberry'], resolve)
const CitrusGrapefruitHerbalTea = resolve => require(['../views/Menu/Drink/Teavana/citrus-grapefruit-herbal-tea'], resolve)
const GreenTeaLatte = resolve => require(['../views/Menu/Drink/Teavana/green-tea-latte'], resolve)
const IcedShakenHoneyRubyGrapefruitBlackTea = resolve => require(['../views/Menu/Drink/Teavana/iced-shaken-honey-ruby-grapefruit-black-tea'], resolve)
const IcedShakenMangoHerbalJuicedTea = resolve => require(['../views/Menu/Drink/Teavana/iced-shaken-mango-herbal-juiced-tea'], resolve)
const IcedShakenPeachGreenTea = resolve => require(['../views/Menu/Drink/Teavana/iced-shaken-peach-green-tea'], resolve)
const PearRooibosTea = resolve => require(['../views/Menu/Drink/Teavana/pear-rooibos-tea'], resolve)

const Food = resolve => require(['../views/Menu/Food/Food'], resolve)

const Bakery = resolve => require(['../views/Menu/Food/Bakery/Bakery'], resolve)
const AmericanStylePancakes = resolve => require(['../views/Menu/Food/Bakery/american-style-pancakes'], resolve)
const BlueberryMuffin = resolve => require(['../views/Menu/Food/Bakery/blueberry-muffin'], resolve)
const ChocolateMuffin = resolve => require(['../views/Menu/Food/Bakery/chocolate-muffin'], resolve)
const CinnamonSwirl = resolve => require(['../views/Menu/Food/Bakery/cinnamon-swirl'], resolve)
const FrenchButterCroissant = resolve => require(['../views/Menu/Food/Bakery/french-butter-croissant'], resolve)
const FrenchCaramelBread = resolve => require(['../views/Menu/Food/Bakery/french-caramel-bread'], resolve)
const HazelnutCroissant = resolve => require(['../views/Menu/Food/Bakery/hazelnut-croissant'], resolve)
const HoneyRaisinScone = resolve => require(['../views/Menu/Food/Bakery/honey-raisin-scone'], resolve)
const OatCaramelPuddingBread = resolve => require(['../views/Menu/Food/Bakery/oat-caramel-pudding-bread'], resolve)
const PremiumChocolateCroissant = resolve => require(['../views/Menu/Food/Bakery/premium-chocolate-croissant'], resolve)
const RaisinScone = resolve => require(['../views/Menu/Food/Bakery/raisin-scone'], resolve)
const RaisinsWalnutBread = resolve => require(['../views/Menu/Food/Bakery/raisins-walnut-bread'], resolve)
const RedBeanOatsScone = resolve => require(['../views/Menu/Food/Bakery/red-bean-oats-scone'], resolve)
const WholeWheatWalnutMuffin = resolve => require(['../views/Menu/Food/Bakery/whole-wheat-walnut-muffin'], resolve)

const CakeDessert = resolve => require(['../views/Menu/Food/CakeDessert/CakeDessert'], resolve)
const BlueberryAndCookieStyleCheesecake = resolve => require(['../views/Menu/Food/CakeDessert/blueberry-and-cookie-style-cheesecake'], resolve)
const ClassicSwissRollCake = resolve => require(['../views/Menu/Food/CakeDessert/classic-swiss-roll-cake'], resolve)
const Eclair = resolve => require(['../views/Menu/Food/CakeDessert/eclair'], resolve)
const Macaron = resolve => require(['../views/Menu/Food/CakeDessert/macaron'], resolve)
const NewYorkStyleCreamyCheesecake = resolve => require(['../views/Menu/Food/CakeDessert/new-york-style-creamy-cheesecake'], resolve)
const StarbucksCoffeeTiramisu = resolve => require(['../views/Menu/Food/CakeDessert/starbucks-coffee-tiramisu'], resolve)
const TripleDarkChocolateCake = resolve => require(['../views/Menu/Food/CakeDessert/triple-dark-chocolate-cake'], resolve)

const GreatBreakfast = resolve => require(['../views/Menu/Food/GreatBreakfast/GreatBreakfast'], resolve)
const Package = resolve => require(['../views/Menu/Food/Package/Package'], resolve)
const Cashews = resolve => require(['../views/Menu/Food/Package/cashews'], resolve)
const FruitSalad = resolve => require(['../views/Menu/Food/Package/fruit-salad'], resolve)
const Fruitnnuts = resolve => require(['../views/Menu/Food/Package/fruitnnuts'], resolve)
const Lollipops = resolve => require(['../views/Menu/Food/Package/lollipops'], resolve)
const Shortbread = resolve => require(['../views/Menu/Food/Package/shortbread'], resolve)
const StarbucksChewingGum = resolve => require(['../views/Menu/Food/Package/starbucks-chewing-gum'], resolve)
const StarbucksMints = resolve => require(['../views/Menu/Food/Package/Starbucks-mints'], resolve)
const Waferrolls = resolve => require(['../views/Menu/Food/Package/waferrolls'], resolve)

const Sandwich = resolve => require(['../views/Menu/Food/Sandwich/Sandwich'], resolve)
const AvocadoAndChickenBagel = resolve => require(['../views/Menu/Food/Sandwich/avocado-and-chicken-bagel'], resolve)
const BaconAndEggCroissantBun = resolve => require(['../views/Menu/Food/Sandwich/bacon-and-egg-croissant-bun'], resolve)
const BaconAndEggWrap = resolve => require(['../views/Menu/Food/Sandwich/bacon-and-egg-wrap'], resolve)
const BeefBaguette = resolve => require(['../views/Menu/Food/Sandwich/beef-baguette'], resolve)
const BeefCheeseCroissant = resolve => require(['../views/Menu/Food/Sandwich/beef-cheese-croissant'], resolve)
const CaesarChickenWrap = resolve => require(['../views/Menu/Food/Sandwich/caesar-chicken-wrap'], resolve)
const ChickenPanini = resolve => require(['../views/Menu/Food/Sandwich/chicken-panini'], resolve)
const EggsMushroomShrimpWrap = resolve => require(['../views/Menu/Food/Sandwich/eggs-mushroom-shrimp-wrap'], resolve)
const HamAndCheeseCroissant = resolve => require(['../views/Menu/Food/Sandwich/ham-and-cheese-croissant'], resolve)
const HamAnddoubleCheeseCroqueMonsieur = resolve => require(['../views/Menu/Food/Sandwich/ham-and-double-cheese-croque-monsieur'], resolve)
const HamAndGoudaSandwich = resolve => require(['../views/Menu/Food/Sandwich/ham-and-gouda-sandwich'], resolve)
const PastramiSandwich = resolve => require(['../views/Menu/Food/Sandwich/pastrami-sandwich'], resolve)
const RoastedFrenchHamEggSandwich = resolve => require(['../views/Menu/Food/Sandwich/roasted-french-ham-egg-sandwich'], resolve)
const SlowRoastedHamCheeseCiabatta = resolve => require(['../views/Menu/Food/Sandwich/slow-roasted-ham-cheese-ciabatta'], resolve)
const TunaPanini = resolve => require(['../views/Menu/Food/Sandwich/tuna-panini'], resolve)
const TurkeyBaconEnglishMuffin = resolve => require(['../views/Menu/Food/Sandwich/turkey-bacon-english-muffin'], resolve)

const Yoghurt = resolve => require(['../views/Menu/Food/Yoghurt/Yoghurt'], resolve)
const GreekFlavoredYoghurtMixedBerry = resolve => require(['../views/Menu/Food/Yoghurt/greek-flavored-yoghurt-mixed-berry'], resolve)
const GreekFlavoredYoghurtYellowPeach = resolve => require(['../views/Menu/Food/Yoghurt/greek-flavored-yoghurt-yellow-peach'], resolve)

const Product = resolve => require(['../views/Menu/Product/Product.vue'], resolve)
const ReserveStoreMerchandise = resolve => require(['../views/Menu/Product/ReserveStoreMerchandise/ReserveStoreMerchandise.vue'], resolve)
const ReserveGlassCup9oz = resolve => require(['../views/Menu/Product/ReserveStoreMerchandise/9oz-reserve-glass-cup.vue'], resolve)
const BlackBronzeBrandHandleMug12oz = resolve => require(['../views/Menu/Product/ReserveStoreMerchandise/12oz-black-bronze-brand-handle-mug.vue'], resolve)
const ChampagneGoldBrandStainlessSteelCup16oz = resolve => require(['../views/Menu/Product/ReserveStoreMerchandise/16oz-champagne-gold-brand-stainless-steel-cup.vue'], resolve)
const GoldLogoWaterBottle500ml = resolve => require(['../views/Menu/Product/ReserveStoreMerchandise/500ml-gold-logo-water-bottle.vue'], resolve)

const CoreMerchandise2017 = resolve => require(['../views/Menu/Product/CoreMerchandise2017/CoreMerchandise2017.vue'], resolve)
const BlackGildedBrandMug12oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/12ozBlackGildedBrandMug.vue'], resolve)
const SilverWhiteBrandHandleMug12oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/12ozSilverWhiteBrandHandleMug.vue'], resolve)
const TrueEssenceStainlessSteelBottle12oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/12ozTrueEssenceStainlessSteelBottle.vue'], resolve)
const WhiteFrostedGlassCup12oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/12ozWhiteFrostedGlassCup.vue'], resolve)
const WhiteGildedBrandMug12oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/12ozWhiteGildedBrandMug.vue'], resolve)
const BlackGildedBrandMug16oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/16ozBlackGildedBrandMug.vue'], resolve)
const BlackWoodenStainlessSteelBottleWithStrap16oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/16ozBlackWoodenStainlessSteelBottleWithStrap.vue'], resolve)
const TrueEssenceStainlessSteelTravelBottle16oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/16ozTrueEssenceStainlessSteelTravelBottle.vue'], resolve)
const WhiteGildedBrandMug16oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/16ozWhiteGildedBrandMug.vue'], resolve)
const BlackGildedBrandMug3oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/3ozBlackGildedBrandMug.vue'], resolve)
const WhiteGildedBrandMug3oz = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/3ozWhiteGildedBrandMug.vue'], resolve)
const BlackLogoWaterBottle500ml = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/500mlBlackLogoWaterBottle.vue'], resolve)
const WhiteLogoWaterBottle500ml = resolve =>require(['../views/Menu/Product/CoreMerchandise2017/500mlWhiteLogoWaterBottle.vue'], resolve)

const App = resolve =>require(['../views/Apps/App'], resolve)
const Watch = resolve =>require(['../views/Apps/Watch/Watch'], resolve)

const GiftCardAbout = resolve => require(['../views/GiftCard/About/About'], resolve)
const GiftCardQuery = resolve => require(['../views/GiftCard/Query'], resolve)
const GiftCardInvoice = resolve => require(['../views/GiftCard/Invoice'], resolve)

const Reserve = resolve => require(['../views/Reserve/Reserve'], resolve)

const StarbucksNow = resolve => require(['../views/StarbucksNow/StarbucksNow'], resolve)

const StarbucksDeliversInfo = resolve => require(['../views/StarbucksDeliversInfo/StarbucksDeliversInfo'], resolve)

const NotFoundComponent = resolve => require(['../views/NotFound/NotFoundComponent'], resolve)

Vue.use(VueRouter)

const routes = [
  {path:'', redirect: '/home'},
  {path: '/home', name: '首页', component: Home},

  {path: '/profile/login', name: '登录', component: Login},
  {path: '/profile/register', name: '注册', component: Register},
  {path: '/profile/aboutclub', name: '关于俱乐部', component: AboutClub},

  {path: '/menu/allmenu', name: '全部', component: AllMenu},

  {path: '/menu/coffee', name: '咖啡产品', component: Coffee},

  {path: '/menu/coffee/starbucks-origami', name: 'Origami™', component: StarbucksOrigami},
  {path: '/menu/coffee/starbucks-origami/about-origami', name: '关于Origami™', component: AboutOrigami},
  {path: '/menu/coffee/starbucks-origami/dark-roast', name: 'Origami™ 深度烘焙', component: DarkRoastOrigami},
  {path: '/menu/coffee/starbucks-origami/dark-roast-origami/origami-verona', name: '', component: OrigamiVerona},
  {path: '/menu/coffee/starbucks-origami/medium-roast', name: 'Origami™ 中度烘焙', component: MediumRoastOrigami},
  {path: '/menu/coffee/starbucks-origami/medium-roast-origami/origami-pike-place', name: '', component: OrigamiPikePlace},

  {path: '/menu/coffee/starbucks-via', name: '星巴克VIA® 免煮咖啡', component: StarbucksVia},
  {path: '/menu/coffee/starbucks-via/via-black', name: 'VIA® Black', component: ViaBlack},
  {path: '/menu/coffee/starbucks-via/via-black/via-colombia', name: '', component: ViaColombia},
  {path: '/menu/coffee/starbucks-via/via-black/via-italian-roast', name: '', component: ViaItalianRoast},
  {path: '/menu/coffee/starbucks-via/via-dairy', name: 'VIA® Dairy', component: ViaDairy},
  {path: '/menu/coffee/starbucks-via/via-dairy/via-caffe-mocha', name: '', component: ViaCaffeMocha},
  {path: '/menu/coffee/starbucks-via/via-dairy/via-caramel-latte', name: '', component: ViaCaramelLatte},
  {path: '/menu/coffee/starbucks-via/via-dairy/via-vanilla-latte', name: '', component: ViaVanillaLatte},

  {path: '/menu/coffee/whole-bean', name: '咖啡豆', component: WholeBean},

  {path: '/menu/coffee/whole-bean/dark-roast', name: '深度烘焙咖啡豆', component: DarkRoastBean},
  {path: '/menu/coffee/whole-bean/dark-roast/caffe-verona-coffee-beans', name: '', component: CaffeVeronaCoffeeBeans},
  {path: '/menu/coffee/whole-bean/dark-roast/espresso-roast-coffee-beans', name: '', component: EspressoRoastCoffeeBeans},
  {path: '/menu/coffee/whole-bean/dark-roast/italian-roast-coffee-beans', name: '', component: ItalianRoastCoffeeBeans},
  {path: '/menu/coffee/whole-bean/dark-roast/komodo-dragon-blend-coffee-beans', name: '', component: KomodoDragonBlendCoffeeBeans},
  {path: '/menu/coffee/whole-bean/dark-roast/sumatra-coffee-beans', name: '', component: SumatraCoffeeBeans},

  {path: '/menu/coffee/whole-bean/medium-roast', name: '中度烘焙咖啡豆', component: MediumRoastBean},
  {path: '/menu/coffee/whole-bean/medium-roast/south-of-the-clouds', name: '星巴克®凤舞祥云综合咖啡豆', component: SouthOfTheClouds},
  {path: '/menu/coffee/whole-bean/medium-roast/breakfast-blend-coffee-beans', name: '', component: BreakfastBlendCoffeeBeans},
  {path: '/menu/coffee/whole-bean/medium-roast/colombia', name: '', component: Colombia},
  {path: '/menu/coffee/whole-bean/medium-roast/ethiopia-coffee-beans', name: '', component: EthiopiaCoffeeBeans},
  {path: '/menu/coffee/whole-bean/medium-roast/guatemala-antigua-coffee-beans', name: '', component: GuatemalaAntiguaCoffeeBeans},
  {path: '/menu/coffee/whole-bean/medium-roast/house-blend-coffee-beans', name: '', component: HouseBlendCoffeeBeans},
  {path: '/menu/coffee/whole-bean/medium-roast/kenya-coffee-beans', name: '', component: KenyaCoffeeBeans},
  {path: '/menu/coffee/whole-bean/medium-roast/pike-place-roast-coffee-beans', name: '', component: PikePlaceRoastCoffeeBeans},

  {path: '/menu/coffee/starbucks-reserve', name: '星巴克臻选™咖啡', component: StarbucksReserve},
  {path: '/menu/coffee/starbucks-reserve/china-qingkai-farm', name: '', component: ChinaQingkaiFarm},
  {path: '/menu/coffee/starbucks-reserve/china-yunnan-puer-baoshan', name: '', component: ChinaYunnanPuerBaoshan},
  {path: '/menu/coffee/starbucks-reserve/colombia-monks-of-san-roque', name: '', component: ColombiaMonksOfSanRoque},
  {path: '/menu/coffee/starbucks-reserve/ethiopia-bitta-farm', name: '', component: EthiopiaBittaFarm},
  {path: '/menu/coffee/starbucks-reserve/sumatra-wahana-estate', name: '', component: SumatraWahanaEstate},

  {path: '/menu/drink', name: '饮料', component: Drink}, 

  {path: '/menu/drink/coffee-plus-ice-cream', name: '咖啡融合冰淇淋', component: CoffeePlusIceCream},

  {path: '/menu/drink/cold-brew', name: '星巴克冷萃咖啡系列', component: ColdBrew},
  
  {path: '/menu/drink/espresso', name: '手工调制浓缩咖啡', component: Espressos},
  {path: '/menu/drink/espresso/caffe-americano', name: '', component: CaffeAmericano},
  {path: '/menu/drink/espresso/caffe-latte', name: '', component: CaffeLatte},
  {path: '/menu/drink/espresso/caffe-mocha', name: '', component: CaffeMocha},
  {path: '/menu/drink/espresso/cappuccino', name: '', component: Cappuccino},
  {path: '/menu/drink/espresso/caramel-macchiato', name: '', component: CaramelMacchiato},
  {path: '/menu/drink/espresso/espresso', name: '', component: Espresso},
  {path: '/menu/drink/espresso/flat-white', name: '', component: FlatWhite},
  {path: '/menu/drink/espresso/hazelnut-flavored-latte', name: '', component: HazeluntFlavoredLatte},
  {path: '/menu/drink/espresso/vanilla-flavored-latte', name: '', component: VanillaFlavoredLatte},

  {path: '/menu/drink/frappuccino-blended-beverage', name: '星冰乐®', component: FrappuccinoBlendedBeverage},
  {path: '/menu/drink/frappuccino-blended-beverage/caramel-espresso-frappuccino', name: '', component: CaramelEspressoFrappuccino},
  {path: '/menu/drink/frappuccino-blended-beverage/green-tea-frappuccino', name: '', component: GreenTeaFrappuccino},
  {path: '/menu/drink/frappuccino-blended-beverage/mango-passion-tea', name: '', component: MangoPassionTea},
  {path: '/menu/drink/frappuccino-blended-beverage/mocha-frappuccino', name: '', component: MochaFrappuccino},
  {path: '/menu/drink/frappuccino-blended-beverage/mocha-java-chip-frappuccino', name: '', component: MochaJavaChipFrappuccino},
  {path: '/menu/drink/frappuccino-blended-beverage/vanilla-flavored-cream-frappuccino-blended-beverage', name: '', component: VanillaFlavoredCreamFrappuccinoBlendedBeverage},

  {path: '/menu/drink/modern-mixology', name: '星巴克玩味冰调™', component: ModernMixology},
  {path: '/menu/drink/modern-mixology/sparkling-espresso-tonic', name: '气炫冰山美式', component: SparklingEspressoTonic},
  {path: '/menu/drink/modern-mixology/triple-citrus', name: '橙柚派对', component: TripleCitrus},
  {path: '/menu/drink/modern-mixology/peach-shrub-fizz', name: '醋意桃桃', component: PeachShrubFizz},
  {path: '/menu/drink/modern-mixology/cold-brew-lemon-sour', name: '酸柠浮冷萃', component: ColdBrewLemonSour},


  {path: '/menu/drink/nitro-cold-brew', name: '气致™冷萃咖啡', component: NitroColdBrew},
  {path: '/menu/drink/signature-chocolate-beverage', name: '经典巧克力饮品', component: SignatureChocolateBeverage},
  {path: '/menu/drink/signature-chocolate-beverage/signature-chocolate-beverage', name: '', component: SignatureChocolateBeverage2},
  
  {path: '/menu/drink/teavana', name: '茶瓦纳™', component: Teavana},
  {path: '/menu/drink/teavana/black-tea-latte', name: '', component: BlackTeaLatte},
  {path: '/menu/drink/teavana/blackcurrant-raspberry', name: '', component: BlackcurrantRaspberry},
  {path: '/menu/drink/teavana/citrus-grapefruit-herbal-tea', name: '', component: CitrusGrapefruitHerbalTea},
  {path: '/menu/drink/teavana/green-tea-latte', name: '', component: GreenTeaLatte},
  {path: '/menu/drink/teavana/iced-shaken-honey-ruby-grapefruit-black-tea', name: '', component: IcedShakenHoneyRubyGrapefruitBlackTea},
  {path: '/menu/drink/teavana/iced-shaken-mango-herbal-juiced-tea', name: '', component: IcedShakenMangoHerbalJuicedTea},
  {path: '/menu/drink/teavana/iced-shaken-peach-green-tea', name: '', component: IcedShakenPeachGreenTea},
  {path: '/menu/drink/teavana/pear-rooibos-tea', name: '', component: PearRooibosTea},

  {path: '/menu/food', name: '美食', component: Food},

  {path: '/menu/food/bakery', name: '烘焙', component: Bakery},
  {path: '/menu/food/bakery/american-style-pancakes', name: '', component: AmericanStylePancakes},
  {path: '/menu/food/bakery/blueberry-muffin', name: '', component: BlueberryMuffin},
  {path: '/menu/food/bakery/chocolate-muffin', name: '', component: ChocolateMuffin},
  {path: '/menu/food/bakery/cinnamon-swirl', name: '', component: CinnamonSwirl},
  {path: '/menu/food/bakery/french-butter-croissant', name: '', component: FrenchButterCroissant},
  {path: '/menu/food/bakery/french-caramel-bread', name: '', component: FrenchCaramelBread},
  {path: '/menu/food/bakery/hazelnut-croissant', name: '', component: HazelnutCroissant},
  {path: '/menu/food/bakery/honey-raisin-scone', name: '', component: HoneyRaisinScone},
  {path: '/menu/food/bakery/oat-caramel-pudding-bread', name: '', component: OatCaramelPuddingBread},
  {path: '/menu/food/bakery/premium-chocolate-croissant', name: '', component: PremiumChocolateCroissant},
  {path: '/menu/food/bakery/raisin-scone', name: '', component: RaisinScone},
  {path: '/menu/food/bakery/raisins-walnut-bread', name: '', component: RaisinsWalnutBread},
  {path: '/menu/food/bakery/red-bean-oats-scone', name: '', component: RedBeanOatsScone},
  {path: '/menu/food/bakery/whole-wheat-walnut-muffin', name: '', component: WholeWheatWalnutMuffin},

  {path: '/menu/food/cake-dessert', name: '蛋糕&甜品', component: CakeDessert},
  {path: '/menu/food/cake-dessert/blueberry-and-cookie-style-cheesecake', name: '', component: BlueberryAndCookieStyleCheesecake},
  {path: '/menu/food/cake-dessert/classic-swiss-roll-cake', name: '', component: ClassicSwissRollCake},
  {path: '/menu/food/cake-dessert/eclair', name: '', component: Eclair},
  {path: '/menu/food/cake-dessert/macaron', name: '', component: Macaron},
  {path: '/menu/food/cake-dessert/new-york-style-creamy-cheesecake', name: '', component: NewYorkStyleCreamyCheesecake},
  {path: '/menu/food/cake-dessert/starbucks-coffee-tiramisu', name: '', component: StarbucksCoffeeTiramisu},
  {path: '/menu/food/cake-dessert/triple-dark-chocolate-cake', name: '', component: TripleDarkChocolateCake},


  {path: '/menu/food/great-breakfast', name: '早安新一天', component: GreatBreakfast},

  {path: '/menu/food/package', name: '其他美食', component: Package},
  {path: '/menu/food/package/cashews', name: '', component: Cashews},
  {path: '/menu/food/package/fruit-salad', name: '', component: FruitSalad},
  {path: '/menu/food/package/fruitnnuts', name: '', component: Fruitnnuts},
  {path: '/menu/food/package/lollipops', name: '', component: Lollipops},
  {path: '/menu/food/package/shortbread', name: '', component: Shortbread},
  {path: '/menu/food/package/starbucks-chewing-gum', name: '', component: StarbucksChewingGum},
  {path: '/menu/food/package/Starbucks-mints', name: '', component: StarbucksMints},
  {path: '/menu/food/package/waferrolls', name: '', component: Waferrolls},

  {path: '/menu/food/sandwich', name: '三明治、帕尼尼、卷', component: Sandwich},
  {path: '/menu/food/sandwich/avocado-and-chicken-bagel', name: '', component: AvocadoAndChickenBagel},
  {path: '/menu/food/sandwich/bacon-and-egg-croissant-bun', name: '', component: BaconAndEggCroissantBun},
  {path: '/menu/food/sandwich/bacon-and-egg-wrap', name: '', component: BaconAndEggWrap},
  {path: '/menu/food/sandwich/beef-baguette', name: '', component: BeefBaguette},
  {path: '/menu/food/sandwich/beef-cheese-croissant', name: '', component: BeefCheeseCroissant},
  {path: '/menu/food/sandwich/caesar-chicken-wrap', name: '', component: CaesarChickenWrap},
  {path: '/menu/food/sandwich/chicken-panini', name: '', component: ChickenPanini},
  {path: '/menu/food/sandwich/eggs-mushroom-shrimp-wrap', name: '', component: EggsMushroomShrimpWrap},
  {path: '/menu/food/sandwich/ham-and-cheese-croissant', name: '', component: HamAndCheeseCroissant},
  {path: '/menu/food/sandwich/ham-and-double-cheese-croque-monsieur', name: '', component: HamAnddoubleCheeseCroqueMonsieur},
  {path: '/menu/food/sandwich/ham-and-gouda-sandwich', name: '', component: HamAndGoudaSandwich},
  {path: '/menu/food/sandwich/pastrami-sandwich', name: '', component: PastramiSandwich},
  {path: '/menu/food/sandwich/roasted-french-ham-egg-sandwich', name: '', component: RoastedFrenchHamEggSandwich},
  {path: '/menu/food/sandwich/slow-roasted-ham-cheese-ciabatta', name: '', component: SlowRoastedHamCheeseCiabatta},
  {path: '/menu/food/sandwich/tuna-panini', name: '', component: TunaPanini},
  {path: '/menu/food/sandwich/turkey-bacon-english-muffin', name: '', component: TurkeyBaconEnglishMuffin},

  {path: '/menu/food/yoghurt', name: '酸奶', component: Yoghurt},
  {path: '/menu/food/yoghurt/greek-flavored-yoghurt-mixed-berry', name: '', component: GreekFlavoredYoghurtMixedBerry},
  {path: '/menu/food/yoghurt/greek-flavored-yoghurt-yellow-peach', name: '', component: GreekFlavoredYoghurtYellowPeach},

  {path: '/menu/product', name: '商品', component: Product},
  
  {path: '/menu/product/reserve-store-merchandise', name: '臻选产品', component: ReserveStoreMerchandise},
  {path: '/menu/product/reserve-store-merchandise/9oz-reserve-glass-cup', name: '9oz 臻选玻璃杯', component: ReserveGlassCup9oz},
  {path: '/menu/product/reserve-store-merchandise/12oz-black-bronze-brand-handle-mug', name: '12oz 纯黑/古铜亮面品牌桌面杯', component: BlackBronzeBrandHandleMug12oz},
  {path: '/menu/product/reserve-store-merchandise/16oz-champagne-gold-brand-stainless-steel-cup', name: '16oz 香槟金品牌不锈钢桌面杯', component: ChampagneGoldBrandStainlessSteelCup16oz},
  {path: '/menu/product/reserve-store-merchandise/500ml-gold-logo-water-bottle', name: '500ml 金色Logo水瓶', component: GoldLogoWaterBottle500ml},

  {path: '/menu/product/core-merchandise-2017', name: '常规产品', component: CoreMerchandise2017},
  {path: '/menu/product/core-merchandise-2017/12oz-black-gilded-brandMug', name: '12oz 烫金品牌黑色马克杯', component: BlackGildedBrandMug12oz},
  {path: '/menu/product/core-merchandise-2017/12oz-silver-white-brand-handle-mug', name: '银色/白色亮面品牌桌面杯', component: SilverWhiteBrandHandleMug12oz},
  {path: '/menu/product/core-merchandise-2017/12oz-true-essence-stainless-steel-bottle', name: '12oz 彰显本色黑色/深灰不锈钢桌面杯', component: TrueEssenceStainlessSteelBottle12oz},
  {path: '/menu/product/core-merchandise-2017/12oz-white-frosted-glass-cup', name: '12oz 纯白磨砂玻璃杯', component: WhiteFrostedGlassCup12oz},
  {path: '/menu/product/core-merchandise-2017/12oz-white-gilded-brand-mug', name: '12oz 烫金品牌白色马克杯', component: WhiteGildedBrandMug12oz},
  {path: '/menu/product/core-merchandise-2017/16oz-black-gilded-brand-mug', name: '16oz 烫金品牌黑色马克杯', component: BlackGildedBrandMug16oz},
  {path: '/menu/product/core-merchandise-2017/16oz-black-wooden-stainless-steel-bottle-with-strap', name: '16oz 原木黑色拎绳不锈钢保温杯', component: BlackWoodenStainlessSteelBottleWithStrap16oz},
  {path: '/menu/product/core-merchandise-2017/16oz-true-essence-stainless-steel-travel-bottle', name: '16oz 彰显本色黑色/深灰不锈钢随行杯', component: TrueEssenceStainlessSteelTravelBottle16oz},
  {path: '/menu/product/core-merchandise-2017/16oz-white-gilded-brand-mug', name: '16oz 烫金品牌白色马克杯', component: WhiteGildedBrandMug16oz},
  {path: '/menu/product/core-merchandise-2017/3oz-black-gilded-brand-mug', name: '3oz 烫金品牌黑色试尝杯', component: BlackGildedBrandMug3oz},
  {path: '/menu/product/core-merchandise-2017/3oz-white-gilded-brand-mug', name: '3oz 烫金品牌白色试尝杯', component: WhiteGildedBrandMug3oz},
  {path: '/menu/product/core-merchandise-2017/500ml-black-logo-water-bottle', name: '500ml 黑色Logo水瓶', component: BlackLogoWaterBottle500ml},
  {path: '/menu/product/core-merchandise-2017/500ml-white-logo-water-bottle', name: '500ml 白色Logo水瓶', component: WhiteLogoWaterBottle500ml},

  {path: '/apps/app', name: '星巴克移动应用' ,component: App},
  {path: '/apps/watch', name: '星巴克 Apple Watch' ,component: Watch},

  {path: '/gift-card/about', name: '关于星礼卡' ,component: GiftCardAbout},
  {path: '/gift-card/query', name: '管理星礼卡' ,component: GiftCardQuery},
  {path: '/gift-card/invoice', name: '发票处理进度查询' ,component: GiftCardInvoice},

  {path: '/reserve', name: '关于星巴克臻选™' ,component: Reserve},
  {path: '/starbucks-now', name: '啡快™ － 在线点 到店取' ,component: StarbucksNow},
  {path: '/starbucks-delivers-info', name: '专星送™' ,component: StarbucksDeliversInfo},

  { path: '*', name: '404', component: NotFoundComponent }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
