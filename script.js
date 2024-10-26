// const touchArea = document.getElementById('touchArea');
// const feedback = document.getElementById('feedback');

// function updateFeedback(message) {
//   feedback.textContent = message;
// }

// // Touch events
// touchArea.addEventListener('touchstart', (e) => {
//   e.preventDefault();
//   touchArea.classList.add('active');
//   updateFeedback(`Touch started: ${e.touches.length} finger(s)`);
// });

// touchArea.addEventListener('touchmove', (e) => {
//   e.preventDefault();
//   const touch = e.touches[0];
//   updateFeedback(`Touch moved: X: ${Math.round(touch.clientX)}, Y: ${Math.round(touch.clientY)}`);
// });

// touchArea.addEventListener('touchend', () => {
//   touchArea.classList.remove('active');
//   updateFeedback('Touch ended');
// });

// touchArea.addEventListener('touchcancel', () => {
//   touchArea.classList.remove('active');
//   updateFeedback('Touch cancelled');
// });

// // Mouse events for desktop
// touchArea.addEventListener('mousedown', (e) => {
//   touchArea.classList.add('active');
//   updateFeedback(`Mouse down at X: ${e.clientX}, Y: ${e.clientY}`);
// });

// touchArea.addEventListener('mousemove', (e) => {
//   if (e.buttons === 1) { // Only track movement while mouse button is pressed
//     updateFeedback(`Mouse moved to X: ${e.clientX}, Y: ${e.clientY}`);
//   }
// });

// touchArea.addEventListener('mouseup', () => {
//   touchArea.classList.remove('active');
//   updateFeedback('Mouse released');
// });