import "../faust.config";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@faustwp/core/dist/css/toolbar.css";
import "../styles/global.scss";
import "animate.css";

const useRouteProgress = (router) => {
  useEffect(() => {
    const handleRouteChangeStart = () => NProgress.start();
    const handleRouteChangeEnd = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router]);
};

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useRouteProgress(router);

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
