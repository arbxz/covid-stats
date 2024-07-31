import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/locale-switch/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    // <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
    //   {locales.map((cur) => (
    //     <SelectItem key={cur} value={cur}>
    //       {t("locale", { locale: cur })}
    //     </SelectItem>
    //   ))}
    // </LocaleSwitcherSelect>

    <LocaleSwitcherSelect defaultValue={locale} label={t("label")} />
  );
}
