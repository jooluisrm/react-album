import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Api } from "../api/Api";
import { FotosType } from "../types/FotosType";
import { AlbumType } from "../types/AlbumType";

export const Album = () => {

    const { id } = useParams();  // Pega o id da URL

    const [idAlbum, setIdAlbum] = useState<number>(1);  // Estado para armazenar o id do álbum
    const [listaFotos, setListaFotos] = useState<FotosType[]>([]);  // Lista de fotos
    const [nomeAlbum, setNomeAlbum] = useState<AlbumType>();

    const navigate = useNavigate();  // Hook para navegação
    const handleBackButton = () => {
        navigate(-1);  // Voltar para a página anterior
    };

    // Atualiza o estado de idAlbum quando o id da URL mudar
    useEffect(() => {
        if (id) {
            const albumId = parseInt(id);  // Converte o id da URL para número
            setIdAlbum(albumId);  // Atualiza o estado com o novo id
        }
    }, [id]);  // O useEffect será chamado sempre que o id mudar

    // Carrega as fotos quando o idAlbum for atualizado
    useEffect(() => {
        const CarregarFotos = async () => {
            let json = await Api.CarregarFotos(idAlbum);  // Carrega as fotos baseadas no idAlbum
            setListaFotos(json);  // Atualiza a lista de fotos
        };

        if (idAlbum) {
            CarregarFotos();  // Chama a função para carregar as fotos
        }
    }, [idAlbum]);  // O useEffect será chamado sempre que idAlbum mudar

    useEffect(() => {
        const CarregarAlbum = async () => {
            let json = await Api.CarregarAlbums(idAlbum +1);
            setNomeAlbum(json);
            console.log(idAlbum);
        };
        if (idAlbum) {
            CarregarAlbum();
        }


    }, [idAlbum]);

    return (
        <div>
            <button onClick={handleBackButton} className="border p-2 bg-slate-400 rounded-xl my-5">Voltar</button>
            <br />
            <h1 className="text-4xl font-bold mb-5">{nomeAlbum?.title}</h1>
            <br />

            <div className="grid grid-cols-5 gap-3">
                {listaFotos.map((item, index) => (
                    <div key={index} className="border-black border-2 p-2">
                        <Link to={`/photo/${item.id}`}>
                            <img src={item.url} alt={`foto: ${index}`} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
