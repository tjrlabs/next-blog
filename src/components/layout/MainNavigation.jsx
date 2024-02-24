import LogoComponent from "@/components/layout/Logo";
import Link from "next/link";
import classes from "./main-navigation.module.css";

export default function MainNavigationComponent(){
    return (
        <header className={classes.header}>
            <Link href="/"><LogoComponent/></Link>
            <nav>
                <ul>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}