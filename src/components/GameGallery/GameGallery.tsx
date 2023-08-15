import useGameCatalog from "@hooks/useGameCatalog";

const GameGallery = () => {

    const { games, error } = useGameCatalog();

    return (
        <ul>
            { games.map((game, index) => (
                <li key={ index }>{ game.name }</li>
            )) }
        </ul>
    );
}

export default GameGallery;