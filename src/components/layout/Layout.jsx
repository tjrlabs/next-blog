import MainNavigationComponent from "@/components/layout/MainNavigation";

export default function LayoutComponent({children}){
    return <>
        <MainNavigationComponent/>
        <main>{children}</main>
    </>
}