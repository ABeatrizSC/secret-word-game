import './EndScreen.css'

export function EndScreen({ retry }) {
    return (
        <div>
            <button onClick={retry}>Jogar novamente</button>
        </div>
    )
}