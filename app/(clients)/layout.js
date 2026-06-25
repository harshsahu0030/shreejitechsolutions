import Footer from "@/components/client/footer/Footer";
import Header from "@/components/client/header/Header";
import PageLoader from "@/components/client/providers/PageLoader";

export default function RootLayout({ children }) {
  return (
    <>
      <PageLoader>
        <Header />
        {children}
        <Footer />
      </PageLoader>
    </>
  );
}
