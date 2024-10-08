'use client';

import { useTransition } from 'react';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { locales } from '@/config';
import { usePathname, useRouter } from '@/navigation';

type Props = {
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(value: string) {
    const nextLocale = value;
    startTransition(() => {
      router.replace({ pathname, query: params }, { locale: nextLocale });
    });
  }

  return (
    <>
      <Select
        defaultValue={defaultValue}
        disabled={isPending}
        onValueChange={(e) => onSelectChange(e)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t('locale', { locale: cur })}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
