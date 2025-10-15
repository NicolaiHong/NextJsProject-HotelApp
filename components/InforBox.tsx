import Link from "next/link";

interface ButtonInfo {
  link: string;
  text: string;
  backgroundColor: string;
}

interface InforBoxProps {
  children: string;
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: ButtonInfo;
}

const InforBox = ({
  children,
  heading,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-700",
  buttonInfo,
}: InforBoxProps) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InforBox;
