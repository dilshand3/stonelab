import { IAdslayout } from "@/components/AdsLayout/AdsLayout";
import { IListItem } from "@/components/Header/Header";
import { icons } from "@/components/SVGIcon/svg";
import { IFooterList } from "@/components/FooterList/FooterList";
import { IPersonBlogs } from "@/components/PersonBlogs/PersonBlogs";

export const AdsLayoutData: IAdslayout[] = [
    {
        path: icons.people.path,
        viewBox: icons.people.viewBox,
        title: 'Consulting',
        para: 'Get expert advice for web and React Native apps from pros with multiple years of experience.',
        buttonTitle: 'Build better apps'
    },
    {
        path: icons.product.path,
        viewBox: icons.product.viewBox,
        title: 'Product Development',
        para: 'Create web and React Native apps for 10+ platforms, from iOS to Android and beyond.',
        buttonTitle: 'Ship faster'
    },
    {
        path: icons.enterprises.path,
        viewBox: icons.enterprises.viewBox,
        title: 'Enterprise Solutions',
        para: 'Scale web and React Native apps with a design for large teams and long-term growth.',
        buttonTitle: 'Scale smarter',
    }
]

export const applogoDataList = [
    '/img/maricota.svg',
    '/img/directtv.svg',
    '/img/evernote.svg',
    '/img/futurewei.svg',
    '/img/ebm.svg',
    '/img/ticketmaster.svg',
    '/expensify.svg',
    '/img/musashi-1.svg',
    '/img/vodafone-passo.svg',
    '/img/autoozone.svg'
]

export const listItemData: IListItem[] = [
    {
        title: 'Service',
        route: "service"
    },
    {
        title: 'About us',
        route: 'aboutus'
    },
    {
        title: 'Technology',
        route: 'technology'
    },
    {
        title: "Blog",
        route: 'blogs'
    },
    {
        title: 'Open source',
        route: 'opensource'
    }
]

export const footerlistData1: IFooterList = {
    title: 'follow us on',
    listItem: [
        { text: 'x(twitter)', route: '/twitter' },
        { text: 'instagram', route: '/instagram' },
        { text: 'linkedin', route: '/linkedin' },
        { text: 'youtube', route: '/youtube' }
    ],
};

export const footerlistData2: IFooterList = {
    title: 'pages',
    listItem: [
        { text: 'service', route: '/service' },
        { text: 'about us', route: '/about us' },
        { text: 'technology', route: '/technology' },
        { text: 'blog', route: '/blogs' },
        { text: 'open source', route: '/opensource' }
    ],
};

export const footerlistData3: IFooterList = {
    title: 'contact',
    listItem: [
        { text: 'reach us', route: '/reachus' }
    ]
}

export const PersonBlogsData1 : IPersonBlogs = {
   name : "Nikhil bishnoi",
   position : 'Software developer',
   img : '/nikhil.png',
   paragraph : 'Stonelab crafts affordable React Native apps. We cut costs, boost quality. New tools empower developers!'
}

export const PersonBlogsData2 : IPersonBlogs = {
   name : "Apurva Ghormade",
   position : 'Software Tester',
   img : '/apurva.png',
   paragraph : 'Stonelab delivers cheap, fast web solutions. JS/TS skills shine. Innovation drives us!'
}

export const PersonBlogsData3 : IPersonBlogs = {
   name : "Dilshan hansal",
   position : 'Founder & Software developer',
   img : '/dilshan.png',
   paragraph : 'Stonelab blends Node.js with React Native. Affordable tech supports developer growth!'
}

export const HeroSection2Data = [
    '/techlogo/leftBracket.svg',
    '/techlogo/kotlin.svg',
    '/techlogo/Nextjs.svg',
    '/techlogo/node.svg',
    '/techlogo/prismalogo.svg',
    '/techlogo/react.svg',
    '/techlogo/xLogo.svg',
    '/techlogo/walogo.svg',
    '/techlogo/rightBracket.svg',
]