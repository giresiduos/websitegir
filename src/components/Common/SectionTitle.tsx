const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-xl leading-tight! font-bold text-black sm:text-2xl md:text-[30px] dark:text-white">
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
