import Footer from "./ui/footer";
import Header from "./ui/header";

const AdminRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Welcome Admin Dashboard</title>
        </head>

        <body className="admin-container">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
};

export default AdminRootLayout;
