particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#00ffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#00ffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        }
      },
      "retina_detect": true
    }
  );
  
  // انیمیشن برای progress bar ها
  window.addEventListener('load', () => {
      const skills = document.querySelectorAll('.skill');
      skills.forEach(skill => {
          skill.classList.add('animate');
      });
  });
  
  // افکت گلیچ برای نام
  document.querySelectorAll('.glitch').forEach(element => {
      element.addEventListener('mouseover', () => {
          let iterations = 0;
          const interval = setInterval(() => {
              element.innerText = element.innerText
                  .split('')
                  .map((letter, index) => {
                      if(index < iterations) {
                          return element.dataset.text[index];
                      }
                      return String.fromCharCode(65 + Math.floor(Math.random() * 26));
                  })
                  .join('');
              iterations += 1/3;
              if(iterations >= element.dataset.text.length) {
                  clearInterval(interval);
                  element.innerText = element.dataset.text;
              }
          }, 30);
      });
  });
  