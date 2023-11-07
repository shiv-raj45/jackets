import { Metadata } from "next";

export const metadata: Metadata = {
    title: "3d jackets",
    description: "3d jackets",
};
export default function Home() {
    return (
        <iframe
            src="https://demo1.arashtad.com/poc-babylon/"
            className="w-screen h-[100vh]  overflow-hidden"
        />
    );
}
