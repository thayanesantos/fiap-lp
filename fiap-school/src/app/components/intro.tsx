import '@/app/styles.scss'
import Image from "next/image";
const Intro = () => {
    return (
        <>
            <Image
                className="hidden sm:hidden md:block"
                src="/assets/img/intro.png"
                alt="Next.js logo"
                width={600}
                height={400}
                priority
            />
            <div className='overflow-hidden'>
                <h3 className='-mx-28 2xl:-mx-2 text-white text-justify text-clip  wrap-anywhere relative z-40 
                text-[1.16rem] sm:text-[1.26rem] md:text-[1.26rem] lg:text-[1.26rem] xl:text-[1.26rem] 2xl:text-[2rem]
                leading-[1.7] focus-in-expand 
                underline decoration-white-100 decoration-[0.10rem] underline-offset-8'>
                    CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</h3>
            </div>
        </>
    )
}

export default Intro;