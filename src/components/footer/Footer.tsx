const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center p-4 md:p-8 text-center mt-8">
      Website by
      <a
        href="https://arbxz.dev"
        target="_blank"
        className="border-custom-primary border-[1px] rounded-full px-8 py-2 text-custom-primary hover:bg-primary-foreground bg-custom-primary hover:text-custom-primary text-white hover:shadow-md transition-all duration-300"
      >
        arbxz.dev
      </a>
    </footer>
  );
};

export default Footer;
