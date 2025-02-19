import { Link } from "react-router-dom";
import Social from "../Components/Social/Social";

const FooterSite = () => {
  return (
    <footer className="bg-slate-900 px-3">
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link
                to="/about-us"
                className="text-base leading-6 text-white hover:text-rose-900"
              >
                About
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                to="/blog"
                className="text-base leading-6 text-white hover:text-rose-900"
              >
                Blog
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link
                to="/contact-us"
                className="text-base leading-6 text-white hover:text-rose-900"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <Social />
          </div>
          <p className="mt-8 text-base leading-6 text-center text-white">
            Made By Hassan Amini
          </p>
        </div>
      </section>
    </footer>
  );
};
export default FooterSite;
