// supresa.js — Lógica do convite para padrinhos

document.addEventListener('DOMContentLoaded', () => {

  const video       = document.getElementById('invite-video');
  const redirectBtn = document.getElementById('redirect-btn');
  const lockHint    = document.getElementById('lock-hint');

  // Quando o vídeo terminar: desbloqueia o botão e some o hint
  video.addEventListener('ended', () => {
    redirectBtn.classList.remove('locked');
    redirectBtn.removeAttribute('tabindex');
    redirectBtn.removeAttribute('aria-disabled');

    lockHint.classList.add('hidden');
  });

});