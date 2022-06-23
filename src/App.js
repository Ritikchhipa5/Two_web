import "./App.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useState } from "react";
import Success from "./Success";
function App() {
  const [pageData, setPageData] = useState(2);
  const [FormData, setFormData] = useState({
    nickName: "",
    team: "",
    dob: "",
    sex: "",
    countryOfBirth: "",
    number: "",
    number2: "",
    email: "",
  });
  const FormSection = () => {
    return (
      <>
        <div className="flex-[1.2] flex ">
          <div className="flex-[0.2]"></div>
          <form className=" max-w-[70%] flex-1">
            <div className="mb-2">
              <div className="text-left font-bold">Nickname</div>
              <input className="w-full text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2">
              <div className="text-left font-bold">Nickname</div>
              <input className="w-full text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2">
              <div className="text-left font-bold">Team</div>
              <input className="w-full text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2 flex flex-col justify-start">
              <div className="text-left font-bold">Date of Birth</div>
              <input className=" w-[150px] text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2 flex flex-col justify-start">
              <div className="text-left font-bold">Sex</div>
              <input className=" w-[70px] text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2">
              <div className="text-left font-bold">Country of Birth</div>
              <input className="w-full text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2 flex flex-col justify-start">
              <div className="text-left font-bold">Number</div>
              <input className=" w-[70px] text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2 flex flex-col justify-start">
              <div className="text-left font-bold">Number-2</div>
              <input className=" w-[70px] text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2 flex flex-col justify-start">
              <div className="text-left font-bold">
                Email
                <span className="text-[#ecececad] text-[10px] items-center">
                  (Lorem Ipsum is simply dummy text of the printing and)
                </span>
              </div>
              <input className=" w-full text-white bg-black border border-[#636363]"></input>
            </div>{" "}
            <div className="mb-2 flex flex items-center">
              <input
                type="checkbox"
                className="text-white mr-2 bg-black border border-white"
              ></input>
              <div className="text-left font-bold">
                I agree to the Terms and Condition
              </div>
            </div>{" "}
            <p className="text-[#ecececad] text-[10px] items-center text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </form>
        </div>
      </>
    );
  };

  return (
    <div className="App  bg-[#092540]">
      {pageData === 3 ? (
        <Success setPageData={setPageData} />
      ) : (
        <div
          className="px-20 h-screen flex-col md:block justify-center items-center"
          style={{ margin: "auto 0" }}
        >
          {/* // Main Section  */}
          <div className="md:flex text-white items-center  pt-10 pb-2">
            {/* //Logog */}
            <div className="hidden md:block flex-1 w-full">
              <div className="top-5 left-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg"
                  width="80px"
                  alt=""
                ></img>
              </div>
              <div className="">
                <img
                  src={process.env.PUBLIC_URL + "hero.png"}
                  alt="dasd"
                  width="100%"
                ></img>
                <div className="text-left my-2">
                  <h3 className="font-bold">Title Text</h3>
                  <p className="text-[#ecececad] text-[10px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[10%] right-[150px] ">
              <label
                for="default-toggle"
                class="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="default-toggle"
                  class="sr-only peer"
                ></input>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
              </label>
            </div>
            {/* //Middle Section */}
            {pageData === 1 && (
              <>
                <div className="flex-col flex-[0.2] justify-center h-full items-center mx-10 ">
                  <span className="">
                    <MdOutlineArrowBackIosNew
                      size="40"
                      color="#000"
                      className="inline rotate-90"
                    />
                  </span>
                  <div className="h-[550px] overflow-y-scroll example">
                    {ScrollData.map((value, key) => (
                      <div
                        key={key}
                        className="my-3 font-bold hover:text-amber-600 cursor-pointer"
                      >
                        {value.title}
                      </div>
                    ))}
                  </div>
                  <span className="">
                    <MdOutlineArrowBackIosNew
                      size="40"
                      color="#000"
                      className="inline rotate-[270deg]"
                    />
                  </span>
                </div>

                <div className="flex-1 relative">
                  {/* // Drak to Light  */}

                  <div className="flex flex-wrap">
                    {Data.map((value, key) => (
                      <img
                        src={value.url}
                        className="w-[120px] h-[120px] object-cover m-2"
                        alt="das"
                        key={key}
                      ></img>
                    ))}
                  </div>
                </div>
              </>
            )}
            {pageData === 2 && <FormSection />}
            {/* Next Button  */}
          </div>

          {/* //Footer */}
          <div className="flex justify-between items-center pb-5">
            <p className="text-[#ecececad] text-[10px] items-center">
              {" "}
              2022 Company Name
            </p>
            <div className=" bottom-5  flex  items-center text-white ">
              <div className="mr-2">{pageData}/2</div>
              <div className="px-7 py-2 rounded-md bg-[#1d232a] shadow-lg shadow-white/5">
                {pageData === 1 ? "NEXT" : "SUBMIT"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ScrollData = [
  {
    title: "Main Color",
  },
  {
    title: "Hedlights",
  },
  {
    title: "Wheels",
  },
  {
    title: "Rims",
  },
  {
    title: "Hood",
  },
  {
    title: "Spolier",
  },
  {
    title: "Doors",
  },
  {
    title: "Mirrors",
  },
  {
    title: "Exhaust Pipe",
  },
  {
    title: "Sticker",
  },
  {
    title: "Molding",
  },
  {
    title: "Top",
  },
  {
    title: "Lights",
  },
  {
    title: "Air intake",
  },
  {
    title: "Windows",
  },
];

const Data = [
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
  {
    url: process.env.PUBLIC_URL + "hero.png",
  },
];

export default App;
