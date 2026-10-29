import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from "./footer";

export default function AnhatVarker() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const loansData = [
    {
      id: 1,
      category: 'Angrav',
      title: 'Անգրավ սպառողական վարկ',
      description: 'Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452390605/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 19%-ից' }
      ]
    },
    {
      id: 2,
      category: 'Auto',
      title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
      description: 'Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 50 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 84 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 13%-ից' },
        { label: 'Կանխավճար', value: 'սկսած 10%-ից' }
      ]
    },
    {
      id: 3,
      category: 'Gravov',
      title: 'Գույքի գրավով ապահովված վարկ',
      description: 'Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 150 մլն. ֏' },
        { label: 'Վարկի մարման ժամկետը', value: '24-180 ամիս' },
        { label: 'Վարկի մարման ժամկետը', value: '60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'Սկսած 14%-ից' }
      ]
    },
    {
      id: 4,
      category: 'Angrav',
      title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
      description: 'Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։',
      image: 'https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png',
      stats: [
        { label: 'Գումար', value: 'Մինչև 5 մլն. ֏' },
        { label: 'Ժամկետ', value: 'Մինչև 60 ամիս' },
        { label: 'Տոկոսադրույքից', value: 'Սկսած 0%-ից' }
      ]
    },
    {
      id: 5,
      category: 'Gravov',
      title: 'Ոսկու գրավով (լոմբարդային) վարկ',
      description: 'Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 50 մլն. ֏' },
        { label: 'Ժամկետ', value: '3-60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 15.5%-ից' },
        { label: 'Վարկ / գրավ', value: 'մինչև 150%' }
      ]
    },
    {
      id: 6,
      category: 'Aparanik',
      title: 'Տեղում Ապառիկ',
      description: 'Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղում ապառիկից։',
      image: 'https://www.evoca.am/images-cache/loans/1/16131174467985/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 5 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'Սկսած 0%-ից' }
      ]
    },
    {
      id: 7,
      category: 'Angrav',
      title: 'Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ',
      description: 'Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg',
      stats: []
    },
    {
      id: 8,
      category: 'Mortgage',
      title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
      description: 'Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։',
      image: 'https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 80 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 240 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 13.2%' }
      ]
    },
    {
      id: 9,
      category: 'Online',
      title: 'Action',
      description: 'Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։',
      image: 'https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: 'մինչև 10 մլն ֏' },
        { label: 'Մարման ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տարեկան անվանական տոկոսադրույք', value: 'սկսած 18%-ից' }
      ]
    },
    {
      id: 10,
      category: 'Mortgage',
      title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
      description: 'Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 55 մլն ֏' },
        { label: 'Մարման ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: '13%' }
      ]
    },
    {
      id: 11,
      category: 'Mortgage',
      title: 'Հողամասի ձեռքբերման վարկ',
      description: 'Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։',
      image: 'https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 80 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 240 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 14%-ից' }
      ]
    },
    {
      id: 12,
      category: 'Mortgage',
      title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
      description: 'Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։',
      image: 'https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 5 մլն. ֏' },
        { label: 'Ժամկետ', value: '60 ամիս' },
        { label: 'Տոկոսադրույք', value: '17%' }
      ]
    },
    {
      id: 13,
      category: 'Auto',
      title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
      description: 'Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:',
      image: 'https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png',
      stats: [
        { label: 'Գումար', value: 'Մինչև 50 մլն ֏' },
        { label: 'Ժամկետ', value: 'Մինչև 60 ամիս' },
        { label: 'Տոկոսադրույքից', value: 'Սկսած 14%-ից' }
      ]
    },
    {
      id: 14,
      category: 'Online',
      title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
      description: 'Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:',
      image: 'https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: 'մինչև 10 մլն ֏' },
        { label: 'Մարման ժամկետ', value: '36 ամիս' },
        { label: 'Տարեկան անվանական տոկոսադրույք', value: 'սկսած 16%-ից' }
      ]
    },
    {
      id: 15,
      category: 'Gravov',
      title: 'Անհատական վարկ «Ներդրումային»',
      description: 'Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։',
      image: 'https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 350 մլն ֏' },
        { label: 'Մարման ժամկետ', value: 'մինչև 240 ամիս' },
        { label: 'Տոկոսադրույք', value: '15%' }
      ]
    },
    {
      id: 16,
      category: 'Auto',
      title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
      description: 'Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:',
      image: 'https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 8 մլն ֏' },
        { label: 'Մարման ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: '16%' }
      ]
    },
    {
      id: 17,
      category: 'Angrav',
      title: 'Հեծանիվի ձեռքբերման վարկ',
      description: 'Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։',
      image: 'https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png',
      stats: [
        { label: 'Գումար', value: 'Մինչև 300,000 ֏' },
        { label: 'Ժամկետ', value: 'Մինչև 36 ամիս' },
        { label: 'Տոկոսադրույքից', value: 'Սկսած 16%-ից' },
        { label: 'Պետության կողմից սուբսիդավորվող տոկոսադրույք', value: '16%' }
      ]
    },
    {
      id: 18,
      category: 'Mortgage',
      title: 'Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ',
      description: 'Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։',
      image: 'https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png',
      stats: [
        { label: 'Գումար (Համարժեք արտարժույթ)', value: 'մինչև 80 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 180 ամիս' },
        { label: 'Տոկոսադրույք (Ֆիքսված)', value: 'սկսած 8.2%-ից' },
        { label: 'Տոկոսադրույք (Լողացող)', value: 'սկսած 7.7%-ից' }
      ]
    },
    {
      id: 19,
      category: 'Angrav',
      title: 'Վերանորոգման վարկ EvocaHOME',
      description: 'Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար պայմաններով։',
      image: 'https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն ֏' },
        { label: 'Մարման ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: '16%' }
      ]
    },
    {
      id: 20,
      category: 'Gravov',
      title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ',
      description: 'Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։',
      image: 'https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg',
      stats: [
        { label: 'Սահմանաչափ (Ավանդի)', value: 'մինչև 95%' },
        { label: 'Սահմանաչափ (Պարտատոմսի)', value: 'մինչև 80%' }
      ]
    },
    {
      id: 21,
      category: 'Mortgage',
      title: 'Առևտրային հիփոթեքային վարկեր',
      description: 'Բիզնեսն ընդլայնելու համար Ձեր ֆինանսական միջոցները բավարա՞ր չեն, եկե՛ք Evocabank։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142450609707/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 120 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 240 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 7.2%-ից' }
      ]
    },
    {
      id: 22,
      category: 'Mortgage',
      title: 'ԱՀԸ-ի ծրագրով ձեռք բերման վարկեր',
      description: 'Evocabank-ն առաջարկում է Ազգային հիփոթեքային ընկերության ծրագրի շրջանակներում տրամադրվող բնակարանային հիփոթեքային վարկեր։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142450957048/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 45 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 240 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 12%-ից' }
      ]
    },
    {
      id: 23,
      category: 'Mortgage',
      title: 'ԱՀԸ-ի ծրագրով կառուցապատման վարկեր',
      description: 'Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:',
      image: 'https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 45 մլն. ֏' },
        { label: 'Վարկի մարման ժամկետ', value: 'առավելագույնը 240 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 12.5%' }
      ]
    },
    {
      id: 24,
      category: 'Mortgage',
      title: 'ԱՀԸ-ի ծրագրով վերանորոգման վարկեր',
      description: 'Կազմակերպիր քո բնակարանի էներգաարդյունավետ վերանորոգումն Evocabank-ի հետ։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142533830767/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 15 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 84 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 12.5%-ից' }
      ]
    },
    {
      id: 25,
      category: 'Mortgage',
      title: 'Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»',
      description: 'Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 27 մլն. ֏' },
        { label: 'Վարկի մարման ժամկետը', value: 'մինչև 180 ամիս' },
        { label: 'Սուբսիդավորվող տոկոս', value: '2-ից - 4%' },
        { label: 'Տոկոսադրույք', value: '6.9-ից - 7.9%' }
      ]
    },
    {
      id: 26,
      category: 'Online',
      title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ',
      description: 'Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa Infinite քարտով և կունենաք բանալի` դեպի արտոնությունների մեծ աշխարհ:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն. ֏' },
        { label: 'Ժամկետ', value: '12-36 ամիս' },
        { label: 'Տոկոսադրույք', value: '15%' },
        { label: 'Արտոնյալ ժամանակահատված', value: 'Մինչև 45 օր' }
      ]
    },
    {
      id: 27,
      category: 'Mortgage',
      title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին',
      description: 'Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 45 մլն ֏' },
        { label: 'Վարկի մարման ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 10%-ից' }
      ]
    },
    {
      id: 28,
      category: 'Mortgage',
      title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին',
      description: 'Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։',
      image: 'https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն ֏' },
        { label: 'Վարկի մարման ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: '13%' }
      ]
    },
    {
      id: 29,
      category: 'Angrav',
      title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ',
      description: 'Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 4 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: '9%' },
        { label: 'Սուբսիդավորվող տոկոս', value: '2-ից - 3%' }
      ]
    },
    {
      id: 30,
      category: 'Mortgage',
      title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր',
      description: 'Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 21 մլն ֏' },
        { label: 'Վարկի մարման ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: '13%' }
      ]
    },
    {
      id: 31,
      category: 'Angrav',
      title: 'Evolution',
      description: 'Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի քո փոխարեն։',
      image: 'https://www.evoca.am/images-cache/loans/1/16644424027338/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 1 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 18 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 18%-ից' }
      ]
    },
    {
      id: 32,
      category: 'Mortgage',
      title: 'Հիփոթեքային վարկեր Զինծառայողներին',
      description: 'Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։',
      image: 'https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: 'մինչև 25,65 մլն ֏' },
        { label: 'Մարման ժամկետ', value: '120-240 ամիս' },
        { label: 'Տարեկան անվանական տոկոսադրույք', value: '11-ից - 12.75%' },
        { label: 'Սուբսիդավորվող տոկոսադրույք', value: '5%' }
      ]
    }
  ];

  const filteredLoans = selectedFilter === 'All' 
    ? loansData 
    : loansData.filter(loan => loan.category === selectedFilter);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <Navbar />
      
      {/* Sub-header Purple Bar (#6400dc) with Active "Վարկեր" Link */}
      <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
          <Link to="/loans" className="border-b-2 border-white pb-1 cursor-pointer">
            Վարկեր
          </Link>
          <Link to="/credit-history-and-score" className="opacity-80 hover:opacity-100 cursor-pointer">
            Վարկային պատմություն և սքոր
          </Link>
          <Link to="/important-information" className="opacity-80 hover:opacity-100 cursor-pointer">
            Կարևոր տեղեկատվություն
          </Link>
        </div>
      </div>

      {/* Breadcrumb & Main Title */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-xs text-gray-400 mb-4 flex items-center gap-2 text-left">
          <span>🏠</span> &gt; <span>Անհատ</span> &gt; <span>Վարկեր</span> &gt; <span className="text-gray-700 font-medium">Վարկեր</span>
        </div>

        <h1 className="text-3xl font-black text-neutral-900 mb-8 text-left">Վարկեր</h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {[
            { label: 'Բոլորը', key: 'All' },
            { label: 'Գրավով ապահովված սպառողական վարկեր', key: 'Gravov' },
            { label: 'Անգրավ սպառողական վարկեր', key: 'Angrav' },
            { label: 'Հիփոթեքային վարկեր', key: 'Mortgage' },
            { label: 'Ավտոմեքենաների ձեռքբերման ֆինանսավորում', key: 'Auto' },
            { label: 'Ապառիկ', key: 'Aparanik' },
            { label: 'Օնլայն վարկեր', key: 'Online' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedFilter(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedFilter === tab.key 
                  ? 'bg-[#6400dc] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Loans Cards List */}
        <div className="space-y-10">
          {filteredLoans.map((loan) => (
            <div 
              key={loan.id}
              className="bg-white border border-gray-100 rounded-[32px] p-6 md:p-8 shadow-sm hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Image Box */}
              <div className="lg:col-span-4 rounded-3xl overflow-hidden bg-[#6400dc] flex items-center justify-center aspect-[16/10] shadow-sm">
                <img 
                  src={loan.image} 
                  alt={loan.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Details */}
              <div className="lg:col-span-8 space-y-5 text-left">
                <h3 className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight">
                  {loan.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {loan.description}
                </p>

                {/* Stats Grid */}
                {loan.stats.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2 border-t border-gray-100">
                    {loan.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-base md:text-xl font-black text-[#6400dc]">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-gray-400 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <button className="bg-purple-50 hover:bg-purple-100 text-[#6400dc] font-bold text-xs px-6 py-3 rounded-full transition-all cursor-pointer">
                    Մանրամասն &gt;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}