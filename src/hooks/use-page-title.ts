import { useEffect } from "react";

const DEFAULT_SUFFIX = "Tech Vexor – AI Transformation & Performance Marketing Experts";
const DEFAULT_SEPARATOR = " | ";

export type UsePageTitleOptions = {
  suffix?: string | null;
  separator?: string;
};

export function usePageTitle(title: string, options?: UsePageTitleOptions) {
  const suffix = options?.suffix === undefined ? DEFAULT_SUFFIX : options.suffix;
  const separator = options?.separator ?? DEFAULT_SEPARATOR;
  const finalTitle = suffix ? `${title}${separator}${suffix}` : title;

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousTitle = document.title;
    document.title = finalTitle;

    return () => {
      document.title = previousTitle;
    };
  }, [finalTitle]);
}
