import TitleSection from "./_components/title-section";

const page = () => {
  return (
    <section>
      <div className="h-[calc(100vh-56px)] overflow-hidden px-4 sm:px-6 sm:flex sm:flex-col gap-4 md:justify-center md:items-center relative bg-grid-black/[0.2]">
        <TitleSection
          title="Next.js app router Study"
          subheading="✨ Next.jsの練習用です!!"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </section>
  );
};

export default page;
