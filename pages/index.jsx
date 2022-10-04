import { useState } from 'react';
import { BarLoader } from 'react-spinners'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import bundle from '../i18n';
import VideoCarouselContainer from '../components/VideoCarouselContainer';
import NotFound from '../components/NotFound';

export default function Home({ recent, searchText }) {

    const [recent_videos] = useState(recent);
    const [filtered_videos, setFilteredVideos] = useState([]);
    const [text, setText] = useState("");
    const [showFilter, setFilter] = useState(false);
    const [showLoding, setLoading] = useState(false);

    const filter_videos = async () => {
        try {
            setLoading(true);
            let sPath = "https://adult-orange-api.herokuapp.com";
            setText(searchText);
            const recent_data = await fetch(`${sPath}/api/v2/videos/release?$filter=name%20cs%20${searchText}`);
            const recent_data_json = await recent_data.json();
            setFilteredVideos(recent_data_json.results);
            setLoading(false);
        } catch (error) {
            alert(error.message);
        }
    }
    if (searchText.length > 3 && searchText !== text) {
        setFilter(true);
        filter_videos();
    } else if (searchText.length === 0 && text !== "") {
        setText(searchText);
        setFilter(false);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{bundle.getText("page.home.head.title")}</title>
                <meta name="description" content={bundle.getText("page.home.head.description")} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {showFilter ?
                <>
                    {showLoding ?
                        <BarLoader
                            width="100%"
                            color="var(--primary)"
                            size={80}
                        /> : <></>
                    }
                    {filtered_videos.length !== 0 ?
                        <VideoCarouselContainer videos={filtered_videos} title={bundle.getText("component.carousel.title.filtered")} />
                        : <NotFound />
                    }
                </>
                :
                <VideoCarouselContainer videos={recent_videos} title={bundle.getText("component.carousel.title.added")} />
            }
        </div>
    )
}
export async function getServerSideProps() {
    let sPath = "https://adult-orange-api.herokuapp.com";
    const recent_data = await fetch(`${sPath}/api/v2/videos/release`);
    const recent = await recent_data.json();
    return { props: { recent: recent.results } };
}