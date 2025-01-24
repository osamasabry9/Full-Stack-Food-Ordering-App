type MainHeadingProps = {
  titleChildren: React.ReactNode;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
};

const MainHeading = ({
  titleChildren,
  subtitle,
  className = "",
  subtitleClassName = "",
}: MainHeadingProps) => {
  return (
    <div className={`mb-8 space-y-4 md:mb-12 md:space-y-6 ${className}`}>
      <h1
        className={`text-center font-bold leading-tight tracking-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        ${className}`}
      >
        {titleChildren}
      </h1>

      {subtitle && (
        <div className="mx-auto max-w-prose lg:max-w-4xl">
          <p
            className={`text-center text-base text-muted-foreground
            md:text-lg lg:text-xl
            leading-relaxed tracking-normal ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default MainHeading;
