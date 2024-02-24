import classes from './Hero.module.css';
import Image from "next/image";
export default function HeroComponent(){
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/unnamed.jpg" width={300} height={300}/>
            </div>
            <h1>Hi, I'm Jai</h1>
            <p>I'm a web developer with over a decade of experience in Web Development.</p>
        </section>
    )
}