import { navItems } from "@/constants";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionStore } from "./use-active-section";

export const useScroll = ({
  threshold = 0.5,
  section,
}: {
  threshold?: number;
  section: (typeof navItems)[number]["label"];
}) => {
  const { lastTimeClicked, setActiveSection } = useActiveSectionStore();

  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && new Date().getTime() - lastTimeClicked.getTime() > 1000) {
      setActiveSection(section);
    }
  }, [inView, section, setActiveSection, lastTimeClicked]);

  return { ref };
};
