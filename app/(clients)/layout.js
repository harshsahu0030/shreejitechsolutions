import Header from "@/components/client/header/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
