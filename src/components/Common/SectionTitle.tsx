const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleClassName = "",
}: {
  title: React.ReactNode;
  paragraph?: React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
  titleClassName?: string;
}) => {
  const defaultTitleClassName =
    "text-3xl sm:text-4xl md:text-[45px] md:max-lg:text-4xl lg:text-[45px]";

  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`mb-4 leading-tight! font-bold text-black dark:text-white ${titleClassName ? titleClassName : defaultTitleClassName}`}
        >
          {title}
        </h2>

        {paragraph && (
          <p className="text-body-color text-base leading-relaxed! md:text-2xl">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
