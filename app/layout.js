"use client";
import localFont from "next/font/local";
import { createContext, useState } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export const AuthContext = createContext();

export default function RootLayout({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [cartItem, setCartItem] = useState([]);

  // const checkLoginState = useCallback(async () => {
  //   try {
  //     const {
  //       data: { loggedIn: logged_in, user },
  //     } = await axios.get(`${apiUrl}/api/v1/loginCheckRoute`, {
  //       withCredentials: true,
  //     });

  //     setLoggedIn(logged_in);
  //     user && setUser(user);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   checkLoginState();
  // }, [checkLoginState]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContext.Provider
          value={{
            loggedIn,

            user,
            setLoggedIn,
            setUser,
            setCartItem,
            cartItem,
          }}
        >
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
