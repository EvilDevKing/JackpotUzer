"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { createTheme, ThemeProvider, Switch } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#05B59D",
    },
    secondary: {
      main: "#39474F",
      dark: "#421C6D",
      light: "#077167"
    },
    text: {
      disabled: "#D9D9D9"
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#A40000"
        },
        track: {
          opacity: 0.8,
          backgroundColor: "#F96969"
        }
      }
    }
  }
})

export default function DefaultLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Star ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="max-w-screen mt-20 mx-15 bg-white rounded-[10px] shadow-card-10 p-5">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </ThemeProvider>
  );
}
