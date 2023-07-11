import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer-container flex  w-full flex-1 flex-col items-center justify-center gap-12 bg-primary-200 px-4 md:h-32 md:flex-row">
      <h4 className="translate-y-6 text-3xl font-extrabold tracking-tight text-white md:ml-10 md:translate-y-0 md:self-start md:pt-6">
        ACQUISITION<span className="font-thin">.COM</span>
      </h4>
      <div className="flex w-3/4 flex-row items-center text-sm font-thin text-white sm:flex-col">
        <div className="flex w-full flex-col justify-around pb-4 sm:flex-row">
          <Link
            href="/privacy_policy"
            className="underline-offset-4 hover:underline sm:my-2"
          >
            Privacy Policy
          </Link>
          <div className="w-4"></div>
          <Link
            href="/terms_of_service"
            className="underline-offset-4 hover:underline sm:my-2"
          >
            Terms of Service
          </Link>
          <div className="w-4"></div>
          <Link
            href="/do_not_sell_my_info"
            className="underline-offset-4 hover:underline sm:my-2"
          >
            Do not sell my info
          </Link>
        </div>
        <div className="flex w-full justify-end">
          <p className="translate-y-[-.5rem] pt-4 md:translate-y-0">
            © copywrite
          </p>
          <div className="w-1/12"></div>
        </div>
      </div>
    </footer>
  );
};
