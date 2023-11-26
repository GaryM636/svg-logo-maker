const { Circle, Square, Triangle } = require('../shapes');

describe('Shapes', () => {
  it('should create a circle with specified text and colors', () => {
    const circle = new Circle('red', 'A', 'blue');
    const expectedSvg = `<svg width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="red" />
        <text x="50%" y="50%" text-anchor="middle" fill="blue" font-size="100px" dy=".3em">A</text>
    </svg>`;

    const result = circle.render();
    expect(result).toEqual(expectedSvg);
  });

  it('should create a square with specified text and colors', () => {
    const square = new Square('green', 'B', 'yellow');
    const expectedSvg = `<svg width="300" height="200">
        <rect width="200" height="200" fill="green" />
        <text x="33%" y="66%" text-anchor="middle" fill="yellow" font-size="100px" dy=".3em">B</text>
      </svg>`;

    const result = square.render();
    expect(result).toEqual(expectedSvg);
  });

  it('should create a triangle with specified text and colors', () => {
    const triangle = new Triangle('orange', 'C', 'purple');
    const expectedSvg = `<svg height="300" width="200">
        <polygon points="100,10 25,290 175,290" fill="orange" />
        <text x="50%" y="70%" text-anchor="middle" fill="purple" font-size="100px" dy=".3em">C</text>
      </svg>`;

    const result = triangle.render();
    expect(result).toEqual(expectedSvg);
  });
});
