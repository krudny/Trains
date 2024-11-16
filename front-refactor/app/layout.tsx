import "./globals.css";
import Navbar from "@/app/Components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap" rel="stylesheet"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"/>
    </head>
    <body className={"antialiased"}>
    <div className="flex flex-col h-screen">
        <Navbar/>
        <main className="flex-grow">
            {children}
        </main>
    </div>
    </body>
    </html>
  );
}
