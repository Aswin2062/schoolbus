import "@/styles/globals.css";
import ProvidersWrapper from "./ProvidersWrapper";

export default function RootLayout({ children }: { children : React.ReactNode}){
    return (
      <html lang="en">
        {}
        <body>
          <ProvidersWrapper>{children}</ProvidersWrapper>
        </body>
      </html>
    );
};