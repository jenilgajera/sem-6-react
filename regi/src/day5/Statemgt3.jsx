import React, { useState } from "react";

const Statemgt3 = () => {
  const [color, setcolor] = useState("green");
  const [font, setfont] = useState("");
  const [blg, setbld] = useState(100);
  const [txtdec, settxtdec] = useState(100);
  return (
    <div>
      <input
        type="radio"
        name="color"
        onChange={(e) => {
          setcolor("Yellow");
        }}
      />
      {"Yellow"}
      <br />
      <input
        type="radio"
        name="color"
        onChange={(e) => {
          setcolor("Red");
        }}
      />
      {"Red"}
      <br />
      <input
        type="radio"
        name="color"
        onChange={(e) => {
          setcolor("Blue");
        }}
      />
      {"Blue"}
      <br />
      <br />
      <p style={{ color: color }}>Vaibhav Goriya</p>

      <hr />
      <input
        type="checkbox"
        name="bld"
        onChange={(e) => {
          setbld(e.target.checked ? 900 : 100);
        }}
      />
      {"bold"}
      <br />
      <input
        type="checkbox"
        name="font"
        onChange={(e) => {
          setfont(e.target.checked ? "italic" : "normal");
        }}
      />
      {"italic"}
      <br />
      <input
        type="checkbox"
        name="txtdec"
        onChange={(e) => {
          settxtdec(e.target.checked ? "underline" : "");
        }}
      />
      {"underline"}
      <br />
      <br />
      <p style={{ fontStyle: font, fontWeight: blg, textDecoration: txtdec }}>
        Radhesh Joshi
      </p>
    </div>
  );
};

export default Statemgt3;
