import { GoTopButton } from "@/components/GoTopButton";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { DefaultLayoutPropsType } from "./types";

export function DefaultLayout(props: DefaultLayoutPropsType) {
  const { children } = props;
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main className="relative">
          {children}
          <div className="fixed bottom-10 right-24 z-[1000]">
            <GoTopButton />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
