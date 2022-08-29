# react-native-boring-avatars

React Native implementation of [boring avatars](https://boringavatars.com/)

Forked from [https://github.com/luhart/react-native-boring-avatars](https://github.com/luhart/react-native-boring-avatars).

## Why Fork?

In the original library, there is heavy use of magic strings and hardcoded values. This caused heavy pixellation when trying to make avatars larger than their default values.

For an understanding of how this all works please see this blog post:
[https://mealection.com/blog/forking-react-native-boring-avatars](https://mealection.com/blog/forking-react-native-boring-avatars)

Couldn't we have made a Pull Request? Yes, but the original library seems to have stagnated a bit with no recent changes and serveral hanging Issues. We also wanted to impose our own code style and TypeScipt preferences.

## Installation

```sh
yarn add @mealection/react-native-boring-avatars
```

## Usage

```js
// ...
import Avatar from 'react-native-boring-avatars';

<Avatar
  size={40}
  name="Sacagawea"
  variant="pixel"
  colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
/>;
```

## Caveat

The marble variant is not suppported. This is because `react-native-svg` does not support the SVG `filter` attribute which the marble variant depends on. 🙁 Check [here](https://github.com/react-native-svg/react-native-svg/issues/150) for more details on react-native-svg on this issue.

## License

MIT
