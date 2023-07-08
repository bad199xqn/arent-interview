import { FOOTER_ITEMS } from "@/constants";

export function Footer() {
  return (
    <footer className="bg-dark-500">
      <div className="mx-auto max-w-7xl h-32 xl:px-40 flex items-center gap-11">
        {FOOTER_ITEMS.map((item, index) => (
          <p className="text-light text-[11px]" key={`footer-${index}`}>{item.name}</p>
        ))}
      </div>
    </footer>
  );
}
