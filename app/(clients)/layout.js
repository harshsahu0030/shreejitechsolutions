import Footer from "@/components/client/footer/Footer";
import Header from "@/components/client/header/Header";
import PageLoader from "@/components/client/providers/PageLoader";
import SmoothScroll from "@/components/client/providers/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <>
      <PageLoader>
        <Header />
        <SmoothScroll />
        {children}
        <Footer />
      </PageLoader>
    </>
  );
}
