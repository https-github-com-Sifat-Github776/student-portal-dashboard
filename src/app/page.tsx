// import Image from "next/image";

import Announcements from "@/components/Announcements";
import ClassRecordings from "@/components/ClassRecordings";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between justify-center items-center">
      <Announcements />
      <QuickLinks />
      <ClassRecordings />
    </div>  
  );
}
