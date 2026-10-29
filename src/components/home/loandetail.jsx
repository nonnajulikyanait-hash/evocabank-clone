import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import EvocaOnlineMobile from './evocaonlinemobile';
import Footer from "./footer";

export default function LoanDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');

  // Բոլոր 32 վարկերի տվյալների բազան
  const loansData = [
    {
      id: 1,
      title: 'Անգրավ սպառողական վարկ',
      description: 'Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452390597/560x400.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 19%-ից' }
      ]
    },
    {
      id: 2,
      title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
      description: 'Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142451996694/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 50 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 84 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 13%-ից' }
      ]
    },
    {
      id: 3,
      title: 'Գույքի գրավով ապահովված վարկ',
      description: 'Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 150 մլն. ֏' },
        { label: 'Ժամկետ', value: '60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'Սկսած 14%-ից' }
      ]
    },
    {
      id: 4,
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
      title: 'Ոսկու գրավով (լոմբարդային) վարկ',
      description: 'Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452902587/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 50 մլն. ֏' },
        { label: 'Ժամկետ', value: '3-60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 15.5%-ից' }
      ]
    },
    {
      id: 6,
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
      title: 'Evoca աշխատավարձային փաթեթի շրջականակում տրամադրվող վարկ',
      description: 'Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142653302177/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 60 ամիս' }
      ]
    },
    {
      id: 8,
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
      title: 'Action',
      description: 'Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։',
      image: 'https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: 'մինչև 10 մլն ֏' },
        { label: 'Մարման ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 18%-ից' }
      ]
    },
    {
      id: 10,
      title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
      description: 'Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 55 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: '13%' }
      ]
    },
    {
      id: 11,
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
      title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
      description: 'Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:',
      image: 'https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png',
      stats: [
        { label: 'Գումար', value: 'Մինչև 50 մլն ֏' },
        { label: 'Ժամկետ', value: 'Մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: 'Սկսած 14%-ից' }
      ]
    },
    {
      id: 14,
      title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
      description: 'Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:',
      image: 'https://www.evoca.am/images-cache/loans/1/16947885698869/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: 'մինչև 10 մլն ֏' },
        { label: 'Մարման ժամկետ', value: '36 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 16%-ից' }
      ]
    },
    {
      id: 15,
      title: 'Անհատական վարկ «Ներդրումային»',
      description: 'Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։',
      image: 'https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 350 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 240 ամիս' },
        { label: 'Տոկոսադրույք', value: '15%' }
      ]
    },
    {
      id: 16,
      title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
      description: 'Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:',
      image: 'https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 8 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: '16%' }
      ]
    },
    {
      id: 17,
      title: 'Հեծանիվի ձեռքբերման վարկ',
      description: 'Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։',
      image: 'https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png',
      stats: [
        { label: 'Գումար', value: 'Մինչև 300,000 ֏' },
        { label: 'Ժամկետ', value: 'Մինչև 36 ամիս' },
        { label: 'Տոկոսադրույք', value: 'Սկսած 16%-ից' }
      ]
    },
    {
      id: 18,
      title: 'Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ',
      description: 'Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։',
      image: 'https://www.evoca.am/images-cache/loans/1/17262174043684/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 80 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 180 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 8.2%-ից' }
      ]
    },
    {
      id: 19,
      title: 'Վերանորոգման վարկ EvocaHOME',
      description: 'Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար պայմաններով։',
      image: 'https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: '16%' }
      ]
    },
    {
      id: 20,
      title: 'Դրամական միջոցների գրավով ապահովված անհատական վարկ',
      description: 'Ստացիր վարկ՝ գրավադրելով քո ավանդը կամ պարտատոմսը՝ արագ, հեշտ և առանց ավելորդ ձևակերպումների։',
      image: 'https://www.evoca.am/images-cache/loans/1/1782886301331/415x261.jpg',
      stats: [
        { label: 'Ավանդի սահմանաչափ', value: 'մինչև 95%' },
        { label: 'Պարտատոմսի սահմանաչափ', value: 'մինչև 80%' }
      ]
    },
    {
      id: 21,
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
      title: 'ԱՀԸ-ի ծրագրով կառուցապատման վարկեր',
      description: 'Կատարիր ներդրում քո բնակարանի էներգաարդյունավետ կառուցապատման մեջ և ստացիր հնարավորություն վճարել ավելի քիչ ծախսված էլեկտրաէներգիայի և գազի համար:',
      image: 'https://www.evoca.am/images-cache/loans/1/17265524369781/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 45 մլն. ֏' },
        { label: 'Ժամկետ', value: '240 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 12.5%' }
      ]
    },
    {
      id: 24,
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
      title: 'Հիփոթեքային վարկ «Երիտասարդ ընտանիքին՝ մատչելի բնակարան»',
      description: 'Գնե՛ք Ձեր երազանքների բնակարանն Evocabank-ի օգնությամբ։ Մեզ հետ բնակարան գնելը հեշտ է, գործընթացն էլ՝ պարզեցված:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142451699164/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 27 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 180 ամիս' },
        { label: 'Տոկոսադրույք', value: '6.9-ից - 7.9%' }
      ]
    },
    {
      id: 26,
      title: 'Visa Infinite վճարային քարտերով տրամադրվող վարկային սահմանաչափ',
      description: 'Ստացե՛ք օվերդրաֆտ Evocabank-ից Visa միջազգային վճարային համակարգի ամենաբարձր դասի Visa Infinite քարտով և կունենաք բանալի` դեպի արտոնությունների մեծ աշխարհ:',
      image: 'https://www.evoca.am/images-cache/loans/1/16142652333164/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն. ֏' },
        { label: 'Ժամկետ', value: '12-36 ամիս' },
        { label: 'Տոկոսադրույք', value: '15%' }
      ]
    },
    {
      id: 27,
      title: 'Հիփոթեքային վարկ Արցախի շրջաններից տեղահանված ընտանիքներին',
      description: 'Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Ադրբեջանի կողմից 2020 թվականի սեպտեմբերի 27-ին սանձազերծված պատերազմի հետևանքով տեղահանված ընտանիքներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/16690386016508/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 45 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: 'սկսած 10%-ից' }
      ]
    },
    {
      id: 28,
      title: 'Վերանորոգման հիփոթեքային վարկ Արցախից տեղահանված ընտանիքներին',
      description: 'Evocabank-ը տրամադրում է հիփոթեքային վարկ՝ բնակարանի կամ բնակելի տան վերանորոգման համար։',
      image: 'https://www.evoca.am/images-cache/loans/1/17133596531389/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 10 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 60 ամիս' },
        { label: 'Տոկոսադրույք', value: '13%' }
      ]
    },
    {
      id: 29,
      title: '«ՈՒՍԱՆՈՂԱԿԱՆ» սպառողական վարկ',
      description: 'Նոր որակավորումների և մասնագիտացումների ժամանակն է, բայց ուսման վարձի վճարման խոչընդոտնե՞ր կան, Evocabank-ը կվճարի Ձեր փոխարեն։',
      image: 'https://www.evoca.am/images-cache/loans/1/16142452651138/415x261.jpg',
      stats: [
        { label: 'Գումար', value: 'մինչև 4 մլն. ֏' },
        { label: 'Ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: '9%' }
      ]
    },
    {
      id: 30,
      title: 'Հիփոթեքային վարկեր ՀՀ սահմանամերձ և առանձին բնակավայրերում ընտանիքների բնակարանային մատչելիության ապահովման պետական աջակցության ծրագիր',
      description: 'Evocabank-ը միշտ ձեր կողքին է. Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր ՀՀ սահմանամերձ համայնքների բնակիչներին:',
      image: 'https://www.evoca.am/images-cache/loans/1/16696265771993/415x261.png',
      stats: [
        { label: 'Գումար', value: 'մինչև 21 մլն ֏' },
        { label: 'Ժամկետ', value: 'մինչև 120 ամիս' },
        { label: 'Տոկոսադրույք', value: '13%' }
      ]
    },
    {
      id: 31,
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
      title: 'Հիփոթեքային վարկեր Զինծառայողներին',
      description: 'Ձեռք բեր քո նոր բնակարանը ամենահարմար պայմաններով։ Հիփոթեքային վարկը տրամադրվում է պետական նպատակային ծրագրի շրջանակում։',
      image: 'https://www.evoca.am/images-cache/loans/1/17129179540435/415x261.png',
      stats: [
        { label: 'Սահմանաչափ', value: 'մինչև 25,65 մլն ֏' },
        { label: 'Մարման ժամկետ', value: '120-240 ամիս' },
        { label: 'Տոկոսադրույք', value: '11-ից - 12.75%' }
      ]
    }
  ];

  const loan = loansData.find(item => item.id === Number(id)) || loansData[0];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <Navbar />
      
      <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
          <Link to="/loans" className="text-white border-b-2 border-white pb-1 cursor-pointer">Վարկեր</Link>
          <Link to="/credit-history-and-score" className="text-white opacity-80 hover:opacity-100 cursor-pointer">Վարկային պատմություն և սքոր</Link>
          <Link to="/important-information" className="text-white opacity-80 hover:opacity-100 cursor-pointer">Կարևոր տեղեկատվություն</Link>
        </div>
      </div>

      <div className="relative bg-[#e6d2ff] text-neutral-900 overflow-hidden py-16 px-4 md:px-12 rounded-b-[40px] shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-4 text-left">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900">{loan.title}</h1>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed max-w-xl">
              {loan.description}
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={loan.image} 
              alt={loan.title} 
              className="max-h-72 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/loans" className="text-xs font-bold text-gray-500 hover:text-[#6400dc] flex items-center gap-1">
            ← Վերադառնալ
          </Link>
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Անհատ</span> &gt; <Link to="/loans">Վարկեր</Link> &gt; <span className="text-gray-700 font-medium">{loan.title}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-left">
            <div className="flex border-b border-gray-200 gap-8 text-sm font-bold">
              <button 
                onClick={() => setActiveTab('about')}
                className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'about' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
              >
                Վարկի մասին
              </button>
              <button 
                onClick={() => setActiveTab('conditions')}
                className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'conditions' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
              >
                Պայմաններ
              </button>
              <button 
                onClick={() => setActiveTab('documents')}
                className={`pb-3 cursor-pointer transition-all border-b-2 ${activeTab === 'documents' ? 'border-[#6400dc] text-[#6400dc]' : 'border-transparent text-gray-500 hover:text-neutral-800'}`}
              >
                Պահանջվող փաստաթղթերի ցանկ
              </button>
            </div>

            {activeTab === 'about' && (
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed animate-fadeIn">
                <p>{loan.description}</p>
              </div>
            )}

            {activeTab === 'conditions' && (
              <div className="space-y-4 text-sm text-gray-700 animate-fadeIn">
                <p className="font-semibold text-neutral-900">Ընդհանուր պայմաններ և դրույթներ տվյալ վարկատեսակի համար։</p>
                <p>Վարկը տրամադրվում է ՀՀ քաղաքացիներին և ռեզիդենտներին՝ բանկի ներքին ընթացակարգերին համապատասխան:</p>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-4 text-sm text-gray-700 animate-fadeIn">
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Վարկի տրամադրման դիմում-հայտ</li>
                  <li>Անձնագիր կամ նույնականացման քարտ, սոցիալական քարտ</li>
                  <li>Տեղեկանք փաստացի բնակության վայրից</li>
                  <li>Անհրաժեշտության դեպքում՝ եկամուտները հավաստող փաստաթղթեր</li>
                </ol>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm sticky top-24 space-y-4">
            <div className="flex justify-center">
              <span className="w-8 h-8 rounded-full bg-[#6400dc] text-white flex items-center justify-center font-bold text-sm">
                ֏
              </span>
            </div>

            <div className="space-y-3 border-t border-b border-gray-100 py-4 text-left text-xs">
              {loan.stats.map((stat, idx) => (
                <div key={idx} className="pt-1">
                  <div className="text-lg md:text-xl font-black text-[#6400dc]">{stat.value}</div>
                  <div className="text-[11px] text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs py-3 rounded-full transition shadow-md cursor-pointer">
              Առցանց հայտ
            </button>
          </div>
        </div>
      </div>

      <EvocaOnlineMobile />
      <Footer />
    </div>
  );
}