import Header from "@/components/client/header/Header";
import PageLoader from "@/components/client/providers/PageLoader";

export default function RootLayout({ children }) {
  return (
    <>
      <PageLoader>
        <Header />
        {children}
      </PageLoader>
    </>
  );
}
