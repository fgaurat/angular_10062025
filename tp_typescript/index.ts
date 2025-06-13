interface Hero {
  id: number;
  name: string;
}

function show(h: Hero) {
  console.log(h);
}

const h: Hero = { id: 2, name: "Fred" };

show(h);
