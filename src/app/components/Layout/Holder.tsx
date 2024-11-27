import { ContentHolder } from "./Content-Holder";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Holder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ContentHolder>{children}</ContentHolder>
      <Footer />
    </div>
  );
};
