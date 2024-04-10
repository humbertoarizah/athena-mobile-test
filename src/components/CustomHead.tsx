import { Capacitor } from "@capacitor/core";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNavBar from "./navbar/MobileNavBar";

const CustomHead = ({
  title,
  allowBack = true,
  customRoute,
}: {
  title: string;
  allowBack?: boolean;
  customRoute?: string;
}) => {
  const [isHome, setHome] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) setHome(pathname.endsWith("/"));
  }, [pathname]);

  return (
    <div>
      <Head>
        <title>Athena Mobile App</title>
        <meta name="description" content="Athena app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Capacitor.isNativePlatform() && (
        <MobileNavBar
          isHome={isHome}
          allowBack={allowBack}
          customRoute={customRoute}
          title={title}
        />
      )}
    </div>
  );
};

export default CustomHead;
