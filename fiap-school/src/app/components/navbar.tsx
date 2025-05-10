import { NavbarProps } from "../types/types";
import Image from "next/image";

function Navbar<T>({ brand }: NavbarProps<T>) {
    return (
        <nav className="z-40 bg-fiap-dark shadow-md px-6 py-4 flex justify-center">
            <div className="text-xl font-bold text-fiap-pink">
                {brand || <Image
                    className="dark:invert"
                    src="/assets/img/logo-fiap.svg"
                    alt="FIAP logo"
                    width={120}
                    height={40}
                    priority
                />}
            </div>
        </nav>
    )
}

export default Navbar;