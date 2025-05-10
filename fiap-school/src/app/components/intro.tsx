import '@/app/styles.scss'
import Image from "next/image";
const Intro = () => {
  return (
    <div className="2xl:py-24 2xl:my-20 flex flex-col items-stretch">
      <div className='overflow-hidden'>
        <h3 className='leading-[1.7] focus-in-expand underline decoration-white-100 text-white text-justify text-clip wrap-anywhere relative z-40
        decoration-[0.10rem]
          sm:decoration-[0.14rem]
        underline-offset-8
          sm:underline-offset-8
        -mx-28 
          sm:-mx-[6rem] md:-mx-[2rem]
          lg:mx-[4%] xl:mx-[10%]
          2xl:mx-[11%]
        sm:-px-[2rem]
        text-[1.16rem] 
          sm:text-[1.26rem] md:text-[1.26rem] 
          lg:text-[1.26rem] xl:text-[1.26rem]
          2xl:text-[2rem]
        '>
          CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.</h3>
      </div>
      <div className='flex flex-col items-center xl:py-8'>
        <Image className="hidden sm:hidden md:block lg:block"
          src="/assets/img/intro.png"
          alt="Next.js logo"
          width={1000}
          height={400}
          priority
        />
      </div>
    </div>
  )
}

export default Intro;