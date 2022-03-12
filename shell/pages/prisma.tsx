import dynamic from "next/dynamic";

const RemotePrisma = dynamic(async () => {
  try {
    // SSR
    return (await import("app2/prisma")).default;
  } catch (error) {
    // NO SSR
    return dynamic(() => import("app2/prisma"), {
      ssr: false,
    });
  }
});

const App2 = () => <RemotePrisma />;

export default App2;
