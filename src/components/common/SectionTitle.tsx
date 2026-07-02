type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-foreground">{title}</h2>
    </div>
  );
};

export default SectionTitle;
