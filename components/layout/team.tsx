"use client";

import React, { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  experience: string;
  specialization: string;
}

const teamMembers = [
  {
    id: 1,
    name: "Sayfudinov Farruh Mahmud o‘g‘li",
    role: "Auditor",
    image: "/image/Farrux.jpg",
    experience: "9 yillik stajga ega bosh buxgalter",
    specialization: "",
  },
  {
    id: 2,
    name: "Anorqulov Shokir Pardaboyvich",
    role: "Auditor",
    image: "/image/Shokir.jpg",
    experience: "8 yillik stajga ega bosh buxgalter",
    specialization: "",
  },
  {
    id: 3,
    name: "Xasanov Sherali Xatamovich",
    role: "Auditor",
    image: "/image/Sherali1.jpg",
    experience: "14 yillik stajga ega bosh buxgalter",
    specialization: "Xalqaro darajadagi buxgalter (ACCA DipIFR, CAP)",
  },
  {
    id: 4,
    name: "Azizov Sherali Yangiboyevich",
    role: "Auditor",
    image: "/image/Sherali2.jpg",
    experience: "15 yillik stajga ega bosh buxgalter",
    specialization: "",
  },
  {
    id: 5,
    name: "Ergashev Asqad Turkmanovich",
    role: "Moliya menedjeri",
    image: "/image/Asqad.jpg",
    experience: "15 yil (shu jumladan, ishlab chiqarish korxonalarida 12 yil)",
    specialization: "",
  },
];

const Team = () => {
  const [members, setMembers] = useState(teamMembers); // Jamoa a'zolari
  const [selectedMember, setSelectedMember] = useState(teamMembers[2]); // Dastlab o'rtadagi a'zo (id: 3)

  const handleSelectMember = (member: TeamMember) => {
    // Tanlangan rasmni o'rtadagi rasm bilan joyini almashtirish
    const centerIndex = members.indexOf(selectedMember);
    const selectedIndex = members.indexOf(member);

    // Agar tanlangan rasm o'rtadagi rasm bo'lmasa, joyini almashtirish
    if (centerIndex !== selectedIndex) {
      const updatedMembers = [...members];
      [updatedMembers[centerIndex], updatedMembers[selectedIndex]] = [
        updatedMembers[selectedIndex],
        updatedMembers[centerIndex],
      ];
      setMembers(updatedMembers);
      setSelectedMember(member);
    }
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Bizning Jamoamiz
        </h2>
        <div className="flex justify-center items-end gap-10">
          {members.map((member, index) => {
            // Rasm o'lchamini belgilash
            const centerIndex = members.indexOf(selectedMember);
            let width = "180px"; // Eng kichik rasm
            let height = "220px"; // Eng kichik rasm
            let translateY = "0"; // Default pozitsiya
            let margin = "0px"; // Default bo'shliq
            if (index === centerIndex) {
              width = "250px"; // O'rtadagi rasm eng katta
              height = "300px";
              margin = "15px"; // Default bo'shliq
            } else if (index === centerIndex - 1 || index === centerIndex + 1) {
              width = "240px"; // O'rtadagi rasmning yonidagilar
              height = "280px";
              margin = "0px"; // Default bo'shliq
            } else {
              translateY = "-20px";
              margin = "0px"; // Default bo'shliq // Eng chetki rasmlarni teparoqqa ko'tarish
            }

            return (
              <div
                key={member.id}
                className={`cursor-pointer transition-transform duration-300 ${
                  member.id === selectedMember.id
                    ? "transform scale-110"
                    : "transform scale-90"
                }`}
                onClick={() => handleSelectMember(member)}
                style={{
                  transform: `translateY(${translateY})`,
                  marginLeft: margin,
                  marginRight: margin,
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`border-0 ${
                    member.id === selectedMember.id
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  style={{
                    width: width,
                    height: height,
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-14 bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-lg">
          <div className="flex items-right gap-4">
            {/* Profil rasmi */}
            <div className="flex-shrink-0 ml-25">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-15 h-15 rounded-full shadow-md object-cover"
              />
            </div>

            {/* Ism va rol */}
            <div>
              <h3 className="text-xl font-bold text-blue-800">
                {selectedMember.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium">
                {selectedMember.role}
              </p>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-blue-700"></span>{" "}
              {selectedMember.experience}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-blue-700"></span>{" "}
              {selectedMember.specialization}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
