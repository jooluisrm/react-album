import { useEffect, useState } from "react";
import { Api } from '../api/Api';
import { AlbumType } from "../types/AlbumType";
import { Link } from "react-router-dom";


export const Home = () => {

    const [listaAlbum, setListaALbum] = useState<AlbumType[]>([]);

    useEffect(() => {
        CarregarAlbum();
    }, []);

    const CarregarAlbum = async () => {
        let json = await Api.CarregarAlbums(null);
        setListaALbum(json);
    }
    

    return (
        <div className="container m-auto">
            {listaAlbum.map((item, index) => (
                <div
                    key={index}
                    className="border-2 border-black py-3 my-3 pl-3">
                    <Link to={`/album/${index}`}>
                        <p>{item.title}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}