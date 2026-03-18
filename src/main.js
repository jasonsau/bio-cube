import './style.css'

const faces = {
  front: { rotX: 0, rotY: 0, title: "Identity — Carl Edward Sagan", body: `<img class = "image-profile" src = "https://d2pn8kiwq2w21t.cloudfront.net/original_images/P-13734B.jpg" alt ="Carl's profile picture" />` },
  back: { rotX: 0, rotY: 180, title: "Personal Background — What were the major events in this person's life?", body: "" },
  right: {
    rotX: 0, rotY: -90, title: "Personality Traits — What was this person like", body: `
    <ol class = "traits-list">
    <li> <span class="f-bold">Inspiring:</span> He motivated people to learn about space and think critically. A few days ago I watched  a video where Neil Tyson, who is another great scientist,  talks about his own experiences meeting Carl. He said he would never forget that day. Because he was only a 17 year-old-teenager  who wanted to attend college but Carl didn’t just see a student he saw an excited young person  and treated him with kindness, Carl even took him to bus stop and told him “if you can’t  take the bus, here is my phone number and you can spend the night with my family”. 
    If you want to know more about this story, you can watch the video following this link <a href=https://youtu.be/pCbsCDnz2Vo?si=OezFabFr3gKmHj1W&t=1m40s>Neil Tyson on meeting Carl Sagan</a>.
    </li>
    <li> <span class = "f-bold">Communicative:</span> He liked sharing knowledge even though he had a talent for explaining complex ideas in simple ways as you can see in his books and his series called Cosmos. If you want to know more about this series, you can watch the first episode following this link <a href=https://youtu.be/j5n19aGLVUM?si=x-1ZHLK7MiLxOaGu>Cosmos: A Personal Voyage</a>.
    </li>
      ` },

  left: { rotX: 0, rotY: 90, title: "Significance — Why was this person important", body: `
    <ol class = "traits-list">
    <li> <span class = "f-bold">Scince Communicator: </span>He is consider one of the frist and most influential science communicators. At that moment when he was alive many scientists didn't like sharing their knowledge with the public, but Carl was different, he believed that knowledge should be shared with everyone. Therefore he became betten known as a famous TV personality rather as a scientist who made important theories or discoveries, although he did make significant contributions to science.</li>
    <li> <span class = "f-bold">Contributions to Science: </span>He made important contributions to the field of planetary science, including research on the atmospheres of Venus and Jupiter, and the surface of Mars. He also played a key role in the development of the SETI (Search for Extraterrestrial Intelligence) program.</li>
    <li> <span class = "f-bold">Legacy: </span>His work continues to inspire scientists, educators, and the general public. His books and TV series have been widely acclaimed and have had a lasting impact on popular culture.</li>
    ` },
  top: { rotX: -90, rotY: 0, title: "Obstacles — What challenges did this person overcome", body: `
    <ol class = "traits-list">
    <li> <span class = "f-bold">Criticism from other scientists: </span>Many scientists did not respect his work as a communicator. They believed that appearing on TV made science less serious, but he continued sharing knowledge with the public. 
    </li>
    <li> <span class = "f-bold"> Difficulty being accepted in academia: </span> Because of his popularity, some universities did not fully support him or give him important positions.
    </li>
    <li> <span class = "f-bold">Health Issues: </span> Later in his life, he suffered from a serious disease called myelodysplastic syndrome, which affected his body, but he kept working and writing until his death in 1996.
    </li>
    </ol>
    ` },
  bottom: { rotX: 90, rotY: 0, title: "Quote", body: `<span>This quote has an important context that you need to understand. In 1990 a photograph of Earth was taken by Voyager 1 from 6 billion kilometers away. Carl Sagan suggested turning the spacecraft around to take the photo when he saw it he said this quote</span>
    <img src = "https://science.nasa.gov/wp-content/uploads/2024/04/pale-blue-dot-revised.jpg" alt="Pale Blue Dot" class = "image-pale"/>` }

};

let current = 'front';

function showFace(face) {
  const cube = document.getElementById('cube');
  const { rotX, rotY } = faces[face];
  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn-' + face).classList.add('active');

  document.getElementById('info-title').textContent = faces[face].title;
  document.getElementById('info-body').innerHTML = faces[face].body;

  current = face;
}
window.showFace = showFace; // Expose to global for inline onclick handlers

// Subtle idle spin on load, then stop
const cube = document.getElementById('cube');
let idleAngle = 0;
let idleRunning = true;
cube.style.transition = `transform 0.8s cubic-bezier(1.1, 0, 0.2, 1)`;
const idle = setInterval(() => {
    if (!idleRunning) { clearInterval(idle); return; }
    console.log(idleAngle);
    idleAngle += 1.1;
    cube.style.transform = `rotateX(-8deg) rotateY(${idleAngle}deg)`;
    if (idleAngle >= 360) {
        idleRunning = false;
        cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
        cube.style.transition = `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)`;
    }
}, 16);