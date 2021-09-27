import AvatarGroup from 'react-avatar-group';
import { names } from './utils';

function App() {
  return (
    <div style={{ marginLeft: 15 }}>
      <AvatarGroup avatars={names.slice(0, 1)} />
      <AvatarGroup avatars={names.slice(0, 4)} initialCharacters={1} uppercase size={40} square />
      <AvatarGroup avatars={names.slice(0, 10)} max={2} uppercase size={60} shadow={2} fontColor="00FF00" displayAllOnHover />
      <AvatarGroup avatars={names.slice(0, 100)} max={2} uppercase size={60} shadow={2} displayAllOnHover />
      <AvatarGroup avatars={names.slice(0, 1200)} max={2} uppercase size={60} shadow={2} />
      <AvatarGroup avatars={names.slice(0, 100)} initialCharacters={1} max={2} uppercase size={60} square />
    </div>
  );
}

export default App;
