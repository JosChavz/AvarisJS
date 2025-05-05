import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/components/mode-toggle";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 gap-4 h-16">
            <Image src={'/images/logo.png'} alt={'logo'} width={120} height={120} />
            <div className="flex items-center justify-between gap-4">
                <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <ModeToggle />
            </div>
        </header>
    );
}
