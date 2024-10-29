import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale} label="Change language">
            {routing.locales.map((locale) => (
                <option key={locale} value={locale}>
                    {locale}
                </option>
            ))}
        </LocaleSwitcherSelect>
    );
}
