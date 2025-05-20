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
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`mb-4 text-3xl leading-tight! font-bold text-black sm:text-4xl md:text-[45px] dark:text-white ${titleClassName}`}
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
