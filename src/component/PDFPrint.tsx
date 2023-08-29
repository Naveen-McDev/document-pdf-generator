"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PDFPrint({ formData }: any) {
  const {
    speakerName,
    guestName,
    gender,
    profession,
    experienceInYears,
    age,
    date,
  } = formData;
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print Success"),
  });
  return (
    <main style={{ padding: "0 150px" }}>
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          <h1 className="text-3xl flex justify-center">Intro Script</h1>
          <p>
            "Hello, everyone. My name is {speakerName}, and I&apos;m delighted
            to introduce you to {guestName}. {gender === "Male" ? "He" : "She"}{" "}
            is a seasoned {profession} with {experienceInYears} years of
            experience in the field. At the age of {age}, {guestName} has
            demonstrated exceptional expertise and a remarkable dedication.
            Today, we have the privilege of learning from{" "}
            {gender === "Male" ? "He" : "She"} insights and experience. Without
            further ado, I invite {guestName} to share{" "}
            {gender === "Male" ? "He" : "She"} knowledge with us." data:{date}
          </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <button
          className="bg-green-300 px-5 py-2 rounded-lg "
          onClick={handlePrint}
        >
          Print this
        </button>
      </div>
    </main>
  );
}
