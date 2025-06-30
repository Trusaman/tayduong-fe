import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const t = useTranslations("LanguageSwitcher");

    const getLocaleLabel = (localeCode: string) => {
        switch (localeCode) {
            case "vi":
                return "🇻🇳 Tiếng Việt";
            case "en":
                return "🇺🇸 English";
            default:
                return localeCode;
        }
    };

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t("ChangeLanguage")}>
            {routing.locales.map((localeCode) => (
                <option key={localeCode} value={localeCode}>
                    {getLocaleLabel(localeCode)}
                </option>
            ))}
        </LocaleSwitcherSelect>
    );
}
