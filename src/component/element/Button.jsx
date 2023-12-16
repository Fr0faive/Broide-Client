const Button = (props) => {
  const { type, children } = props;
  return (
    <button
      className="bg-[#2F318B] text-white font-bold py-2 px-4 rounded-full w-fit"
      type={type}
    >
      {children}
    </button>
  );
};

const ButtonDownload = (props) => {
  const { href, children } = props;
  return (
    <a
      href={href}
      download={true}
      className="bg-[#2F318B] text-white font-bold py-2 px-4 rounded-full w-fit"
    >
      {children}
    </a>
  );
};
export { ButtonDownload, Button };
