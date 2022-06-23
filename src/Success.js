import React from "react";

function Success(props) {
  return (
    <>
      <div className="">
        <div className=" absolute top-10 left-[100px]">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg"
            width="80px"
            alt=""
          ></img>
        </div>
        <div className="h-screen flex flex-col justify-center">
          <div className="w-[700px] mx-auto">
            <div className="text-left font-bold text-white ">Success!</div>

            <p className="text-[#ecececad] text-[10px] items-center text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <div className=" bottom-5 mt-10 cursor-pointer  flex  items-center text-white ">
              <div
                className="px-7 py-2 rounded-md bg-[#1d232a] shadow-lg shadow-white/5"
                onClick={() => props.setPageData(1)}
              >
                HOME
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-10 left-[100px] flex justify-between items-center pb-5">
          <p className="text-[#ecececad] text-[10px] items-center">
            {" "}
            2022 Company Name
          </p>
        </div>
      </div>
    </>
  );
}

export default Success;
