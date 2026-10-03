import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { useDocumentMeta, useRoute } from "@/lib/router";
import { getProduct } from "@/data/products";
import PreFooterCta from "@/components/PreFooterCta";
import Home from "@/pages/Home";
import About from "@/pages/About";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetail from "@/pages/ProductDetail";
import Customization from "@/pages/Customization";
import Contact from "@/pages/Contact";
import GalleryPage from "@/pages/GalleryPage";
import Preloader from "@/components/Preloader";

export default function App() {
  const route = useRoute();
  const product = route.param ? getProduct(route.param) : undefined;
  useDocumentMeta(route, product?.name);

  const renderPage = () => {
    switch (route.path) {
      case "/about":
        return <About />;
      case "/products":
        return route.param ? (
          <ProductDetail slug={route.param} />
        ) : (
          <ProductsPage />
        );
      case "/gallery":
        return <GalleryPage />;
      case "/customization":
        return <Customization />;
      case "/contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {route.path === "/" && <Preloader key="home-preloader" />}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="flex-1">
        {renderPage()}
      </main>

      <PreFooterCta routePath={route.path} product={product} />

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
