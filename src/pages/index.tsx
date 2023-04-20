import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-0">
            <NavBar />
        </main>
    );
}
