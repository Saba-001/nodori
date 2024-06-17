export const DashboardFooter = () => {
  return (
    <footer className="bg-beige text-brown p-8 mx-40 mt-auto">
      <div className="grid grid-cols-4 gap-8 text-center">
        <div>
          <img
            src="/assets/images/Quality.png"
            alt="High Quality"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">High Quality</p>
          <p>crafted from top materials</p>
        </div>
        <div>
          <img
            src="/assets/images/Warranty.png"
            alt="Warranty Protection"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">Warranty Protection</p>
          <p>Over 2 years</p>
        </div>
        <div>
          <img
            src="/assets/images/Shipping.png"
            alt="Free Shipping"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">Free Shipping</p>
          <p>Order over 200 $</p>
        </div>
        <div>
          <img
            src="/assets/images/Support.png"
            alt="24/7 Support"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">24 / 7 Support</p>
          <p>Dedicated support</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-8 text-sm space-y-4 md:space-y-0 md:space-x-8">
        <div>
          <p className="font-bold mb-2 text-xl text-black">HOMECRAFT.</p>
          <p className="text-slate-800">nutsubidze street 95</p>
          <p className="text-slate-800">Tbilisi 0186</p>
        </div>
        <div>
          <p className="font-bold mb-2 text-lg text-slate-800">Links</p>
          <p className="text-black">Get Inspired</p>
          <p className="text-black">Rooms</p>
          <p className="text-black">Products</p>
          <p className="text-black">Custom Craft</p>
        </div>
        <div>
          <p className="font-bold mb-2 text-lg text-slate-800">Help</p>
          <p className="text-black"> Payment Options</p>
          <p className="text-black">Warranty</p>
          <p className="text-black">Delivery</p>
          <p className="text-black">Privacy Policies</p>
        </div>
        <div>
          <p className="font-bold mb-2 text-lg text-slate-800">Company</p>
          <p className="text-black">About us</p>
          <p className="text-black">Contact us</p>
        </div>
      </div>
    </footer>
  );
};
