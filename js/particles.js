class StarField {
  constructor(id = 'star-canvas') {
    this.canvas = document.getElementById(id);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.resize();
    this.init();
    window.addEventListener('resize', () => { this.resize(); this.init(); });
    document.addEventListener('mousemove', e => { this.mouseX = e.clientX; this.mouseY = e.clientY; });
    this.animate();
  }
  resize() { this.canvas.width = window.innerWidth; this.canvas.height = window.innerHeight; }
  init() {
    this.stars = [];
    const n = Math.min(window.innerWidth * 0.12, 150);
    for (let i = 0; i < n; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        r: Math.random() * 1.8 + 0.3,
        o: Math.random() * 0.6 + 0.2,
        sp: Math.random() * 0.3 + 0.05,
        ts: Math.random() * 0.02 + 0.005,
        tp: Math.random() * Math.PI * 2,
        purple: Math.random() > 0.7
      });
    }
  }
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const s of this.stars) {
      s.tp += s.ts;
      const tw = Math.sin(s.tp) * 0.3 + 0.7;
      const a = s.o * tw;
      s.y -= s.sp;
      s.x += Math.sin(s.tp * 0.5) * 0.15;
      if (s.y < -5) { s.y = this.canvas.height + 5; s.x = Math.random() * this.canvas.width; }
      const dx = s.x - this.mouseX, dy = s.y - this.mouseY, dist = Math.sqrt(dx*dx+dy*dy);
      if (dist < 120) { const f = (120 - dist) / 120; s.x += (dx/dist)*f*0.8; s.y += (dy/dist)*f*0.8; }
      const c = s.purple ? `hsla(275,60%,80%,${a})` : `rgba(200,200,210,${a})`;
      this.ctx.beginPath(); this.ctx.arc(s.x, s.y, s.r, 0, Math.PI*2); this.ctx.fillStyle = c; this.ctx.fill();
      if (s.r > 1.2) {
        this.ctx.beginPath(); this.ctx.arc(s.x, s.y, s.r*3, 0, Math.PI*2);
        const g = this.ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*3);
        g.addColorStop(0, s.purple ? `hsla(275,60%,80%,${a*0.3})` : `rgba(200,200,210,${a*0.3})`);
        g.addColorStop(1,'transparent'); this.ctx.fillStyle = g; this.ctx.fill();
      }
    }
    requestAnimationFrame(() => this.animate());
  }
}
document.addEventListener('DOMContentLoaded', () => new StarField());
