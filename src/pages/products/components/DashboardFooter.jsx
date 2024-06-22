import { Img } from "/src/components";
import { Link } from "react-router-dom";

export const DashboardFooter = () => {
  return (
    <footer className="bg-beige text-brown p-8 mx-40 mt-auto">
      <div className="grid grid-cols-4 gap-8 text-center">
        <div>
          <Img
            name="Quality"
            alt="High Quality"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">უმაღლესი ხარისხი</p>
          <p>დამზადებული უმაღლესი ხარისხის მატერიისგან</p>
        </div>
        <div>
          <Img
            name="Warranty"
            alt="Warranty Protection"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">საგარანტიო დაზღვევა</p>
          <p>2 წლამდე</p>
        </div>
        <div>
          <Img
            name="Shipping"
            alt="Free Shipping"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">უფასო მიწოდება</p>
          <p>200+ ლარის შენაძენის შემთხვევაში</p>
        </div>
        <div>
          <Img
            name="Support"
            alt="24/7 Support"
            className="h-12 w-12 mx-auto"
          />
          <p className="mt-2 font-bold">8 / 5 კონტაქტი</p>
          <p>ჩვენი საკონტაქტო ფორმის დახმარებით</p>
        </div>
      </div>
      <div className="flex justify-evenly py-20 text-sm">
        <div>
          <p className="font-bold mb-2 text-xl text-black">ჰოუმკრაფტი</p>
          <p className="text-slate-800">ნუცუბიძის ქუჩა 95</p>
          <p className="text-slate-800">თბილისი 0186</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold mb-2 text-lg text-slate-800">ლინკები</p>
          <Link
            className="hover:underline font-[Satoshi-medium]"
            to="/contact-us"
          >
            დაგვიკავშირდით
          </Link>
        </div>
      </div>
    </footer>
  );
};
