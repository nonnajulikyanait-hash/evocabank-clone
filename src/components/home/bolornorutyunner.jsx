import React, { useState } from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function BolorNorutyunner() {
  const [selectedCategory, setSelectedCategory] = useState('Բոլորը');
  const [selectedNews, setSelectedNews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const categories = ['Բոլորը', 'Գլխավոր', 'Բանկային', 'Հարցազրույցներ', 'Պրոդուկտներ', 'Նորարարություններ', 'Կենսակերպ', 'Մրցանակներ', 'CSR', 'Այլ'];

  const allNews = [
    {
      id: 1,
      category: 'Բանկային',
      title: 'Evocabank-ը և IFC-ն մեկնարկում են բնապահպանական առաջին ծրագիրը',
      date: '26.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17930164747919/510x383.png',
      content: 'Evocabank-ը 10 միլիոն ԱՄՆ դոլարի ֆինանսավորում է ներգրավել Համաշխարհային բանկի խմբի անդամ Միջազգային ֆինանսական կորպորացիայից (IFC)՝ միկրո, փոքր և միջին ձեռնարկությունների (ՄՓՄՁ) վարկավորումն ընդլայնելու նպատակով, ինչը կարևոր իրադարձություն է Հայաստանում կայուն ֆինանսավորման զարգացման համար։'
    },
    {
      id: 2,
      category: 'Հարցազրույցներ',
      title: 'Սթիվեն Բարթլեթը՝ Երևանում՝ Evoca Conference 2026-ին',
      date: '19.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17930859918757/510x383.png',
      content: 'Հնարավո՞ր է՝ մեկ վայրում հավաքվեն միջազգային ճանաչում ունեցող խոսնակներ, հաջողակ ձեռնարկատերեր և հետաքրքրասեր լսարան։ Պատասխանը՝ այ՛ո, Evoca Conference-ին։'
    },
    {
      id: 3,
      category: 'Մրցանակներ',
      title: 'Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր',
      date: '08.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17915391966329/510x383.png',
      content: 'Մեդիամաքս մեդիա ընկերության կազմակերպած կոնֆերանսը նվիրված էր ֆինանսական ոլորտում հաղորդակցության զարգացումներին։'
    },
    {
      id: 4,
      category: 'Բանկային',
      title: 'Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր',
      date: '06.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17913736819959/510x383.jpg',
      content: 'Evocabank-ը Armenia-UK Business Forum 2026-ի գլխավոր գործընկերն էր։'
    },
    {
      id: 5,
      category: 'Բանկային',
      title: 'Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր',
      date: '06.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17912685600228/510x383.png',
      content: 'Հոկտեմբերի 9-11-ը Դիլիջանը հյուրընկալեց Զբոսաշրջության տարածաշրջանային ֆորում 2026-ը (TRF 2026)։'
    },
    {
      id: 6,
      category: 'Բանկային',
      title: 'Evocabank-ը ներգրավել է $10 մլն ստորադաս փոխառություն FIM-ից',
      date: '05.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17908437653512/510x383.png',
      content: 'Evocabank-ը Finance in Motion-ի կողմից կառավարվող հիմնադրամներից ներգրավել է 10 միլիոն ԱՄՆ դոլարի ստորադաս փոխառություն։'
    },
    {
      id: 7,
      category: 'Նորարարություններ',
      title: 'Evocabank. Ամենանորարար թվային բանկը Հայաստանում 2026',
      date: '02.10.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17909253326841/510x383.png',
      content: 'Most Innovative Digital Bank in Armenia 2026՝ 4-րդ տարին անընդմեջ Global Business & Finance Magazine-ի կողմից։'
    },
    {
      id: 8,
      category: 'CSR',
      title: 'Evocabank-ը՝ AUA-ի 35-ամյակի միջոցառման հովանավոր',
      date: '25.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17906855928227/510x383.png',
      content: 'Սեպտեմբերի 25-ին Ամերիկյան համալսարանի (AUA) 35-ամյակի առթիվ տեղի ունեցավ տոնական միջոցառում, որի Legacy Partner-ը Evocabank-ն էր։'
    },
    {
      id: 9,
      category: 'Պրոդուկտներ',
      title: 'Evocabank-ը ներկայացրեց Arca-UnionPay համատեղ քարտը',
      date: '23.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17901528701371/510x383.png',
      content: 'Պաշտոնապես մեկնարկեց Arca-UnionPay համատեղ քարտերի թողարկումը:'
    },
    {
      id: 10,
      category: 'Կենսակերպ',
      title: 'Evoca-ն մասնակցում է Armenian Auto Show 2026-ին',
      date: '22.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17902383376936/510x383.png',
      content: 'Սեպտեմբերի 25-27-ը Evoca-ն մասնակցում է Armenian Auto Show 2026-ին։'
    },
    {
      id: 11,
      category: 'Պրոդուկտներ',
      title: 'Թրենդային հագուստ Rien-a-Porter-ից, 15% cashback Evoca-ից',
      date: '21.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17901523859882/510x383.png',
      content: 'Rien-a-Porter խանութ-սրահում կամ կայքում Evoca քարտերով վճարելիս ստացիր մինչև 15% cashback։'
    },
    {
      id: 12,
      category: 'Կենսակերպ',
      title: 'Դիլիջա՜ն, մենք գալիս ենք',
      date: '11.09.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17891134831451/510x383.png',
      content: 'Սեպտեմբերի 18-ին Դիլիջանի Կենտրոնական հրապարակում նշում ենք Evocabank-ի նոր մասնաճյուղի բացումը։'
    },
    {
      id: 13,
      category: 'Գլխավոր',
      title: 'Evocabank-ը մասնակցում է CCF 2026-ին',
      date: '17.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1776423301974/510x383.png',
      content: 'Career City Fest 2026-ին Evocabank-ն առաջարկում է ինտերակտիվ quiz, աշխատանքի հնարավորություններ Meridian Expo Center-ում։'
    },
    {
      id: 14,
      category: 'Հարցազրույցներ',
      title: 'Կարեն Եղիազարյանը` IMF և WBG Spring Meetings 2026-ին',
      date: '13.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1776162446379/510x383.png',
      content: 'Ապրիլի 13–18-ը Վաշինգտոնում անցկացվող IMF-ի և WBG-ի Գարնանային հանդիպումներին մասնակցում է Կարեն Եղիազարյանը։'
    },
    {
      id: 15,
      category: 'Պրոդուկտներ',
      title: 'Evoca-ն մասնակցում է Leasing Expo 2026-ին',
      date: '09.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17758068998241/510x383.png',
      content: 'Ապրիլի 10, 11 և 12-ը Evocabank-ը մասնակցում է LEASING EXPO 2026-ին։'
    },
    {
      id: 16,
      category: 'Բանկային',
      title: 'ESG կառավարման համակարգը Evocabank-ում',
      date: '31.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17757342882486/510x383.png',
      content: 'Evocabank-ը կարևորում է բնապահպանական և սոցիալական սկզբունքների ներդրումը։'
    },
    {
      id: 17,
      category: 'Բանկային',
      title: 'Evocabank-ը միացել է AI մեգանախագծի 300 մլն ԱՄՆ դոլարի ֆինանսավորմանը',
      date: '27.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17746129517291/510x383.png',
      content: 'ՀՀ բանկային համակարգի պատմության մեջ առաջին սինդիկացված վարկային պայմանագրով 6 ֆինանսական կառույցներ միավորվել են։'
    },
    {
      id: 18,
      category: 'Բանկային',
      title: 'Evoca-ն մասնակցում է TOON EXPO 2026-ին',
      date: '24.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17743534930147/510x383.png',
      content: 'Evocabank-ը մասնակցում է TOON EXPO 2026-ին՝ Հայաստանում անշարժ գույքի և կառուցապատման ոլորտի ամենամեծ ցուցահանդեսին։'
    },
    {
      id: 19,
      category: 'Պրոդուկտներ',
      title: 'Վճարիր Evoca Mastercard-ով և ստացիր 10% cashback',
      date: '10.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17732233309185/510x383.png',
      content: 'Մարտի 10-ից մինչև ապրիլի 10-ը արտերկրում կամ արտասահմանյան կայքերում Evoca Mastercard քարտերով կատարված վճարումների դիմաց ստացիր 10% cashback։'
    },
    {
      id: 20,
      category: 'Պրոդուկտներ',
      title: 'Ներդրումային առաջարկ կանանց համար',
      date: '06.03.2026',
      image: 'https://www.evoca.am/images-cache/news/1/1773403253997/510x383.png',
      content: 'Կանանց միամսյակի առթիվ Evocabank-ում հնարավորություն կունենաք անվճար բացել բրոքերային հաշիվ և առանց միջնորդավճարի կատարել առաջին 3 ներդրումային գործարքները EvocaINVEST-ի միջոցով։'
    },
    {
      id: 21,
      category: 'Պրոդուկտներ',
      title: 'Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում',
      date: '27.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17722002491716/510x383.png',
      content: 'Այժմ կարող ես ավելացնել քո Binance-ի հաշիվը EvocaTOUCH-ում և մեկ հարթակում տեսնել մնացորդը, փոփոխությունները և ակտիվների ընդհանուր պատկերը։'
    },
    {
      id: 22,
      category: 'Հարցազրույցներ',
      title: 'Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times ամսագրին',
      date: '25.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17720089281517/510x383.png',
      content: 'Evocabank-ի Վարչության նախագահ Կարեն Եղիազարյանը Los Angeles Times-ին տված հարցազրույցում անդրադարձել է Բանկի «mobile-first» ձևաչափին և թվային լուծումներին։'
    },
    {
      id: 23,
      category: 'Բանկային',
      title: 'Evocabank-ը միացել է AmCham Armenia-ին',
      date: '10.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17707319421286/510x383.png',
      content: 'Evocabank-ը միացել է Ամերիկյան առևտրի պալատին Հայաստանում (AmCham Armenia)՝ ընդլայնելով միջազգային գործարար կապերը։'
    },
    {
      id: 24,
      category: 'Մրցանակներ',
      title: 'Evocabank: Excellence in Travel Segment Innovation',
      date: '10.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17707059995106/510x383.jpg',
      content: 'Բանկը Mastercard-ի կողմից արժանացել է «Excellence in Travel Segment Innovation» մրցանակին՝ Evoca Travel Card-ի համար։'
    },
    {
      id: 25,
      category: 'Պրոդուկտներ',
      title: 'Հատուկ առաջարկներ Evoca Visa պրեմիում քարտապանների համար',
      date: '12.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17576778780897/510x383.png',
      content: 'Ռեստորաններ, սրճարաններ, նորաձևություն և հյուրանոցներ՝ հատուկ զեղչեր ու արտոնություններ Evoca Visa Infinite քարտապանների համար։'
    },
    {
      id: 26,
      category: 'Մրցանակներ',
      title: 'Evoca՝ ՓՄՁ վարկավորման ամենանորարար գործընկերը Հայաստանում',
      date: '09.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17574945834607/510x383.png',
      content: 'International Finance ամսագրի կողմից Evocabank-ը ճանաչվել է ՓՄՁ վարկավորման ամենանորարար գործընկեր։'
    },
    {
      id: 27,
      category: 'Պրոդուկտներ',
      title: 'iPhone և MacBook Air՝ 0% սպասարկման վճարով',
      date: '08.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17573391299753/510x383.png',
      content: 'Ձեռք բերեք iPhone և MacBook Air բացառիկ առաջարկով՝ 0% տոկոսադրույքով առաջին ամիսների համար։'
    },
    {
      id: 28,
      category: 'Պրոդուկտներ',
      title: 'Evoca Visa քարտապաններն ունեն առաջարկ',
      date: '04.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17569912369255/510x383.png',
      content: 'Ստացեք մինչև 30% cashback buy.am-ից՝ գնումներ կատարելով Evoca Visa քարտով։'
    },
    {
      id: 29,
      category: 'Պրոդուկտներ',
      title: 'Նոր առաջարկ Evoca Mastercard քարտապանների համար',
      date: '01.09.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17567286835411/510x383.png',
      content: 'KFC բոլոր մասնաճյուղերում Evoca Mastercard-ով 3,000 դրամ և ավելի վճարում կատարելիս ստացեք սառը ամերիկանո և դոնաթ նվեր։'
    },
    {
      id: 30,
      category: 'Բանկային',
      title: 'Evoca-ն մասնակցում է TOON EXPO 2025-ին',
      date: '27.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/175627574177/510x383.png',
      content: 'Evocabank-ը մասնակցում է TOON EXPO 2025-ին՝ առաջարկելով հիփոթեքային վարկեր և EvocaHOME օվերդրաֆտ։'
    },
    {
      id: 31,
      category: 'Բանկային',
      title: 'Evocabank-ի Խորհրդի նոր կազմը',
      date: '26.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/1755691060325/510x383.png',
      content: 'Հունիսի 19-ին կայացած ժողովի արդյունքում ընտրվել են Evocabank-ի Խորհրդի նոր անդամներ։'
    },
    {
      id: 32,
      category: 'Բանկային',
      title: 'Evocabank-ը՝ 50-րդ BACEE Jubilee համաժողովի պլատինում հովանավոր',
      date: '19.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17556116751548/510x383.png',
      content: 'Հոկտեմբերին տեղի ունեցող BACEE-ի 50-րդ միջազգային բանկային համաժողովում Evocabank-ը հանդես կգա որպես պլատինում հովանավոր։'
    },
    {
      id: 33,
      category: 'Պրոդուկտներ',
      title: 'Back to School. Վճարիր Evoca Mastercard-ով, ստացիր 20% cashback',
      date: '14.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17551746889694/510x383.png',
      content: 'Օգոստոսի 15-ից սեպտեմբերի 15-ը լավագույն գրախանութներում Evoca Mastercard-ով վճարելիս ստացեք 20% cashback։'
    },
    {
      id: 34,
      category: 'Բանկային',
      title: 'Էվոկաբանկ ԲԲԸ',
      date: '01.08.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17540357468511/510x383.png',
      content: 'Համաձայն ՀՀ ԿԲ որոշման՝ «Էվոկաբանկ» ՓԲԸ-ն վերակազմավորվել և գործում է որպես «Էվոկաբանկ» բաց բաժնետիրական ընկերություն։'
    },
    {
      id: 35,
      category: 'Բանկային',
      title: 'Evoca x Al Fardan Exchange. արագ ու հարմար փոխանցումներ դեպի ԱՄԷ',
      date: '30.07.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17543142671349/510x383.png',
      content: 'Evocabank-ը առաջարկում է ավելի հարմար, արագ և վստահելի լուծում SWIFT փոխանցումների և ԱՄԷ-ում կանխիկ ստացման համար։'
    },
    {
      id: 36,
      category: 'Պրոդուկտներ',
      title: '10% cashback և Skip The Line հնարավորություն',
      date: '28.07.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17537015540189/510x383.png',
      content: 'Evoca Visa քարտապաններն ստանում են 10% cashback բարում և Skip The Line հնարավորություն։'
    },
    {
      id: 37,
      category: 'Բանկային',
      title: 'Ձեռք բեր քո երազանքների բնակարանը 12%-ով',
      date: '26.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17429755745448/510x383.png',
      content: 'Մինչև մայիսի 20-ը ներառյալ Evocabank–ի Ազգային Հիփոթեքային Ընկերության (ԱՀԸ) ծրագրով դու կարող ես ձեռք բերել բնակարան երկրորդային շուկայից ընդամենը 12%-ով՝ նախկին 13%-ի փոխարեն։'
    },
    {
      id: 38,
      category: 'Պրոդուկտներ',
      title: 'Ընդամենը Evoca Visa քարտ և 30% cashback buy.am-ում',
      date: '11.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17416830305613/510x383.jpg',
      content: 'Կատարելով գնումներ buy.am-ի խանութների բաժնից քո Evoca Visa քարտով՝ կստանաս 30% cashback։'
    },
    {
      id: 39,
      category: 'Պրոդուկտներ',
      title: 'Նվիրիր նվեր քարտ, մասնակցիր խաղարկությանը և շահիր',
      date: '07.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17413527732385/510x383.jpg',
      content: 'Մարտի 7-ից ապրիլի 7-ը պատվիրելով Evoca Digital Gift Card կամ Evoca Gift Card՝ դու հնարավորություն կստանաս շահելու 30,000 դրամ արժողությամբ 10 նվեր քարտերից մեկը։'
    },
    {
      id: 40,
      category: 'Պրոդուկտներ',
      title: 'Phubber + Evoca Visa = 0% միջնորդավճար՝ հատուկ քեզ համար',
      date: '06.03.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17412622497205/510x383.png',
      content: 'Կարող ես գնել նվերներ Phubber-ից քո Evoca Visa քարտով՝ 0% միջնորդավճարով (VISAAM պրոմոկոդով)։'
    },
    {
      id: 41,
      category: 'Բանկային',
      title: 'Evocabank-ի «Հանրապետության» մասնաճյուղն արդեն բաց է',
      date: '20.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/1740120458201/510x383.png',
      content: 'Այսուհետ Evocabank-ի հաճախորդները կսպասարկվեն նորաբաց «Հանրապետության» մասնաճյուղում՝ երկուշաբթիից կիրակի 10։30-21։30 ժամերով։'
    },
    {
      id: 42,
      category: 'Պրոդուկտներ',
      title: '15% զեղչ KinoPark-ում` Evoca Visa քարտապանների համար',
      date: '19.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17399680512009/510x383.jpg',
      content: 'Yerevan Mall հավելվածի միջոցով վճարիր Evoca Visa քարտով օնլայն քո սիրելի կինոյի համար և ստացիր 15% զեղչ KinoPark-ում։'
    },
    {
      id: 43,
      category: 'Պրոդուկտներ',
      title: '15% cashback Myler-ում Evoca Visa քարտապանների համար',
      date: '18.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17398763342238/510x383.png',
      content: 'Ուղևորվիր Myler Mountain Resort, վճարիր քո Evoca Visa քարտով և ստացիր 15% cashback: Առաջարկը գործում է մինչև մարտի 31-ը։'
    },
    {
      id: 44,
      category: 'Պրոդուկտներ',
      title: 'Evoca Visa պրեմիում քարտեր. ճամփորդիր առանց սահմանների',
      date: '12.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17393570102872/510x383.png',
      content: 'Վճարիր Evoca Visa պրեմիում քարտերով և ունեցիր հարմարավետ, արագ ու շքեղ ճանապարհորդություն՝ օգտվելով Fast Track-ից, բիզնես սրահներից և զեղչերից։'
    },
    {
      id: 45,
      category: 'Պրոդուկտներ',
      title: 'Անսահմանափակ Lounge Key մուտք՝ նոր պայմաններով',
      date: '07.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17389374853499/510x383.png',
      content: 'Նոր պայմանները վերաբերում են Evoca Visa Infinite քարտապաններին։ 2025 թվականի մարտի 4-ից սկսած՝ անսահմանափակ մուտքն ակտիվ կլինի, եթե վերջին 35 օրում կատարել եք նվազագույնը $400 անկանխիկ վճարում։'
    },
    {
      id: 46,
      category: 'Պրոդուկտներ',
      title: 'Նոր զեղչեր Evoca Mastercard քարտապանների համար',
      date: '07.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17389114240578/510x383.png',
      content: '10% զեղչ iPhone-ի համար, 60% զեղչ պատյանների և 20% զեղչ AirPods-ի ու աքեսուարների համար Evoca Mastercard-ով վճարելիս (iSpace, Vega, UCOM, VLV, iStore):'
    },
    {
      id: 47,
      category: 'Պրոդուկտներ',
      title: 'ՎՃարիր Evoca Visa քարտով և ստացիր 30% cashback buy.am-ում',
      date: '05.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17387624327634/510x383.jpg',
      content: 'Կատարիր գնումներ buy.am-ի խանութների բաժնից, վճարիր Evoca Visa քարտով օնլայն և ստացիր մինչև 10,000 ՀՀ դրամ cashback։'
    },
    {
      id: 48,
      category: 'Բանկային',
      title: 'Evocabank-ը մասնակցել է Miami-Dubai Chamber of Commerce 2-ին',
      date: '04.02.2025',
      image: 'https://www.evoca.am/images-cache/news/1/17386587462914/510x383.png',
      content: 'Miami-Dubai Chamber of Commerce (MDCC)-ը այս անգամ տեղի ունեցավ Miami-ում՝ նպատակ ունենալով ամրապնդել ԱՄՆ-ի, Մերձավոր Արևելքի և միջազգային շուկաների միջև կապերը։'
    },
    {
      id: 49,
      category: 'Պրոդուկտներ',
      title: 'Evoca Digital քարտեր',
      date: '16.06.2023',
      image: 'https://www.evoca.am/images-cache/news/1/16868326578274/510x383.png',
      content: 'Evoca Digital քարտը Visa միջազգային վճարային համակարգի թվային քարտ է, որով կարող ես իրականացնել բոլոր գործարքները EvocaTOUCH հավելվածից։ Այն ապահով է, արագ և հեշտ վերահսկելի։'
    },
    {
      id: 50,
      category: 'Նորարարություններ',
      title: 'Նոր EvocaTOUCH',
      date: '2024',
      image: 'https://www.evoca.am/images-cache/news/1/16848286806716/780x585.png',
      content: 'Evocabank-ը ներկայացրեց իր նոր՝ EvocaTOUCH հավելվածը` ժամանակակից, նորագույն թվային լուծումներով ու անսահմանափակ հնարավորություններով (feed-ի տեսքով, բաց և մուգ ինտերֆեյսով)։'
    },
    {
      id: 51,
      category: 'Բանկային',
      title: 'Evocabank-ը կներգրավի 10 մլն ԱՄՆ դոլար BSTDB-ից',
      date: '31.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17304388351704/510x383.png',
      content: 'Evocabank-ը սկսել է համագործակցություն BSTDB-ի հետ՝ ներգրավելով 10 մլն ԱՄՆ դոլար վարկային միջոցներ փոքր և միջին ձեռնարկությունների (ՓՄՁ) ու առևտրային գործունեության ֆինանսավորման համար։'
    },
    {
      id: 52,
      category: 'Բանկային',
      title: 'Evoca-ն՝ Project Management Awards 2024-ի գլխավոր գործընկեր',
      date: '29.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17302076777661/510x383.png',
      content: 'Evocabank-ը հանդիսանում է Նախագծերի կառավարման ինստիտուտի կազմակերպած Project Management Awards 2024-ի գլխավոր գործընկերը և տրամադրելու է հատուկ մրցանակ նորարար project manager-ին։'
    },
    {
      id: 53,
      category: 'Բանկային',
      title: 'Հիփոթեքային վարկ՝ ավելի ցածր տոկոսադրույքով',
      date: '24.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17297753797877/510x383.png',
      content: 'Մինչև դեկտեմբերի 25-ը կարող ես ձեռք բերել հիփոթեքային վարկ երկրորդային շուկայից 12.5%-ով՝ նախկին 13%-ի փոխարեն (Evocabank-ի ԱՀԸ ծրագրով)։'
    },
    {
      id: 54,
      category: 'Բանկային',
      title: 'Evoca-ն` զբոսաշրջության տարածաշրջանային ֆորումի գլխավոր գործընկեր',
      date: '22.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17296009856437/510x383.png',
      content: 'Դիլիջանի ուսումնահետազոտական կենտրոնում տեղի ունեցող Tourism Regional Forum 2024-ի գլխավոր գործընկերն է Evocabank-ը։'
    },
    {
      id: 55,
      category: 'Պրոդուկտներ',
      title: 'Վճարիր Evoca Mastercard-ով և ստացիր 30% զեղչ Glovo-ում',
      date: '14.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17289080193428/510x383.png',
      content: 'Glovo-ում ակցիայի մասնակից կետերից պատվեր իրականացնելիս վճարիր Evoca Mastercard-ով և ստացիր 30% զեղչ (առավելագույնը՝ 15,000 դրամ)։'
    },
    {
      id: 56,
      category: 'Պրոդուկտներ',
      title: 'Առաջարկ Evoca Visa բոլոր քարտապաններին',
      date: '11.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/1728652233604/510x383.png',
      content: 'Կցիր քո Evoca Visa քարտը buy.am-ի դրամապանակին, կատարիր օնլայն գնումներ և ստացիր 30% cashback մինչև հոկտեմբերի 31-ը։'
    },
    {
      id: 57,
      category: 'Նորարարություններ',
      title: 'Evocabank-ը՝ DigiTec24-ում',
      date: '07.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17278731436243/510x383.png',
      content: 'DigiTec24-ին Evocabank-ը և Mastercard-ը ներկայացրեցին Հայաստանում առաջին ամենաթվային Evoca Mastercard Gift Card-ը։'
    },
    {
      id: 58,
      category: 'Մրցանակներ',
      title: 'Evocabank` լավագույն ՓՄՁ բանկը Հայաստանում',
      date: '03.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17279621060614/510x383.png',
      content: '4-րդ տարին անընդմեջ Evoca-ն Global Finance միջազգային հեղինակավոր ամսագրի կողմից ստանում է «Լավագույն ՓՄՁ բանկը Հայաստանում» մրցանակը։'
    },
    {
      id: 59,
      category: 'Բանկային',
      title: 'Evoca-ն ներգրավել է 10.35 մլն ԱՄՆ դոլարին համարժեք դրամ Symbiotics Investments-ից',
      date: '03.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17279603303089/510x383.png',
      content: 'Evocabank-ը շվեյցարական Symbiotics Investments-ից ներգրավել է 10.35 մլն ԱՄՆ դոլարին համարժեք դրամ՝ միկրո, փոքր և միջին բիզնեսների ֆինանսավորման համար։'
    },
    {
      id: 60,
      category: 'Պրոդուկտներ',
      title: 'Ավտովարկ՝ սկսած 9․9%-ից',
      date: '01.10.2024',
      image: 'https://www.evoca.am/images-cache/news/1/17278577580017/510x383.png',
      content: 'Գործընկեր Auto Gallery-ի հետ համատեղ Evocabank-ն առաջարկում է ավտովարկ՝ սկսած 9․9%-ից, արագ հաստատմամբ և առանց սպասարկման վճարների։'
    }
  ];

  const filteredNews = selectedCategory === 'Բոլորը' 
    ? allNews 
    : allNews.filter(item => item.category === selectedCategory);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {selectedNews ? (
          <main className="max-w-4xl mx-auto px-4 py-8 text-left bg-white">
            <button 
              onClick={() => setSelectedNews(null)} 
              className="font-bold text-xs text-gray-500 hover:text-[#6400dc] mb-6 flex items-center gap-1 cursor-pointer"
            >
              ← Վերադառնալ
            </button>
            <h1 className="text-2xl md:text-3xl font-black text-neutral-900 mb-4">{selectedNews.title}</h1>
            <span className="text-xs font-bold text-[#6400dc] bg-purple-50 px-3 py-1 rounded-full inline-block mb-4">{selectedNews.category}</span>
            <div className="rounded-2xl overflow-hidden mb-6 max-h-[450px] bg-gray-50">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedNews.content}</p>
          </main>
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-8 text-left bg-white">
            <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
              <span>🏠</span> &gt; <span>Նորություններ</span> &gt; <span className="text-gray-700 font-medium">Բոլորը</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
              Բոլորը
            </h1>

            <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-6 mb-8 text-xs font-semibold text-gray-600">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full transition cursor-pointer ${
                    selectedCategory === cat 
                      ? 'bg-[#6400dc] text-white font-bold' 
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-[#6400dc]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {currentItems.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => { setSelectedNews(item); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-48 overflow-hidden bg-gray-50">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-bold text-[#6400dc] border-l-2 border-[#6400dc] pl-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-base font-extrabold text-neutral-900 leading-snug group-hover:text-[#6400dc] transition line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{item.content}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 text-xs text-gray-400 font-medium">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mb-16">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs transition cursor-pointer ${
                      currentPage === page
                        ? 'bg-[#6400dc] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs cursor-pointer"
                  >
                    →
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}