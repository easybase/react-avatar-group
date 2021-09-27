import AvatarGroup from 'react-avatar-group';

function App() {
  return (
    <span>
      <AvatarGroup avatars={["hello", "world"]} />
      <AvatarGroup avatars={["hello", "world"]} initialCharacters={1} uppercase size={40} square />
      <AvatarGroup avatars={["hello", "world", "FFFF"]} max={2} uppercase size={60} shadow={2} />
      <AvatarGroup avatars={["hello", "world", "FFFF"]} initialCharacters={1} max={2} uppercase size={60} square />
    </span>
  );
}

export default App;
