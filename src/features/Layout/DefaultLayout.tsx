import { Footer } from "./Footer";
import { Header } from "./Header";
import { DefaultLayoutPropsType } from "./types";

export function DefaultLayout(props: DefaultLayoutPropsType) {
  const { children } = props;
  return (
    <>
      <div className="min-h-full">
        <Header />
        <main>
          <div className="mx-auto xl:max-w-[60rem] pb-16">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
