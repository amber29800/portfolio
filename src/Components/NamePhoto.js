import Image from "next/image";

const NamePhoto = () => {
  return (
    <div className="bg-[url('https://getwallpapers.com/wallpaper/full/b/8/1/489068.jpg')] bg-center bg-no-repeat w-full">
      <div className="flex  bg-blur backdrop-filter backdrop-blur-sm overflow-hidden">
        <div className="flex gap-5 py-5 px-10">
          <div className="flex">
            
            <Image className="rounded-full"  src="/profilePic.jpeg" width={120} height={120} alt="profile-pic"/>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold text-[#FFFF74] ">Amber Srivastava</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamePhoto;