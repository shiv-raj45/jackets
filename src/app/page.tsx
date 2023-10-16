import { Metadata } from "next";

export const metaData: Metadata = {
  title: "3d jackets",
  description: "3d jackets",
};
export default function Home() {
  return (
    <iframe
      src="https://demo1.arashtad.com/jacket-webgl/"
      className="w-screen h-[100vh]  overflow-hidden"
    />
  );
}
