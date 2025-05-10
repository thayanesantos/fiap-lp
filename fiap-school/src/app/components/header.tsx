import '@/app/styles.scss'

const Header = () => {
  return (
    <div className="flex flex-col items-center m-5
            pt-[1em] 
                sm:pt-[0rem]      md:pt-[5rem] 
                lg:pt-[11em]      xl:pt-[11em] 
                2xl:pt-[18em]
            pb-[9em] 
                sm:pb-[2em]       md:pb-[0rem] 
                lg:pb-[2rem]     xl:pb-[12rem] 
                2xl:pb-[6em]
            ">
      <h1 className='items-center
            mx-[3rem]        
                sm:mx-6           md:mx-[3rem]
            my-10       
                sm:my-1           md:my-1
                lg:my-1           xl:my-0
            text-[6rem]
                sm:text-[7rem]    md:text-[8rem]          
                lg:text-[10rem]   xl:text-[11rem] 
                2xl:text-[14rem]
            text-right  
                sm:text-right     md:text-center          
                lg:text-center    xl:text-center 
                2xl:text-center
            indent-[0.1em]
                sm:indent-[0rem]  md:-indent-[0.5rem]     
                lg:indent-[1rem]  xl:indent-[2rem] 
                2xl:indent-[1rem]
            z-0 absolute 
            uppercase font-extrabold break-all text-wrap wrap-anywhere 
            leading-[0.8] focus-in-expand'>Sobre
      </h1>
      <h2 className='relative z-20 text-white 
            sm:py-20               md:py-[1rem]
            lg:py-[1rem]           xl:py-[1rem]
            2xl:py-[2rem]
            mx-[1.2rem]
                sm:ml-0            md:ml-1
                lg:ml-9
            sm:bottom-[1rem]       md:bottom-[4.2rem]
            lg:bottom-[4.2rem]     xl:bottom-[4rem]
            2xl:bottom-[8rem]
            mt-[6rem]
                sm:-mt-[5.3rem]    md:mt-[1.9rem]
                lg:mt-[0.8rem]     xl:mt-[0.2rem]
                2xl:mt-[2.1rem]
            sm:mb-8           md:mb-[12rem]
            lg:mb-[9rem]      xl:mb-3
            2xl:mb-1
            text-left 
                sm:text-left       md:text-left
                2xl:text-left     
            text-[1.6rem] 
                sm:text-[1.9rem]   md:text-[2.5rem] 
                lg:text-[3.4rem]   xl:text-[3.8rem] 
                2xl:text-[4.4rem]
            indent-[0.8em] 
                sm:indent-[0.9rem]  md:indent-[1.0rem] 
                lg:indent-[1.8rem]    xl:indent-[2.9rem] 
                2xl:indent-[4rem]
            leading-[0.9] focus-in-expand'>A Melhor Faculdade <br />de Tecnologia</h2>
    </div>
  )
}

export default Header;
