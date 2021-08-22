import dynamic from "next/dynamic";

const RemotePrisma = dynamic(() => import("app2/prisma"), { ssr: false });

const App2 = () => <RemotePrisma />;

export default App2;
