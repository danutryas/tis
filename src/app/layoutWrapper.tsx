import NavSide from "@/components/aside/navSide";
import { Toaster } from "@/components/ui/toaster";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

const LayoutWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  console.log(session);

  if (session.data)
    return (
      <>
        <NavSide />
        <div className="p-4 sm:ml-72">
          {children}
          <Toaster />
        </div>
      </>
    );

  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default LayoutWrapper;
