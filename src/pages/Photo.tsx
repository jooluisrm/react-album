import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../api/Api";
import { FotosType } from "../types/FotosType";

export const Photo = () => {

    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate(-1);
    }

    const { id } = useParams();
    const [idAlbum, setIdAlbum] = useState<number>(1);
    const [foto, setFoto] = useState<FotosType>();

    useEffect(() => {
        if (id) {
            const albumId = parseInt(id);  // Converte o id da URL para número
            setIdAlbum(albumId);  // Atualiza o estado com o novo id
        }
    }, [id]);

    useEffect(() => {
        const CarregarFoto = async () => {
            let json = await Api.CarregarFoto(idAlbum);  // Carrega as fotos baseadas no idAlbum
            setFoto(json);  // Atualiza a lista de fotos
        };

        if (idAlbum) {
            CarregarFoto();  // Chama a função para carregar as fotos
        }
    }, [idAlbum]);

    return (
        <div>
            <button
                onClick={handleBackButton}
                className="border p-2 bg-slate-400 rounded-xl my-5">
                Voltar
            </button>
            <br />
            <h1 className="text-4xl font-bold mb-5">{foto?.title}</h1>

            <div>
                <img src={`${foto?.url}`} alt="" />
            </div>
        </div>
    );
}