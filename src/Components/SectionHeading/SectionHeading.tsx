type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2
      className=" text-center font-fjalla font-extrabold text-5xl  tracking-widest uppercase mb-8 mt-20 sm:mt-8 
    
    
    "
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
