const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const totalParticleNumber = 50;

class Particle {
  constructor() {
    this.x = Math.random() * 400;
    this.y = Math.random() * 400;
    this.shape = randomShape();
    this.color = randomColor();
    this.size = 20;
  }

  draw() {
    c.fillStyle = this.color;
    c.beginPath();
    if (this.shape === "circle") c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    else if (this.shape === "square") c.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    else if (this.shape === "triangle") c.moveTo(this.x, this.y - this.size), c.lineTo(this.x + this.size, this.y + this.size), c.lineTo(this.x - this.size, this.y + this.size), c.closePath();
    c.fill();
  }

  move() {
    this.x += randomMovement();
    this.y += randomMovement();
  }
}

function randomShape() {
  const shapes = ["circle", "square", "oval"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function randomColor() {
  return `#${Math.random().toString(16).substr(-6)}`;
}

function randomMovement() {
  return (Math.random() - 0.5) * 2;
}

const particleArr = Array.from({ length: totalParticleNumber }, () => new Particle());

function animate() {
  c.clearRect(0, 0, 400, 400);
  particleArr.forEach(particle => (particle.draw(), particle.move()));
  requestAnimationFrame(animate);
}

animate();

