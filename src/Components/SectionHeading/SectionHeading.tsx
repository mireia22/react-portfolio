type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className=" text-center font-fjalla text-3xl  uppercase mb-8 mt-20 sm:mt-8 ">
      {children}
    </h2>
  );
};

export default SectionHeading;
