import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import '../styles/globals.css'
import { IntlProvider } from "react-intl";
import en from "../lang/en.json";
import es from "../lang/es.json";
const messages = {
    en,
    es,
};

function MyApp({ Component, pageProps }) {
    const { locale } = useRouter();
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Component {...pageProps} />
        </IntlProvider>
    )
}

export default MyApp
