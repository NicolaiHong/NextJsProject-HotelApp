"use client";
import ClipLoader from "react-spinners/ClipLoader";
const overrideCss = {
  display: "block",
  margin: "100px auto",
};
export default function Loading() {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={overrideCss}
      size={150}
      aria-label="Loading Spinner"
    />
  );
}
