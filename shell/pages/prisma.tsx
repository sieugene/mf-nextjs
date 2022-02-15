import dynamic from "next/dynamic";

const RemotePrisma = (await import("app2/prisma")).default;

const App2 = () => <RemotePrisma />;

export default App2;
