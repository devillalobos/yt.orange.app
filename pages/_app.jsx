import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import '../styles/globals.css'
import { Layout } from '../components/Layout'
import en from "../lang/en.json";
import es from "../lang/es.json";
const messages = {
    en,
    es,
};

function MyApp({ Component, pageProps }) {
    const { locale } = useRouter();
    const [searchText, setSearchText] = useState("");
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Layout setSearch={setSearchText} searchText={searchText} >
                <Component {...pageProps} />
            </Layout>
        </IntlProvider>
    )
}

export default MyApp
