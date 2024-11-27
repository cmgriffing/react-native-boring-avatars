export const hashCode = (name: string) => {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
    var character = name.charCodeAt(i);
    hash = (hash << 5) - hash + character;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

export const getModulus = (num: number, max: number) => {
  return num % max;
};

export const getDigit = (number: number, ntn: number) => {
  return Math.floor((number / Math.pow(10, ntn)) % 10);
};

export const getBoolean = (number: number, ntn: number) => {
  return !(getDigit(number, ntn) % 2);
};

export const getAngle = (x: number, y: number) => {
  return (Math.atan2(y, x) * 180) / Math.PI;
};

export const getUnit = (number: number, range: number, index?: number) => {
  let value = number % range;

  if (index && getDigit(number, index) % 2 === 0) {
    return -value;
  } else return value;
};

export const getRandomColor = (
  number: number,
  colors: string[],
  range: number
) => {
  return colors[number % range];
};

export const getContrast = (hexcolor: string) => {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? '#000000' : '#FFFFFF';
};

// Can be deleted...

export const getNumber = (name: string) => {
  const charactersArray = name ? Array.from(name) : [];
  let charactersCodesSum = 0;

  charactersArray.forEach((charactersArrayItem) => {
    return (charactersCodesSum += charactersArrayItem.charCodeAt(0));
  });

  return charactersCodesSum;
};

export function createScaleNumber(
  originalBaseNumber: number,
  newBaseNumber: number
) {
  return function scaleNumber(originalNumber: number): string {
    const float = Math.ceil(
      (originalNumber / originalBaseNumber) * newBaseNumber
    );
    return float.toString();
  };
}

export function createScaleStringNumbers(
  scaleNumberFn: (numberToScale: number) => string
) {
  return function scaleStringNumbers(
    stringToScale: string,
    ignoredNumbers: string[] = []
  ) {
    const placeholderMap: Record<string, string> = {};

    let scrubbedString = stringToScale;
    ignoredNumbers.forEach((ignoredNumber) => {
      const escapedString = escapeRegExp(ignoredNumber);
      const regex = new RegExp(escapedString, 'g');

      const placeholder = badRandomString(12);
      placeholderMap[ignoredNumber] = placeholder;

      scrubbedString = scrubbedString.replace(regex, placeholder);
    });

    const regex = new RegExp('\\d+', 'g');
    let newStringToScale = scrubbedString.replace(regex, (numberString: string) => {
      if (ignoredNumbers.includes(numberString)) {
        return numberString;
      } else {
        return scaleNumberFn(parseFloat(numberString));
      }
    });

    ignoredNumbers.forEach((ignoredNumber) => {
      const placeholder = placeholderMap[ignoredNumber];
      const regex = new RegExp(placeholder, 'g');
      newStringToScale = newStringToScale.replace(
        regex,
        escapeReplacement(ignoredNumber)
      );
    });

    return newStringToScale;
  };
}

// https://stackoverflow.com/a/6969486
export function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
// https://stackoverflow.com/a/6969486
export function escapeReplacement(str: string) {
  return str.replace(/\$/g, '$$$$');
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export function badRandomString(length: number = 8) {
  let string = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(alphabet.length * Math.random());
    const letter = alphabet[randomIndex];
    string += letter;
  }

  return string;
}
