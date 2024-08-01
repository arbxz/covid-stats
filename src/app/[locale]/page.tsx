import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Activity, ArrowRight, Database } from "lucide-react";
import { formatNumber } from "@/utils/utils";
import LocaleSwitcher from "@/components/locale-switch/LocaleSwitcher";
import { ModeToggle } from "@/components/theme-toggle";

// TODO remove unused imports
// TODO fix imports sorting
// TODO Add a comment to describe the function
// TODO figure out where to place util functions
// TODO convert cards into components

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="flex flex-col min-h-screen p-4 md:p-8">
      <nav className="flex items-center justify-between gap-4 w-full">
        <div className="group bg-custom-primary text-white dark:bg-primary-foreground border-custom-primary flex gap-4 items-center px-4 py-2 border-[1px] rounded-full">
          <Activity size={16} />
          <span className="text-sm">covid-stats</span>
        </div>
        <ul className="hidden lg:flex items-center gap-4 text-sm">
          <li>
            <a
              className="py-2 hover:pb-4 border-custom-primary border-b-[1px] hover:border-b-2 transition-all duration-300"
              href="/about">
              Active cases
            </a>
          </li>
          <li>
            <a
              className="py-2 hover:pb-4 border-custom-primary border-b-[1px] hover:border-b-2 transition-all duration-300"
              href="/about">
              Vaccination data
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <ModeToggle />
        </div>
      </nav>
      <div className="relative overflow-hidden max-w-7xl mx-auto flex-1 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 py-4">
        <Image
          className="absolute hidden lg:block top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 -rotate-12 dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/chart.svg"
          width={950}
          height={600}
          alt="Next.js Logo"
          priority
        />
        <div className="relative w-full text-center md:text-left py-8">
          <h1 className="font-semibold text-4xl lg:text-6xl mb-4 lg:mb-8">
            {t("title")}
          </h1>
          <p className="text-md md:text-lg mb-4">{t("description")}</p>
          <div className="lg:text-right">
            <a
              className="px-4 py-1 border-custom-primary text-custom-primary hover:shadow-md transition-all duration-500 border-[1px] rounded-full text-xs"
              href="https://disease.sh"
              target="_blank">
              {t("dataset")}
              <Database className="inline-block ml-2" size={12} />
            </a>
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 w-full md:w-1/3 lg:w-72">
          {/* Card */}
          <div className="group text-center hover:border-custom-primary transition-colors duration-300 bg-white dark:bg-primary-foreground border-[1px] rounded-md">
            <div className="flex flex-col justify-center items-center p-8">
              <span className="text-4xl font-semibold mb-4">
                {formatNumber(22123398)}
              </span>
              <span>Active cases</span>
            </div>
            <div className="p-4 group-hover:border-custom-primary border-t-[1px] transition-colors duration-300">
              <Link
                href={""}
                className="flex justify-start items-end text-xs text-left text-slate-500">
                View active covid cases datasets.
                <ArrowRight className="inline ml-2" size={14} />
              </Link>
            </div>
          </div>
          <div className="group text-center hover:border-custom-primary transition-colors duration-300 bg-white dark:bg-primary-foreground border-[1px] rounded-md">
            <div className="flex flex-col justify-center items-center p-8">
              <span className="text-4xl font-semibold mb-4">
                {formatNumber(22123398)}
              </span>
              <span>Active cases</span>
            </div>
            <div className="p-4 group-hover:border-custom-primary border-t-[1px] transition-colors duration-300">
              <Link
                href={""}
                className="flex justify-start items-end text-xs text-left text-slate-500">
                View active covid cases datasets.
                <ArrowRight className="inline ml-2" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
