"use client";

import PDFPrint from "@/component/PDFPrint";
import { useState } from "react";

const initialData = {
  speakerName: "",
  guestName: "",
  gender: "",
  profession: "",
  experienceInYears: "",
  age: "",
  date: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialData);

  return (
    <main>
      <div className="flex flex-col justify-center items-center min-h-screen py-2">
        <h1 className="text-3xl mb-5">Fill the details</h1>
        <div className="flex flex-col">
          {/* name of the speaker */}
          <input
            type="text"
            name="speakerName"
            value={formData.speakerName}
            onChange={(e) =>
              setFormData({ ...formData, speakerName: e.target.value })
            }
            placeholder="Name of the speaker"
            className="border-[3px] border-blue-400 p-2 rounded-xl mb-3"
          />

          {/* Name of the guest */}
          <input
            type="text"
            name="guestName"
            value={formData.guestName}
            onChange={(e) =>
              setFormData({ ...formData, guestName: e.target.value })
            }
            placeholder="Name of the guest"
            className="border-[3px] border-blue-400 p-2 rounded-xl mb-3"
          />
          {/* Age of the guest */}
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Age of the guest"
            className="border-[3px] border-blue-400 p-2 rounded-xl mb-3"
          />
          {/* profession */}
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={(e) =>
              setFormData({ ...formData, profession: e.target.value })
            }
            placeholder="Profession"
            className="border-[3px] border-blue-400 p-2 rounded-xl mb-3"
          />
          <input
            type="text"
            name="experienceInYears"
            value={formData.experienceInYears}
            onChange={(e) =>
              setFormData({ ...formData, experienceInYears: e.target.value })
            }
            placeholder="Experience in Years"
            className="border-[3px] border-blue-400 p-2 rounded-xl mb-3"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            placeholder="Experience in Years"
            className="border-[3px] border-blue-400 p-2 rounded-xl mb-3"
          />

          {/* gender */}
          <select
            id="options"
            className="border-[3px] border-blue-400 p-2 rounded-xl mb-3"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          >
            <option value="" disabled>
              gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="w-full">
          <PDFPrint formData={formData} />
        </div>
      </div>
    </main>
  );
}
