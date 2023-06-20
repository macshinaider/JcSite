import { useEffect, useState } from "react";
import api from "../../services/api";

interface DadosRec {
	id: string;
	nomejogador: string;
	numerocamisa: number;
	posicao: string;
	avatar: string;
	timesId?: string;
}

const PlayerList = () => {
	const [data, setData] = useState<DadosRec[]>([]);
	const [carregando, setCarregando] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/showjogadores");
				setData(response.data);
				setCarregando(false);

				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData(); // Chamar a função fetchData para buscar os dados da API
	}, []);

	return (
		<div className="flex flex-wrap justify-center pt-6 ">
			{carregando ? (
				<div>Carregando Página</div>
			) : (
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{data.map((jogador) => (
						<li key={jogador.id} className="bg-gray-200 p-10 shadow-xl rounded-lg">
							<img
								className="w-24 h-24 rounded-full mx-auto "
								src={jogador.avatar}
								alt={jogador.nomejogador}
							/>
							<h2 className="text-xl font-bold text-center mt-4">
								{jogador.nomejogador}
							</h2>
							<p className="text-gray-600 text-center">
								Camisa: {jogador.numerocamisa}
							</p>
							<p className="text-gray-600 text-center">{jogador.posicao}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default PlayerList;
