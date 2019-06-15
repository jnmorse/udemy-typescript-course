interface Coords {
  latitude: number;
  longitude: number;
}

interface Profile {
  name: string;
  age: number;
  coords: Coords;
  setAge: (age: number) => void;
}

const profile: Profile = {
  name: 'alex',
  age: 20,
  coords: {
    latitude: 0,
    longitude: 15
  },
  setAge(age) {
    this.age = age;
  }
};

const { age, name: firstName } = profile;

const {
  coords: { latitude, longitude }
}: { coords: { latitude: number; longitude: number } } = profile;
