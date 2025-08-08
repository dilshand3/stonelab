import { IAdslayout } from "@/components/AdsLayout/AdsLayout";
import { IListItem } from "@/components/Header/Header";
import { icons } from "@/components/SVGIcon/svg";

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