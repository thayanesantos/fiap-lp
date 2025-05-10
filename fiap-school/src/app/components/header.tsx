import '@/app/styles.scss'

const Header = () => {
    return (
        <>
            <h1 className='mx-6 my-1 
            sm:top-[17rem]
            z-0 absolute uppercase font-extrabold break-all text-wrap wrap-anywhere 
            text-[6rem] sm:text-[7rem] md:text-[8rem] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem]
            text-right sm:text-right md:text-center lg:text-center xl:text-center 2xl:text-center
            indent-[0.8em] sm:indent-[0.9em] md:-indent-[0.24em] lg:-indent-12 xl:indent-2 2xl:indent-[1em]
            leading-[0.8] focus-in-expand'>Sobre
            </h1>
            <h2 className='my-16 relative z-40 text-white 
                text-left 2xl:text-center 2xl:right-[2em]
                text-[1.6rem] sm:text-[1.9rem] md:text-[2.6rem] lg:text-[3.6rem] xl:text-[4.6rem] 2xl:text-[5rem]
                indent-[0.8em] sm:indent-[0.9em] md:indent-[1.0em] lg:indent-[1em] xl:indent-[1em] 2xl:indent-[4.4em]
                leading-[0.9] focus-in-expand'>A Melhor Faculdade <br />de Tecnologia</h2>
        </>
    )
}

export default Header;
