import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.medicalapp.app",
  appName: "medical-app",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    // androidScheme: "https",
    // url: "http://192.168.0.247:3000", //To view live changes set your ip address
    url:
      process.env.NEXT_PUBLIC_ENVIROMENT === "LOCAL"
        ? "http://localhost:3000"
        : "https://athena-mobile.vercel.app",
    cleartext: true,
  },
};

export default config;
