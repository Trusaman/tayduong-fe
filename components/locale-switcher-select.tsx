"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
    label,
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value as Locale;
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    }

    return (
        <div className="relative">
            <select
                className="ml-2 sm:ml-4 h-11 px-3 pr-8 text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                defaultValue={defaultValue}
                disabled={isPending}
                onChange={onSelectChange}
                aria-label={label}
                title={label}
            >
                {children}
            </select>
            {isPending && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
            )}
        </div>
    );
}
