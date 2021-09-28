import AvatarGroup from 'react-avatar-group';
import { names, extraColorArray, shuffle } from './utils';
import './App.css'

function ExampleGroup({ name, ...props }) {
  return (
    <div>
      <h4>{name}</h4>
      <AvatarGroup {...props} />
    </div>
  )
}

function App() {
  return (
    <div style={{ marginLeft: 15, display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100vh" }}>
      <ExampleGroup 
        name="Single Avatar"
        avatars={names.slice(0, 1)}
      />
      <ExampleGroup
        name="1 Character, uppercase, mixing string and object square avatars"
        avatars={[...names.slice(0, 4), { avatar: "Dilan", backgroundColor: "CCCCCC", fontColor: "000000", tooltip: "This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. This is a custom tooltip. " }]}
        initialCharacters={1}
        uppercase
        size={40}
        square
        onAvatarClick={(avatar, index) => console.log(avatar, index)}
      />
      <ExampleGroup 
        name="Maximum avatars, display all on hover"
        avatars={names.slice(0, 10)}
        max={2}
        uppercase
        size={60}
        shadow={2}
        fontColor="00FF00"
        displayAllOnHover
      />
      <ExampleGroup
        name="Stress test max, display all on hover"
        avatars={names.slice(0, 100)}
        max={2}
        uppercase
        size={60}
        shadow={2}
        displayAllOnHover
        onAvatarClick={(avatar, index) => console.log(avatar, index)}
      />
      <ExampleGroup
        name="Stress test max, don't display all on hover, custom random background colors array"
        avatars={names.slice(0, 1200)}
        max={25}
        uppercase
        size={60}
        randomBackgroundColors={extraColorArray}
        shadow={2}
      />
      <ExampleGroup
        name="1 character, tooltip with arrow"
        avatars={names.slice(0, 100)}
        initialCharacters={1}
        max={2}
        size={60}
        square
        tooltipArrow
      />
      <AvatarGroup
        avatars={shuffle([...names]).slice(0, 5)}
        initialCharacters={1}
        max={3}
        size={60}
        displayAllOnHover
        shadow={2}
      />
    </div>
  );
}

export default App;
