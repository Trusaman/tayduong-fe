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
        <select
            className="ml-4 p-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            defaultValue={defaultValue}
            disabled={isPending}
            onChange={onSelectChange}
        >
            {children}
        </select>
    );
}
