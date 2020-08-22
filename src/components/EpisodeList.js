import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './Card';
import Loader from './Loader';

export const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const prev = () => {
        setPage(page => page - 1);
    }

    const next = () => {
        setPage(page => page + 1);
    }

    useEffect(() => {
        const fetchEpisodes = async () => {
        const res = await axios(`https://rickandmortyapi.com/api/episode?page=${page}`);
        setTimeout(() => setLoading(false), 1000);
        setEpisodes(res.data);
        console.log(res.data);
        }
        fetchEpisodes();
    }, [page])

    return (
        <>
        {
            loading ? <Loader /> : (<>
                                        <div className="row">{episodes.results.map(episode => <Card key={episode.id} episode={episode} />)}</div>
                                        <div className="d-flex justify-content-center mt-5">
                                            <a onClick={prev} className={episodes.info.prev === null ? "btn btn-info disabled" : "btn btn-info"} href="#">Prev</a>
                                            <span className="align-self-center mx-3">{page}</span>
                                            <a onClick={next} className={episodes.info.next === null ? "btn btn-info disabled" : "btn btn-info"} href="#">Next</a>
                                        </div>
                                    </>)
        }
        </>
    )
}
