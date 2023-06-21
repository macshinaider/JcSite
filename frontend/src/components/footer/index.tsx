import { useEffect, useState } from "react";

const Footer = () => {
	const [githubData, setGithubData] = useState<any>(null);

	useEffect(() => {
		fetch("https://api.github.com/users/macshinaider")
			.then((response) => response.json())
			.then((data) => setGithubData(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<footer className="bg-gray-200 py-4 absolute bottom-0 w-full">
			<div className="container mx-auto text-center">
				{githubData ? (
					<p>
						<img
							className="w-24 h-24 rounded-full mx-auto"
							src={githubData.avatar_url}
							alt="avatar"
						/>
						Criador: <a href={githubData.html_url}>{githubData.login}</a>
					</p>
				) : (
					<p>Carregando...</p>
				)}
			</div>
		</footer>
	);
};

export default Footer;
