import arrowIcon from "../assets/right.svg";
import Input from "./Input";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bottom-0 flex w-full flex-col bg-black font-light text-white">
      <div className="relative flex flex-col justify-between p-15 md:flex-row">
        <div>
          <p className="pb-10 text-lg">
            SUBSCRIBE TO OUR NEWSLETTER
            <br /> AND BE THE FIRST TO KNOW ABOUT
            <br /> THE LATEST RELEASES, OFFERS AND
            <br /> NEWS FROM{" "}
            <span className="font-spartan text-xl font-medium">exquisite.</span>
          </p>
          <div className="relative flex w-full items-center py-2">
            <img src={arrowIcon} className="absolute right-4 h-4 w-4" />

            <Input
              placeholder="Enter your email here"
              className="h-12 w-full rounded-4xl pr-10 pl-4 text-lg font-extralight"
              type="email"
            />
          </div>
          <div className="flex items-center gap-2 py-2">
            <input
              type="checkbox"
              className="focus:border-none focus:outline-none"
            />
            <p className="text-xs">
              I have read and agree to the exquisite privacy policy
            </p>
          </div>
        </div>
        <div className="flex gap-10 whitespace-nowrap">
          <div>
            <h3 className="font-medium">Menu</h3>
            <div className="text-sm font-light">
              <div>Electronics</div>
              <div>Jewellery</div>
              <div>Men's Clothing</div>
              <div>Women's Clothing</div>
            </div>

            <div></div>
          </div>
          <div>
            <h3 className="font-medium">Support</h3>
            <div className="text-sm font-light">
              <div>Shipping & Returns</div>
              <div>FAQs</div>
              <div>Terms & Conditions</div>
              <div>About</div>
              <div>Contact</div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="absolute right-4 bottom-3 rounded-lg border p-1"
        >
          Back to top
        </button>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-between p-4 md:flex-row">
        <p>
          &copy; 2025{" "}
          <span className="font-spartan text-2xl font-bold">exclusive.</span>
        </p>
        <p className="text-center font-medium">
          Built by Gideon Kemboi using the FakeStore API
        </p>
      </div>
    </div>
  );
}
