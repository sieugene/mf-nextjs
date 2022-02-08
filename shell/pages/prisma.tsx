import dynamic from "next/dynamic";

// production build not support SSR and dynamic paths
const loadComponentWithRetry = async (count: number) => {
  if (count <= 2) {
    try {
      const component = (await import("app2/prisma")).default;
      return component;
    } catch (error) {
      console.log(count, "count!!!!!!");
      loadComponentWithRetry(count + 1);
    }
  }
  return dynamic(() => import("app2/prisma"), { ssr: false });
};

const RemotePrisma = await loadComponentWithRetry(0);

const App2 = () => <RemotePrisma />;

export default App2;
