import { useState } from 'react';
import { BarLoader } from 'react-spinners'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import bundle from '../i18n';
import VideoCarouselContainer from '../components/VideoCarouselContainer';
import NotFound from '../components/NotFound';

export default function Home({ release, recent, searchText }) {

    const [release_videos] = useState(release);
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
                        <VideoCarouselContainer videos={filtered_videos} title={bundle.getText("component.carousel.title.recent")} />
                        : <NotFound />
                    }
                </>
                :
                <>
                    <VideoCarouselContainer videos={release_videos} title={bundle.getText("component.carousel.title.recent")} />
                    <VideoCarouselContainer videos={recent_videos} title={bundle.getText("component.carousel.title.added")} />
                </>
            }
        </div>
    )
}
export async function getServerSideProps() {
    let sPath = "https://adult-orange-api.herokuapp.com";
    const release_data = await fetch(`${sPath}/api/v2/videos/release`);
    const release = await release_data.json();
    const recent_data = await fetch(`${sPath}/api/v2/videos/recent`);
    const recent = await recent_data.json();
    return { props: { release: release.results, recent: recent.results } };
}