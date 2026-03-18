import './style.css'

const faces = {
    front: { rotX: 0, rotY: 0, title: "Identity — Carl Edward Sagan", body: "" },
    back: { rotX: 0, rotY: 180, title: "Background — Origins", body: "Born in Tokyo in 1990, Jane moved to the United States at 18 to study Graphic Design at RISD. Her multicultural upbringing deeply informs her design sensibility." },
    right: { rotX: 0, rotY: -90, title: "Skills — Expertise", body: "Proficient in UX Research, Figma, Motion Design, and Frontend Development. Known for bridging design and engineering in cross-functional teams." },
    left: { rotX: 0, rotY: 90, title: "Passions — Interests", body: "Outside of work, Jane throws ceramics, hikes the Pacific Crest Trail, devours speculative fiction novels, and plays jazz piano at local open mics." },
    top: { rotX: -90, rotY: 0, title: "Achievements — Highlights", body: "3× Awwwards winner, TEDx speaker in 2023 on the topic of 'Ethical Design', and named to Forbes 30 Under 30 in the Design category." },
    bottom: { rotX: 90, rotY: 0, title: "Contact — Get in Touch", body: "Reach out at hello@janedoe.io, find her on social media @janedoe, or explore her full portfolio at janedoe.io. Always open to collaboration." }
};

let current = 'front';

function showFace(face) {
    const cube = document.getElementById('cube');
    const { rotX, rotY } = faces[face];
    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + face).classList.add('active');

    document.getElementById('info-title').textContent = faces[face].title;
    document.getElementById('info-body').textContent = faces[face].body;

    current = face;
}
window.showFace = showFace; // Expose to global for inline onclick handlers

// Subtle idle spin on load, then stop
const cube = document.getElementById('cube');
let idleAngle = 0;
let idleRunning = true;

/*const idle = setInterval(() => {
    if (!idleRunning) { clearInterval(idle); return; }
    idleAngle += 0.4;
    cube.style.transform = `rotateX(-8deg) rotateY(${idleAngle}deg)`;
    if (idleAngle >= 360) {
        idleRunning = false;
        cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
}, 16);
*/