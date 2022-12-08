import Image from "next/image";

export const Header = () => {
    return (
        <header className="h-16 bg-primary shadow-md flex items-center justify-center text-white font-semibold text-xl">
            <Image src="/images/logo-prime-sports.png" width="70" height="70" alt="Logo - Prime Sports" />
        </header>
    );
};
