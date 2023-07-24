import { Button } from "./Button";

interface GenresProps{
  id: string;
  title: string;
  name: string;
}

export function SideBar(genres:GenresProps) {
  return  (
    <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
)
}