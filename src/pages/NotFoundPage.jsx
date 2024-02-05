import Navbar from "../component/Navbar";

const notFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center">
        <h1 className="text-[#2F318B] font-medium text-4xl font-sans">
          404 Not Found
        </h1>
      </div>
    </>
  );
};

export default notFoundPage;
