import clsx from "clsx";
import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement>;

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section className={clsx("py-24", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
