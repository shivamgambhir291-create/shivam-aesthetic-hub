import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    let done = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", recheck);
      timeouts.forEach(clearTimeout);
    };

    const inView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight - 40 && r.bottom > 0;
    };
    const check = () => {
      if (inView()) show();
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) show();
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);

    function onScroll() {
      check();
    }
    function recheck() {
      check();
    }

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("load", recheck);
    // Layout can shift while fonts/images load; retry a few times.
    timeouts = [100, 400, 1000].map((ms) => setTimeout(check, ms));

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", recheck);
      timeouts.forEach(clearTimeout);
    };
  }, []);


  const Comp = Tag as "div";

  return (
    <Comp
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Comp>
  );
}
