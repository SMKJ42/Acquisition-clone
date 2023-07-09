import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer-container flex h-32 w-full items-center justify-center gap-12 bg-primary-200 px-4 py-8">
      <h4 className="ml-10 text-3xl font-extrabold tracking-tight text-white">
        ACQUISITION.COM
      </h4>
      <div className="flex w-3/4 flex-col items-center text-sm font-thin text-white">
        <div className=" flex w-full flex-row justify-between">
          <Link href="/books">Privacy Policy</Link>
          <div className="w-4"></div>
          <Link href="/courses">Terms of Service</Link>
          <div className="w-4"></div>
          <Link href="/partnership">Do not sell my info</Link>
        </div>
        <p className="mt-4">© copywrite</p>
      </div>
    </footer>
  );
};
