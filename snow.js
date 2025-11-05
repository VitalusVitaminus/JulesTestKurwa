document.addEventListener('DOMContentLoaded', function() {
  var snow = document.querySelector('.snow');
  var flakeCount = 100;

  for (var i = 0; i < flakeCount; i++) {
    var flake = document.createElement('div');
    flake.className = 'flake';
    flake.style.left = Math.random() * 100 + '%';
    flake.style.animationDuration = Math.random() * 5 + 5 + 's';
    flake.style.animationDelay = Math.random() * 5 + 's';
    snow.appendChild(flake);
  }
});
