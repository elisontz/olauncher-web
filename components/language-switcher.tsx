import Link from "next/link";

import { localeLabels, type Locale } from "@/lib/site";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <nav aria-label="Language switcher" className="locale-switcher">
      {(["zh", "en"] as const).map((item) => (
        <Link
          key={item}
          href={item === "zh" ? "/zh" : `/${item}`}
          className={item === locale ? "locale-pill locale-pill-active" : "locale-pill"}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </nav>
  );
}
