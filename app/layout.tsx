import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"The Procurement Atlas | Lesson 01",description:"Original system-agnostic procurement fundamentals with interactive learning and capstone exercises"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
