import TextLogo from "@/components/atoms/TextLogo";
import Twitter from "@/components/atoms/Twitter";
import Instagram from "@/components/atoms/Instagram";
import HoverLink from "@/components/atoms/HoverLink";

const Footer = () => {
  const d = new Date();
  return (
    <footer className="flex flex-col justify-between h-[400px] md:h-[300px] bg-cream top-8 left-0 right-0 z-50 bg-white h-24  max-w-[65rem] mx-auto rounded-lg drop-shadow-xl px-6 md:px-8 py-10 mb-20 mx-3 md:mx-auto mt-40 mx-4">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-start w-[50%]">
        <TextLogo />
        {/* Links */}
        <ul>
          <li>
            <a
              href="/"
              className="b2 focus:outline-none focus:bg-crimson hover:bg-crimson hover:text-cream p-1 px-2 rounded-md"
            >
              products
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              // handle contact
              console.log("hello");
              return "";
            }}
          >
            <a
              href=""
              className="b2 focus:outline-none focus:bg-crimson hover:bg-crimson hover:text-cream p-1 px-2 rounded-md cursor-pointer"
            >
              contact
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="b2 focus:outline-none focus:bg-crimson hover:bg-crimson hover:text-cream p-1 px-2 rounded-md"
            >
              blog
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="b2 focus:outline-none focus:bg-crimson hover:bg-crimson hover:text-cream p-1 px-2 rounded-md"
            >
              FAQ
            </a>
          </li>
        </ul>
        <div id="social-media" className="flex gap-1">
          <HoverLink href={"https://www.twitter.com"}>
            <Twitter />
          </HoverLink>
          <HoverLink href={"https://www.instagram.com"}>
            <Instagram />
          </HoverLink>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="b3">
          © {d.getFullYear()} Opine ltd. Cape Town, South Africa
        </p>
        <p className="b3">
          developed by{" "}
          <a href="https://www.stonecat.co" className=" underline">
            James Cruickshank
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
